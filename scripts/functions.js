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
    const refresh = qS(`.${btnFcts[4]}`)

    btnFilter.addEventListener('click', () => {
        createDial();
        const dial = qS('dialog');
        console.log(dial);
    });
    btnOrder.addEventListener('click', sortByDeadline);
    btnStyle.addEventListener('click', changeStyle);
    btnPalette.addEventListener('click', changePalette);
    refresh.addEventListener('click', () => {
        console.log(`bouton ${btnFcts[4]} fonctionnel`);
        const sectionCard = document.querySelector('.hero-card');
      /*   if(sectionCard.innerHTML != ""){
        sectionCard.innerHTML= "";
        generateCard(projets);
    } */
        location.reload();
    })
   
}
/* function generateCard(arr) {
    const sectionCard = document.querySelector('.hero-card');

    for(let i = 0; i < arr.length; i++) {
   
    const projet  = arr[i];
   
    const cardLink = document.createElement('a')
    cardLink.setAttribute('href',`/pages${arr[i].anchorLink}`)
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

    const technoList = arr[i].projectTechnology

    for(let l = 0; l < technoList.length; l++) {
        let liItem = document.createElement('li')
        listNest.appendChild(liItem);
        liItem.innerText = arr[i].projectTechnology[l];
        } 
    const deadlineDisplay = document.createElement('p');  
    deadlineDisplay.innerText =` Date limite : ${arr[i].projectDeadline}`;
    const Status = document.createElement('p');
    Status.innerHTML = `Statut : <span class="status">${arr[i].projectStatus}</span>`
    
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
/* function fiterByTheme(theme){
    console.log(`bouton ${btnFcts[0]} fonctionnel`);
    const projectByType = projets.filter(function (projet) {
        return projet.projectType === theme;
        });
        console.log(projectByType)
        const sectionCard = document.querySelector('.hero-card');
        sectionCard.innerHTML= "";
        generateCard(projectByType)
} */
function createDial() {
    console.log(`bouton ${btnFcts[0]} fonctionnel`);

    addElement('dialog', null,'dial', 'footer')
    const dial = qS('dialog');
    dial.innerHTML = `
    <select name="filter" id="type">
    <option value="dev-web">Développement web</option>
    <option value="wordpress">Développement WordPress</option>
    <option value="edition">Édition</option>
    </select>
    `;
    dial.show()
    const web = qS('option:first-of-type')
    web.addEventListener('click', () => {fiterByTheme('développement web'); dial.close()})
    const wP = qS('option:nth-of-type(2)')
    wP.addEventListener('click', () => {fiterByTheme('développement WordPress'); dial.close()})
    const edition = qS('option:nth-of-type(3)')
    edition.addEventListener('click', () => {fiterByTheme('Édition'); dial.close()})
}

function sortByDeadline(){
    console.log(`bouton ${btnFcts[1]} fonctionnel`)
    let priority = projets.sort(function(a, b){
    const fstDate = new Date(a.projectDeadline);
    const scdDate = new Date(b.projectDeadline);

    if(fstDate < scdDate) return -1;
    if(fstDate > scdDate) return 1;
    return 0
  });
    const sectionCard = document.querySelector('.hero-card');
    sectionCard.innerHTML= "";
    generateCard(priority)

    /* for(let i = 0; i < priority.length; i++){
        console.log(priority[i].projectDeadline)
    } */
    /* console.log(priority[0].projectDeadline) */
}
function changeStyle(){
    console.log(`bouton ${btnFcts[2]} fonctionnel`)
}
function changePalette(){
    console.log(`bouton ${btnFcts[3]} fonctionnel`)
}

function generateHome(){
    title.innerText = titles[0]
    const homeLink = qS('.menu-container li:nth-of-type(1)');
    homeLink.classList.add('selected');
    addElement('div', null,'container','section');
    addElement('h2', subtitle[0], null, '.container');
    addElement('p',paragraphes.description, null, '.container');
}

function generateAbout(){
    title.innerText = titles[1];
    const aboutLink = qS('.menu-container li:nth-of-type(2)');
    aboutLink.classList.add('selected');
    addElement('p',paragraphes.description, null, 'section')
}

function generateProject(){
    const heading = qS('h1');
    heading.style.display = 'none';
    const projectLink = qS('.menu-container li:nth-of-type(3)');
    projectLink.classList.add('selected');
    addElement('div',null, 'hero-card','section');
    generateCard(projets);
}

function generateContact() {
    title.innerText = titles[3];
    const contactLink = qS('.menu-container li:nth-of-type(4)');
    contactLink.classList.add('selected');
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
    if(window.location.pathname === '/projets.html') {
        generateButtons()
        
    } else {
        addElement('p', '','date', 'footer')
        addElement('p', '','time', 'footer')
        const timer = qS('.time')

    function startTime() {
        let today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        m = checkTime(m);
        timer.innerHTML =
        h + ":" + m;
        let t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
        displayDate();
        startTime();
    }
}