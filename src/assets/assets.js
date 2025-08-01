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
import florence from './florence.jpg'
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
import interviewFlorencePDF from './interview-florence.pdf';
import empathia from './Empathia_2025.png';
import terreculture from './logo-terre-culture.jpg';
import hamazkayin from './logo-Hamaskaine.png';
import cepfa from './logo-cepfa.jpg';
import haymed from './logo-HayMed.jpg';
import agbuprojet from './agbu-projet.jpg';
import logo_action_sante_femme from './logo-action-sante-femme.png';
import Logo_Nancy from './nancy-logo.png';
import Logo_Valence from './Logo_Valence.svg';
import Logo_scribe_paris from './logo_scribe_paris.jpg';
import Logo_miassine from './logo_miassine.png';
import Logo_Strasbourg from './logo-vectoriel-ville-de-strasbourg.jpg';
import Logo_Region_Paca from './logo-region-paca.jpg';

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
  florence,
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
  croix_bleue,
  empathia,
  terreculture,
  hamazkayin,
  cepfa,
  haymed,
  agbuprojet,
  logo_action_sante_femme,
  Logo_Nancy
}

export const acteurs = [
  // Type dacteurs "Association" | "Collectivités territoriale" | "Institution"

  {
    _id: "1",
    name: "Fondation Centre d’Enseignement Professionnel Franco-Arménien",
    description: "L'établissement est un centre de formation professionnelle créé dans le cadre de la coopération décentralisée entre la ville de Lyon et la ville d’Erévan. Il forme des cuisiniers, pâtissiers, couturiers, coiffeurs et prothésistes-dentaires et, depuis 2020, accueille des artsakhtsiotes en assurant des formations diplômantes et continues pour ces bénéficiaires.",    domain: ["Education", "Formation/Emploi"],
    type: ["Institution"],
    establishedDate: 1945,
    website: "https://fcepfa.am/fr/",
    logo: cepfa,
    dirigeant: "Gohar GRIGORYAN",
    email: "info@fcepfa.am",
    telephone: "+374 10 57 85 34",
    contact: "Gohar GRIGORYAN"
  },
  {
    _id: "2",
    name: "Fonds Arménien de France",
    description: "Le Fonds Arménien de France intervient dans le domaine humanitaire, avec un accent particulier sur : La région Tavouch : Développement agro-pastoral et les régions frontalières : Développement agricole et aide aux déplacés.",
    domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"],
    type: ["Association"],
    establishedDate: 1993,
    website: "https://fondsarmenien.org/",
    logo: fadf,
    dirigeant: "Pierre TERZIAN",
    email: "info@fondsarmenien.org",
    telephone: "01 48 83 51 06",
    contact: "Pierre TERZIAN"
  },
  {
    _id: "3",
    name: "UGAB",
    description: "L'UGAB a toujours joué un rôle essentiel dans l'histoire du peuple arménien. Depuis sa création en 1906, elle est restée fidèle à la vision de ses fondateurs en poursuivant sa mission à travers les décennies : œuvrer à la prospérité et au bien-être de tous les Arméniens. De manière générale, l’UGAB s'engage au quotidien pour développer et assurer la prospérité de l'Arménie, en créant des initiatives en faveur des industries, des individus et des communautés. Elle fait le lien entre la diaspora et l’Arménie en proposant de nombreuses opportunités de collaboration et d’engagement. Elle propose des programmes d’éducation, de culture, d’aide humanitaire et de développement socio-économique s’adressant à toutes les tranches d’âge, dans toutes les régions d’Arménie et en diaspora.",
    domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"],
    type: ["Association"],
    establishedDate: 1948,
    website: "https://ugabfrance.org/fr",
    logo: ugab,
    dirigeant: "Claude Nadia GORTZOUNIAN",
    email: "administratif@agbu.org",
    telephone: "01 45 20 03 18",
    contact: "Claude Nadia GORTZOUNIAN"
  },
  {
    _id: "4",
    name: "Santé Arménie",
    description: "Santé Arménie a pour mission d'apporter une aide médicale directe à la population arménienne à travers : Soins médicaux : Équipes mobiles et centres spécialisés. Formation : Académie médicale en ligne pour les professionnels de santé. Recherche clinique : Amélioration des pratiques médicales et traitements. Infrastructure : Construction et équipement des établissements de santé en Arménie.",
    domain: ["Formation/Emploi", "Santé"],
    type: ["Association"],
    establishedDate: 2021,
    website: "https://www.santearmenie.org/",
    logo: Logo_Sante_Armenie,
    dirigeant: "Arsène MEKINIAN",
    email: "contact@santearmenie.org",
    telephone: "01 45 24 72 79",
    contact: "Arsène MEKINIAN"
  },
  {
    _id: "5",
    name: "Chene",
    description: "Chene intervient dans la construction et la réhabilitation de maisons, d'écoles maternelles et d'équipements collectifs, tout en soutenant le développement du tissu socio-économique et agricole. Elle répond également aux besoins d'urgence humanitaire.",
    domain: ["Logement", "Agriculture", "Education", "Social"],
    type: ["Association"],
    establishedDate: 1990,
    website: "https://www.chene-france.org/",
    logo: Logo_CHENE,
    dirigeant: "Schavarch TOROSSIAN",
    email: "contact@chene-france.org",
    telephone: "",
    contact: "Schavarch TOROSSIAN"
  },
  {
    _id: "6",
    name: "Ville de Lyon",
    description: "La Ville de Lyon est une collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
    domain: [""],
    type: ["Collectivités territoriale"],
    website: "https://www.lyon.fr/",
    logo: ville_lyon,
    dirigeant: "Grégory DOUCET",
    email: "roxane.beneyton@mairie-lyon.fr",
    telephone: "04 78 63 40 00",
    contact: "Roxane BENEYTON"
  },
  {
    _id: "7",
    name: "Département de l'Isère",
    description: "Le Département de l'Isère est une collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
    domain: [""],
    type: ["Collectivités territoriale"],
    website: "https://www.isere.fr/",
    logo: Dep_isere,
    dirigeant: "Jean-Pierre BARBIER",
    email: "suzie.greneche@isere.fr",
    telephone: "04 76 00 38 38",
    contact: "Suzie GRENECHE"
  },
  {
    _id: "8",
    name: "Ville de Joeuf",
    description: "La Ville de Joeuf est une collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
    domain: [""],
    type: ["Collectivités territoriale"],
    website: "https://www.ville-joeuf.fr/",
    logo: joeuf,
    dirigeant: "André CORZANI",
    email: "cabinet.maire@ville-joeuf.fr",
    telephone: "03 82 22 98 69",
    contact: "Maria ABIZA"
  },
  {
    _id: "9",
    name: "Région Auvergne Rhône Alpes",
    description: "La Région Auvergne Rhône Alpes est une collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
    domain: [""],
    type: ["Collectivités territoriale"],
    website: "https://www.auvergnerhonealpes.fr/",
    logo: rara_logo,
    dirigeant: "Fabrice PANNEKOUCKE",
    email: "agnes.hernu@auvergnerhonealpes.fr",
    telephone: "04 26 73 40 69",
    contact: "Agnès HERNU-DUCLOS"
  },
  {
    _id: "10",
    name: "Commune de Gardanne",
    description: "La Commune de Gardanne est une collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
    domain: [""],
    type: ["Collectivités territoriale"],
    website: "https://www.ville-gardanne.fr/",
    logo: Logo_Gardanne,
    dirigeant: "Hervé GRANIER",
    email: "arnaud-mazille@ville-gardanne.fr",
    telephone: "04 42 51 79 00",
    contact: "Arnaud MAZILLE"
  },
  {
    _id: "11",
    name: "Ville de Saint-Etienne",
    description: "La Ville de Saint-Etienne est une collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
    domain: [""],
    type: ["Collectivités territoriale"],
    website: "https://www.saint-etienne.fr",
    logo: stetienne,
    dirigeant: "Gaël PERDRIAU",
    email: "sona.hedhibi@saint-etienne-metropole.fr",
    telephone: "04 77 48 63 65",
    contact: "Sona HEDHIBI"
  },
  /*{
    _id: "12",
    name: "Union Franco-Arménienne",
    description: "L'Union Franco-Arménienne vise à préserver, promouvoir et intégrer avec succès la culture arménienne en France, tout en développant des échanges culturels, en organisant des événements culturels et caritatifs et en mettant en œuvre des projets humanitaires, sportifs et éducatifs en France et en Arménie.",
    domain: ["Education", "Social", "Culture"],
    type: ["Association"],
    website: "https://www.unionfrarm.com",
    logo: LogoUnionfrarm,
    establishedDate: 2021,
    dirigeant: "Artur Arzoyan",
    email: "contact@unionfrarm.com",
    telephone: "06 95 14 77 67",
    contact: "Artur Arzoyan"
  },*/
  {
    _id: "13",
    name: "Croix Bleue des Arméniens de France",
    description: "La Croix Bleue des Arméniens de France agit dans les domaines de l’humanitaire, du social et de la culture.",
    domain: ["Logement", "Social", "Santé"],
    type: ["Association"],
    website: "https://www.croixbleue-france.com/",
    logo: croix_bleue,
    establishedDate: 1928,
    dirigeant: "Corinne Sévane MARDIROSSIAN",
    email: "cbaf@wanadoo.fr",
    telephone: "01 53 34 18 18",
    contact: "Corinne Sévane MARDIROSSIAN"
  },
  {
    _id: "14",
    name: "Organisation Terre et Culture",
    description: "L'Organisation Terre et Culture a pour objectif de valoriser, par la conception, l'élaboration et la réalisaiton de projets précis, le patrimoine culturel arménien et de créer, par la mise en oeuvre d'actions coopératives, les conditions économiques et sociales indispensables à son développement (article 2 des statuts). ",
    domain: ["Social", "Sauvegarde et valorisation du patrimoine culturel arménien"],
    type: ["Association"],
    website: "https://www.terreetculture.org",
    logo: terreculture,
    establishedDate: 1978,
    dirigeant: "Kaprélian NELLY",
    email: "contact@otc-france.org",
    telephone: "01 48 97 42 58",
    contact: "Kaprélian NELLY"
  },
  {
    _id: "15",
    name: "Association éducative et culturelle arménienne Hamaskaïne",
    description: "L'association éducative et culturelle arménienne Hamaskaïne agit dans le domaine de la culture et de l'éducation. Elle a pour objectif de préserver l'identité nationale et les traditions culturelles arméniennes, tout en transmettant une éducation arménienne à la jeune génération vivant dans la diaspora. Hamaskaïne Artsakh, le bureau artsakhiote de l'association basé à Erévan, met en œuvre plusieurs projets éducatifs et culturels avec les adolescents, les jeunes et les artistes déplacés de force de l’Artsakh. Il met également en place un programme éditorial valorisant la littérature et l'histoire artsakhiotes.",
    domain: ["Education", "Culture"],
    type: ["Association"],
    website: "https://hamaskaine.org/",
    logo: hamazkayin,
    establishedDate: 1928,
    dirigeant: "Zakar KECHICHIAN",
    email: "hasmig.chahinian@gmail.com",
    telephone: "06 61 43 17 65",
    contact: "Zakar KECHICHIAN"
  },
  {
    _id: "16",
    name: "Haymed",
    description: "L’association Haymed agit dans les domaines de la formation médicale et chirurgicale, en proposant des enseignements théoriques et pratiques à destination des professionnels de santé. Elle organise également des consultations médicales gratuites pour les réfugiés. En parallèle, Haymed apporte un soutien global aux personnes réfugiées, à travers un accompagnement administratif, une aide matérielle (achat de réfrigérateurs, cuisinières, chauffages, etc.), ainsi qu’un appui financier pour répondre aux besoins essentiels. L’association soutient aussi la création de micro-entreprises par les réfugiés, en leur offrant un accompagnement et un soutien financier dédié.",
    domain: ["Logement", "Santé", "Agriculture", "Education", "Social"],
    type: ["Association"],
    website: "https://www.nouvelhay.com/fr/2024/11/haymed/",
    logo: haymed,
    establishedDate: 2009,
    dirigeant: "Jean-Michel EKHERIAN",
    email: "jean-michel.ekherian@wanadoo.fr",
    telephone: "06 83 82 18 22",
    contact: "Jean-Michel EKHERIAN"
  },
  {
    _id: "17",
    name: "Actions Santé Femmes",
    description: "Actions Santé Femmes intervient dans le domaine de la santé des femmes et mène également des actions de plaidoyer pour défendre leurs droits, notamment le droit à l'accès aux soins, à l’échelle mondiale. L’objet de la structure est d’agir en France et à l’international pour améliorer l’accès des femmes les plus vulnérables aux soins gynécologiques et obstétricaux, à travers des missions de terrain, des actions de formation, d'éducation et de compagnonnage.",
    domain: ["Santé", "Education", "Formation/Emploi", "Social"],
    type: ["Association"],
    website: "https://www.actions-sante-femmes.org/",
    logo: logo_action_sante_femme,
    establishedDate: 2015,
    dirigeant: "Noëlle BESSIERES",
    email: "actions.sante.femmes@gmail.com",
    telephone: "06 59 43 29 83",
    contact: "Noëlle BESSIERES"
  },
  {
    _id: "18",
    name: "Ville de Nancy",
    description: "La ville de Nancy est une collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
    domain: [""],
    type: ["Collectivités territoriale"],
    website: "https://www.nancy.fr/accueil",
    logo: Logo_Nancy,
    dirigeant: "Mathieu KLEIN",
    email: "francoise.jeandemange@grandnancy.eu",
    telephone: "03 83 85 31 92",
    contact: "Françoise JEANDEMANGE"
  },
  {
    _id: "19",
    name: "Ville de Valence",
    description: "Les actions de la Ville de Valence sont principalement tournées vers sa ville jumelle Idjevan, qu’elle accompagne de différentes manières : échanges linguistiques, soutien à l’obtention de fonds européens sur des thématiques variées (tourisme, culture, éducation, agriculture, transition énergétique), dotations aux écoles, etc. Se recentrer sur Idjevan est essentiel pour la municipalité, car la ville et son agglomération ont accueilli de nombreux réfugiés à la suite de la tragédie. Valence agit également en faveur du Syunik via la région Auvergne-Rhône-Alpes, dont le maire Nicolas Daragon est vice-président. Cette région, sensible par sa position, a aussi accueilli de nombreux réfugiés ; sa stabilité et sa sécurité sont considérées comme des éléments clés pour une Arménie en paix.",
    domain: [""],
    type: ["Collectivités territoriale"],
    website: "https://www.valence.fr/",
    logo: Logo_Valence,
    dirigeant: "Nicolas DARAGON",
    email: "georges.rastklan@mairie-valence.fr",
    telephone: "04 75 79 20 00",
    contact: "Georges RASTKLAN"
  },
  {
    _id: "20",
    name: "Scribe Paris",
    description: "Chaque année, l'association SCRIBE-Paris monte une pièce de théâtre à des fins humanitaires. Les fonds recueillis à l'issue des représentations permettent de financer des bourses d'études pour de jeunes réfugiés d'Artsakh en Arménie. Jusqu'en septembre 2023, l'association soutenait des jeunes de l'Artsakh, avant de concentrer son action sur les jeunes réfugiés d'Artsakh en Arménie, à la suite de l'annexion par l'Azerbaïdjan. Ces circonstances exceptionnelles l'ont également conduite à proposer une aide pour le matériel scolaire et le logement en 2024.",
    domain: ["Education"],
    type: ["Association"],
    website: "https://www.scribeparis.org/",
    logo: Logo_scribe_paris,
    establishedDate: 2002,
    dirigeant: "Laurine AGAZARIAN",
    email: "scribeparis@gmail.com",
    telephone: "",
    contact: "Laurine AGAZARIAN"
  },
  {
    _id: "21",
    name: "Miassine fondation",
    description: "La fondation Miassine (qui signifie « Ensemble » en arménien) a été créée en 2009 en Arménie. Son objectif principal est de promouvoir et de soutenir le développement humain durable du peuple arménien. La mission de Miassine est de s'appuyer sur les ressources locales (naturelles et humaines) pour assurer une croissance inclusive et équitable en Arménie.",
    domain: ["Education", "Formation/Emploi"],
    type: ["Association"],
    website: "https://miassine.com/",
    logo: Logo_miassine,
    establishedDate: 2009,
    dirigeant: "Astrig MARANDJIAN",
    email: "satenikhovhannissyan@gmail.com",
    telephone: "+374 93 821 721",
    contact: "Astrig MARANDJIAN"
  },
  {
    _id: "22",
    name: "Ville de Strasbourg",
    description: "La ville de Strasbourg est une collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
    domain: [""],
    type: ["Collectivités territoriale"],
    website: "https://www.strasbourg.eu/",
    logo: Logo_Strasbourg,
    dirigeant: "Jeanne BARSEGHIAN",
    email: "jeanne.barseghian@strasbourg.eu",
    telephone: "03 68 98 74 23",
    contact: "Jeanne BARSEGHIAN"
  },
  {
    _id: "23",
    name: "Région Paca",
    description: "La région Provence-Alpes-Côte d'Azur est une collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
    domain: [""],
    type: ["Collectivités territoriale"],
    website: "https://www.maregionsud.fr/",
    logo: Logo_Region_Paca,
    dirigeant: "Georges-François LECLERC",
    email: "abruna@maregionsud.fr",
    telephone: "04 91 57 57 57",
    contact: "Aurore BRUNA"
  },
];

export const projets = [
  {
    _id: "1",
    name: "RECHERCHE DE PARTENAIRE POUR UN PROGRAMME DE LANGUE FRANÇAISE POUR LES ÉTUDIANTS D'ARTSAKH",
    description: "Le programme de langue française vise à fournir des cours complets de langue française aux étudiants de l'Artsakh, comblant ainsi les lacunes de leur programme. Nous recherchons activement des partenaires pour soutenir ce programme, que ce soit par des contributions financières, des ressources pédagogiques ou des collaborations éducatives.",
    association: "We are our mountains",
    type: "Urgence",
    startDate: "2024-03-01",
    endDate: "2025-01-31",
    budget: '6 402',
    currency: "$",
    image: formation_watm,
    domain: ["Formation/Emploi"],
    externalLink: "https://ourmountains.am/project/french-language-program-for-artsakh-students/"
  },
  {
    _id: "2",
    name: "Empathia – Besoins : soutien financier, logistique et matériel pour les déplacés d’Artsakh",
    description: "Le projet Empathia, porté par Santé Arménie, vise à offrir un soutien psychologique de proximité aux réfugiés d’Artsakh installés en Arménie depuis l’exode de septembre 2023. Une équipe composée de psychologues, d’un psychiatre et d’une travailleuse sociale intervient auprès des familles déplacées dans les régions d’Ararat et de Kotayk. Cette approche mobile, gratuite et humaine permet d’aller à la rencontre des personnes les plus fragiles, souvent isolées et sans ressources. Supervisée par des spécialistes européens de la santé mentale, l’équipe locale garantit des soins conformes aux standards internationaux. En 2024, plus de 2 000 consultations ont été réalisées. Face à l’ampleur des besoins, le projet souhaite se développer pour répondre durablement à cette urgence psychologique.\n\nBesoins identifiés :\n- Soutien financier (salaires des professionnels, frais logistiques)\n- Appui logistique (moyens de transport, coordination sur le terrain)\n- Don de matériel (fournitures pour interventions et accompagnement psychosocial).",
    association: "Santé Arménie",
    type: "Soutien",
    startDate: "2022-01-01",
    endDate: "2025-12-31",
    budget: '65 580',
    currency: "€",
    image: empathia,
    domain: ['Santé', "Social", "Éducation"],
    externalLink: "https://www.santearmenie.org/psychotrauma/"
  },
  {
    _id: "3",
    name: "Demande de dons pour garantir la pérennité et l’amélioration des programmes du Nairi Summer Camp",
    description: "Le Nairi Summer Camp est un camp humanitaire conçu pour offrir aux enfants déplacés de l'Artsakh, âgés de 7 à 13 ans, un cadre sécurisé et bienveillant favorisant leur guérison, leur apprentissage et leur intégration sociale. À travers des activités thérapeutiques et éducatives, ce projet leur permet de retrouver un équilibre émotionnel et de s’épanouir. Depuis sa création, plus de 1 200 enfants ont pu bénéficier de cette initiative. En 2025, quatre sessions sont prévues aux dates suivantes : du 7 au 20 juin, du 25 juillet au 8 août, du 9 au 18 août, du 19 au 28 août",
    association: "UGAB",
    type: "Soutien",
    startDate: "2021-01-01",
    endDate: "2025-12-31",
    budget: "70 $ par jour par participant (700 $ pour 10 jours)",
    currency: "",
    image: agbuprojet,
    domain: ["Éducation", "Social"],
    externalLink: "https://agbu.org/camp-nairi"
  }
];

export const actualites = [
  /*{
    _id: "1",
    title: "Appel à projets franco-arménien",
    subtitle: "Le ministère de l’Europe et des Affaires étrangères annonce l’ouverture de l’appel à projets Arménie 2025. Les candidatures sont ouvertes jusqu’au 23 mai 2025. Les collectivités peuvent désormais soumettre leurs projets via la plateforme Démarches simplifiées.",
    date: "2023-07-10",
    image: quai_image,
    lien: "https://www.diplomatie.gouv.fr/fr/politique-etrangere-de-la-france/action-exterieure-des-collectivites-territoriale/appels-a-projets-2025/appels-a-projets-geographiques/appel-a-projets-franco-armenien/"
  },*/
  {
    _id: "2",
    title: "Projet WINGS",
    subtitle: "Porté par l’Association de Soutien à l’Artsakh, en partenariat avec l’ONG locale arménienne « Nous sommes nos Montagnes », le projet Wings accompagne les enfants déplacés dans leur parcours de reconstruction éducative, psychologique et sociale, afin de faciliter leur intégration dans un nouvel environnement de vie.",
    date: "2023-05-25",
    video: Weareourmountains,
    lien: "#"
  },
  {
    _id: "3",
    title: "Interview de Florence Provendier, coordinatrice des coopérations franco-arméniennes du ministère des Affaires Étrangères et de l'Europe",
    subtitle: "Dans cette interview accordée au Fonds Arménien, réalisée par Achod Papasian et parue dans le Courrier du Fonds Arménien de France n°118 – ©Mars 2025, Florence Provendier nous éclaire sur cette démarche qui prend corps à travers l’appel à projets « Arménie » et les prochaines assises de la coopération décentralisée à Goris, dans le Syunik. La coopération décentralisée s’impose aujourd’hui comme un levier central dans la dynamique de renforcement des relations franco-arméniennes. Portée par la feuille de route économique signée en 2021, cette stratégie vise à mobiliser l’ensemble des acteurs publics, associatifs et économiques autour de projets concrets.",
    date: "2025-04-08",
    image: florence, // Remplacez par une image appropriée si nécessaire
    lien: interviewFlorencePDF
  }
];

export const regions = [
  {
    id: '1',
    name: 'Shirak',
    refugees: 3.368,
    associations: [
      { name: 'Chene', domain: ["Logement", "Agriculture", "Education", "Social"], },
      { name: 'Croix Bleue des Arméniens de France', domain: ["Logement", "Social", "Santé"], },
      /*{ name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },*/
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
      { name: 'Association éducative et culturelle arménienne Hamaskaïne', domain: ["Éducation", "Culture"], },
      { name: 'Haymed', domain: ["Logement", "Santé", "Agriculture", "Education", "Social"], },
      { name: 'Actions Santé Femmes', domain: ["Santé", "Education", "Formation/Emploi", "Social"], },
      { name: '"Miassine fondation', domain: ["Education", "Formation/Emploi"], },
    ],
  },
  {
    id: '2',
    name: 'Lorri',
    refugees: 5.496,
    associations: [
      { name: 'Chene', domain: ["Logement", "Agriculture", "Education", "Social"], },
      /*{ name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },*/
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
      { name: 'Organisation Terre et Culture', domain: ["Social", "Aide d'urgence"], },
      { name: 'Haymed', domain: ["Logement", "Santé", "Agriculture", "Education", "Social"], },
    ],
  },
  {
    id: '3',
    name: 'Tavush',
    refugees: 2.383,
    associations: [
      { name: 'Chene', domain: ["Logement", "Agriculture", "Education", "Social"], },
      /*{ name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },*/
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
    ],
  },
  {
    id: '4',
    name: 'Aragatsotn',
    refugees: 4.014,
    associations: [
      /*{ name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },*/
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
    ],
  },
  {
    id: '5',
    name: 'Kotayk',
    refugees: 20.331,
    associations: [
      /*{ name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },*/
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
      { name: 'Association éducative et culturelle arménienne Hamaskaïne', domain: ["Éducation", "Culture"], },
      { name: '"Miassine fondation', domain: ["Education", "Formation/Emploi"], },
    ],
  },
  {
    id: '6',
    name: 'Armavir',
    refugees: 10.416,
    associations: [
      { name: 'Croix Bleue des Arméniens de France', domain: ["Logement", "Social", "Santé"], },
      /*{ name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },*/
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
    ],
  },
  {
    id: '7',
    name: 'Ararat',
    refugees: 14.743,
    associations: [
      { name: 'Santé Arménie', domain: ["Formation/Emploi", "Santé"], },
      /*{ name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },*/
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
      { name: 'Association éducative et culturelle arménienne Hamaskaïne', domain: ["Éducation", "Culture"], },
      { name: 'Haymed', domain: ["Logement", "Santé", "Agriculture", "Education", "Social"], },
    ],
  },
  {
    id: '8',
    name: 'Gegharkunik',
    refugees: 3.468,
    associations: [
      { name: 'Chene', domain: ["Logement", "Agriculture", "Education", "Social"], },
      { name: 'Croix Bleue des Arméniens de France', domain: ["Logement", "Social", "Santé"], },
      /*{ name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },*/
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
      { name: 'Haymed', domain: ["Logement", "Santé", "Agriculture", "Education", "Social"], },
    ],
  },
  {
    id: '9',
    name: 'Vayots Dzor',
    refugees: 1.274,
    associations: [
      /*{ name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },*/
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
    ],
  },
  {
    id: '10',
    name: 'Syunik',
    refugees: 3.439,
    associations: [
      { name: 'Chene', domain: ["Logement", "Agriculture", "Education", "Social"], },
      { name: 'Croix Bleue des Arméniens de France', domain: ["Logement", "Social", "Santé"], },
      /*{ name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },*/
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
      { name: 'Santé Arménie', domain: ["Formation/Emploi", "Santé"], },
      { name: 'Organisation Terre et Culture', domain: ["Social", "Aide d'urgence"], },
      { name: 'Haymed', domain: ["Logement", "Santé", "Agriculture", "Education", "Social"], },
      { name: 'Actions Santé Femmes', domain: ["Santé", "Education", "Formation/Emploi", "Social"], },
    ],
  },
  {
    id: '11',
    name: 'Erevan',
    refugees: 46.512,
    associations: [
      /*{ name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },*/
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
    ],
  },
];