import { Dictionary } from "../types"

export const en_GB: Dictionary = {
    common: {
        autoTranslate: "Auto translate",
        companyName: "Poodle Translator"
    },
    components: {
        app:{
            loading: "Fetching supported languages...",
            error: "Something went wrong...",
            empty: "No supported language"
        },
        header: {
            github: "Github",
            google: "Google",
            title: "Translator"
        },
        footer: {
            libreTranslate: "LibreTranslate"
        },
        message: {
            tryAgain: "Try again"
        }
    },
    screens: {
        translator: {
            sourceInputPlaceholder: "Type_Text here..."
        }
    }
}