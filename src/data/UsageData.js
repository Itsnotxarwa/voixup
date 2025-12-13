import phoneAnimation from '../assets/smartphone.json';
import calendar from "../assets/calendar.json";
import transform from "../assets/transform.json";
import mail from "../assets/mail.json"
import notification from "../assets/notification.json";
import folder from "../assets/folder.json"

export  const usageData =[
        {
            title: "Support client simple",
            description: "répond aux demandes fréquentes de vos clients, fournit des informations essentielles.",
            animation: phoneAnimation,
            size: 80
        },
        {
            title: "Transfert vers un agent humain",
            description: "Quand nécessaire, il peut transférer les cas complexes à vos équipes humaines pour un traitement rapide.",
            animation: transform,
            size: 70
        },
        {
            title: "Prise de rendez-vous",
            description: "VoixUp gère les rendez-vous clients et prospects de manière automatisée, en confirmant lescréneaux disponibles et en envoyant des rappels pour réduire les absences ou annulations.",
            animation: calendar,
            size: 70
        },
        {
            title: "Relance de prospects",
            description: "L’IA effectue des relances ciblées pour vos leads, qualifie les prospects et transmet les informations importantes à vos équipes commerciales pour un suivi efficace.",
            animation: mail,
            size: 70
        },
            {
            title: "Notifications et rappels",
            description: "L’agent IA envoie des rappels automatiques pour des rendez-vous, commandes, échéances ou événements, garantissant une communication fluide et fiable.",
            animation: notification,
            size: 70
        },
        {
            title: "Suivi de dossiers et commandes",
            description: "Chaque interaction est documentée et transmise dans vos systèmes internes pour assurer un suivi précis des commandes, dossiers ou projets.",
            animation: folder,
            size: 70
        }
    ]