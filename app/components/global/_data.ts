import Service from '@/public/service.png'
import Sofa from '@/public/sofa.png'
import Tecnology from '@/public/tecnology.png'
import Implant from '@/public/implant.png'
import Invisalign from '@/public/invisalign.png'
import Facets from '@/public/facets.png'
import Facial from '@/public/facial.png'

export const header = {
    logoAlt: 'Logo Oral Brasil Xanxerê',
    menu: [
        {
            text: 'TRATAMENTOS',
            link: '#'
        },
        {
            text: 'SOBRE A CLINICICA',
            link: '#'
        },
        {
            text: 'CONTATO',
            link: '#'
        },
    ]
}

export const headline = {
    subtitle: 'ORAL BRASIL XANXERÊ',
    title: 'Seu novo sorriso está na Oral Brasil',
    description: 'Inicie sua jornada para um sorriso perfeito com a Oral Brasil. Nossa clínica combina expertise clínica, tecnologia avançada e atendimento personalizado para garantir que cada paciente receba os melhores cuidados odontológicos.',
    buttonText: 'Agende uma avaliação',
}

export const benefits = [
    {
        icon: Service,
        text: 'Atendimento Personalizado',
    },
    {
        icon: Tecnology,
        text: 'Tecnologia Avançada',
    },
    {
        icon: Sofa,
        text: 'Ambiente Confortável',
    },
]

export const treatments = {
    subtitle: 'NOSSOS SERVIÇOS',
    title: 'Tratamentos completos',
    textButton: 'Agende uma avaliação',
    list: [
        {
            icon: Implant,
            title: 'Implantes',
            content: 'Implantes dentários oferecem uma solução duradoura e natural para substituir dentes ausentes, permitindo que você recupere sua estética facial e função mastigatória.'
        },
        {
            icon: Invisalign,
            title: 'Invisalign',
            content: 'Os alinhadores Invisalign são feitos de material suave e confortável, proporcionando um tratamento ortodôntico sem fios e braquetes metálicos.'
        },
        {
            icon: Facets,
            title: 'Lentes de Contato',
            content: 'As lentes de contato dentais são finas e personalizadas para se encaixarem perfeitamente nos seus dentes, proporcionando um resultado natural e harmonioso.'
        },
        {
            icon: Facial,
            title: 'Harmonização Facial',
            content: 'Nossos especialistas em harmonização facial utilizam técnicas avançadas para proporcionar um aspecto natural, fresco e revitalizado.'
        },
    ]
}

