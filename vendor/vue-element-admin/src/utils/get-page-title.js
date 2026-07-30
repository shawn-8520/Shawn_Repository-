import defaultSettings from '@/settings'
import { getLanguage, routeTitle, t } from '@/utils/lang'

const title = defaultSettings.title || 'Vue Element Admin'

export default function getPageTitle(pageTitle) {
  const lang = getLanguage()
  const appTitle = t('appTitle', lang) || title
  if (pageTitle) {
    return `${routeTitle(pageTitle, lang)} - ${appTitle}`
  }
  return `${appTitle}`
}
