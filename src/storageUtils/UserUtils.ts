function GetToken():string | null{
    return localStorage.getItem("@token")
}

function SetToken(data:string):void{
    localStorage.setItem('@token', data)
}
function DeletToken():void{
    localStorage.removeItem('@token')
}

export default {GetToken, SetToken, DeletToken}