import React from "react";

type ColorToken = {
  name: string;
  value: string;
};

type Props = {
  title: string;
  tokens?: ColorToken[];
};

export function ColorTokenGrid({ title, tokens = [] }: Props) {
  if (!tokens.length) return null;

  return (
    <section style={{ marginBottom: 32 }}>
      <h2>{title}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {tokens.map((token) => (
          <div
            key={token.name}
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: 12,
              padding: 12,
              background: "#FFFFFF",
            }}
          >
            <div
              style={{
                width: "100%",
                height: 56,
                borderRadius: 8,
                background: token.value,
                border: "1px solid rgba(0,0,0,0.06)",
                marginBottom: 12,
              }}
            />
            <div style={{ fontWeight: 600, marginBottom: 4 }}>{token.name}</div>
            <div style={{ color: "#6B7280", fontSize: 14 }}>{token.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}