import StyledComponentsRegistry from "./lib/registry";
import { Montserrat } from "next/font/google";
import { GlobalStyle } from "./GlobalStyle";
import Google from "./components/global/Google";
import GoogleBody from "./components/global/GoogleBody";

export const metadata = {
  title: "Oral Brasil Xanxerê/SC",
  description:
    "Inicie sua jornada para um sorriso perfeito com a Clínica Oral Brasil de Xanxerê/SC. Nossa clínica combina expertise clínica, tecnologia avançada e atendimento personalizado para garantir que cada paciente receba os melhores cuidados odontológicos.",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GlobalStyle />
        <Google />
      </head>
      <body className={`${montserrat.variable}`}>
        <GoogleBody />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
