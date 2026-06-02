export function getJwtPayload(token: string): Record<string, unknown> | null {
  try {
    const parts = token.split('.');
    if (parts.length < 2) return null;

    const payloadPart = parts[1];
    // Base64url -> Base64
    const base64 = payloadPart.replace(/-/g, '+').replace(/_/g, '/');
    const json = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => `%${c.charCodeAt(0).toString(16).padStart(2, '0')}`)
        .join('')
    );

    return JSON.parse(json);
  } catch {
    return null;
  }
}

export function isTokenExpired(token: string, clockSkewSeconds = 30): boolean {
  if (!token) return true;

  const payload = getJwtPayload(token);
  const exp = payload?.exp;
  if (typeof exp !== 'number') {
    // If token doesn't have exp, treat as invalid.
    return true;
  }

  const nowSeconds = Math.floor(Date.now() / 1000);
  return exp <= nowSeconds + clockSkewSeconds;
}

