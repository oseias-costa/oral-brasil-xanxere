import styled from "styled-components"
import { headline } from "../global/_data"
import ImgHeadline from '@/public/headline.png'
import Image from "next/image"
import Button from "../global/Button"
 
export default function Headline(){
    return(
        <Container>
            <Img src={ImgHeadline} alt={headline.subtitle} />
            <Description>
                <h4 className='Headline__Subtitle'>{headline.subtitle}</h4>
                <h1>{headline.title}</h1>
                <p className='Headline__Description'>{headline.description}</p>
                <Button text={headline.buttonText} color='blue' />
            </Description>
        </Container>
    )
} 

const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 30px;

    @media(max-width: 740px){
        padding-left: 20px;
        padding-right: 20px;
        text-align: center;
        padding-bottom: 60px;
        padding-top: 15px;
    }
`   

const Img = styled(Image)`
    @media(max-width: 740px){
        width: 350px;
        height: auto;
    }
`

const Description = styled.div`
    max-width: 600px;
    margin-top: 100px;

    .Headline__Subtitle {
        font-size: 24px;
        position: relative;
        top: 7px;
    }

    .Headline__Description {
        font-size: 20px;
        padding-top: 15px;
        padding-bottom: 65px;
    }

    @media(max-width: 740px){
        margin-top: -120px;
        background-color: #fff;

        .Headline__Subtitle{ 
            padding-top: 15px;
            font-size: 20px;
            top: 2px;
        }

        h1 {
            font-size: 38px;
        }

        .Headline__Description {
            font-size: 16px;
        }
    }
`