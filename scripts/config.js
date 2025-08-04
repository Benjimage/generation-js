const menuContent = ['Accueil','À propos', 'Projets', 'Contact'];// for different pages use spread operator from 'fisrtPageMenuItem' constant by example
const menuLink = ['/index.html','/a-propos.html','/projets.html','/contact.html']
const titles = ['Génération DOM en Javascript', 'À propos', 'Projets', 'Contact']
const subtitle = ['Déscription du projet']
const paragraphes = {
    description : 'Ce projet est un projet de test pour générer l\'ensemble des pages et des élements du DOM depuis les scripts Js. Il a également pour finalité de développer l\'ensemble des fonctionnalités du site tout en allant vers toujours plus de complexité opérationelle avec pour objectif d\'explorer et d\'approffondir la pratique de la programmation en Javascript en utilisant au maximum les connaissances actuelles. Un accent est porté à la simplification et factorisation du code et à sa maintenabilité.',
}
const labels = ['Votre prénom','Votre nom','Votre adresse mail','Votre message'];
const buttonContent = ['Filtrer','Ordonner', 'Style', 'Palette']

function Projets(name, type,techno, deadline, status,todo,link) {
  this.projectTitle = name;
  this.projectType = type;
  this.projectTechnology = techno;
  this.projectDeadline = deadline;
  this.projectStatus = status;
  this.remainingTask = todo;
  this.anchorLink = link;
}
const projets = [

 myBlog = new Projets(
    'Site internet',
    'développement WordPress',
    [
        'CSS',
        'WordPress',
        'SEO',
        'JS'
    ],
    '2025-09-12',
    '80%',
    [
        {tache:'responsive tablette', satus:'À faire'},
        {tache:'tests', satus:'À faire'},
        {tache:'Optimisation', satus:'À faire'}

    ],
    '/myblog.html',
),

myApp = new Projets(
    'Application spirituelle',
    'développement WordPress',
    [
        'JS', 'Audio recording', 'WordPress', 'CSS' 
    ],
    '2026-01-31',
    'En cours',
    [
        {tache: 'Structure des programmes', status: 'En cours'},
        {tache: 'tests', status:'À faire'},
        {tache: 'rédaction des contenus', status:'En cours'},
        {tache: 'Enregistrements des audios', status:'À faire'},
    ],
    '/myapp.html'
),
semence = new Projets(
    'Méditation poétique ',
    'Édition',
    [
        'PAO',
    ],
    '2025-11-10',
    '98%',
    [
        {tache: 'Réviser les ISBN', status: 'À faire' },
        {tache: 'Générer les codes barres', status: 'À faire' },
        {tache: 'Corriger les ISBN et les codes barres', status: 'À faire' },
        {tache: 'Vérification prépresse', status: 'À faire' },
    ],
    '/semence.html'
),
newProg = new Projets(
    'Approndissement JS',
    'développement web',
    [
        'Javascript',
        'CSS',
        'HTML',
        'WordPress',
        
    ],
    '2025-12-24',
    'En cours',
    [
        {tache:'Maitriser Obets et tableaux', status:'À faire'},
        {tache:'structurer les algorythmes de déploiement', status:'En cours'},
        {tache:'Tester les fonctionnalités', status:'En cours'},
        {tache:'Mettre en place le style', status: 'En cours'},
    ],
    '/newprog.html'
),
myDoc = new Projets(
    'Documentation',
    'développement WordPress',
    [
        'Javascript',
        'CSS',
        'HTML',
        
    ],
    '2026-06-21',
    'En cours',
    [
        {tache:'Organiser et hierarchiser les contenus', status:'À faire'},
        {tache:'structurer les algorythmes de déploiement', status:'À faire'},
        {tache:'Tester les fonctionnalités', status:'À faire'},
        {tache:'Mettre en place le style', status: 'À faire'},
    ],
    '/mydoc.html'
),
social = new Projets(
    'création de communauté',
    'Édition',
    [
        'Réseaux sociaux',
        'Web marketing',
    ],
    '2025-10-31',
    '2%',
    [
        {tache: '', status: 'À faire' },
        {tache: '', status: 'À faire' },
        {tache: '', status: 'À faire' },
        {tache: '', status: 'À faire' },
    ],
    '/semence.html'
)
]

//projets[] = new Projets()    
//console.log(projets[0].projectTitle)
