import { ALLOWED_CHARS, NO_SPECIAL_CHAR_REGEX } from "@/constants/app.constant";

// sanitize input for special characters
export const sanitizeInputs = <T>(record: T) => {
  const errors: Record<string, string> = {};

  for (const key in record) {
    if (!NO_SPECIAL_CHAR_REGEX.test(String(record[key]))) {
      errors[key] = ALLOWED_CHARS;
    }
  }
  const haseErrors = Object.values(errors).length > 0;

  return { haseErrors, errors };
};
