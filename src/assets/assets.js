import logo from './logo_convergences_arme.png'
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
import carte_artsakh_armenie from './carte_artsakh_armenie.jpg'
import convoi_armenie from './convoi-armenie.avif'
import TATEV_market from './TATEV_market.jpg'

export const assets = {
    logo,
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
    TATEV_market
}

export const acteurs = [
    {
        _id: "1",
        name: "Croix-Rouge Française",
        description: "Association humanitaire qui offre des secours d'urgence, actions sociales, santé, et formation aux premiers secours en France.",
        domain: "Logement",
        type: ["Institutions"],
        establishedDate: 1864,
        website: "https://www.croix-rouge.fr",
        logo: logo_Croix_Rouge_Française
    },
    {
        _id: "2",
        name: "Association Solidarité Arménie",
        description: "Organisation de soutien pour le développement et la protection des droits en Arménie, axée sur l'aide aux réfugiés et les projets éducatifs.",
        domain: "Emploi - Formation",
        type: ["Institutions"],
        establishedDate: 1990,
        website: "https://www.solidaritearmenie.org",
        logo: logo_solidarite_armenie
    },
    {
        _id: "3",
        name: "Médecins Sans Frontières",
        description: "Organisation médicale et humanitaire qui intervient en urgence dans les pays en crise pour apporter des soins de santé.",
        domain: "Agriculture",
        type: ["Institutions"],
        establishedDate: 1971,
        website: "https://www.msf.fr",
        logo: logo_medecin_sans_frontieres
    },
    {
        _id: "4",
        name: "Fonds Arménien de France",
        description: "Organisation qui soutient les infrastructures et les programmes de développement en Arménie.",
        domain: "Santé",
        type: ["Associations"],
        establishedDate: 1994,
        website: "https://www.fondsarmenien.org",
        logo: fonds_armeniens_de_france
    },
    {
        _id: "5",
        name: "Secours Populaire Français",
        description: "Organisation qui lutte contre la pauvreté et l'exclusion sociale, fournissant des aides alimentaires, vestimentaires et des loisirs en France.",
        domain: "Patrimoine",
        type: ["Associations", "Collectivités territoriales"],
        establishedDate: 1945,
        website: "https://www.secourspopulaire.fr",
        logo: secours_populaire_logo
    },
    {
        _id: "6",
        name: "Caritas Arménie",
        description: "Organisation caritative en Arménie qui se concentre sur les secours d'urgence, l'éducation et le développement communautaire.",
        domain: "Patrimoine",
        type: ["Collectivités territoriales"],
        establishedDate: 1994,
        website: "https://www.caritas.am",
        logo: caritas_armenie
    },
    {
        _id: "7",
        name: "Emmaüs France",
        description: "Mouvement solidaire en France qui lutte contre l'exclusion et aide les personnes en difficulté via des initiatives de recyclage et de réinsertion.",
        domain: ["Santé", "Patrimoine"],
        type: ["Collectivités territoriales"],
        establishedDate: 1949,
        website: "https://www.emmaus-france.org",
        logo: emmaus_france
    },
    {
        _id: "8",
        name: "Association Franco-Arménienne",
        description: "Association qui promeut les relations culturelles et économiques entre la France et l'Arménie.",
        domain: "Emploi - Formation",
        type: ["Institutions"],
        establishedDate: 1989,
        website: "https://www.franco-armenie.org",
        logo: asso_franco_armenienne
    },
    {
        _id: "9",
        name: "Secours Catholique",
        description: "Organisation qui apporte un soutien social et humanitaire aux personnes en situation de précarité, en France et à l'étranger.",
        domain: "Santé",
        type: ["Institutions"],
        establishedDate: 1946,
        website: "https://www.secours-catholique.org",
        logo: secours_catholique
    },
    {
        _id: "10",
        name: "Fondation Aznavour",
        description: "Fondation visant à promouvoir la culture arménienne et à soutenir le développement socio-économique en Arménie.",
        domain: "Agriculture",
        type: ["Collectivités territoriales"],
        establishedDate: 2017,
        website: "https://www.aznavourfoundation.org",
        logo: fondation_aznavour
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
        domain: "Emploi - Formation"
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