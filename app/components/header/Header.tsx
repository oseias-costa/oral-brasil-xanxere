import Image from "next/image"
import styled from "styled-components"
import Logo from "@/public/logo-header.png"
import { header } from "../global/_data"

export default function Header(){
    const menuItem = header.menu.map(item => {
        return <A href={item.link}>{item.text}</A>
    })

    return (
        <Container>
            <Img src={Logo} alt={header.logoAlt} />
            <Menu>{menuItem}</Menu>
        </Container>
    )
}

const Container = styled.header`
    box-shadow: 0px 4px 20px rgba(30, 30, 30, 0.1);
    display: flex;
    align-items: center;
    padding-top: 18px;
    padding-bottom: 18px;
    justify-content: space-around;
`

const Img = styled(Image)`

`

const Menu = styled.div`
    @media(max-width: 940px){
        display: none;
    }
`

const A = styled.a`
    margin-left: 40px;
    color: var(--color-blue-strong);
    transition: 0.3s linear;

    &:hover{
        color: var(--color-blue-light);
    }
`