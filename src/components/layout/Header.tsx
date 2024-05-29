import { Link } from 'react-router-dom';
import NavItem from '../ui/NavItem';

import LogosImg from '../../assets/logos/main-logos.png';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { IoChatboxEllipsesSharp } from 'react-icons/io5';
import { GoOrganization } from 'react-icons/go';
import { FaGear } from 'react-icons/fa6';
import Button from '../ui/Button';

function Header() {
    return (
        <div className='w-full flex justify-center bg-dark-blue h-[70px]'>
            <div className={`w-full md:w-4/5 flex justify-between`}>
                <Link to='/' className='contents'>
                    <img
                        src={LogosImg}
                        className='h-5/6 self-center'
                        alt='Logo do EPTRAN e da Prefeitura de Joinville'
                    />
                </Link>

                <div className='flex text-white justify-between w-1/3 items-center'>
                    <NavItem to='/categories' icon={<BiSolidCategoryAlt />}>
                        Categorias
                    </NavItem>
                    <NavItem to='/about-us' icon={<GoOrganization />}>
                        Sobre Nós
                    </NavItem>
                    <NavItem to='/contact' icon={<IoChatboxEllipsesSharp />}>
                        Contato
                    </NavItem>
                </div>

                <div className='flex items-center gap-x-10 w-fit'>
                    <Link to='/settings'>
                        <FaGear size={30} color='white' className='transition-all hover:scale-125' />
                    </Link>
                    <Button>Entrar</Button>
                </div>
            </div>
        </div>
    );
}

export default Header;

