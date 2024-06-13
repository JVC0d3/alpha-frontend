import {
    ComponentProps,
    Dispatch,
    FormEvent,
    SetStateAction,
    useState,
} from 'react';
import Button from '../ui/Button';
import Input from '../form/input';
import Form from '../form';

interface RegisterPopupProps extends ComponentProps<'div'> {
    popup: Popup;
    setPopup: Dispatch<SetStateAction<Popup>>;
}

const RegisterPopup = ({ popup, setPopup }: RegisterPopupProps) => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [birthDate, setBirthDate] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [page, setPage] = useState<number>(1);
    const pages = 2;

    function handleRegister(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <div
            className={`fixed w-screen h-screen ${popup === 'register' ? '' : 'hidden'}`}
        >
            <div
                className='w-screen h-screen fixed bg-black opacity-50 cursor-default'
                onClick={() => setPopup(null)}
                role='button'
                tabIndex={-1}
                onKeyDown={(e) => e.key === 'Escape' && setPopup(null)}
            ></div>
            <div className='absolute w-2/5 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-50 p-10 rounded-lg'>
                <Form.Root onSubmit={handleRegister}>
                    <Form.Title>Registro</Form.Title>

                    <Form.Page current={page} page={1}>
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
                            <Input.Label>Email</Input.Label>
                            <Input.Field
                                type='email'
                                placeholder='Insira seu email'
                                value={email}
                                setValue={setEmail}
                            />
                        </Input.Root>

                        <Input.Root>
                            <Input.Label>CPF</Input.Label>
                            <Input.Field
                                type='text'
                                placeholder='Insira seu CPF'
                                value={cpf}
                                setValue={setCpf}
                            />
                        </Input.Root>
                    </Form.Page>
                    <Form.Page current={page} page={2}>
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

                        <Input.Root>
                            <Input.Label>Senha</Input.Label>
                            <Input.Field
                                type='password'
                                placeholder='Insira sua senha novamente'
                                value={password}
                                setValue={setPassword}
                            />
                        </Input.Root>
                    </Form.Page>

                    <a
                        href='#'
                        onClick={() => setPopup('login')}
                        className='w-fit hover:underline hover:text-dark-blue'
                    >
                        Já possuo uma conta
                    </a>

                    <Button
                        type='button'
                        className={`self-center ${page >= pages && 'hidden'}`}
                        invert={true}
                        onClick={() => setPage(page + 1)}
                    >
                        Próximo
                    </Button>

                    <Button
                        type='submit'
                        className={`self-center ${page < pages && 'hidden'}`}
                        invert={true}
                    >
                        Registrar
                    </Button>
                </Form.Root>
            </div>
        </div>
    );
};

export default RegisterPopup;
