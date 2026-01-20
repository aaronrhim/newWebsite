import React from "react";
import RedText from "@/components/RedText";

// Parse inline tokens of the form [[red:rewardId:amount|display text]] inside quoted strings
export function renderWithRedText(str?: string | null) {
  if (!str) return null;
  const re = /\[\[red:([^:|]+)(?::([0-9.]+))?\|([^\]]+)\]\]/g;
  const parts: (string | React.ReactNode)[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let idx = 0;

  // eslint-disable-next-line no-cond-assign
  while ((m = re.exec(str))) {
    if (m.index > last) parts.push(str.slice(last, m.index));
    const id = m[1];
    const amt = m[2] ? Number(m[2]) : undefined;
    const text = m[3];
    parts.push(
      <RedText key={`${id}-${idx}`} rewardId={id} amount={amt}>
        {text}
      </RedText>,
    );
    last = re.lastIndex;
    idx++;
  }

  if (last < str.length) parts.push(str.slice(last));
  return parts.length === 1 ? parts[0] : parts;
}
