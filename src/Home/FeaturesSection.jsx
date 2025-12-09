import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { features } from "./FeaturesData";
import { ArrowRight } from "lucide-react";

export default function FeaturesSection() {

    return(
        <section className="relative py-24 bg-white">
                <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-16">
                    <div className="">
                        <Fade triggerOnce cascade direction="up" duration={1000}>
                        <h2 className="uppercase text-black text-xl mb-16 text-center">Fonctionnalités principales</h2>
                        </Fade>
                        <div className="lg:mx-16 mb-16 flex flex-col lg:flex-row gap-6">
                        
                            <Fade triggerOnce cascade direction="left" duration={1000}>
                            <div className="lg:w-[350px]">
                                <h2 className="font-medium text-3xl md:text-3xl text-black mb-8 text-center">VoixUp au service de votre entreprise</h2>
                                <p className="text-lg text-gray-700 mb-6 text-left leading-tight">Voixup combine l’intelligence vocale, la compréhension du langage naturel et des flux conversationnels optimisés pour gérer tous vos appels.</p>
                                <Link 
                                to="/demo" 
                                >
                                    <button 
                                    className="flex gap-3 text-sm font-medium text-white whitespace-nowrap rounded-lg 
                                    bg-black px-4 py-2 hover:bg-[#F2C14E]
                                    transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                                            Essayez VoixUp <ArrowRight size={18} />
                                    </button>
                                </Link>
                            </div>
                            </Fade>
                            <Fade triggerOnce cascade direction="right" duration={1000}>
                            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8">
                                {features.map((item, i) => {
                                    const Icon = item.icon;
                                    return(
                                    <div key={i} className="group flex items-center space-x-6 text-left">
                                        <div className="shrink-0 mt-1">
                                            <Icon size={34} className="text-[#F2C14E] group-hover:scale-110" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#F2C14E] transition-colors duration-300">{item.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                    );
                                })}
                            </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
    )
}