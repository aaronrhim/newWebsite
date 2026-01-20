import { NextResponse } from "next/server";
import { getAllClaims, claimReward } from "@/lib/supabase-server";

export async function GET() {
  try {
    const claims = await getAllClaims();
    return NextResponse.json({ claims });
  } catch (e) {
    console.error("GET /api/redtext failed", e);
    return NextResponse.json({ claims: {} }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const rewardId = body?.rewardId;
    const amount = typeof body?.amount === "number" ? body.amount : undefined;
    if (!rewardId) return NextResponse.json({ ok: false, message: "missing rewardId" }, { status: 400 });

    const result = await claimReward(rewardId, amount);
    if (!result.ok) {
      // return some details for dev debugging (do not leak secrets in prod)
      console.error("POST /api/redtext upsert failed:", result.error);
      return NextResponse.json({ ok: false, message: "failed to persist", error: result.error }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("POST /api/redtext failed", e);
    return NextResponse.json({ ok: false, message: "server error" }, { status: 500 });
  }
}
