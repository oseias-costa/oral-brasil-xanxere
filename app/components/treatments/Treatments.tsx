import Image from "next/image"
import styled from "styled-components"
import { treatments } from "../global/_data"
import TreatmentImage from '@/public/treatments.png'
import Button from "../global/Button"

export default function Treatments(){
    const treatmentsItem = treatments.list.map(item => {
        return (
            <TreatmentsBlock key={item.title}>
                <Icon src={item.icon} alt={item.title} />
                <div>
                    <h4 className='TreatmentsBlock__Title'>{item.title}</h4>
                    <p>{item.content}</p>
                </div>
            </TreatmentsBlock>
        )
    }) 

    return(
        <Container>
            <Description>
                <h4>{treatments.subtitle}</h4>
                <h2>{treatments.title}</h2>
                <TreatmentsList>{treatmentsItem}</TreatmentsList>
                <Button text={treatments.textButton} color='blue' />
            </Description>
            <Img src={TreatmentImage} alt='Tratamentos completos Oral Brasil Xanxerê' />
        </Container>
    )
} 

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 73px;
    padding-bottom: 73px;
    flex-wrap: wrap;

    @media(max-width: 740px){
        flex-wrap: wrap-reverse;
        padding-top: 33px;
    }
`

const Description = styled.div`
    margin-right: 50px;
    @media(max-width: 740px){
        text-align: center;
        margin-right: 0px;
        padding-left: 20px;
        padding-right: 20px;
    }
`

const TreatmentsList = styled.div`
    padding-bottom: 50px;
    padding-top: 30px;
`

const TreatmentsBlock = styled.div`
    display: flex;
    max-width: 550px;
    padding-top: 20px;
    padding-bottom: 20px;

    div >  .TreatmentsBlock__Title{
        padding-bottom: 10px;
        font-size: 18px;
    }

    @media(max-width: 740px){
        flex-direction: column;
        text-align: center;
        align-items: center;

        div >  .TreatmentsBlock__Title{
            padding-top: 10px;
        }
    }
`   

const Icon = styled(Image)`
    width: 72px;
    height: 72px;
    margin-right: 25px;

    @media(max-width: 740px){
        margin-right: 0px;
    }
`

const Img = styled(Image)`
    aspect-ratio: auto 380 / 726;

    @media(max-width: 740px){
        width: 300px;
        height: 450px;
        object-fit: cover;
        object-position: top;
        margin-bottom: 50px;
    }
`