import golden from "../../../public/golden.png";
import royal from "../../../public/royal.png";
import premier from "../../../public/primier.png";
import natural from "../../../public/natural.png";
import whiskas from "../../../public/whiskas.png";

import Image from "next/image";
import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Premier", logo: premier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
];

export function Footer() {
  return (
    <section className="bg-black py-16 text-white lg:px-14">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="mb-8 text-center text-3xl font-semibold">
            Nossos Parceiros
          </h4>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
            {brands.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg bg-white p-4"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-5 mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-2 text-2xl font-semibold">Pet Shop Dev</h3>
            <p className="mb-4">
              Cuidando do seu melhor amigo com amor e dedicação.
            </p>
            <a
              href="#"
              className="bg-green mt flex w-fit items-center gap-2 rounded-md bg-green-600 px-4 py-2 duration-300 hover:bg-green-400"
            >
              <WhatsappLogo className="h-5 w-5" />
              Contato via WhastApp
            </a>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-semibold">Contatos</h3>
            <p>Email: teste@teste.com</p>
            <p>Telefone: 99 99999-9999</p>
            <p>Endereço: Rua X, Centro, Torres | RS</p>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-semibold">Redes Sociais</h3>
            <div className="flex gap-3">
              <a href="#">
                <FacebookLogo className="h-8 w-8" />
              </a>
              <a href="#">
                <InstagramLogo className="h-8 w-8" />
              </a>
              <a href="#">
                <YoutubeLogo className="h-8 w-8" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
