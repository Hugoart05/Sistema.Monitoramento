import { Link } from 'react-router-dom';
import * as C from './style'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthProvider';

function Header() {
    const context = useContext(AuthContext)
    return ( 
        <C.Container  className='shadow'>
            <C.LogoArea className='lead'>
                ListaPro
            </C.LogoArea>
            <C.NavBar>
                <C.MenuIcon>
                    <Link  to={'/'}><i className='bi bi-house'></i></Link>
                </C.MenuIcon>
                <C.MenuIcon>
                    <Link to={'/condominios'}><i className='bi bi-building'></i></Link>
                </C.MenuIcon>
                <C.MenuIcon>
                    <Link to={'/user'}><i className='bi bi-person'></i></Link>
                </C.MenuIcon>
                <C.MenuIcon>
                    <Link to={'/user'}><i className='bi bi-gear'></i></Link>
                </C.MenuIcon>
                <C.MenuIcon>
                    <a type='button' onClick={()=>{context?.logout()}}><i className='bi bi-gear'></i></a>
                </C.MenuIcon>
            </C.NavBar>
        </C.Container>
     );
}

export default Header;