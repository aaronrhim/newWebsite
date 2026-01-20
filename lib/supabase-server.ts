import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_KEY;

if (!url || !key) {
  // keep this file import-safe on server but warn for debugging
  console.warn("Supabase URL or KEY missing. Supabase operations will be disabled.");
}

const supabase = url && key ? createClient(url, key) : null;

export type ClaimRecord = { claimed: boolean; amount?: number };

export async function getAllClaims(): Promise<Record<string, ClaimRecord>> {
  if (!supabase) return {};
  try {
    // include amount column if present (optional)
    const { data, error } = await supabase.from("redtext_claims").select("reward_id, claimed, amount");
    if (error) {
      console.error("Supabase getAllClaims error:", error);
      return {};
    }
    const map: Record<string, ClaimRecord> = {};
    data?.forEach((r: any) => {
      if (r?.reward_id) map[r.reward_id] = { claimed: !!r.claimed, amount: r?.amount ?? undefined };
    });
    return map;
  } catch (e) {
    console.error("getAllClaims failed", e);
    return {};
  }
}

export async function claimReward(rewardId: string, amount?: number): Promise<{ ok: boolean; error?: any; data?: any }> {
  if (!supabase) return { ok: false, error: "supabase-not-configured" };
  try {
    // upsert expects an array of rows in the current types; pass an array to satisfy TypeScript
    // use onConflict to target the primary key; avoid unsupported `returning` option in types
    const row: any = { reward_id: rewardId, claimed: true, updated_at: new Date().toISOString() };
    if (typeof amount === "number") row.amount = amount;

    const { data, error } = await supabase
      .from("redtext_claims")
      .upsert([
        row,
      ],
      { onConflict: "reward_id" }
    );

    if (error) {
      console.error("Supabase claimReward error:", error);
      return { ok: false, error };
    }

    console.log(`Supabase upsert success for reward_id=${rewardId} amount=${amount ?? "<none>"}`);
    return { ok: true, data };
  } catch (e) {
    console.error("claimReward failed", e);
    return { ok: false, error: e };
  }
}
