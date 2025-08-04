generateHeader()
const heroSection = document.createElement('section');
document.body.appendChild(heroSection);
const title = document.createElement('h1');
heroSection.appendChild(title)

switch (window.location.pathname) {
    case "/":
        generateHome();
        break;
    case "/index.html":
        generateHome();
        break;
    case "/a-propos.html":
        generateAbout();
    break; 
    case "/projets.html":
        generateProject();
    break;
    case "/contact.html":
        generateContact();
    break;
    default:
        addElement('p', `path :  ${window.location.pathname}`, 'path', 'section')
}
generateFooter()