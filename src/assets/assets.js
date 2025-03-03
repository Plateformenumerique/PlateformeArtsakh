import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import cross_icon from './cross_icon.png'
import hero_image from './hero_image.jpg'
import logo_Croix_Rouge_Française from './logo_Croix_Rouge_Française.jpg'
import logo_medecin_sans_frontieres from './logo_medecin_sans_frontieres.png'
import logo_solidarite_armenie from './logo_solidarite_armenie.png'
import fonds_armeniens_de_france from './fonds_armeniens_de_france.jpeg'
import secours_populaire_logo from './secours_populaire_logo.png'
import caritas_armenie from './caritas_armenie.png'
import emmaus_france from './emmaus_france.png'
import asso_franco_armenienne from './asso_franco_armenienne.jpeg'
import secours_catholique from './secours_catholique.png'
import fondation_aznavour from './fondation_aznavour.jpg'
import soutiens_refugies_karabaghiotes from './soutiens_refugies_karabaghiotes.jpg'
import soutiens_developpement_communautaire from './soutiens_developpement_communautaire.jpeg'
import secours_urgence_victime_guerre from './secours_urgence_victime_guerre.jpg'
import soutiens_personnes_deplacees from './soutiens_personnes_deplacees.jpg'
import carte_3d_armenie_2 from './carte_3d_armenie_2.png'
import forma from './forma.jpg'
import logo_asa from './logo_asa.png'
import logo_plateforme from './logo_plateforme.png'
import carte_artsakh_armenie from './carte_artsakh_armenie.jpg'
import convoi_armenie from './convoi-armenie.avif'
import TATEV_market from './TATEV_market.jpg'
import ville_lyon from './Ville_de_Lyon.png'
import Dep_isere from './Dep_isere.png'
import joeuf from './joeuf.jpg'
import rara_logo from './rara_logo.svg'
import Logo_CHENE from './Logo_CHENE.png'
import ugab from './ugab.png'
import fadf from './fadf.jpg'
import Logo_Sante_Armenie from './Logo_Sante_Armenie.png'

import drive from './google/drive.png'
import gmail from './google/gmail.png'
import meet from './google/meet.webp'
import calendar from './google/calendar.png'
import google from './google/google.png'

export const assets = {
    cart_icon,
    dropdown_icon,
    exchange_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    cross_icon,
    hero_image,
    logo_Croix_Rouge_Française,
    logo_medecin_sans_frontieres,
    logo_solidarite_armenie,
    fonds_armeniens_de_france,
    secours_populaire_logo,
    caritas_armenie,
    emmaus_france,
    asso_franco_armenienne,
    secours_catholique,
    fondation_aznavour,
    soutiens_refugies_karabaghiotes,
    soutiens_developpement_communautaire,
    secours_urgence_victime_guerre,
    soutiens_personnes_deplacees,
    carte_3d_armenie_2,
    forma,
    logo_asa,
    carte_artsakh_armenie,
    convoi_armenie,
    TATEV_market,
    logo_plateforme,
    ville_lyon,
    Dep_isere,
    joeuf,
    rara_logo,
    Logo_CHENE,
    ugab,
    fadf,
    Logo_Sante_Armenie,
    drive,
    gmail,
    meet,
    calendar,
    google
}

export const acteurs = [
    // Acteurs Institutionnels
    {
        _id: "1",
        name: "Croix-Rouge Française",
        description: "Association humanitaire qui offre des secours d'urgence, actions sociales, santé, et formation aux premiers secours en France.",
        domain: ["Logement", "Education", "Sociale", "Santé", "Formation/Emploi"],
        type: ["Institutions"],
        establishedDate: 1864,
        website: "https://www.croix-rouge.fr",
        logo: logo_Croix_Rouge_Française
    },

    // Acteurs Associations
    {
        _id: "2",
        name: "Fonds Arménien de France",
        description: "Le Fonds Arménien de France intervient dans le domaine humanitaire, avec un accent particulier sur : La région Tavouch : Développement agro-pastoral et les régions frontalières : Développement agricole et aide aux réfugiés",
        domain: ["Logement", "Education", "Sociale", "Formation/Emploi", "Agriculture"],
        type: ["Associations"],
        establishedDate: 1993,
        website: "https://fondsarmenien.org/",
        logo: fadf,
        dirigent: "Pierre TERZIAN"
    },
    {
        _id: "7",
        name: "UGAB",
        description: "L'UGAB a toujours joué un rôle essentiel dans l'histoire du peuple arménien. Depuis notre création en 1906, nous sommes restés fidèles à la vision de nos fondateurs en poursuivant notre mission à travers les décennies : œuvrer à la prospérité et au bien-être de tous les Arméniens. De manière générale, l’UGAB s'engage au quotidien pour développer et assurer la prospérité de l'Arménie, en créant des initiatives en faveur des industries, des individus et des communautés. Nous faisons le lien entre la diaspora et l’Arménie en proposant de nombreuses opportunités de collaboration et d’engagement. Nous avons des programmes d’éducation, de culture, d’aide humanitaire et de développement socio-économique s’adressant à toutes les tranches d’âge, dans toutes les régions d’Arménie et en diaspora.",
        domain: ["Logement", "Education", "Sociale", "Santé", "Formation/Emploi"],
        type: ["Associations"],
        establishedDate: 1948,
        website: "https://ugabfrance.org/fr",
        logo: ugab,
        dirigent: "GORTZOUNIAN Claude Nadia"
    },
    {
        _id: "8",
        name: "Santé Arménie",
        description: "Santé Arménie à pour mission d'apporter une aide médicale directe à la population arménienne à travers : Soins médicaux : Équipes mobiles et centres spécialisés. Formation : Académie médicale en ligne pour les professionnels de santé. Recherche clinique : Amélioration des pratiques médicales et traitements. Infrastructure : Construction et équipement des établissements de santé en Arménie.",
        domain: ["Formation/Emploi", "Santé"],
        type: ["Associations"],
        establishedDate: 2021,
        website: "https://www.santearmenie.org/",
        logo: Logo_Sante_Armenie,
        dirigent: "MEKINIAN Arsène"
    },
    {
        _id: "9",
        name: "Chene",
        description: "Nous intervenons dans la construction et la réhabilitation de maisons, d'écoles maternelles et d'équipements collectifs, tout en soutenant le développement du tissu socio-économique et agricole. Nous répondons également aux besoins d'urgence humanitaire.",
        domain: ["Logement", "Agriculture", "Education", "Sociale"],
        type: ["Associations"],
        establishedDate: 1990,
        website: "https://www.chene-france.org/",
        logo: Logo_CHENE,
        dirigent: "TOROSSIAN Schavarch"
    },

    // Acteurs Collectivités territoriales
    {
        _id: "3",
        name: "Ville de Lyon",
        description: "Collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
        domain: [""],
        type: ["Collectivités territoriales"],
        establishedDate: 1982,
        website: "https://www.lyon.fr/",
        logo: ville_lyon,
        dirigent: "DOUCET Grégory"
    },
    {
        _id: "4",
        name: "Département de l'Isère",
        description: "Collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
        domain: [""],
        type: ["Collectivités territoriales"],
        establishedDate: 2010,
        website: "https://www.isere.fr/",
        logo: Dep_isere,
        dirigent: "BARBIER Jean-Pierre"
    },
    {
        _id: "5",
        name: "Ville de Joeuf",
        description: "Collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
        domain: [""],
        type: ["Collectivités territoriales"],
        establishedDate: 2014,
        website: "https://www.ville-joeuf.fr/",
        logo: joeuf,
        dirigent: "CORZANI André"
    },
    {
        _id: "6",
        name: "Région Auvergne Rhône Alpes",
        description: "Collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
        domain: [""],
        type: ["Collectivités territoriales"],
        establishedDate: 2019,
        website: "https://www.auvergnerhonealpes.fr/",
        logo: rara_logo,
        dirigent: "PANNEKOUCKE Fabrice"
    }
];

export const projets = [
    {
        _id: "1",
        name: "Projet de spectacle en soutiens aux réfugiées karabaghiotes",
        description: "Besoin de 3 musiciens pour le spectacle aux réfugiées karabaghiotes",
        association: "Association Solidarité Arménie",
        type: "Urgence",
        startDate: "2020-01-01",
        endDate: "2020-12-31",
        budget: '100',
        currency: "EUR",
        image: soutiens_refugies_karabaghiotes,
        domain: ["Santé", "Formation"]
    }
    /*
    }
    {
        _id: "2",
        name: "Projet de développement communautaire",
        description: "Projet de développement communautaire en Arménie, pour construire des écoles et des centres de santé. Ce projet a pour objectif de renforcer les infrastructures locales et d'améliorer l'accès à l'éducation et aux soins de santé pour les communautés défavorisées. En construisant de nouvelles écoles et centres de santé, nous espérons offrir de meilleures opportunités d'apprentissage et de soins médicaux, contribuant ainsi à un développement durable et à une amélioration de la qualité de vie des habitants.",
        association: "Caritas Arménie",
        type: "Développement",
        startDate: "2020-01-01",
        endDate: "2020-12-31",
        budget: '200',
        currency: "EUR",
        image: soutiens_developpement_communautaire,
        domain: "Santé",
    },
    {
        _id: "3",
        name: "Projet de secours d'urgence pour les victimes de guerre",
        description: "Projet de secours d'urgence pour les victimes de guerre au Haut-Karabagh, pour fournir des soins médicaux et des abris. Ce projet est crucial pour apporter une aide immédiate aux personnes touchées par le conflit, en leur offrant des soins médicaux d'urgence et des abris temporaires. En travaillant avec des organisations humanitaires locales et internationales, nous visons à atténuer les souffrances des victimes de guerre et à leur fournir un soutien essentiel pour reconstruire leur vie.",
        association: "Croix-Rouge Française",
        type: "Urgence",
        startDate: "2020-01-01",
        endDate: "2020-12-31",
        budget: '150',
        currency: "EUR",
        image: secours_urgence_victime_guerre,
        domain: "Patrimoine",
    },
    {
        _id: "4",
        name: "Projet de réhabilitation post-conflit",
        description: "Projet de réhabilitation post-conflit en Arménie, visant à reconstruire les infrastructures détruites et à fournir un soutien psychosocial aux victimes. Ce projet se concentre sur la reconstruction des maisons, des écoles et des hôpitaux endommagés par le conflit, ainsi que sur l'offre de services de soutien psychosocial pour aider les victimes à surmonter les traumatismes. En collaborant avec des experts en reconstruction et en santé mentale, nous espérons créer un environnement propice à la guérison et à la reprise d'une vie normale pour les communautés affectées.",
        association: "Fondation Arménienne de Reconstruction",
        type: "Réhabilitation",
        startDate: "2020-01-01",
        endDate: "2020-12-31",
        budget: '250',
        currency: "EUR",
        image: soutiens_personnes_deplacees,
        domain: "Formation/Emploi"
    }*/
];

export const actualites = [
    {
        _id: "1",
        title: "Appel à projets franco-arménien",
        subtitle: "Le ministère de l’Europe et des Affaires étrangères annonce l’ouverture de l’appel à projets Arménie 2025.",
        date: "2023-07-10",
        image: secours_urgence_victime_guerre,
        lien: "https://www.diplomatie.gouv.fr/fr/politique-etrangere-de-la-france/action-exterieure-des-collectivites-territoriales/appels-a-projets-2025/appels-a-projets-geographiques/appel-a-projets-franco-armenien/"
    },
    {
        _id: "2",
        title: "NEW MARKET IN TATEV",
        subtitle: "Establishing a Local Market for Agricultural, Souvenir, and Handicraft Products in Tatev Municipality.",
        date: "2023-05-25",
        image: TATEV_market,
        lien: "https://ourmountains.am/project/new-market-in-tatev/"
    },
    {
        _id: "3",
        title: "Arménie : un convoi humanitaire part de France pour apporter de l'aide aux réfugiés du Haut-Karabakh",
        subtitle: "Alors que 100 000 Arméniens ont été forcés de fuir le Haut-Karabakh, la solidarité s’organise en France. Un convoi transportant du matériel médical part lundi 9 octobre de Martigues, près de Marseille, direction Erevan.",
        date: " 09/10/2023 17:36",
        image: convoi_armenie,
        lien: "https://www.francetvinfo.fr/monde/armenie/armenie-un-convoi-humanitaire-part-de-france-pour-apporter-de-l-aide-aux-refugies-du-haut-karabakh_6111186.html"
    }
];