import type { Locales } from 'types';
import { i18n } from 'next-i18next.config';
import { useState } from 'react';

const locales = i18n.locales as `${Locales}`[];
const defaultLocale = i18n.defaultLocale as `${Locales}`;

export const LangSelector: React.FC = () => {
  const [_selectedLang, setSelectedLang] = useState<`${Locales}`>(
    defaultLocale || 'en'
  );

  return (
    <div>
      {locales.map((locale, index) => {
        return (
          <>
            <button
              // TODO: highlight/style selected language button
              key={locale}
              type='button'
              onClick={() => setSelectedLang(locale)}
            >
              {locale.toUpperCase()}
            </button>
            {/* TODO: use a wrapper to handle pipe styling between buttons */}
            {index !== locales.length - 1 ? '|' : ''}
          </>
        );
      })}
    </div>
  );
};

export default LangSelector;
