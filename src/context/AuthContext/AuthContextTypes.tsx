
export interface AuthContextType {
    authData: AuthDataType | undefined
    isLogged: boolean
    signIn: (data:SignInType) => void
    logout: () => void
}

export interface AuthDataType {
    nome: string 
    sobrenome:  string 
    nomecompleto:  string 
    email:  string 
    token:  string
    theme:  string
}

export type SignInType = {
    email: string | ''
    password: string | ''
}