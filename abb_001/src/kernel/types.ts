export type Entity<Tidentifier extends string | number>={
    id?: Tidentifier;
}

export type ResponseApi<T> = {
    status: number,
    error?: boolean,
    message?: string,
    data?: T
}