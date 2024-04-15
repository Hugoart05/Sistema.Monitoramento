
export const Logout = () => {
    localStorage.removeItem('@token')
    localStorage.removeItem('@theme')
    localStorage.removeItem('@user')
}
