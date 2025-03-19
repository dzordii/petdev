import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import dogImg from "../../../public/hero-dog.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-bg relative overflow-hidden text-white lg:px-14">
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
      <div className="relative container mx-auto px-4 pt-16 pb-16 md:pb-0">
        <article className="relative grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <h1
              className="text-3xl leading-12 font-bold md:text-4xl lg:text-5xl text-center md:text-start"
              data-aos="fade-down"
              data-aos-easing="ease-in-sine"
            >
              Seu pet merece cuidado, carinho e atenção especial
            </h1>
            <p
              className="lg:text-lg text-center md:text-left"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
            >
              Oferecemos os melhores serviços para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>

            <a
              className="flex w-fit items-center justify-center gap-2 rounded-md bg-green-500 px-5 py-2 font-semibold duration-300 hover:bg-green-400"
              href="#"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
            >
              <WhatsappLogo className="h-5 w-5" />
              Contato via WhatsApp
            </a>

            <div className="mt-8 md:mb-8">
              <p
                className="mb-4 text-sm"
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
              >
                <b className="rounded-md bg-black px-2 py-1 text-white">5%</b>{" "}
                de desconto na primeira compra.
              </p>
            </div>
          </div>

          <div
            className="relative hidden h-full md:block"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
          >
            <Image
              src={dogImg}
              alt="Foto do Cachorro"
              className="absolute right-10 bottom-0 object-contain"
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
