import styled from "styled-components";
import {Link} from 'react-router-dom'
import { Button, Container } from "../assets/styled-components/Styled";
import Logo from "../assets/styled-components/Logo"

export default function Signup() {
    return (
        <Container>
            <Logo/>
            <Form>
                <Field type="text" name="name" placeholder="Nome"/>
                <Field type="text" name="email" placeholder="E-mail"/>
                <Field type="password" name="password" placeholder="Senha"/>
                <Field type="password" name="password" placeholder="Confirme a senha"/>
                <Button>Cadastrar</Button>
            </Form>
            <StyledLink to={`/sign-in`}>
                    Já tem uma conta? Entre agora!
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