export type Dictionary = {
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