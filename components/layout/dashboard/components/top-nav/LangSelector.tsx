import type { Locales } from 'types';
import Link from 'next/link';
import { useState, Fragment } from 'react';
import { i18n } from 'next-i18next.config';
import { useRouter } from 'next/dist/client/router';

const locales = (i18n.locales ?? []) as `${Locales}`[];
const defaultLocale = (i18n.defaultLocale ?? 'en') as `${Locales}`;

export const LangSelector: React.FC = () => {
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState<`${Locales}`>(defaultLocale);

  if (!locales.length) return null;

  return (
    <div>
      {locales.map((locale, index) => {
        return (
          <Fragment key={locale}>
            <Link href={`${router.asPath}`} locale={selectedLang} passHref>
              <button
                // TODO: highlight/style selected language button
                type='button'
                onClick={() => setSelectedLang(locale)}
              >
                {locale.toUpperCase()}
              </button>
            </Link>
            {/* TODO: use a wrapper to handle pipe styling between buttons */}
            {index !== locales.length - 1 ? '|' : ''}
          </Fragment>
        );
      })}
    </div>
  );
};

export default LangSelector;
