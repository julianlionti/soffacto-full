import i18n, { StringMap, TOptions } from "i18next";
import { useCallback } from "react";
import { initReactI18next, useTranslation } from "react-i18next";
import { enUs } from "./en_us";
import { esAr } from "./es_ar";

export type Translations =
  | "description"
  | "about"
  | "about.title"
  | "about.maintitle"
  | "about.descripction"
  | "services"
  | "services.title"
  | "services.1.title"
  | "services.1.description"
  | "services.2.title"
  | "services.2.description"
  | "services.3.title"
  | "services.3.description"
  | "team"
  | "team.title"
  | "footer.socialMedia"
  | "footer.about"
  | "footer.about.howitworks"
  | "footer.about.testimonials"
  | "footer.about.investors";

export type Translation = Record<Translations, string>;

export const initTranslations = (): void => {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: enUs },
      es: { translation: esAr },
    },
    fallbackLng: "es",
    interpolation: { escapeValue: false },
  });
};

type TypedT = (key: Translations) => string | TOptions<StringMap> | undefined;
export const useT = (): TypedT => {
  const { t } = useTranslation<Translations>();

  const typedT = useCallback<TypedT>((key) => t(key), [t]);
  return typedT;
};
