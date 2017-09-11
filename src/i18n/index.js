import Vue from 'vue';
import VueI18n from 'vue-i18n';
const config = require('./config');

Vue.use(VueI18n);

const locale = config.locale || "zh-CN";
const languages = config.languages || ['zh-CN','cn'];
const messages = {};
languages.map(lang =>{
    messages[lang] = Object.assign(require(`./lang/${lang}`), require(`element-ui/lib/locale/lang/${lang}`).default)
});
const $i18n = new VueI18n({
    locale,
    fallbackLocale:'en',
    messages
});
window.$i18n= $i18n;

export default $i18n;
