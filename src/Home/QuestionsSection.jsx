import { useState } from "react";
import { MoveRight, Plus, Minus } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { question } from "./Questions";

export default function QuestionsSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i); 
    };

    return(
        <Fade triggerOnce direction="up" duration={800}>
        <section className="relative py-24 bg-black/95 mx-2 sm:mx-4 rounded-2xl">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
                    <div className="text-center space-y-4 mb-10">
                        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-1">FAQ.</h3>
                        <p className="text-sm sm:text-base tracking-tight text-white/60">Tout ce que vous savoir</p>
                    </div>
                    <div className="space-y-1">
                        {question.map((item,i) => {
                        return(
                        <div 
                        key={i}
                        className="backdrop-blur-sm border border-white/10 rounded-lg 
                        overflow-hidden shadow-sm shadow-white/5 hover:border-white/15 transition-colors">
                            <button 
                            className="w-full flex items-center justify-between px-5 py-4 text-left"
                            onClick={() => toggle(i)}>
                                <h3 className="text-white font-medium text-base">{item.question}</h3>
                                <div className="shrink-0 flex items-center justify-center h-6 w-6 rounded-full 
                                bg-white/5 border border-white/10 text-white">
                                    {openIndex === i ? <Minus size={12} /> : <Plus size={12} />}
                                </div>
                            </button>
                            {openIndex === i &&(
                            <div className="px-5 pb-4">
                                <div className="w-10 h-px border-t border-dashed border-white/10 mb-3"></div>
                                <p className="text-white/70 text-sm">{item.answer}</p>
                            </div>
                            )}
                        </div>
                        )})}
                    </div>
                    <div className="mt-12 text-center text-white">
                        <h3 className="text-lg font-medium text-whit mb-4">Vous ne trouvez pas ce que vous cherchez ? Envoyez-nous un e-mail.</h3>
                        <div className="flex items-center justify-center">
                            <button className="flex items-center justify-center gap-2 whitespace-nowrap font-medium bg-white text-black h-9 rounded-lg px-5 shadow-sm hover:bg-white/90 hover:shadow-md group">
                            <p>hi@voixup.fr</p>
                            <MoveRight size={18} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>
                        
                    </div>
                </div>
        </section>
        </Fade>
    )
}