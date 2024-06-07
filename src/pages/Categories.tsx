import Main from '../components/layout/Main';
import Section from '../components/layout/section';

import GamesImg from '../assets/images/games.jpg';
import NewsImg from '../assets/images/news.jpg';
import TransitLawImg from '../assets/images/transit-law.jpg';

import { FaCircle } from 'react-icons/fa6';
import { IoIosArrowBack as ArrowLeft, IoIosArrowForward as ArrowRight } from 'react-icons/io';

function Categories() {
    return (
        <Main>
            <Section.Root>
                <div className='flex w-full h-[50vh] rounded bg-cyan-400'>
                    <div className='h-1/2 self-end flex flex-col justify-between items-center w-full '>
                        <div className='flex justify-between w-full px-4 translate-y-[-50%]'>
                            <ArrowLeft size={60} className='cursor-pointer text-white' />
                            <ArrowRight size={60} className='cursor-pointer text-white' />
                        </div>
                        <div className='flex mb-2 gap-x-4'>
                            <FaCircle size={25} className='cursor-pointer text-white' />
                            <FaCircle size={25} className='cursor-pointer text-white' />
                            <FaCircle size={25} className='cursor-pointer text-white' />
                            <FaCircle size={25} className='cursor-pointer text-white' />
                        </div>
                    </div>
                </div>
            </Section.Root>
            <Section.Root className='justify-between'>
                <Section.Img src={GamesImg} link to='/games' />
                <Section.Text>
                    <Section.Title link to='/games'>
                        Jogos
                    </Section.Title>
                    <Section.Content>
                        Lorem ipsum dolor, sit <b>amet</b> consectetur adipisicing elit. Vitae, dolor. <b>Hic</b>,
                        inventore! Ullam ratione tenetur eveniet. Eius, et <b>temporibus</b> vel eos cupiditate ex,
                        necessitatibus <b>corrupti</b> deleniti fugiat provident, repudiandae itaque.
                    </Section.Content>
                </Section.Text>
            </Section.Root>
            <Section.Root className='justify-between'>
                <Section.Img src={NewsImg} link to='/news' />
                <Section.Text>
                    <Section.Title link to='/news'>
                        Notícias
                    </Section.Title>
                    <Section.Content>
                        Lorem ipsum dolor, sit <b>amet</b> consectetur adipisicing elit. Vitae, dolor. <b>Hic</b>,
                        inventore! Ullam ratione tenetur eveniet. Eius, et <b>temporibus</b> vel eos cupiditate ex,
                        necessitatibus <b>corrupti</b> deleniti fugiat provident, repudiandae itaque.
                    </Section.Content>
                </Section.Text>
            </Section.Root>
            <Section.Root className='justify-between'>
                <Section.Img src={TransitLawImg} link to='/laws' />
                <Section.Text>
                    <Section.Title link to='/laws'>
                        Leis de Trânsito
                    </Section.Title>
                    <Section.Content>
                        Lorem ipsum dolor, sit <b>amet</b> consectetur adipisicing elit. Vitae, dolor. <b>Hic</b>,
                        inventore! Ullam ratione tenetur eveniet. Eius, et <b>temporibus</b> vel eos cupiditate ex,
                        necessitatibus <b>corrupti</b> deleniti fugiat provident, repudiandae itaque.
                    </Section.Content>
                </Section.Text>
            </Section.Root>
        </Main>
    );
}

export default Categories;

