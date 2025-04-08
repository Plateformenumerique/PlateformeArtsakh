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
import formation_watm from './formation-watm.jpg'
import soutiens_developpement_communautaire from './soutiens_developpement_communautaire.jpeg'
import quai_image from './quai_image.png'
import soutiens_personnes_deplacees from './soutiens_personnes_deplacees.jpg'
import forma from './forma.jpg'
import logo_asa from './logo_asa.png'
import logo_plateforme from './logo_plateforme.png'
import armenie_carte from './armenie-carte.png'
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
import Logo_Gardanne from './Logo_Gardanne.webp'
import stetienne from './stetienne.jpg'
import drive from './google/drive.png'
import gmail from './google/gmail.png'
import meet from './google/meet.webp'
import calendar from './google/calendar.png'
import google from './google/google.png'
import Weareourmountains from './Weareourmountains.mp4'
import LogoUnionfrarm from './LogoUnionfrarm.webp'
import croix_bleue from './croix_bleue.jpg'

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
    formation_watm,
    soutiens_developpement_communautaire,
    quai_image,
    soutiens_personnes_deplacees,
    forma,
    logo_asa,
    armenie_carte,
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
    google,
    Logo_Gardanne,
    stetienne,
    Weareourmountains,
    LogoUnionfrarm,
    croix_bleue
}

export const acteurs = [
    // Type dacteurs "Association" | "Collectivité territoriale" | "Institution"


    //**{
    //    _id: "1",
    //    name: "Croix-Rouge Française",
    //    description: "Association humanitaire qui offre des secours d'urgence, actions sociales, santé, et formation aux premiers secours en France.",
    //    domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"],
    //    type: ["Institution"],
    //    establishedDate: 1864,
    //    website: "https://www.croix-rouge.fr",
    //    logo: logo_Croix_Rouge_Française
    //},

    {
        _id: "2",
        name: "Fonds Arménien de France",
        description: "Le Fonds Arménien de France intervient dans le domaine humanitaire, avec un accent particulier sur : La région Tavouch : Développement agro-pastoral et les régions frontalières : Développement agricole et aide aux réfugiés",
        domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"],
        type: ["Association"],
        establishedDate: 1993,
        website: "https://fondsarmenien.org/",
        logo: fadf,
        dirigeant: "Pierre Terzian",
        email: "info@fondsarmenien.org",
        telephone: "01 48 83 51 06",
        contact: "Pierre Terzian"
    },
    {
        _id: "3",
        name: "UGAB",
        description: "L'UGAB a toujours joué un rôle essentiel dans l'histoire du peuple arménien. Depuis notre création en 1906, nous sommes restés fidèles à la vision de nos fondateurs en poursuivant notre mission à travers les décennies : œuvrer à la prospérité et au bien-être de tous les Arméniens. De manière générale, l’UGAB s'engage au quotidien pour développer et assurer la prospérité de l'Arménie, en créant des initiatives en faveur des industries, des individus et des communautés. Nous faisons le lien entre la diaspora et l’Arménie en proposant de nombreuses opportunités de collaboration et d’engagement. Nous avons des programmes d’éducation, de culture, d’aide humanitaire et de développement socio-économique s’adressant à toutes les tranches d’âge, dans toutes les régions d’Arménie et en diaspora.",
        domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"],
        type: ["Association"],
        establishedDate: 1948,
        website: "https://ugabfrance.org/fr",
        logo: ugab,
        dirigeant: "Claude Nadia Gortzounian",
        email: "administratif@agbu.org",
        telephone: "01 45 20 03 18",
        contact: "Claude Nadia Gortzounian"
    },
    {
        _id: "4",
        name: "Santé Arménie",
        description: "Santé Arménie à pour mission d'apporter une aide médicale directe à la population arménienne à travers : Soins médicaux : Équipes mobiles et centres spécialisés. Formation : Académie médicale en ligne pour les professionnels de santé. Recherche clinique : Amélioration des pratiques médicales et traitements. Infrastructure : Construction et équipement des établissements de santé en Arménie.",
        domain: ["Formation/Emploi", "Santé"],
        type: ["Association"],
        establishedDate: 2021,
        website: "https://www.santearmenie.org/",
        logo: Logo_Sante_Armenie,
        dirigeant: "Arsène Mekinian",
        email: "contact@santearmenie.org",
        telephone: "01 45 24 72 79",
        contact: "Arsène Mekinian"
    },
    {
        _id: "5",
        name: "Chene",
        description: "Nous intervenons dans la construction et la réhabilitation de maisons, d'écoles maternelles et d'équipements collectifs, tout en soutenant le développement du tissu socio-économique et agricole. Nous répondons également aux besoins d'urgence humanitaire.",
        domain: ["Logement", "Agriculture", "Education", "Social"],
        type: ["Association"],
        establishedDate: 1990,
        website: "https://www.chene-france.org/",
        logo: Logo_CHENE,
        dirigeant: "Schavarch Torossian",
        email: "contact@chene-france.org",
        telephone: "",
        contact: "Schavarch Torossian"
    },
    {
        _id: "6",
        name: "Ville de Lyon",
        description: "Collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
        domain: [""],
        type: ["Collectivité territoriale"],
        website: "https://www.lyon.fr/",
        logo: ville_lyon,
        dirigeant: "Grégory Doucet",
        email: "roxane.beneyton@mairie-lyon.fr",
        telephone: "",
        contact: "Roxane Beneyton"
    },
    {
        _id: "7",
        name: "Département de l'Isère",
        description: "Collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
        domain: [""],
        type: ["Collectivité territoriale"],
        website: "https://www.isere.fr/",
        logo: Dep_isere,
        dirigeant: "Suzie Grenèche",
        email: "suzie.greneche@isere.fr",
        telephone: "",
        contact: "Suzie Grenèche"
    },
    {
        _id: "8",
        name: "Ville de Joeuf",
        description: "Collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
        domain: [""],
        type: ["Collectivité territoriale"],
        website: "https://www.ville-joeuf.fr/",
        logo: joeuf,
        dirigeant: "Maria Abiza",
        email: "cabinet.maire@ville-joeuf.fr",
        telephone: "",
        contact: "Maria Abiza"
    },
    {
        _id: "9",
        name: "Région Auvergne Rhône Alpes",
        description: "Collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
        domain: [""],
        type: ["Collectivité territoriale"],
        website: "https://www.auvergnerhonealpes.fr/",
        logo: rara_logo,
        dirigeant: "Fabrice Pannekoucke",
        email: "bruno.chiaverini@auvergnerhonealpes.fr",
        telephone: "04 26 73 40 69",
        contact: "Bruno Chiaverini"
    },
    {
        _id: "10",
        name: "Commune de Gardanne ",
        description: "Collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
        domain: [""],
        type: ["Collectivité territoriale"],
        website: "https://www.auvergnerhonealpes.fr/",
        logo: Logo_Gardanne,
        dirigeant: "Fabrice Pannekoucke",
        email: "arnaud-mazille@ville-gardanne.fr",
        telephone: "07 88 35 93 93",
        contact: "Arnaud Mazille"
    },
    {
        _id: "11",
        name: " Ville de Saint-Etienne ",
        description: "Collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
        domain: [""],
        type: ["Collectivité territoriale"],
        website: "https://www.saint-etienne.fr",
        logo: stetienne,
        dirigeant: "Gaël Perdriau",
        email: "sona.hedhibi@saint-etienne-metropole.fr",
        telephone: "04 77 48 63 65",
        contact: "Sona Hedhibi"
    },
    {
        _id: "12",
        name: "Union Franco-Arménienne",
        description: "Notre association vise à préserver, promouvoir et intégrer avec succès la culture arménienne en France, tout en développant des échanges culturels, en organisant des événements culturels et caritatifs et en mettant en œuvre des projets humanitaires, sportifs et éducatifs en France et en Arménie.",
        domain: ["Education", "Social", "Culture"],
        type: ["Association"],
        website: "https://www.unionfrarm.com",
        logo: LogoUnionfrarm,
        establishedDate: 2021,
        dirigeant: "Artur Arzoyan",
        email: "contact@unionfrarm.com",
        telephone: "+33 (0)6 95 14 77 67",
        contact: "Artur Arzoyan"
    },
    {
        _id: "13",
        name: "Croix Bleue des Arméniens de France",
        description: "La Croix Bleue des Arméniens de France agit dans les domaines de l’humanitaire, du social et de la culture...",
        domain: ["Logement", "Social", "Santé"],
        type: ["Association"],
        website: "https://www.croixbleue-france.com/",
        logo: croix_bleue,
        establishedDate: 1928,
        dirigeant: "Corinne Sévane Mardirossian",
        email: "cbaf@wanadoo.fr",
        telephone: "+33 (0)1 53 34 18 18",
        contact: "Corinne Sévane Mardirossian"
    },
];

export const projets = [
    {
        _id: "1",
        name: "PROGRAMME DE LANGUE FRANÇAISE POUR LES ÉTUDIANTS D'ARTSAKH",
        description: "Le programme de langue française vise à fournir des cours complets de langue française aux étudiants de l'Artsakh, comblant ainsi les lacunes de leur programme.",
        association: "We are our mountains",
        type: "Urgence",
        startDate: "Mars 2024",
        endDate: "Janvier 2025",
        budget: '6 402',
        currency: "$",
        image: formation_watm,
        domain: ["Formation"],
        externalLink: "https://ourmountains.am/project/french-language-program-for-artsakh-students/"
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
        image: quai_image,
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
        subtitle: "Le ministère de l’Europe et des Affaires étrangères annonce l’ouverture de l’appel à projets Arménie 2025. Les candidatures sont possibles jusqu’au 23 mai 2025. Les collectivités peuvent désormais déposer leurs projets sur le site de Démarches simplifiées.",
        date: "2023-07-10",
        image: quai_image,
        lien: "https://www.diplomatie.gouv.fr/fr/politique-etrangere-de-la-france/action-exterieure-des-collectivites-territoriales/appels-a-projets-2025/appels-a-projets-geographiques/appel-a-projets-franco-armenien/"
    },
    {
        _id: "2",
        title: "Projet WINGS",
        subtitle: "Le projet Wings, porté par l’association artsakhiote « Nous sommes nos Montagnes » partenaire de l'Association de Soutien à l'Artsakh, joue un rôle central. Ce programme est destiné à aider les familles, et tout particulièrement les enfants, à se reconstruire sur les plans éducatif, psychologique et social, afin de se réadapter dans un nouveau cadre de vie.",
        date: "2023-05-25",
        video: Weareourmountains,
        lien: "#"
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