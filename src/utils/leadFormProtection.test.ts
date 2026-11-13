import {
  normalizeLead,
  normalizePhone,
  validateLead,
} from './leadFormProtection';

describe('lead form protection', () => {
  it('normalizes a Russian phone number', () => {
    expect(normalizePhone('8 (989) 924-24-24')).toBe('+79899242424');
    expect(normalizePhone('9899242424')).toBe('+79899242424');
  });

  it('rejects spam-like form data from the reported example', () => {
    expect(validateLead({
      fullName: 'Anyclotwc',
      email: 'm.or.i.d.uf.u.n5.3@gmail.com',
      phone: '2863408946',
      comment: 'EHZUVAESFwvHpgMtwJHa',
    })).not.toBeNull();
  });

  it('accepts and normalizes valid lead data', () => {
    const lead = {
      fullName: '  Иван   Иванов  ',
      email: ' IVAN@EXAMPLE.COM ',
      phone: '8 989 924-24-24',
      comment: '  Нужна консультация  ',
    };

    expect(validateLead(lead)).toBeNull();
    expect(normalizeLead(lead)).toEqual({
      fullName: 'Иван Иванов',
      email: 'ivan@example.com',
      phone: '+79899242424',
      comment: 'Нужна консультация',
    });
  });
});
