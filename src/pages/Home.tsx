import Main from '../components/layout/Main';
import Section from '../components/layout/section';

import ExampleImg from '../assets/images/cars.jpg';

import { FaCircle } from 'react-icons/fa6';
import { IoIosArrowBack as ArrowLeft, IoIosArrowForward as ArrowRight } from 'react-icons/io';

function Home() {
    return (
        <Main>
            <Section.Root>
                <div className='flex w-full h-[50vh] rounded bg-cyan-400 p-1 z-[-2]'>
                    <div className='h-1/2 self-end flex flex-col justify-between items-center w-full'>
                        <div className='flex w-full justify-between px-4 -translate-y-1/2 z-[-1]'>
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
                <Section.Img src={ExampleImg} />
                <Section.Text>
                    <Section.Title>Hello, World!</Section.Title>
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

export default Home;

