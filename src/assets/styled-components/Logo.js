import styled from "styled-components";

export default function Logo() {
    return(
        <Lettering>
            MyWallet
        </Lettering>
    )
}

const Lettering = styled.div`
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    color: #FFFFFF;
`