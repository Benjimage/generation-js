 function sortByDeadline(){
    
}
/* var head = document.getElementsByTagName('head').item(0); */
 
/* var myScripts = new Array( "scripts/shBrushSql.js", "scripts/shBrushVb.js", "scripts/shBrushXml.js");
 
foreach(x in myScripts) {
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = myScripts[x];
script.defer = true;
head.appendChild(script);
} */

/* const header = document.createElement('header')
document.body.appendChild(header);
const menu = document.createElement('ul');
header.appendChild(menu);
const menuContent = ["Accueil","À propos", "Services", "Contact"];// for different pages use spread operator from "fisrtPageMenuItem" constant by example
const menuLink = ["#","/one.html","two.html","/three.html"]

for (let i = 0; i < menuContent.length; i++) {
    console.log(menuContent[i]);
    menu.innerHTML += `<li><a href="${menuLink[i]}">${menuContent[i]}</a></li>` 
}
const heroSection = document.createElement('section');
document.body.appendChild(heroSection);

const title = document.createElement('h1');
heroSection.appendChild(title)
title.innerText = 'Génération Javascript' */
/* if(window.location.pathname === "/index.html") {
    title.innerText = 'Génération Javascript'
} 
   */

/* function generateContact(){
    title.innerText = 'Contact';

    heroSection.setAttribute('class','hero-contact')

    const form = document.createElement('form');
    heroSection.appendChild(form);

    const firstLabel = document.createElement('label')
    form.appendChild(firstLabel)
    firstLabel.innerText = "Votre prénom"
    const userFirstName = document.createElement('input');
    form.appendChild(userFirstName);
    userFirstName.setAttribute('type','text')

    const nameLabel = document.createElement('label')
    form.appendChild(nameLabel)
    nameLabel.innerText = "Votre Nom"
    const userName = document.createElement('input');
    form.appendChild(userName);
    userName.setAttribute('type','text')

    const mailLabel = document.createElement('label')
    form.appendChild(mailLabel)
    mailLabel.innerText = "Votre adresse mail"
    const userMail = document.createElement('input');
    form.appendChild(userMail);
    userMail.setAttribute('type','email')

    const messageLabel = document.createElement('label')
    form.appendChild(messageLabel)
    messageLabel.innerText = "Votre message"
    const message = document.createElement('textarea');
    form.appendChild(message);
} */

/* function FormElement(label, text, element, attribut,value,classe,selector) {
    this.newlabel = document.createElement(label);
    this.newlabel.innerText = text;
    this.newElement = document.createElement(element);
    this.newElement.classList = classe;
    this.display = () => {
        this.newElement.setAttribute(attribut,value)
        document.querySelector(selector).appendChild(newlabel)
        document.querySelector(selector).appendChild(this.newElement)
        return
    }
    
} */
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}
   const section = document.getElementById('sectionBtn');
const conteneur = document.getElementById('conteneurBtn');
const div = document.getElementById('divBtn');
const titre = document.getElementById('titreBtn');
const subtitle = document.getElementById('subtitleBtn');
const paragraph = document.getElementById('paragraphBtn');
const list = document.getElementById('listBtn');
const button = document.getElementById('buttonBtn');
const size = document.getElementById('sizeBtn');
const img = document.getElementById('imgBtn');
const typo= document.getElementById('typoBtn');
const color= document.getElementById('colorBtn');

const message = [
    'Entrez votre titre',
    'Entrez votre sous-titre',
    'Entrez votre texte',
    'Entrez un élément de votre liste',
    'Entrez le texte de votre bouton'
]
let userInput;

section.addEventListener('click', ()=> {addElement("section", "new-section", "body")})
conteneur.addEventListener('click', ()=> {addElement("div", "conteneur",".new-section" )})
div.addEventListener('click', ()=> {addElement("div", "new-div", ".conteneur")})
titre.addEventListener('click', ()=> {addTextElement(0,"h2", "up", ".conteneur")})
subtitle .addEventListener('click', ()=> {addTextElement(1,"h3", "sub", ".conteneur")})
paragraph.addEventListener('click', ()=> {addTextElement(2,"p", null, ".new-div")})
list.addEventListener('click', addList)
button.addEventListener('click',addButton)
size.addEventListener('click', ()=>{changeElement('.conteneur','height','100%')}) 
img.addEventListener('click', addImg)
typo.addEventListener('click',()=>{changeElement('h1','font-family',"Edu NSW ACT Foundation, cursive")})
typo.addEventListener('click',()=>{changeElement('h1','font-size',"4rem")})

color.addEventListener('click', ()=>{
    const surprise = document.createElement('button')
    surprise.classList.add('surprise')
    surprise.setAttribute("type","button")
    surprise.innerText = "Surprise"
    surprise.addEventListener('click',fonctionSurprise)
    document.querySelector(".conteneur").appendChild(surprise)

    let noirEtblanc = document.querySelector('img')
    noirEtblanc.classList.add('nb')
    document.querySelector('.new-section').style.backgroundColor = "#008a88"
    document.querySelector('.conteneur').style.backgroundColor = "#004a7f"
    document.querySelector('.conteneur').style.color = "#fff"
    document.querySelector('.new-div').style.color = "#001e33"
})


function addElement(element,classe,selector) {
    const newElement = document.createElement(element)
    newElement.classList.add(classe)
    document.querySelector(selector).appendChild(newElement)
}

function addTextElement(index,element,classe,selector) {
    userInput = prompt (message[index]); 
    const newElement = document.createElement(element)
    newElement.classList.add(classe)
    newElement.innerText = userInput
    document.querySelector(selector).appendChild(newElement)
}
function addList() {
    addElement("ul", "list", ".new-div")

    for(let i = 0; i < 4; i++){
        addTextElement(3,"li",'list',"ul")
    }
}  
function addButton() {
    const newButton = document.createElement("button")
    userInput = prompt(message[4])
    newButton.innerText = userInput
    newButton.setAttribute("type","button")
    newButton.setAttribute("id","couleur")
    newButton.addEventListener('click', ()=> {changeElement('.new-section', "background-color","#004a7f")})
    document.querySelector(".conteneur").appendChild(newButton)
}

function changeElement(selector,property,value){
   document.querySelector(selector).style.setProperty(property,value);
}
function addImg() {
    const newImg = document.createElement("img")
    newImg.classList.add("vignette")
    newImg.setAttribute("src","images/Hi.png")
    newImg.setAttribute("id","image")
    newImg.setAttribute("title","cheval qui rit !")
    document.querySelector('.conteneur').appendChild(newImg)
}
function fonctionSurprise(){
    changeElement('.new-div','display','none')
    changeElement('#couleur','display','none')
    const vignette = document.querySelector('.vignette')
    vignette.src='images/bou.png' 
    vignette.style.height = "180px"
    vignette.classList.remove('nb')
    document.querySelector('.sub').style.display = "none"
    document.querySelector('p').style.display = "none"
    document.querySelector('.list').style.display = "none"
    
    let newTitle = document.querySelector(".up")
    newTitle.innerText = "Ha ha ha ha ha !!!"
}

const projet1 = new Projets(
    'Développement Web',
    'Application',
    [
        { nom: 'JavaScript', niveau: 'Avancé' },
        { nom: 'React', niveau: 'Intermédiaire' }
    ],
    '2025-12-31',
    'En cours',
    [
        { tache: 'Créer la maquette', statut: 'À faire' },
        { tache: 'Développer le backend', statut: 'En cours' }
    ]
);

function generateAbout(){
    title.innerText = titles[1];
    /* addElement('ul', null, 'generated-list','section')
    const listTag = document.querySelector('.generated-list')
    for(let i = 0; i < projets.length; i ++){
        for(x = 0; x < projets[i].projectTechnology.length; x++ )
        listTag.innerHTML += `<li>${projets[i].projectTechnology[x]}</li>`
    } */
    const testArray = projets[1].projectTechnology;
    console.log(testArray)
    addElement('ul', null, 'generated-list','section')
    const listTag = document.querySelector('.generated-list')

    console.log(generateList(testArray,listTag))
}
<ul class='generated-list'></ul>

function generateProject(){
    title.innerText = titles[2];
    addElement('div',null, 'hero-card','section');
    for(let i = 0; i < projets.length; i++) {
        addElement('div',null, 'card', '.hero-card');
    }
    const cards = document.querySelectorAll('.card');
    for (let j = 0; j < cards.length; j++) {
        cards[j].innerHTML = 
        `<h3>${projets[j].projectTitle}</h3>
       <!-- <h4> Techonologies :</h4>-->
        <ul class='generated-list'></ul>`
    }
    const listTag = document.querySelectorAll('.generated-list')
    listTag.forEach((listContent) => {
        for(let y= 0; y < projets.length; y ++){
            for(x = 0; x < projets[y].projectTechnology.length; x++ ) {
                listContent.innerHTML += `<li>${projets[y].projectTechnology[x]}</li>`
            }
        }
    }
        
    ) 
    console.log(Object.entries(listTag))
   
}

function generateList(array,element) {
    for(let i = 0; i < array.length; i ++){
        element.innerHTML = `<li>${array[i]}</li>`
    }
}

function generateCard() {
    for(let i = 0; i < projets.length; i++) {
    addElement('a', null, 'card-link','.hero-card')
    const carLink = document.querySelector('.card-link')
    carLink.setAttribute('href',`/pages${projets[i].anchorLink}`)
    addElement('div',null, 'card', '.card-link')
    addElement('h3',`${projets[i].projectTitle}`, null, '.card')
    addElement('ul', null, 'card-ul','.card')
    addElement('li', `${projets[i].projectTechnology[i]}`, 'card-li', '.card-ul')
    }
}
/* ^^^^^^^^^^^^^^ */
function generateCard() {
    for(let i = 0; i < projets.length; i++) {
   
    const projet  = projets[i];
    console.log(projet)

    const sectionCard = document.querySelector('.hero-card');

    const cardLink = document.createElement('a')
    cardLink.setAttribute('href',`/pages${projets[i].anchorLink}`)
    cardLink.classList.add('card-link')

    const card = document.createElement('article')
    card.classList.add('card')

    const cardTitle = document.createElement('h2');
    cardTitle.innerText = projet.projectTitle;
    const typeOfproject = document.createElement('h3');
    typeOfproject.innerText = projet.projectType

    const techTitle = document.createElement('h4');
    techTitle.innerText = 'Technologies :'
    const listNest = document.createElement('ul');
    listNest.classList.add('card-ul')

    const technoList = projets[i].projectTechnology
    console.log(technoList)
    for(let l = 0; l < technoList.length; l++) {
        let liItem = document.createElement('li')
        listNest.appendChild(liItem);
        liItem.innerText = projets[i].projectTechnology[l];
        } 
    const deadlineDisplay = document.createElement('p');  
    deadlineDisplay.innerText =` Date limite : ${projets[i].projectDeadline}`;
    const Status = document.createElement('p');
    Status.innerHTML = `Statut : <span class="status">${projets[i].projectStatus}</span>`
    
    sectionCard.appendChild(cardLink);
    cardLink.appendChild(card)
    card.appendChild(cardTitle);
    card.appendChild(typeOfproject);
    card.appendChild(techTitle);
    card.appendChild(listNest);
    card.appendChild(deadlineDisplay);
    card.appendChild(Status);
    }
}

function addElement(element,text,classe,selector) {
    const newElement = document.createElement(element)
    newElement.innerText = text;
    newElement.classList.add(classe)
    document.querySelector(selector).appendChild(newElement)
}
//////////////////////////////Perplexity response
function createElement(tag, options = {}, ...children) {
    const el = document.createElement(tag);

    if (options.className) el.classList.add(...[].concat(options.className));
    if (options.text) el.innerText = options.text;
    if (options.html) el.innerHTML = options.html;
    if (options.href) el.setAttribute('href', options.href);

    children.forEach(child => {
        if (child) el.appendChild(child);
    });

    return el;
}

function createTechnologyList(technologies) {
    const ul = createElement('ul', { className: 'card-ul' });
    technologies.forEach(tech => {
        const li = createElement('li', { text: tech });
        ul.appendChild(li);
    });
    return ul;
}

function createCard(projet) {
    const cardTitle = createElement('h2', { text: projet.projectTitle });
    const typeOfProject = createElement('h3', { text: projet.projectType });
    const techTitle = createElement('h4', { text: 'Technologies :' });

    const techList = createTechnologyList(projet.projectTechnology);
    const deadline = createElement('p', { text: `Date limite : ${projet.projectDeadline}` });
    const status = createElement('p', {
        html: `Statut : <span class="status">${projet.projectStatus}</span>`
    });

    const article = createElement('article', { className: 'card' },
        cardTitle, typeOfProject, techTitle, techList, deadline, status
    );

    const link = createElement('a', {
        className: 'card-link',
        href: `/pages${projet.anchorLink}`
    }, article);

    return link;
}

function generateCard() {
    const sectionCard = document.querySelector('.hero-card');

    projets.forEach(projet => {
        console.log(projet);
        const card = createCard(projet);
        sectionCard.appendChild(card);
    });
}

const footer = document.createElement('footer')
    document.body.appendChild(footer);

/* Creation de page */
function createPage(name) {
    /* const  headerBlock = () => {
        generateHeader()
    }
    const  footerBlock = () => {
        generateFooter()
    } */
  const win = window.open("", name); // nom de la fenêtre/onglet
  win.document.write(`
    <html>
    <head>
      <title>${name}</title>
    </head>
    <body>
    /* ${headerBlock} */
      <h1>Page générée dynamiquement: ${name}</h1>
      <p>Ceci est une page créée par JavaScript.</p>
      /* ${footerBlock} */
    </body>
    </html>
  `);
  win.document.close();
}

 btnNewPage.addEventListener('click',() => {
        createPage('nouvelle-page')
    })
/* Première version generateCard : /!\ fonctionnel avant fonction d'ordonnancement par date */
function generateCard() {
    const sectionCard = document.querySelector('.hero-card');

    for(let i = 0; i < projets.length; i++) {
   
    const projet  = projets[i];
   
    const cardLink = document.createElement('a')
    cardLink.setAttribute('href',`/pages${projets[i].anchorLink}`)
    cardLink.classList.add('card-link')

    const card = document.createElement('article')
    card.classList.add('card')

    const cardTitle = document.createElement('h2');
    cardTitle.innerText = projet.projectTitle;
    const typeOfproject = document.createElement('h3');
    typeOfproject.innerText = projet.projectType

    const techTitle = document.createElement('h4');
    techTitle.innerText = 'Technologies :'
    const listNest = document.createElement('ul');
    listNest.classList.add('card-ul')

    const technoList = projets[i].projectTechnology

    for(let l = 0; l < technoList.length; l++) {
        let liItem = document.createElement('li')
        listNest.appendChild(liItem);
        liItem.innerText = projets[i].projectTechnology[l];
        } 
    const deadlineDisplay = document.createElement('p');  
    deadlineDisplay.innerText =` Date limite : ${projets[i].projectDeadline}`;
    const Status = document.createElement('p');
    Status.innerHTML = `Statut : <span class="status">${projets[i].projectStatus}</span>`
    
    sectionCard.appendChild(cardLink);
    cardLink.appendChild(card)
    card.appendChild(cardTitle);
    card.appendChild(typeOfproject);
    card.appendChild(techTitle);
    card.appendChild(listNest);
    card.appendChild(deadlineDisplay);
    card.appendChild(Status);
    }
}
function fliterProject() {
    const typeOfProject = []
    for(projet of projets) {
        typeOfProject.push(projet.projectType)
    }
    console.log(typeOfProject);
    const web = qS('option:first-of-type')
    web.addEventListener('click', () => {fiterByTheme('développement web')})
    console.log(web)
}