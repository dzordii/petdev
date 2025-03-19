import Image from "next/image";
import about1Img from "../../../public/about-1.jpg";
import about2Img from "../../../public/about-2.jpg";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-50 py-16 lg:px-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-3xl">
              <Image
                src={about1Img}
                alt="Foto do Cachorro"
                fill
                quality={100}
                className="object-cover duration-300 hover:scale-110"
                priority
              />
            </div>
            <div className="absolute right-4 -bottom-8 h-40 w-40 overflow-hidden rounded-lg border-4 border-white">
              <Image
                src={about2Img}
                alt="Foto do Cachorro 2"
                fill
                quality={100}
                priority
                className="object-cover duration-300 hover:scale-110"
              />
            </div>
          </div>

          <div
            className="mt-10 space-y-6"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
          >
            <h2 className="text-4xl font-bold text-center md:text-start">SOBRE</h2>
            <p className="text-center md:text-start">
              Você que ama seu pet, sabe o quanto é importante cuidar da saúde e
              bem-estar dele. E para isso, é fundamental contar com um serviço
              de qualidade e confiança. A PetLove é uma clínica veterinária que
              atua no mercado há mais de 10 anos, oferecendo o que há de melhor
              em atendimento e serviços para o seu pet.
            </p>

            <ul className="space-y-4 flex flex-col items-center md:items-start">
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

            <div className="flex gap-2 flex-col md:flex-row items-center md:items-start">
              <a
                href="#"
                className="flex w-fit items-center justify-center gap-2 rounded-md bg-green-500 px-4 py-2 text-white duration-300 hover:bg-green-400"
              >
                <WhatsappLogo className="h-5 w-5 text-white" />
                Contato via Whatsapp
              </a>
              <a
                href="#"
                className="flex w-fit items-center justify-center gap-2 rounded-md border-1 border-transparent bg-black px-4 py-2 text-white duration-300 hover:border-black md:bg-transparent md:text-black"
              >
                <MapPin className="h-5 w-5 text-white md:text-black" />
                Endereço da Loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
