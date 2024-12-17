import component from './th-TH/component';
import globalHeader from './th-TH/globalHeader';
import menu from './th-TH/menu';
import pages from './th-TH/pages';
import pwa from './th-TH/pwa';
import settingDrawer from './th-TH/settingDrawer';
import settings from './th-TH/settings';

export default {
  'navBar.lang': 'ภาษา', // Languages
  'layout.user.link.help': 'วิธีใช้', // Help
  'layout.user.link.privacy': 'นโยบายความเป็นส่วนตัว', // Privacy
  'layout.user.link.terms': 'ข้อตกลง', // Terms
  'app.preview.down.block': 'ดาวน์โหลดหน้านี้ไปยังโปรเจคของคุณ', // Download this page to your local project
  'app.welcome.link.fetch-blocks': 'ดึงบล็อกทั้งหมด', // Get all block
  'app.welcome.link.block-list': 'สร้างหน้าเว็บมาตรฐานได้อย่างรวดเร็ว โดยใช้การพัฒนาแบบ `block`', // Quickly build standard, pages based on `block` development
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
};
