import '@testing-library/jest-dom';

jest.mock('next/config', () => () => ({
  serverRuntimeConfig: {
    secret: 'secret',
  },
}));

jest.mock('next/router', () => ({
  ...require('next-router-mock'),
  back: jest.fn(),
}));

jest.mock('next-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));
