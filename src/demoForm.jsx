import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { allCountries } from "./data/countries";
import { ChevronDown } from "lucide-react";


export default function DemoForm({bg = 'bg-white/20', backdropBlur = 'backdrop-blur-md', border = 'border', borderColor = 'border-white/30'}) {
    const recaptchaRef = React.useRef(); 
    const [captchaDone, setCaptchaDone] = useState(false);
    
    
    const [serverError, setServerError] = useState("");
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(allCountries[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setCaptchaDone(false);
        recaptchaRef.current.reset();
    };
    
    const handleCall = async(e) => {
        e.preventDefault();
    
    const token = await recaptchaRef.current.getValue();
        console.log("TOKEN SENT TO BACKEND:", token);
    
        const response = await fetch("http://3.88.182.81:8000/calls/verify-captcha", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
        });

        if (!token.ok) {
            setServerError("Captcha invalide.");
            return;
        }
        
        const data = await response.json();
        console.log(data);
    
        // faire un appele
        try{
            const res = await fetch("http://3.88.182.81:8000/calls/demo-outbound-call", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    phone_number: `+${selectedCountry.code}${phoneNumber}`
                }),
            })
            
            if (!res.ok) {
                setServerError("Service indisponible. Veuillez réessayer plus tard.");
                resetForm();
                setTimeout(() => setServerError(""),5000);
                return;
            }
            
            const data = await res.json();
            console.log(data);
            resetForm();
            setServerError("");
        
        }catch (error) {
            console.error(error);
            setServerError("Service indisponible. Veuillez réessayer plus tard.");
            resetForm();
            setTimeout(() => setServerError(""),5000);
        }
            }
    return(
        <>
        {serverError && (
            <p className="text-red-600 text-sm font-medium mb-4">
                {serverError}
            </p>
        )}
        <div className={`p-8 ${bg} ${backdropBlur} rounded-xl shadow-lg ${border} ${borderColor} text-left`}>
        <form action="" className="space-y-4" onSubmit={handleCall}>
            <div className="w-full grid grid-cols-2 gap-4">
                <div className="space-y-1 flex flex-col">
                    <label htmlFor="first_name" 
                    className="text-sm text-gray-500 font-medium">
                        Prénom
                    </label>
                    <input 
                    type="text" 
                    placeholder="Votre prénom" 
                    className="h-10 px-3 py-2 rounded-md w-full 
                                    border border-gray-300 bg-white placeholder:text-gray-500 text-sm text-gray-900
                    focus:border-[#F2C14E] focus-visible:outline-none"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="space-y-1 flex flex-col">
                    <label 
                    htmlFor="lastName" 
                    className="text-sm text-gray-500 font-medium">
                        Nom
                    </label>
                    <input 
                    type="text" 
                    placeholder="Votre nom" 
                    className="h-10 px-3 py-2 rounded-md w-full 
                    border border-gray-300 bg-white placeholder:text-gray-500 text-sm text-gray-900
                    focus:border-[#F2C14E] focus-visible:outline-none"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                </div>    
                <div className="w-full space-y-1 flex flex-col">
                    <label 
                    htmlFor="email" 
                    className="text-sm text-gray-500 font-medium">
                        Email
                    </label>
                    <input 
                    type="email" 
                    placeholder="example@email.com" 
                    className="h-10 px-3 py-2 rounded-md w-full 
                    border border-gray-300 bg-white placeholder:text-gray-500 text-sm text-gray-900
                    focus:border-[#F2C14E] focus-visible:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="w-full space-y-1 flex flex-col">
                    <label 
                    htmlFor="phone_number" 
                    className="text-sm text-gray-500 font-medium">
                        Téléphone
                    </label>

                <div className="relative w-full mt-2 text-gray-500">
                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                <div
                className="text-sm outline-none rounded-lg h-full text-blue-400 cursor-pointer flex items-center justify-between"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <span>{selectedCountry ? `+${selectedCountry.code}` : "+33"}</span>
                    <span>
                        <ChevronDown size={12} />
                    </span>
                </div>
                </div>

                <input 
                    type="tel" 
                    placeholder="+1 (555) 000-000"
                    className="h-10 px-3 py-2 rounded-md w-full 
                    border border-gray-300 pl-18 bg-white placeholder:text-gray-500 text-sm text-gray-900
                    focus:border-[#F2C14E] focus-visible:outline-none"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                
                {/* Dropdown menu */}
                
                {dropdownOpen && (
                    <ul className="absolute z-10 mt-1 w-full max-h-60 overflow-auto bg-white border rounded-md shadow-lg">
                        {allCountries.map((c) => (
                            <li
                            key={c.code}
                            className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                                setSelectedCountry(c);
                                setDropdownOpen(false);
                            }}
                        >
                        <span>{c.country} (+{c.code})</span>
                    </li>
                ))}
                </ul>
            )}
            </div>
            </div>
                <div className="flex items-center justify-center">
                    <ReCAPTCHA
                    sitekey="6LeC-hUsAAAAAKjMZmZsKteg9i7KsCskgubtDq4E"
                    ref={recaptchaRef}
                    onChange={() => setCaptchaDone(true)}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button 
                    type="submit"
                    disabled={
                        !firstName ||
                        !lastName ||
                        !email ||
                        !phoneNumber ||
                        !captchaDone
                    }
                    className={`h-11 px-8 py-2 rounded-md text-sm 
                    ${(!firstName || !lastName || !email || !phoneNumber || !captchaDone)
                    ? "bg-gray-300 text-gray-700 opacity-50 cursor-not-allowed"
                    : "bg-[#0A1A2F] text-white border border-[#F2C14E] cursor-pointer"}
                    `}
                    >
                        Se faire appeler
                    </button>
                </div>
            </form>
        </div>
    </>
    )
}