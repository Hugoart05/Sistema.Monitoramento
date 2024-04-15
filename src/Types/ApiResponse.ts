export interface ApiResponse{
    id:number
    nome:string
    sobrenome:string
    nomeCompleto:string
    email:string
    token:string
    role:string
    notifications:false
    theme:string
}

export interface ApiPaternResponse<T>{
    data: T 
    erro: [] | null
    success: boolean
    erros:string[]
}