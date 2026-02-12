/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  let points = 0;
  if (typeof (password) != "string") {
    return "weak";
  }
  if (password.length >= 8) {
    points++;
  }

  if (containCaps(password)) {
    points++;
  }

  if (containLower(password)) {
    points++;
  }

  if (containNum(password)) {
    points++;
  }

  if (containSpecial(password)) {
    points++
  }


  if (points <= 1) {
    return "weak";
  } else if (points <= 3) {
    return "medium";
  } else if (points === 4) {
    return "strong";
  } else {
    return "very strong";
  }
}
function containCaps(password) {
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= 'A' && password[i] <= 'Z') {
      return true;
    }
  }
  return false;
}

function containLower(password) {
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= 'a' && password[i] <= 'z') {
      return true;
    }
  }
  return false;
}

function containNum(password) {
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= '0' && password[i] <= '9') {
      return true;
    }
  }
  return false;
}

function containSpecial(password) {
  for (let i = 0; i < password.length; i++) {
    if ("!@#$%^&*()_+-=[]{}|;:,.<>?".includes(password[i])) {
      return true;
    }
  }
  return false;
}
