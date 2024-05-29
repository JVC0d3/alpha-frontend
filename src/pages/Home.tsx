import Main from '../components/layout/Main';
import Section from '../components/layout/Section';

import SelectorImg from '../assets/icons/white-balls.svg'
import LeftArrow from '../assets/icons/left-arrow.svg'
import RightArrow from '../assets/icons/right-arrow.svg'
import ExampleImg from '../assets/cars.jpg'

function Home() {
    return (
        <Main>
            <Section>
                <div className="flex w-full h-[50vh] rounded bg-cyan-400">
                    <div className="h-1/2 self-end flex flex-col justify-between items-center w-full ">
                        <div className="flex justify-between w-full px-4 translate-y-[-50%]">
                            <img className="w-[40px] h-[40px] cursor-pointer" src={LeftArrow} alt="Left" />
                            <img className="w-[40px] h-[40px] cursor-pointer" src={RightArrow} alt="Right" />
                        </div>
                        <div className="flex mb-2 gap-x-4">
                            <img className='w-[30px] h-[30px] cursor-pointer' src={SelectorImg} alt="Selector" />
                            <img className='w-[30px] h-[30px] cursor-pointer' src={SelectorImg} alt="Selector" />
                            <img className='w-[30px] h-[30px] cursor-pointer' src={SelectorImg} alt="Selector" />
                            <img className='w-[30px] h-[30px] cursor-pointer' src={SelectorImg} alt="Selector" />
                        </div>
                    </div>
                </div>
            </Section>
            <Section className=" gap-x-8">
                <img src={ExampleImg} alt="Rodovia movimentada" />
                <div className="w-1/2">
                    <h1>Hello, World!</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, dolor. Hic, inventore! Ullam
                        ratione tenetur eveniet. Eius, et temporibus vel eos cupiditate ex, necessitatibus corrupti deleniti
                        fugiat provident, repudiandae itaque.
                    </p>
                </div>
            </Section>
            <Section>
                <h1>Hello, World!</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, dolor. Hic, inventore! Ullam
                    ratione tenetur eveniet. Eius, et temporibus vel eos cupiditate ex, necessitatibus corrupti deleniti
                    fugiat provident, repudiandae itaque.
                </p>
            </Section>
            <Section>
                <h1>Hello, World!</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, dolor. Hic, inventore! Ullam
                    ratione tenetur eveniet. Eius, et temporibus vel eos cupiditate ex, necessitatibus corrupti deleniti
                    fugiat provident, repudiandae itaque.
                </p>
            </Section>
        </Main>
    );
}

export default Home;

