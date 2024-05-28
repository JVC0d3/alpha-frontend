import EptranImg from '../../assets/logos/eptran-logo.png';
import JoinvilleImg from '../../assets/logos/joinville-logo.png';
import SettingsImg from '../../assets/icons/settings.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='w-full flex justify-around bg-dark-blue h-[70px]'>
            <Link to='/' className='flex gap-3 items-center'>
                <img src={EptranImg} className='h-4/6' alt='Logo do Eptran' />
                <img src={JoinvilleImg} className='h-4/6' alt='Logo de Joinville' />
            </Link>

            <ul className='flex text-white justify-between w-1/3 items-center'>
                <li>
                    <Link to='/categories' className='hover:border-b-2'>
                        Categorias
                    </Link>
                </li>
                <li>
                    <Link to='/' className='hover:border-b-2'>
                        Sobre Nós
                    </Link>
                </li>
                <li>
                    <Link to='/' className='hover:border-b-2'>
                        Contato
                    </Link>
                </li>
            </ul>

            <div className='flex items-center gap-x-10'>
                <Link to='/'>
                    <img className='w-[30px]' src={SettingsImg} alt='Configurações' />
                </Link>
                <button
                    id='login-button'
                    className='h-fit text-2xl cursor-pointer px-10 py-1 rounded bg-white text-dark-blue font-semibold'
                >
                    Entrar
                </button>
            </div>
        </div>
    );
}

export default Header;
