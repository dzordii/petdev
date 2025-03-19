import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-50 py-16 lg:px-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto do Cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>
            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
              <Image
                src={about2Img}
                alt="Foto do Cachorro 2"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>
              Você que ama seu pet, sabe o quanto é importante cuidar da saúde e
              bem-estar dele. E para isso, é fundamental contar com um serviço
              de qualidade e confiança. A PetLove é uma clínica veterinária que
              atua no mercado há mais de 10 anos, oferecendo o que há de melhor
              em atendimento e serviços para o seu pet.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2006
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 anos de experiência
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nosso compromisso
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                href="#"
                className="bg-amber-600 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via Whatsapp
              </a>
              <a
                href="#"
                className="md:text-black text-white border-1 border-transparent hover:border-black md:bg-transparent  bg-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-white md:text-black" />
                Endereço da Loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
