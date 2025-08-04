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
   
}
function generateCard(arr) {
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
}

/*  */
const btnFcts = buttonContent.map(toLow);
/*  */
function fiterByTheme(){
    console.log(`bouton ${btnFcts[0]} fonctionnel`);
    const projectByType = projets.filter(function (projet) {
        return projet.projectType === 'Édition';
    });
    console.log(projectByType)
    const sectionCard = document.querySelector('.hero-card');
    sectionCard.innerHTML= "";
    generateCard(projectByType)
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

    for(let i = 0; i < priority.length; i++){
        console.log(priority[i].projectDeadline)
    }
    console.log(priority[0].projectDeadline)
    //priority[0].style.color = "red"
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
/* function displayDate(){
    const dateOfToday = qS('.date')
    let today = new Date();
    let month = today.getMonth()
    let monthName = '';
    switch(month) {
            case 0:
            monthName = 'Janvier';
            break;
            case 1:
            monthName = 'Février';
            break;
            case 2:
            monthName = 'Mars';
            break;
            case 3:
            monthName = 'Avril';
            break;
            case 4:
            monthName = 'Mai';
            break;
            case 5:
            monthName = 'Juin';
            break;
            case 6:
            monthName = 'Juillet';
            break;
            case 7:
            monthName = 'Août';
            break;
            case 8:
            monthName = 'Septembre';
            break;
            case 9:
            monthName = 'Octobre';
            break;
            case 10:
            monthName = 'Novembre';
            break;
            case 11:
            monthName = 'Décembre';
            break;
    }
        
    const thisDay = `${today.getDate()} ${monthName} ${today.getFullYear()}`
    switch(today.getDay()){
        case 0 :
            dateOfToday.innerText = `Dimanche  ${thisDay}`;
            break;   
        case 1 :
            dateOfToday.innerText = `Lundi ${thisDay}`;
            break;
        case 2 :
            dateOfToday.innerText = `Mardi  ${thisDay}`;
            break;
        case 3 :
            dateOfToday.innerText = `Mercredi  ${thisDay}`;
            break; 
        case 4 :
            dateOfToday.innerText = `Jeudi  ${thisDay}`;
            break;
        case 5 :
            dateOfToday.innerText = `Vendredi  ${thisDay}`;
            break;
        case 6 :
            dateOfToday.innerText = `Samedi  ${thisDay}`;
            break;
    }
    console.log(today.getMonth())
    console.log(today.getDay())
    console.log(today.getDate())
    console.log(today.getFullYear())
}
 */

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