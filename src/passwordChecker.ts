export function checkPasswordStrength(password: string): string {
  if (password.length < 8) {
    return "Weak";
  }

  if (password.length < 12) {
    return "Medium";
  }

  return "Strong";
}
