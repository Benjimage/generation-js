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
