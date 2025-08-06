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
function fiterByTheme(theme){
    console.log(`bouton ${btnFcts[0]} fonctionnel`);
    const projectByType = projets.filter(function (projet) {
        return projet.projectType === theme;
        });
        console.log(projectByType)
        const sectionCard = document.querySelector('.hero-card');
        sectionCard.innerHTML= "";
        generateCard(projectByType)
}
function displayDate(){
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