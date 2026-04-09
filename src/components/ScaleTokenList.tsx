import React from "react";

type ScaleToken = {
  name: string;
  value: number;
};

type Props = {
  title: string;
  tokens: ScaleToken[];
  previewColor?: string;
};

export function ScaleTokenList({
  title,
  tokens,
  previewColor = "#448CC0",
}: Props) {
  return (
    <section style={{ marginBottom: 32 }}>
      <h2>{title}</h2>
      <div style={{ display: "grid", gap: 12 }}>
        {tokens.map((token) => (
          <div
            key={token.name}
            style={{
              display: "grid",
              gridTemplateColumns: "180px 1fr 64px",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div>{token.name}</div>
            <div
              style={{
                height: 12,
                width: `${Math.max(token.value * 4, 8)}px`,
                background: previewColor,
                borderRadius: 999,
              }}
            />
            <div>{token.value}px</div>
          </div>
        ))}
      </div>
    </section>
  );
}