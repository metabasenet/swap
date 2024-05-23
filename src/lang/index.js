import { createI18n } from "vue-i18n";
import zh from "../lang/zh";
import en from "../lang/en";
const i18n = createI18n({
    locale: "en",
    messages: {
        "zh": zh,
        "en": en
    }
});
export default i18n;