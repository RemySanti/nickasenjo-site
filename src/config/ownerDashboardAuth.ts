/** SHA-256 (hex) of the owner dashboard password — plaintext is not stored in source. */
export const OWNER_DASHBOARD_PASSWORD_SHA256_HEX =
  '0f0def2b469b45038a4a5b8ce4de42af9d1743a637e28d1460cbfd53a0082d55';

export const OWNER_DASH_SESSION_KEY = 'naf_owner_dash_ok';

export async function sha256Hex(plain: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(plain));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function verifyOwnerDashboardPassword(plain: string): Promise<boolean> {
  const h = await sha256Hex(plain);
  return h === OWNER_DASHBOARD_PASSWORD_SHA256_HEX;
}
