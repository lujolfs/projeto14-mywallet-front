import { useState } from "react";
import styled from "styled-components";

export default function Income(){
    return (
        <Container>
            <Header>Nova entrada</Header>
            <Form>
                <Field type="text" name="email" placeholder="Valor"/>
                <Field type="password" name="password" placeholder="Descrição"/>
                <Button>Salvar entrada</Button>
            </Form>
        </Container>
    )
}


const Container = styled.div`
height: 100vh;
padding-left: 20px;
padding-right: 20px;
overflow: hidden;
background-color: #8b11be;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
font-family: 'Raleway', sans-serif;
`

const Header = styled.div`
width: 100%;
font-weight: 700;
font-size: 26px;
color: #FFFFFF;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 25px;
margin-top: 15px;
`

const Button = styled.button`
font-family: 'Raleway', sans-serif;
font-size: 20px;
font-weight: 700;
border: none;
border-radius: 5px;
height: 62px;
width: 342px;
color: #FFFFFF;
background: #A328D6;
`

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