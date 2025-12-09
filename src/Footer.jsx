import { Mail } from 'lucide-react';

export default function Footer({bg = "bg-black", text = "text-white", borderTop = "border-t border-white", VoixUpLogo }) {
    return(
        <footer className={`${bg} ${text} relative pt-16 pb-8`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2">
                    <div className='space-y-6'>
                        <img src={VoixUpLogo} alt="Logo" className='w-32 hover:opacity-80 transition-opacity' />
                        <p className='text-lg leading-relaxed max-w-md'>Optimisez votre standard téléphonique : des IA qui saisissent chaque opportunité.</p>
                    </div>
                    <div className='space-y-6'>
                        <h3 className='text-xl font-semibold mb-4'>Nous contacter</h3>
                        <div className='flex gap-1 items-center'>
                            <div className='w-8 h-8 bg-gray-100 backdrop-blur-sm rounded-lg flex items-center 
                            justify-center border border-gray-300'>
                                <Mail className='text-black' strokeWidth={1} />
                            </div>
                            <p className='hover:underline'>contact@voixup.fr</p>
                        </div>
                    </div>
                </div>
                <div className={`${borderTop} flex mt-12 pt-8 justify-center items-center`}>
                2025 VOIXUP. Tous droits réservés.
                </div>
            </div>
        </footer>
    )
}