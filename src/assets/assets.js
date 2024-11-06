import logo from './logo.png'
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
    soutiens_personnes_deplacees
}

export const acteurs = [
    {
        _id: "1",
        name: "Croix-Rouge Française",
        description: "Association humanitaire qui offre des secours d'urgence, actions sociales, santé, et formation aux premiers secours en France.",
        country: "France",
        type: "Non-governmental Organization",
        establishedDate: 1864,
        website: "https://www.croix-rouge.fr",
        logo: logo_Croix_Rouge_Française,
        status: "En cours"
    },
    {
        _id: "2",
        name: "Association Solidarité Arménie",
        description: "Organisation de soutien pour le développement et la protection des droits en Arménie, axée sur l'aide aux réfugiés et les projets éducatifs.",
        country: "Arménie",
        type: "Non-governmental Organization",
        establishedDate: 1990,
        website: "https://www.solidaritearmenie.org",
        logo: logo_solidarite_armenie,
        status: "En cours"
    },
    {
        _id: "3",
        name: "Médecins Sans Frontières",
        description: "Organisation médicale et humanitaire qui intervient en urgence dans les pays en crise pour apporter des soins de santé.",
        country: "Monde",
        type: "Non-governmental Organization",
        establishedDate: 1971,
        website: "https://www.msf.fr",
        logo: logo_medecin_sans_frontieres,
        status: "En cours"
    },
    {
        _id: "4",
        name: "Fonds Arménien de France",
        description: "Organisation qui soutient les infrastructures et les programmes de développement en Arménie.",
        country: "Arménie",
        type: "Governmental Association",
        establishedDate: 1994,
        website: "https://www.fondsarmenien.org",
        logo: fonds_armeniens_de_france,
        status: "Terminé"
    },
    {
        _id: "5",
        name: "Secours Populaire Français",
        description: "Organisation qui lutte contre la pauvreté et l'exclusion sociale, fournissant des aides alimentaires, vestimentaires et des loisirs en France.",
        country: "France",
        type: "Non-governmental Organization",
        establishedDate: 1945,
        website: "https://www.secourspopulaire.fr",
        logo: secours_populaire_logo,
        status: "Terminé"
    },
    {
        _id: "6",
        name: "Caritas Arménie",
        description: "Organisation caritative en Arménie qui se concentre sur les secours d'urgence, l'éducation et le développement communautaire.",
        country: "Arménie",
        type: "Non-governmental Organization",
        establishedDate: 1994,
        website: "https://www.caritas.am",
        logo: caritas_armenie,
        status: "En cours"
    },
    {
        _id: "7",
        name: "Emmaüs France",
        description: "Mouvement solidaire en France qui lutte contre l'exclusion et aide les personnes en difficulté via des initiatives de recyclage et de réinsertion.",
        country: "France",
        type: "Non-governmental Organization",
        establishedDate: 1949,
        website: "https://www.emmaus-france.org",
        logo: emmaus_france,
        status: "Terminé"
    },
    {
        _id: "8",
        name: "Association Franco-Arménienne",
        description: "Association qui promeut les relations culturelles et économiques entre la France et l'Arménie.",
        country: "Arménie",
        type: "Non-governmental Organization",
        establishedDate: 1989,
        website: "https://www.franco-armenie.org",
        logo: asso_franco_armenienne,
        status: "Terminé"
    },
    {
        _id: "9",
        name: "Secours Catholique",
        description: "Organisation qui apporte un soutien social et humanitaire aux personnes en situation de précarité, en France et à l'étranger.",
        country: "France",
        type: "Non-governmental Organization",
        establishedDate: 1946,
        website: "https://www.secours-catholique.org",
        logo: secours_catholique,
        status: "Terminé"
    },
    {
        _id: "10",
        name: "Fondation Aznavour",
        description: "Fondation visant à promouvoir la culture arménienne et à soutenir le développement socio-économique en Arménie.",
        country: "Arménie",
        type: "Non-governmental Organization",
        establishedDate: 2017,
        website: "https://www.aznavourfoundation.org",
        logo: fondation_aznavour,
        status: "Terminé"
    },
];

export const projets = [
    {
        _id: "1",
        name: "Projet d'urgence pour les réfugiés karabaghiotes en Arménie.",
        description: "Projet d'urgence pour les réfugiés karabaghiotes en Arménie, pour fournir des abris, de la nourriture et des soins médicaux. Ce projet vise à répondre aux besoins immédiats des réfugiés en leur offrant un soutien essentiel pour survivre et se rétablir. En collaboration avec des partenaires locaux, nous nous efforçons de créer un environnement sûr et stable pour les familles déplacées, en leur fournissant des ressources vitales et un accès à des services de santé de qualité.",
        association: "Association Solidarité Arménie",
        country: "Arménie",
        type: "Urgence",
        startDate: "2020-01-01",
        endDate: "2020-12-31",
        budget: '100,000',
        currency: "EUR",
        image: soutiens_refugies_karabaghiotes,
        status: "En cours"
    },
    {
        _id: "2",
        name: "Projet de développement communautaire",
        description: "Projet de développement communautaire en Arménie, pour construire des écoles et des centres de santé. Ce projet a pour objectif de renforcer les infrastructures locales et d'améliorer l'accès à l'éducation et aux soins de santé pour les communautés défavorisées. En construisant de nouvelles écoles et centres de santé, nous espérons offrir de meilleures opportunités d'apprentissage et de soins médicaux, contribuant ainsi à un développement durable et à une amélioration de la qualité de vie des habitants.",
        association: "Caritas Arménie",
        country: "Arménie",
        type: "Développement",
        startDate: "2020-01-01",
        endDate: "2020-12-31",
        budget: '200,000',
        currency: "EUR",
        image: soutiens_developpement_communautaire,
        status: "Terminé"
    },
    {
        _id: "3",
        name: "Projet de secours d'urgence pour les victimes de guerre",
        description: "Projet de secours d'urgence pour les victimes de guerre au Haut-Karabagh, pour fournir des soins médicaux et des abris. Ce projet est crucial pour apporter une aide immédiate aux personnes touchées par le conflit, en leur offrant des soins médicaux d'urgence et des abris temporaires. En travaillant avec des organisations humanitaires locales et internationales, nous visons à atténuer les souffrances des victimes de guerre et à leur fournir un soutien essentiel pour reconstruire leur vie.",
        association: "Croix-Rouge Française",
        country: "Arménie",
        type: "Urgence",
        startDate: "2020-01-01",
        endDate: "2020-12-31",
        budget: '150,000',
        currency: "EUR",
        image: secours_urgence_victime_guerre,
        status: "En cours"
    },
    {
        _id: "4",
        name: "Projet de réhabilitation post-conflit",
        description: "Projet de réhabilitation post-conflit en Arménie, visant à reconstruire les infrastructures détruites et à fournir un soutien psychosocial aux victimes. Ce projet se concentre sur la reconstruction des maisons, des écoles et des hôpitaux endommagés par le conflit, ainsi que sur l'offre de services de soutien psychosocial pour aider les victimes à surmonter les traumatismes. En collaborant avec des experts en reconstruction et en santé mentale, nous espérons créer un environnement propice à la guérison et à la reprise d'une vie normale pour les communautés affectées.",
        association: "Fondation Arménienne de Reconstruction",
        country: "Arménie",
        type: "Réhabilitation",
        startDate: "2020-01-01",
        endDate: "2020-12-31",
        budget: '250,000',
        currency: "EUR",
        image: soutiens_personnes_deplacees,
        status: "En cours"
    }
];

export const actualites = [
    {
        _id: "3",
        title: "Médecins Sans Frontières en action",
        subtitle: "Déploiement d'équipes médicales supplémentaires",
        content: "Médecins Sans Frontières a déployé des équipes médicales supplémentaires dans les zones de conflit pour fournir des soins d'urgence.",
        detailedContent: "Dans les zones de conflit, les besoins médicaux sont souvent immenses et urgents. Médecins Sans Frontières a donc décidé de renforcer sa présence en envoyant des équipes supplémentaires. Ces équipes sont composées de médecins, d'infirmières et de logisticiens qui travaillent sans relâche pour apporter des soins vitaux aux populations touchées. Les défis sont nombreux, mais l'engagement de MSF reste inébranlable.",
        date: "2023-07-10",
        author: "Albert Einstein",
        image: secours_urgence_victime_guerre
    },
    {
        _id: "4",
        title: "Fonds Arménien de France soutient les infrastructures",
        subtitle: "Construction de nouvelles écoles et centres de santé",
        content: "Le Fonds Arménien de France a financé la construction de nouvelles écoles et centres de santé en Arménie.",
        detailedContent: "Grâce aux dons généreux de ses membres et sympathisants, le Fonds Arménien de France a pu lancer plusieurs projets de construction en Arménie. Ces projets incluent des écoles modernes équipées de toutes les commodités nécessaires pour offrir une éducation de qualité, ainsi que des centres de santé capables de fournir des soins médicaux de base et spécialisés. Ces initiatives visent à améliorer la qualité de vie des habitants et à soutenir le développement durable de la région.",
        date: "2023-06-05",
        author: "Isaac Newton",
        image: soutiens_developpement_communautaire
    },
    {
        _id: "5",
        title: "Secours Populaire Français lutte contre la pauvreté",
        subtitle: "Collecte de fonds pour soutenir les familles en difficulté",
        content: "Le Secours Populaire Français a organisé une collecte de fonds pour soutenir les familles en difficulté en France.",
        detailedContent: "Face à la montée de la pauvreté en France, le Secours Populaire Français a intensifié ses efforts pour venir en aide aux familles les plus vulnérables. Une grande collecte de fonds a été organisée, mobilisant des bénévoles et des donateurs à travers tout le pays. Les fonds récoltés permettront de fournir une aide alimentaire, des vêtements, et un soutien financier aux familles en difficulté. Cette initiative s'inscrit dans la mission du SPF de lutter contre toutes les formes de précarité.",
        date: "2023-05-25",
        author: "Marie Curie",
        image: soutiens_personnes_deplacees
    }
];