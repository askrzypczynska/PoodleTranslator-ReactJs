export enum HttpMethod {
    GET = "get",
    POST = "post",
    PATCH = "patch",
    PUT = "put",
    DELETE = "delete"
}

export type onSuccess<Response> = (response: Response) => void
export type onError = () => void