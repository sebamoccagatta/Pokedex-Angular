export interface Data{
    count: number,
    next: string,
    previuos: string,
    results: Resultado[]
}

export interface Resultado {
    name: string,
    url: string
}