import { FormEvent, useState } from 'react';
import LabelInput from '../form/LabelInput';
import Button from '../ui/Button';

function Popup() {
    const [email, setEmail] = useState<string>('');

    function handleLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div id='popup' className='fixed w-screen h-screen'>
            <div id='background-filter' className='z-50 w-screen h-screen fixed bg-black opacity-50'></div>
            <div
                id='login-container'
                className='z-50 absolute flex justify-center items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
            >
                <div className='w-[600px] flex flex-col gap-10 px-14 absolute z-100 py-10 bg-white rounded-xl'>
                    <span className='w-full py-2 bg-dark-blue rounded-md text-center text-white font-semibold text-2xl'>
                        Entre
                    </span>
                    <form action='' className='flex flex-col gap-6' onSubmit={handleLogin}>
                        <LabelInput
                            placeholder='email'
                            type='email'
                            htmlFor='email'
                            name='email'
                            value={email}
                            setValue={setEmail}
                        >
                            Email
                        </LabelInput>
                        <label htmlFor='name' className='flex flex-col text-black'>
                            <span className='text-dark-blue font-medium'>Nome</span>
                            <input
                                type='text'
                                id='name'
                                placeholder='Nome'
                                className='p-2 border-2 border-dark-blue rounded outline-slate-300 placeholder-slate-300'
                            />
                            <span className='text-sm'>Digite seu nome</span>
                        </label>
                        <span className='underline text-black hover:text-dark-blue'>Esqueci minha senha</span>
                        <a href='./register.html' className='underline text-black hover:text-dark-blue'>
                            Não possuo conta
                        </a>
                        <Button type='submit' className='self-center' invert={true}>
                            Entrar
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Popup;
