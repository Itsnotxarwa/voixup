import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { benefits } from "./BenefitsData";
import { Slide } from "react-awesome-reveal";

export default function BenefitsSection() {
    
    const [startIndex, setStartIndex] = useState(0);

    const [cardsPerSlide, setCardsPerSlide] = useState(2);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setCardsPerSlide(2);   
        } else {
          setCardsPerSlide(1);  
        }
      };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    });

    const totalSlides = Math.ceil(benefits.length / cardsPerSlide);

    const nextSlide = () => {
    setStartIndex((prev) =>
        prev + cardsPerSlide >= benefits.length ? 0 : prev + cardsPerSlide
    );
    };

    const prevSlide = () => {
        setStartIndex((prev) =>
        prev - cardsPerSlide < 0
            ? (totalSlides - 1) * cardsPerSlide
            : prev - cardsPerSlide
        );
    };

    const visibleCards = benefits.slice(startIndex, startIndex + cardsPerSlide);

    return(
        <section className="relative pt-24 pb-32">
          <Slide triggerOnce cascade direction="right" duration={1000}>
            <div className="mb-6 hidden lg:flex justify-end gap-2  pr-8 sm:pr-6 lg:pr-16">
            <button
              onClick={prevSlide}
              className="p-2 bg-white text-gray-300 border border-gray-300 rounded-lg hover:scale-105 transition-transform 
                                                duration-300 hover:text-black"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-white text-gray-300 border border-gray-300 rounded-lg hover:scale-105 transition-transform 
                                                duration-300 hover:text-black"
            >
            <ChevronRight />
            </button>
          </div>
          </Slide>
            <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-16 flex flex-col lg:flex-row gap-8">
              <Slide triggerOnce cascade direction="left" duration={1000}>
                <div className="flex flex-col lg:w-[350px]">
                    <h2 className="text-xl uppercase text-black mb-4">Pourquoi choisir VoixUp ?</h2>
                    <h2 className="text-2xl text-gray-900 font-medium mb-8 text-center">
                        Les bénéfices essentiels de VoixUp pour transformer votre entreprise
                    </h2>
                    <p className="text-xl text-left text-black">
                    VoixUp n’est pas seulement un outil d’automatisation : c’est un véritable levier stratégique qui révolutionne la gestion des appels commerciaux et l’expérience client.
                    </p>
                </div>
                </Slide>
                <Slide triggerOnce cascade direction="right" duration={1000}>
                <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleCards.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="h-72 md:h-80 lg:h-80 p-8 text-left relative z-10 rounded-lg shadow-sm bg-white border border-white/10 transition-all duration-500 hover:shadow-2xl group overflow-hidden"
                >
                  <div className="flex items-start mx-auto mb-6">
                    <Icon size={36} />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-4">{item.title}</h3>
                  <p className="text-black/70">{item.description}</p>
                </div>
              );
            })}
          </div>
          </div>
          </Slide>
        </div>
         <div className="mt-8 lg:hidden mb-6 flex justify-center gap-2  pr-8 sm:pr-6 lg:pr-16">
            <button
              onClick={prevSlide}
              className="p-2 bg-white text-gray-300 border border-gray-300 rounded-lg hover:scale-105 transition-transform 
                        duration-300 hover:text-black"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-white text-gray-300 border border-gray-300 rounded-lg hover:scale-105 transition-transform 
                                                duration-300 hover:text-black"
            >
            <ChevronRight />
            </button>
          </div>
        </section>
    )
}