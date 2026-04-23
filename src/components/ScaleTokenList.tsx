type ScaleToken = {
  name: string;
  value: number;
};

type Props = {
  title: string;
  tokens: ScaleToken[];
  previewColor?: string;
  /**
   * bar    — horizontal bar with width proportional to value (spacing / font-size / line-height)
   * radius — 56×56 square with border-radius = value (radii)
   * height — vertical bar with actual height = value (control heights, sizes)
   */
  mode?: 'bar' | 'radius' | 'height';
};

export function ScaleTokenList({
  title,
  tokens,
  previewColor = 'var(--color-action-primary)',
  mode = 'bar',
}: Props) {
  if (mode === 'height') {
    const maxHeight = Math.max(...tokens.map((t) => t.value), 1);
    return (
      <section style={{ marginBottom: 32 }}>
        <h3 style={{ marginTop: 0 }}>{title}</h3>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 24,
            padding: '16px 0',
            borderBottom: '1px solid var(--color-border-subtle)',
            minHeight: maxHeight + 48,
          }}
        >
          {tokens.map((token) => (
            <div
              key={token.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: token.value,
                  background: previewColor,
                  borderRadius: 'var(--radius-card)',
                }}
              />
              <div
                style={{
                  fontFamily: 'ui-monospace, monospace',
                  fontSize: 12,
                  color: 'var(--color-text-secondary)',
                  textAlign: 'center',
                }}
              >
                {token.name}
                <br />
                <span style={{ color: 'var(--color-text-primary)' }}>{token.value}px</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section style={{ marginBottom: 32 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <div style={{ display: 'grid', gap: 12 }}>
        {tokens.map((token) => (
          <div
            key={token.name}
            style={{
              display: 'grid',
              gridTemplateColumns: '220px 1fr 72px',
              alignItems: 'center',
              gap: 12,
              paddingBottom: 8,
              borderBottom: '1px solid var(--color-border-subtle)',
            }}
          >
            <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 12, color: 'var(--color-text-secondary)' }}>
              {token.name}
            </div>
            {mode === 'bar' ? (
              <div
                style={{
                  height: 12,
                  width: `${Math.max(token.value * 4, 8)}px`,
                  background: previewColor,
                  borderRadius: 999,
                }}
              />
            ) : (
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: previewColor,
                  borderRadius: token.value,
                }}
              />
            )}
            <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 12, color: 'var(--color-text-primary)' }}>
              {token.value}px
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
