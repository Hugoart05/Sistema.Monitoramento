import { ChangeEvent, useContext, useState } from "react";
import { CondDataContext } from "../../context/CondProviderData";
import * as G from '../../GlobalStyles/style'
import * as C from './styles'
import './style.css'
import { Link } from "react-router-dom";


function Condominios() {
    const contextCondominios = useContext(CondDataContext)
    const [search, setSearch] =useState<string>('')
    
    if (!contextCondominios)
        throw new Error("Contexto não definido");

    const { condominios } = contextCondominios

    const filteredData = condominios?.filter((condominio) => {
        return condominio.nome.toLowerCase().includes(search.toLowerCase());
    });
    
    function handleChange(event:ChangeEvent<HTMLInputElement>){
        setSearch(event.target.value)
    }
    return (
        <div className="container-fluid ">
            <div className="container">
                <div className="row pt-3 mb-3">
                    <G.ChangeArea>
                        <G.Label altura={'5px'}> Buscar</G.Label>
                        <G.Input onChange={handleChange} value={search} />
                    </G.ChangeArea>
                </div>
            </div>
            <div className="container">
                <C.ListArea className="row ">
                    <div className="col-12 d-flex flex-column gap-1 d-flex justify-content-center ">
                        {filteredData?.map((condominio) => (
                            
                            <Link key={condominio.id} className="card shadow text-decoration-none" to={`/condominios/${condominio.id}`}>
                                <div className="card-body">{condominio.nome}</div>
                            </Link>
                        ))}
                    </div>
                </C.ListArea>
            </div>
        </div>
    );
}

export default Condominios;