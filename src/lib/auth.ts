// Simple authentication for admin panel
// In production, use proper authentication like NextAuth.js

const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "vnbadmin2024",
};

export function validateAdmin(username: string, password: string): boolean {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password;
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('vnb_admin_auth') === 'true';
}

export function login(username: string, password: string): boolean {
  if (validateAdmin(username, password)) {
    localStorage.setItem('vnb_admin_auth', 'true');
    return true;
  }
  return false;
}

export function logout(): void {
  localStorage.removeItem('vnb_admin_auth');
}
