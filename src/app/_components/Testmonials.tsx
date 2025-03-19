"use client";

import useEmblaCarousel from "embla-carousel-react";
import tutor1 from "../../../public/tutor1.png";
import tutor2 from "../../../public/tutor2.png";
import tutor3 from "../../../public/tutor3.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testmonials = [
  {
    content:
      "Desde que conheci a lavar a Luna na PetLove, ela nunca mais quis saber de outro lugar. O atendimento é excelente e o carinho com os animais é visível.",
    author: "Maria Silva",
    role: "Tutora da Luna (Golden Retriever)",
    image: tutor2,
  },
  {
    content:
      "Ótimo atendimento, profissionais qualificados e muito carinho com os animais. Recomendo a PetLove para todos os tutores que querem o melhor para seus pets.",
    author: "João Oliveira",
    role: "Tutor do Thor (Labrador)",
    image: tutor1,
  },
  {
    content:
      "A PetLove é a melhor clínica veterinária que já conheci. O atendimento é excelente, os profissionais são muito atenciosos e o ambiente é muito agradável.",
    author: "Ana Souza",
    role: "Tutora da Mel (Poodle)",
    image: tutor3,
  },
];

useEmblaCarousel.globalOptions = { loop: true };

export function Testmonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-amber-300 py-16 lg:px-14">
      <div className="container mx-auto px-5">
        <div>
          <h2 className="font-lg text-4xl text-center font-bold mb-12">
            Depoimentos
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testmonials.map((item, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                    <article className="bg-gray-900 text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                      <div className="flex items-center text-center space-y-4 flex-col">
                        <div className="relative w-24 h-24">
                          <Image
                            src={item.image}
                            alt={item.author}
                            fill
                            sizes="96px"
                            quality={100}
                            className="object-cover rounded-full"
                            priority
                          />
                        </div>
                        <p className="text-gray-200 px-4">{item.content}</p>
                        <div>
                          <p className="font-bold">{item.author}</p>
                          <p className="text-sm text-gray-400">{item.role}</p>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <button
              className=" bg-white flex items-center justify-center rounded-full shadow-lg h-10 w-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
              onClick={scrollPrev}
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              className=" bg-white flex items-center justify-center rounded-full shadow-lg h-10 w-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
              onClick={scrollNext}
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
