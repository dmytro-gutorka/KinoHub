export function getAccessToken(): string | null {
  return localStorage.getItem('accessToken');
}
