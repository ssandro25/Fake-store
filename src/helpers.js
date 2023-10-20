import { createI18n } from 'vue-i18n'
import locales from './locale/locales.json'

export default createI18n({
    locale:  'GE' || 'EN',
    fallbackLocale: 'GE' || 'EN',
    messages: locales
})