import { useState } from "react";
import styled from "styled-components";
import {Link, useNavigate} from 'react-router-dom'
import { Button, Container } from "../assets/styled-components/Styled";
import Logo from "../assets/styled-components/Logo"
import axios from "axios";

export default function Signin() {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);

    function logUser(event) {
        const envio = axios.post("http://localhost:5000/sign-in", form)
        event.preventDefault();
        setDisabled(true);
        envio.then(checkPost);
        envio.catch(checkError);
    };

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function checkPost() {
        navigate("/");
    }

    function checkError() {
        setDisabled(false);
        setForm({
            email: '',
            password: '',
        })
    }

    return (
        <Container>
            <Logo/>
            <Form onSubmit={logUser}>
                <Field type="text" name="email" placeholder="E-mail" value={form.email} onChange={handleForm} disabled={disabled}/>
                <Field type="password" name="password" placeholder="Senha" value={form.password} onChange={handleForm} disabled={disabled}/>
                <Button>Entrar</Button>
            </Form>
            <StyledLink to={`/sign-up`}>
                    Primeira vez? Cadastre-se!
            </StyledLink>
        </Container>
    )
}

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 13px;
`

const Field = styled.input`
font-size: 20px;
border: none;
border-radius: 5px;
height: 60px;
width: 325px;
padding-left: 15px;
font-family: 'Raleway', sans-serif;
`

const StyledLink = styled(Link)`
color: #FFFFFF;
font-size: 15px;
font-weight: 700;
text-decoration-line: none;
::visited {
    text-decoration: none;
}
`