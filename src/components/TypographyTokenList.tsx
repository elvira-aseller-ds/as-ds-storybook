import React from "react";

type TypographyToken = {
  name: string;
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
};

type Props = {
  tokens: TypographyToken[];
  sampleText?: string;
};

export function TypographyTokenList({
  tokens,
  sampleText = "Ag",
}: Props) {
  return (
    <section style={{ marginBottom: 32 }}>
      <h2>Typography Scale</h2>
      <div style={{ display: "grid", gap: 16 }}>
        {tokens.map((token) => (
          <div
            key={token.name}
            style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr 220px",
              gap: 16,
              alignItems: "center",
              paddingBottom: 12,
              borderBottom: "1px solid #E5E7EB",
            }}
          >
            <div
              style={{
                fontSize: token.fontSize,
                lineHeight: `${token.lineHeight}px`,
                fontWeight: token.fontWeight,
              }}
            >
              {sampleText}
            </div>

            <div>{token.name}</div>

            <div style={{ color: "#6B7280", fontSize: 14 }}>
              {token.fontSize}px / {token.lineHeight}px / {token.fontWeight}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}