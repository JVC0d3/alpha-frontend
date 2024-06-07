import { ComponentProps, Dispatch, FormEvent, SetStateAction, useState } from 'react';
import Button from '../ui/Button';
import Input from '../form/input';
import Form from '../form';

interface RegisterPopupProps extends ComponentProps<'div'> {
    popup: Popup;
    setPopup: Dispatch<SetStateAction<Popup>>;
}

function RegisterPopup({ popup: visible, setPopup: setVisible }: RegisterPopupProps) {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [birthDate, setBirthDate] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <div className={`fixed w-screen h-screen ${visible ? '' : 'hidden'}`}>
            <div
                className='w-screen h-screen fixed bg-black opacity-50 cursor-default'
                onClick={() => setVisible(null)}
                role='button'
                tabIndex={-1}
                onKeyDown={(e) => e.key === 'Escape' && setVisible(null)}
            ></div>
            <div className='absolute w-2/5 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-50 p-10 rounded-lg'>
                <Form.Root onSubmit={handleLogin}>
                    <Form.Title>Entrar</Form.Title>
                    <Input.Root>
                        <Input.Label>Nome</Input.Label>
                        <Input.Field
                            type='text'
                            placeholder='Insira seu nome'
                            value={firstName}
                            setValue={setFirstName}
                        />
                    </Input.Root>

                    <Input.Root>
                        <Input.Label>Sobrenome</Input.Label>
                        <Input.Field
                            type='text'
                            placeholder='Insira seu sobrenome'
                            value={lastName}
                            setValue={setLastName}
                        />
                    </Input.Root>

                    <Input.Root>
                        <Input.Label>CPF</Input.Label>
                        <Input.Field type='number' placeholder='Insira seu CPF' value={cpf} setValue={setCpf} />
                    </Input.Root>

                    <Input.Root>
                        <Input.Label>Data de Nascimento</Input.Label>
                        <Input.Field
                            type='date'
                            placeholder='Insira seu nascimento'
                            value={birthDate}
                            setValue={setBirthDate}
                        />
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

                    <Form.Link to='/register'>Já possuo uma conta</Form.Link>
                    <Form.Link to='/'>Esqueci minha senha</Form.Link>

                    <Button type='submit' className='self-center' invert={true}>
                        Entrar
                    </Button>
                </Form.Root>
            </div>
        </div>
    );
}

export default RegisterPopup;
