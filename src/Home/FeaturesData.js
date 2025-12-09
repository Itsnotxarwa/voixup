import { PhoneIncoming, PhoneOutgoing, FileText, Settings } from "lucide-react"

export const features =[
        {
            title: "Appels entrants",
            description: "Support client, informations, prise de rendez-vous",
            icon: PhoneIncoming,
        },
        {
            title: "Appels sortants",
            description: "Qualification de prospects, relances, notifications",
            icon: PhoneOutgoing,
        },
        {
            title: "Transcriptions & rapports",
            description: "Chaque interaction est enregistrée et analysée",
            icon: FileText,
        },
            {
            title: "Personnalisation",
            description: "Scripts et flux adaptables à votre activité",
            icon: Settings,
        }
    ]