import LogosImg from '../../assets/logos/main-logos-col.png';
import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full h-[204px] flex justify-center bg-dark-blue py-10'>
            <div className='w-full md:w-4/5 h-full flex justify-between items-center'>
                <div className='h-full flex flex-col justify-between'>
                    <img
                        src={LogosImg}
                        className='h-full'
                        alt='Logo do Eptran'
                    />
                </div>
                <div className='w-fit flex flex-col gap-3 items-center text-white text-lg'>
                    <p>
                        Rua Caçador, 112 – Anita Garibaldi – 89203-610,
                        Joinville – SCM
                    </p>
                    <p>
                        <a className='underline decoration-2' href='/'>
                            (47) 3431-1500
                        </a>
                        |
                        <a
                            className='underline decoration-2'
                            href='mailto:detrans.uet@joinville.sc.gov.br'
                        >
                            detrans.uet@joinville.sc.gov.br
                        </a>
                    </p>
                </div>
                <div className='flex w-fit flex-col gap-y-4'>
                    <div className='flex list-none justify-between'>
                        <li>
                            <a
                                href='https://youtube.com/'
                                rel='noreferrer'
                                target='_blank'
                            >
                                <FaYoutube size={40} color='white' />
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://facebook.com/'
                                rel='noreferrer'
                                target='_blank'
                            >
                                <FaFacebook size={40} color='white' />
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://instagram.com/'
                                rel='noreferrer'
                                target='_blank'
                            >
                                <FaInstagram size={40} color='white' />
                            </a>
                        </li>
                    </div>
                    <p className='text-white text-base text-center'>
                        Site desenvolvido por JVCode
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
