import Service from "@/public/service.png";
import Sofa from "@/public/sofa.png";
import Tecnology from "@/public/tecnology.png";
import Implant from "@/public/implant.png";
import Invisalign from "@/public/invisalign.png";
import Facets from "@/public/facets.png";
import Facial from "@/public/facial.png";
import Location from "@/public/location-contact.png";
import Whatsapp from "@/public/WhatsApp.png";

export const header = {
  logoAlt: "Logo Oral Brasil Xanxerê",
  menu: [
    {
      text: "TRATAMENTOS",
      link: "#tratamentos",
    },
    {
      text: "SOBRE A CLÍNICA",
      link: "#sobre-a-clinica",
    },
    {
      text: "CONTATO",
      link: "#contato",
    },
  ],
};

export const headline = {
  subtitle: "ORAL BRASIL XANXERÊ",
  title: "Seu novo sorriso está na Oral Brasil",
  description:
    "Inicie sua jornada para um sorriso perfeito com a Oral Brasil. Nossa clínica combina expertise clínica, tecnologia avançada e atendimento personalizado para garantir que cada paciente receba os melhores cuidados odontológicos.",
  buttonText: "Agende uma avaliação",
};

export const benefits = [
  {
    icon: Service,
    text: "Atendimento Personalizado",
  },
  {
    icon: Tecnology,
    text: "Tecnologia Avançada",
  },
  {
    icon: Sofa,
    text: "Ambiente Confortável",
  },
];

export const treatments = {
  subtitle: "NOSSOS SERVIÇOS",
  title: "Tratamentos completos",
  textButton: "Agende uma avaliação",
  list: [
    {
      icon: Implant,
      title: "Implantes",
      content:
        "Implantes dentários oferecem uma solução duradoura e natural para substituir dentes ausentes, permitindo que você recupere sua estética facial e função mastigatória.",
    },
    {
      icon: Invisalign,
      title: "Invisalign",
      content:
        "Os alinhadores Invisalign são feitos de material suave e confortável, proporcionando um tratamento ortodôntico sem fios e braquetes metálicos.",
    },
    {
      icon: Facets,
      title: "Lentes de Contato",
      content:
        "As lentes de contato dentais são finas e personalizadas para se encaixarem perfeitamente nos seus dentes, proporcionando um resultado natural e harmonioso.",
    },
    {
      icon: Facial,
      title: "Harmonização Facial",
      content:
        "Nossos especialistas em harmonização facial utilizam técnicas avançadas para proporcionar um aspecto natural, fresco e revitalizado.",
    },
  ],
};

export const clinic = {
  subtitle: "sobre a clínica",
  title: "Oral Brasil Xanxerê",
  description:
    "Sorrisos saudáveis e radiantes são a nossa especialidade. Nossa equipe de profissionais altamente qualificados está pronta para cuidar do seu sorriso e garantir resultados excepcionais.",
};

export const schedule = {
  title: "Agende uma Avaliação",
  content:
    "Marque sua consulta de avaliação para receber um diagnóstico completo e um plano de tratamento personalizado para seus objetivos odontológicos.",
  buttonText: "Quero agendar",
};

export const contact = {
  subtitle: "COMO CHEGAR",
  title: "Contato",
  contacts: {
    adress: {
      item: "ENDEREÇO",
      content:
        "R. Rui Barbosa, 266 - Sala 101, Centro, Xanxerê -SC, Cep 89.820-000",
      icon: Location,
    },
    phone: {
      item: "TELEFONE",
      content: "0800-7431110",
      icon: Whatsapp,
    },
  },
};

export const footer = {
  menu: [
    {
      text: "INÍCIO",
      link: "#inicio",
    },
    {
      text: "TRATAMENTOS",
      link: "#tratamentos",
    },
    {
      text: "SOBRE A CLÍNICA",
      link: "#sobre-a-clinica",
    },
  ],
};

export const whatsAppNum =
  "https://wa.me/5549936189333?text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+agendar+uma+consulta.";
