type TypographyToken = {
  name: string;
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: number | string;
  letterSpacing?: number | string;
  value?: string;
};

type Props = {
  title?: string;
  tokens: TypographyToken[];
  sampleText?: string;
};

export function TypographyTokenList({
  title,
  tokens,
  sampleText = 'Ag Дизайн-система',
}: Props) {
  const styled = tokens.filter((t) => t.fontSize != null);
  const flags = tokens.filter((t) => t.fontSize == null);

  return (
    <section style={{ marginBottom: 32 }}>
      {title && <h3 style={{ marginTop: 0 }}>{title}</h3>}

      <div style={{ display: 'grid', gap: 16 }}>
        {styled.map((token) => (
          <div
            key={token.name}
            style={{
              display: 'grid',
              gridTemplateColumns: '220px 1fr 240px',
              gap: 16,
              alignItems: 'center',
              paddingBottom: 12,
              borderBottom: '1px solid var(--color-border-subtle)',
            }}
          >
            <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 12, color: 'var(--color-text-secondary)' }}>
              {token.name}
            </div>

            <div
              style={{
                fontFamily: token.fontFamily,
                fontSize: token.fontSize,
                lineHeight:
                  typeof token.lineHeight === 'number' ? `${token.lineHeight}px` : token.lineHeight,
                fontWeight: token.fontWeight,
                letterSpacing: token.letterSpacing as string | undefined,
                color: 'var(--color-text-primary)',
              }}
            >
              {sampleText}
            </div>

            <div style={{ color: 'var(--color-text-secondary)', fontSize: 12, fontFamily: 'ui-monospace, monospace' }}>
              {token.fontSize}px / {token.lineHeight}px / {token.fontWeight}
              {token.letterSpacing != null && <> / ls {token.letterSpacing}</>}
            </div>
          </div>
        ))}
      </div>

      {flags.length > 0 && (
        <div style={{ marginTop: 24, display: 'grid', gap: 8 }}>
          {flags.map((token) => (
            <div
              key={token.name}
              style={{
                display: 'grid',
                gridTemplateColumns: '220px 1fr',
                gap: 16,
                fontFamily: 'ui-monospace, monospace',
                fontSize: 13,
              }}
            >
              <div style={{ color: 'var(--color-text-secondary)' }}>{token.name}</div>
              <div>
                {token.value ?? token.fontWeight ?? token.letterSpacing}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
