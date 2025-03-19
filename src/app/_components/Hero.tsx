import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import dogImg from "../../../public/hero-dog.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-amber-400 text-white relative overflow-hidden lg:px-14">
      <div>
        <Image
          src={dogImg}
          alt="Foto do Cachorro"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-60 md:hidden"></div>
      </div>
      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="space-y-6">
            <h1
              className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10"
              data-aos="fade-down"
              data-aos-easing="ease-in-sine"
            >
              Seu pet merece cuidado, carinho e atenção especial
            </h1>
            <p
              className="lg:text-lg"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
            >
              Oferecemos os melhores serviços para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>

            <a
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:bg-green-400 duration-200"
              href="#"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>

            <div className="mt-8 md:mb-8">
              <p
                className="text-sm mb-4"
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
              >
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{" "}
                de desconto na primeira compra.
              </p>
            </div>
          </div>

            <div
            className="hidden md:block relative h-full"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            >
            <Image
              src={dogImg}
              alt="Foto do Cachorro"
              className="object-contain absolute right-10 bottom-0"
              width={300}
              height={300}
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
            </div>
        </article>
      </div>
    </section>
  );
}
