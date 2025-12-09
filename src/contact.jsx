import Header from "./Header";
import Footer from "./Footer";
import VoixUpLogo from './assets/VOIXUP.png';
import { Send, SendHorizonal } from "lucide-react";

export default function Contact() {
    return(
        <div className="min-h-screen bg-white/80 text-black overflow-hidden">
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F2C14E]/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4EE2EC]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#6967FB]/10 via-transparent to-transparent rounded-full"></div>
            </div>

            <Header />
            
            <section className="pt-24 pb-32">
                <div className="space-y-6 flex flex-col items-center justify-center sm:mx-2">
                    <div className="flex flex-col items-center justify-center mb-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        Contactez-nous
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
                        Vous avez des questions ou besoin d’assistance ? Notre équipe est là pour vous aider à créer et gérer vos agents IA. Contactez-nous et découvrez comment nos solutions peuvent transformer votre expérience.
                    </p>
                    </div>
                    <div className="p-8 bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white/30">
                        <form action="" className="space-y-4">
                            <div className="w-full grid grid-cols-2 gap-4">
                                <div className="space-y-1 flex flex-col">
                                    <label htmlFor="first_name" className="text-sm text-gray-500 font-medium">Prénom</label>
                                    <input type="text" placeholder="Votre prénom" className="h-10 px-3 py-2 rounded-md w-full 
                                    border border-gray-300 bg-white placeholder:text-gray-500 text-sm text-gray-900
                                    focus:border-[#F2C14E] focus-visible:outline-none"/>
                                </div>
                                <div className="space-y-1 flex flex-col">
                                    <label htmlFor="" className="text-sm text-gray-500 font-medium">Nom</label>
                                    <input type="text" placeholder="Votre nom" className="h-10 px-3 py-2 rounded-md w-full 
                                    border border-gray-300 bg-white placeholder:text-gray-500 text-sm text-gray-900
                                    focus:border-[#F2C14E] focus-visible:outline-none"/>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-2 gap-4">
                            <div className="w-full space-y-1 flex flex-col">
                                <label htmlFor="" className="text-sm text-gray-500 font-medium">Email</label>
                                    <input type="text" placeholder="example@email.com" className="h-10 px-3 py-2 rounded-md w-full 
                                    border border-gray-300 bg-white placeholder:text-gray-500 text-sm text-gray-900
                                    focus:border-[#F2C14E] focus-visible:outline-none"/>
                            </div>
                            <div className="w-full space-y-1 flex flex-col">
                                <label htmlFor="" className="text-sm text-gray-500 font-medium">Téléphone</label>
                                    <input type="text" placeholder="+33 12 34 56" className="h-10 px-3 py-2 rounded-md w-full 
                                    border border-gray-300 bg-white placeholder:text-gray-500 text-sm text-gray-900
                                    focus:border-[#F2C14E] focus-visible:outline-none"/>
                            </div>
                            </div>
                            <div className="w-full space-y-1 flex flex-col">
                                <label htmlFor="" className="text-sm text-gray-500 font-medium">Société</label>
                                    <input type="text" placeholder="Votre entreprise" className="h-10 px-3 py-2 rounded-md w-full 
                                    border border-gray-300 bg-white placeholder:text-gray-500 text-sm text-gray-900
                                    focus:border-[#F2C14E] focus-visible:outline-none"/>
                            </div>
                            <div className="w-full space-y-1 flex flex-col">
                                <label htmlFor="secteur" className="text-sm text-gray-500 font-medium">Secteur d'activité</label>
                                <select
                                    id="secteur"
                                    className="h-10 px-3 py-2 rounded-md w-full border border-gray-300 bg-white text-sm text-gray-900 focus:border-[#F2C14E] focus-visible:outline-none"
                                >
                                    <option value="">Sélectionnez un secteur</option>
                                    <option value="tech">Technologie</option>
                                    <option value="finance">Finance</option>
                                    <option value="sante">Santé</option>
                                </select>
                                </div>
                                <div className="w-full space-y-1 flex flex-col">
                                <label htmlFor="taille" className="text-sm text-gray-500 font-medium">Taille d'entreprise</label>
                                <select
                                id="taille"
                                className="h-10 px-3 py-2 rounded-md w-full border border-gray-300 bg-white text-sm text-gray-900 focus:border-[#F2C14E] focus-visible:outline-none"
                                >
                                    <option value="1-50">1 á 50 employés</option>
                                    <option value="51-250">51 á 250 employés</option>
                                    <option value="250+">+250 employés</option>
                                </select>
                            </div>

                            <div className="w-full space-y-1 flex flex-col">
                            <label htmlFor="volume" className="text-sm text-gray-500 font-medium">Volume moyen d'appels par mois</label>
                            <select
                                id="volume"
                                className="h-10 px-3 py-2 rounded-md w-full border border-gray-300 bg-white text-sm text-gray-900 focus:border-[#F2C14E] focus-visible:outline-none"
                            >
                                <option value="0-1000">0 á 1 000 appels</option>
                                <option value="1000-10000">1 000 á 10 000 appels</option>
                                <option value="10000+">+10 000</option>
                            </select>
                            </div>

                            <div className="flex items-center justify-center">
                                <button className="group cursor-pointer h-11 bg-[#0A1A2F] text-white border border-[#F2C14E] 
                                px-8 py-2 whitespace-nowrap rounded-md text-sm hover:bg-[#102A3E] hover:text-[#F2C14E]
                                transform transition-transform duration-300 hover:scale-105">
                                    <ul className="relative overflow-hidden h-6">
                                        <li className="flex items-center justify-center gap-2 transform transition-transform duration-300 group-hover:-translate-y-full">
                                            Envoyer le message <Send size={14} />
                                        </li>
                                        <li className="flex items-center justify-center gap-2 transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-full">
                                            Envoyer le message <SendHorizonal size={14} />
                                        </li>
                                    </ul>
                                    
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer bg="bg-white" text="text-black" borderTop ="border-t border-gray-300" VoixUpLogo={VoixUpLogo} />
        </div>
    )
}