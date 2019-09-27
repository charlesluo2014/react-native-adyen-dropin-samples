import { NativeModules } from 'react-native'
import moment from 'moment'
import 'moment/locale/be'
import 'moment/locale/nl-be'
import 'moment/locale/en-gb'
import 'moment/locale/en-ie'

const dates = {
  enUS: undefined, // default
  fr: 'be',
  nl: 'nl-be',
  enGB: 'en-gb',
  enIE: 'en-ie',
}

export class Locale {
  static getLocale() {
    const deviceLocale =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale
        : NativeModules.I18nManager.localeIdentifier
    return deviceLocale
  }

  static getLang() {
    const [lang] = Locale.getLocale().split('_')
    return lang
  }

  static getCountry() {
    const [, country] = Locale.getLocale().split('_')
    return country
  }

  isInitialized = false
  static init() {
    if (Locale.isInitialized) {
      return
    }
    const [lang, country] = [
      Locale.getLang().toLowerCase(),
      Locale.getCountry().toUpperCase(),
    ]
    if (dates[`${lang}${country}`]) {
      moment.locale(dates[`${lang}${country}`])
    } else if (dates[`${lang}`]) {
      moment.locale(dates[`${lang}`])
    } else {
      moment.locale()
    }
    Locale.isInitialized = true
  }
}
