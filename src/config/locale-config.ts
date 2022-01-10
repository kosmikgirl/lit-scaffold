import {configureLocalization} from '@lit/localize';
import {sourceLocale, targetLocales} from '../data/i18n/locale-codes';

export const {getLocale, setLocale} = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: (locale: string) =>
    import(/* @vite-ignore */ `../data/i18n/locale/generated/${locale}.js`),
});
