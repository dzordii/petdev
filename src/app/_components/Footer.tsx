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
    <section className="bg-amber-900 py-16 lg:px-14 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8 ">
          <h4 className="text-3xl font-semibold mb-8 text-center"
          >
            Nossos Parceiros
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center "
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

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Pet Shop Dev</h3>
            <p className="mb-4">
              Cuidando do seu melhor amigo com amor e dedicação.
            </p>
            <a href="#" className="flex items-center bg-green-600 hover:bg-green-400 duration-300 w-fit gap-2 bg-green px-4 py-2 rounded-md mt">
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhastApp
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email: teste@teste.com</p>
            <p>Telefone: 99 99999-9999</p>
            <p>Endereço: Rua X, Centro, Torres | RS</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
            <div className="flex gap-3">
              <a href="#">
                <FacebookLogo className="w-8 h-8" />
              </a>
              <a href="#">
                <InstagramLogo className="w-8 h-8" />
              </a>
              <a href="#">
                <YoutubeLogo className="w-8 h-8" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
