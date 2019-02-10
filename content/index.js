import en from './en.json'
import ar from './ar.json'

const params = window.location.href.split("?");

const lang = params && params[1] ? params[1].split("=")[1] : "en";
export const defaultLocale = lang

export const languages = {
  en: en,
  ar: ar,
}