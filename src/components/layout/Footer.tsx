import EptranImg from '../../assets/logos/eptran-logo.png';
import JoinvilleImg from '../../assets/logos/joinville-logo.png';
import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <div className='w-full h-[204px] flex justify-between items-center bg-dark-blue px-20 py-10'>
            <div className='h-full flex flex-col justify-between'>
                <img src={EptranImg} className='w-auto h-2/5' alt='Logo do Eptran' />
                <img src={JoinvilleImg} className='w-auto h-2/5' alt='Logo de Joinville' />
            </div>
            <div className='w-fit flex flex-col gap-3 items-center text-white text-lg'>
                <p>Rua Caçador, 112 – Anita Garibaldi – 89203-610, Joinville – SCM</p>
                <p>
                    <a className='underline decoration-2' href='/'>
                        (47) 3431-1500
                    </a>{' '}
                    |
                    <a className='underline decoration-2' href='mailto:detrans.uet@joinville.sc.gov.br'>
                        detrans.uet@joinville.sc.gov.br
                    </a>
                </p>
            </div>
            <div className='flex w-fit flex-col gap-y-4'>
                <div className='flex list-none justify-between'>
                    <li>
                        <a href='https://youtube.com/' rel='noreferrer' target='_blank'>
                            <FaYoutube size={40} color='white' />
                        </a>
                    </li>
                    <li>
                        <a href='https://facebook.com/' rel='noreferrer' target='_blank'>
                            <FaFacebook size={40} color='white' />
                        </a>
                    </li>
                    <li>
                        <a href='https://instagram.com/' rel='noreferrer' target='_blank'>
                            <FaInstagram size={40} color='white' />
                        </a>
                    </li>
                </div>
                <p className='text-white text-base text-center'>Site desenvolvido por JVCode</p>
            </div>
        </div>
    );
}

export default Footer;

