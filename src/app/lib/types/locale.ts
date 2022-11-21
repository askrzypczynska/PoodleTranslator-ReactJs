export type Dictionary = {
    common: {
        autoTranslate: string
        companyName: string
    },
    components: {
        app: {
            loading: string,
            error: string,
            empty: string
        },
        header: {
            title: string,
            github: string,
            google: string
        },
        footer: {
            libreTranslate: string
        },
        message: {
            tryAgain: string
        },
        confidence: {
            error: string
        }
    },
    screens: {
        translator: {
            sourceInputPlaceholder: string
        }
    }
}