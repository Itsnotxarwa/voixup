import { Fade } from "react-awesome-reveal";

export default function Dots() {
    return(
        <Fade triggerOnce direction="up" duration={800}>
            <div 
            className="mb-8 flex justify-center">
                <div className="flex items-center justify-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-black"></div>
                    <div className="h-px w-4 bg-black"></div>
                    <div className="flex gap-1">
                        <div className="h-2 w-2 rounded-full bg-black"></div>
                        <div className="h-2 w-2 rounded-full bg-black"></div>
                    </div>
                </div>
            </div>
        </Fade>
    )
}