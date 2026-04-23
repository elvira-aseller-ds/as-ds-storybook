type ColorToken = {
  name: string;
  value: string;
  dark?: string;
};

type Props = {
  title: string;
  tokens?: ColorToken[];
  /** When true, render a light+dark side-by-side swatch for semantic tokens. */
  showDark?: boolean;
};

export function ColorTokenGrid({ title, tokens = [], showDark = true }: Props) {
  if (!tokens.length) return null;

  return (
    <section style={{ marginBottom: 32 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 16,
        }}
      >
        {tokens.map((token) => {
          const hasDark = showDark && !!token.dark && token.dark !== token.value;
          return (
            <div
              key={token.name}
              style={{
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 12,
                padding: 12,
                background: 'var(--color-bg-surface)',
                color: 'var(--color-text-primary)',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: hasDark ? '1fr 1fr' : '1fr',
                  gap: 4,
                  height: 56,
                  marginBottom: 12,
                  borderRadius: 8,
                  overflow: 'hidden',
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                <div style={{ background: token.value }} title={`light: ${token.value}`} />
                {hasDark && (
                  <div style={{ background: token.dark }} title={`dark: ${token.dark}`} />
                )}
              </div>
              <div style={{ fontWeight: 500, fontSize: 13, marginBottom: 4, wordBreak: 'break-all' }}>
                {token.name}
              </div>
              <div style={{ color: 'var(--color-text-secondary)', fontSize: 12, fontFamily: 'ui-monospace, monospace' }}>
                {token.value}
                {hasDark && (
                  <>
                    <br />
                    <span style={{ opacity: 0.7 }}>dark: {token.dark}</span>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
