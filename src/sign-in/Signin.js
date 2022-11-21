import styled from "styled-components";
import {Link} from 'react-router-dom'
import { Button, Container } from "../assets/styled-components/Styled";
import Logo from "../assets/styled-components/Logo"

export default function Signin() {
    return (
        <Container>
            <Logo/>
            <Form>
                <Field type="text" name="email" placeholder="E-mail"/>
                <Field type="password" name="password" placeholder="Senha"/>
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