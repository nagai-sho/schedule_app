export const userValidationRules = {
  name: {
    required: '必須項目です',
    maxLength: {
      value: 30,
      message: '30文字以下で入力してください',
    },
  },
  email: {
    required: '必須項目です',
    maxLength: {
      value: 100,
      message: '100文字以下で入力してください',
    },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: '正しいメールアドレスを入力してください',
    },
  },
  phoneNumber: {
    maxLength: {
      value: 11,
      message: '正しい電話番号を入力してください',
    },
    minLength: {
      value: 10,
      message: '正しい電話番号を入力してください',
    },
    pattern: {
      value: /^[0-9]+$/,
      message: '数字のみ入力してください',
    },
  },
  password: {
    required: '必須項目です',
    minLength: {
      value: 8,
      message: '8文字以上で使用してください',
    },
    validate: {
      hasUpperCase: (value: any) =>
        /[A-Z]/.test(value) || '大文字を使用してください',
      hasLowerCase: (value: any) =>
        /[a-z]/.test(value) || '小文字を使用してください',
      hasNumber: (value: any) => /\d/.test(value) || '数字を使用してください',
      hasSymbol: (value: any) =>
        /[!@#$%^&*()_+\[\]{};':"\\|,.<>/?`~\-]/.test(value) ||
        '記号を使用してください',
    },
  },
  company: {
    maxLength: {
      value: 100,
      message: '100文字以下で入力してください',
    },
  },
  postalCode: {
    pattern: {
      value: /^\d{3}-?\d{4}$/,
      message: '正しい郵便番号を入力してください',
    },
  },
  address: {
    maxLength: {
      value: 100,
      message: '100文字以下で入力してください',
    },
  },
};

export default userValidationRules;
