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