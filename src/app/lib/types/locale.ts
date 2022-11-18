export type Dictionary = {
    common: {
        autoTranslate: string
    },
    companyName: string,
    components: {
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
        }
    },
    screen: {
        translator: {
            loading: string,
            error: string,
            empty: string
        }
    }
}