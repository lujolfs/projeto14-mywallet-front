import styled from "styled-components";
import { Icon } from '@iconify/react';
import { useState } from "react";
import Income from "./Income";
import Expenditure from "./Expenditure";

export default function Homepage() {
    const [userInput, setUserInput] = useState(null);

    return (
        <Container>
            <Header>
                Olá, Fulano
                <Icon icon="ri:logout-box-r-line" />
            </Header>
            <Box>
            <MessageBox>
                Não há registros de entrada ou saída.
            </MessageBox>
            </Box>
            <ButtonBox>
                <Button onClick={() => setUserInput("income")}>
                    <Icon icon="material-symbols:add-circle-outline" width="26" />
                    Nova entrada
                </Button>
                <Button onClick={() => setUserInput("expenditure")}>
                    <Icon icon="material-symbols:do-not-disturb-on-outline" width="26"/>
                    Nova saída
                </Button>
            </ButtonBox>
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
justify-content: center;
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
`

const Box = styled.div`
background-color: #FFFFFF;
width: 100%;
height: 67%;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
color: #868686;
margin-bottom: 13px;
`

const MessageBox = styled.div`
height: 46px;
width: 180px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`

const ButtonBox = styled.div`
display: flex;
justify-content: space-between;
gap: 15px;
width: 100%;
`

const Button = styled.div`
font-family: 'Raleway', sans-serif;
padding: 10px;
font-size: 17px;
font-weight: 700;
border: none;
border-radius: 5px;
height: 105px;
width: 152px;
color: #FFFFFF;
background: #A328D6;
display: flex;
flex-direction: column;
justify-content: space-between;
`