export function generatePassword(
  length: number = 8,
  letters: boolean = false,
  numbers: boolean = false,
  symbols: boolean = false
): string {
  const charset: string[] = [];

  if (letters) {
    for (let i = 97; i <= 122; i++) {
      charset.push(String.fromCharCode(i));
      charset.push(String.fromCharCode(i).toUpperCase());
    }
  }

  if (numbers) {
    for (let i = 0; i <= 9; i++) {
      charset.push(String(i));
    }
  }

  if (symbols) {
    const symbolChars = '!@#$%^&*()_-+=[]{}|;:,.<>?';
    charset.push(...symbolChars);
  }

  if (charset.length === 0) {
    throw new Error(
      'At least one of letters, numbers, or symbols must be true.'
    );
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}
