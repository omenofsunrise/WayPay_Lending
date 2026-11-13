export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  comment?: string;
}

const CYRILLIC_OR_LATIN_NAME = /^[A-Za-zА-Яа-яЁё][A-Za-zА-Яа-яЁё'’-]{1,49}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const MIN_FORM_FILL_TIME_MS = 2500;
export const SUBMIT_COOLDOWN_MS = 60_000;
export const LAST_SUBMIT_KEY = 'waypay:last-lead-submit';

export const normalizePhone = (phone: string): string | null => {
  let digits = phone.replace(/\D/g, '');

  if (digits.length === 10) digits = `7${digits}`;
  if (digits.length === 11 && digits.startsWith('8')) digits = `7${digits.slice(1)}`;

  return digits.length === 11 && digits.startsWith('7') ? `+${digits}` : null;
};

export const validateLead = (data: LeadFormData): string | null => {
  const nameParts = data.fullName.trim().split(/\s+/).filter(Boolean);
  if (nameParts.length < 2 || !nameParts.every(part => CYRILLIC_OR_LATIN_NAME.test(part))) {
    return 'Укажите настоящее имя и фамилию.';
  }

  const email = data.email.trim();
  if (email.length > 254 || !EMAIL.test(email)) {
    return 'Укажите корректный Email.';
  }

  if (!normalizePhone(data.phone)) {
    return 'Укажите российский номер телефона из 10 или 11 цифр.';
  }

  if ((data.comment?.trim().length ?? 0) > 500) {
    return 'Комментарий не должен превышать 500 символов.';
  }

  return null;
};

export const normalizeLead = <T extends LeadFormData>(data: T): T => ({
  ...data,
  fullName: data.fullName.trim().replace(/\s+/g, ' '),
  email: data.email.trim().toLowerCase(),
  phone: normalizePhone(data.phone) ?? data.phone.trim(),
  ...(typeof data.comment === 'string' ? { comment: data.comment.trim() } : {}),
});

export const getCooldownRemainingSeconds = (): number => {
  try {
    const lastSubmit = Number(localStorage.getItem(LAST_SUBMIT_KEY) ?? 0);
    return Math.max(0, Math.ceil((SUBMIT_COOLDOWN_MS - (Date.now() - lastSubmit)) / 1000));
  } catch {
    return 0;
  }
};

export const rememberSuccessfulSubmit = (): void => {
  try {
    localStorage.setItem(LAST_SUBMIT_KEY, String(Date.now()));
  } catch {
    // The form must keep working when browser storage is unavailable.
  }
};
