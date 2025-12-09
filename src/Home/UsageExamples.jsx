import { Player } from '@lottiefiles/react-lottie-player';
import { Fade } from "react-awesome-reveal";
import { usageData } from './UsageData';

export default function UsageExamples() {

    return(
        <section className="relative py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-xl uppercase text-black mb-4">Cas d’usage</h2>
                        <Fade triggerOnce direction="up" duration={800} delay={200}>
                            <h2 className="mb-16 font-bold text-3xl text-black sm:text-4xl 
                            md:text-5xl lg:text-6xl leading-tight">Comment VoixUp peut transformer vos appels
                            </h2>
                        </Fade>
                        
                            <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8">
                                {usageData.map((item, i) => (
                                    <Fade triggerOnce direction="up" duration={800} delay={400}>
                                    <div key={i} className="group flex items-start justify-center">
                                        <div className="h-full flex items-center justify-center">
                                            <Player
                                            autoplay
                                            loop
                                            src={item.animation} 
                                            style={{ height: `${item.size}px`, width: `${item.size}px`}}
                                            ></Player>
                                        </div>
                                        <div className="ml-4 text-left">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-[#f2c14e] group-hover:to-[#4ee2ec] transition-colors duration-300">{item.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                    </Fade>
                                ))}
                            </div>
                        
                    </div>
                </div>
            </section>
    )
}