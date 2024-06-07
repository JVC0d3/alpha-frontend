import { ComponentProps, Dispatch, FormEvent, SetStateAction, useState } from 'react';
import Button from '../ui/Button';
import Input from '../form/input';
import Form from '../form';

interface PopupProps extends ComponentProps<'div'> {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}

function Popup({ visible, setVisible }: PopupProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <div className={`fixed w-screen h-screen ${visible ? '' : 'hidden'}`}>
            <div
                className='w-screen h-screen fixed bg-black opacity-50 cursor-default'
                onClick={() => setVisible(false)}
                role='button'
                tabIndex={-1}
                onKeyDown={(e) => e.key === 'Escape' && setVisible(false)}
            ></div>
            <div className='absolute w-2/5 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-50 p-10 rounded-lg'>
                <Form.Root onSubmit={handleLogin}>
                    <Form.Title>Entrar</Form.Title>
                    <Input.Root>
                        <Input.Label>Email</Input.Label>
                        <Input.Field type='email' placeholder='Insira seu email' value={email} setValue={setEmail} />
                    </Input.Root>

                    <Input.Root>
                        <Input.Label>Senha</Input.Label>
                        <Input.Field
                            type='password'
                            placeholder='Insira sua senha'
                            value={password}
                            setValue={setPassword}
                        />
                    </Input.Root>

                    <Form.Link to='/register'>Não possuo uma conta</Form.Link>
                    <Form.Link to='/'>Esqueci minha senha</Form.Link>

                    <Button type='submit' className='self-center' invert={true}>
                        Entrar
                    </Button>
                </Form.Root>
            </div>
        </div>
    );
}

export default Popup;

