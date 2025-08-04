function addElement(element,text,classe,selector) {
    const newElement = document.createElement(element)
    newElement.innerText = text;
    if(classe){newElement.classList.add(classe)}
    document.querySelector(selector).appendChild(newElement)
}
function qS(selector) {
    const element = document.querySelector(selector);
    return element;
}
function toLow(args) {
    return args.toLowerCase()
}
function addFormElement(label, text, element, attribut,value,classe,selector) {
    const newlabel = document.createElement(label)
    newlabel.innerText = text;
    const newElement = document.createElement(element)
    newElement.classList.add(classe)
    newElement.setAttribute(attribut,value)
    document.querySelector(selector).appendChild(newlabel)
    document.querySelector(selector).appendChild(newElement)
}
function generateHeader() {
    addElement('header',null,'site-header','body');
    addElement('ul',null,'menu-container','header')
    const menu = document.querySelector('ul');

    let ml = menuContent.length
    for (let i = 0; i < ml ; i++) {
    menu.innerHTML += `<li><a href="${menuLink[i]}">${menuContent[i]}</a></li>`
    }
}
function generateButtons() {
    buttonContent.forEach(content => {
        addElement('button', content, 'cmd', 'footer');
    });
    const buttons = document.querySelectorAll('.cmd');
    const btnFcts = buttonContent.map(toLow);

    for(let i = 0; i < btnFcts.length; i++) {
        buttons[i].classList.add(btnFcts[i])
    }
    
    const btnFilter = qS(`.${btnFcts[0]}`)
    const btnOrder = qS(`.${btnFcts[1]}`)
    const btnStyle = qS(`.${btnFcts[2]}`)
    const btnPalette = qS(`.${btnFcts[3]}`)

    btnFilter.addEventListener('click', fiterByTheme);
    btnOrder.addEventListener('click', sortByDeadline);
    btnStyle.addEventListener('click', changeStyle);
    btnPalette.addEventListener('click', changePalette);
    console.log(btnFcts)
    console.log(buttons)
}
function createTag(tag, options = {}, ...children) {
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
    const ul = createTag('ul', { className: 'card-ul' });
    technologies.forEach(tech => {
        const li = createTag('li', { text: tech });
        ul.appendChild(li);
    });
    return ul;
}

function createCard(projet) {
    const cardTitle = createTag('h2', { text: projet.projectTitle });
    const typeOfProject = createTag('h3', { text: projet.projectType });
    const techTitle = createTag('h4', { text: 'Technologies :' });

    const techList = createTechnologyList(projet.projectTechnology);
    const deadline = createTag('p', { text: `Date limite : ${projet.projectDeadline}` });
    const status = createTag('p', {
        html: `Statut : <span class="status">${projet.projectStatus}</span>`
    });

    const article = createTag('article', { className: 'card' },
        cardTitle, typeOfProject, techTitle, techList, deadline, status
    );

    const link = createTag('a', {
        className: 'card-link',
        href: `/pages${projet.anchorLink}`
    }, article);

    return link;
}

function generateCard() {
    const sectionCard = document.querySelector('.hero-card');

    projets.forEach(projet => {
        const card = createCard(projet);
        sectionCard.appendChild(card);
    });
}

/* function generateCard() {
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
} */
/*  */
const btnFcts = buttonContent.map(toLow);
/*  */
function fiterByTheme(){
    console.log(`bouton ${btnFcts[0]} fonctionnel`)
}
function sortByDeadline(){
    console.log(`bouton ${btnFcts[1]} fonctionnel`)
}
function changeStyle(){
    console.log(`bouton ${btnFcts[2]} fonctionnel`)
}
function changePalette(){
    console.log(`bouton ${btnFcts[3]} fonctionnel`)
}
function generateHome(){
    title.innerText = titles[0]
    addElement('div', null,'container','section');
    addElement('h2', subtitle[0], null, '.container');
    addElement('p',paragraphes.description, null, '.container');
}

function generateAbout(){
    title.innerText = titles[1];
    for(let i = 0; i < 4; i++){
        addElement('p',menuContent[i], null, 'section')
    }
}

function generateProject(){
    title.innerText = titles[2];
    addElement('div',null, 'hero-card','section');
    generateCard();
}

function generateContact() {
    title.innerText = titles[3];
    heroSection.setAttribute('class','hero-contact');
    addElement('form', null,  null, '.hero-contact');
    addFormElement('label',labels[0], 'input', 'type','text', null, 'form');
    addFormElement('label',labels[1], 'input', 'type','text', null, 'form');
    addFormElement('label',labels[2], 'input', 'type','email', null, 'form');
    addFormElement('label',labels[3], 'textarea', null, null, null, 'form');
    addFormElement(null,null, 'input', 'type', 'submit', null, 'form');
}
function generateFooter() {
    addElement('footer', null, 'footer', 'body');
    generateButtons()
}