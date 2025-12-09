import Header from "./Header";
import Footer from "./Footer";
import VoixUpLogo from './assets/VOIXUP.png';
import DemoForm from "./demoForm";

export default function Demo() {

    return(
        <div className="min-h-screen bg-white/80 text-black overflow-hidden">
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F2C14E]/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4EE2EC]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#6967FB]/10 via-transparent to-transparent rounded-full"></div>
            </div>
            <Header />
            <section className="pt-24 pb-32">
                <div className="space-y-6 flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mb-16 text-center">
                        Demandez votre démo personnalisée
                    </h1>
                        <DemoForm />
                </div>
            </section>
            <Footer bg="bg-white" text="text-black" borderTop ="border-t border-gray-300" VoixUpLogo={VoixUpLogo} />
        </div>
    )
}