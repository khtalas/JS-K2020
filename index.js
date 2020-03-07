/* global workshopList, projectList */

function app() {
    const title = 'Workshops and projects';
    document.title = title;
    document.querySelector('header h1').innerHTML = title;
    for (let i = 2; i <= 9; i++) {
        let workshopLink = document.createElement('li');
        workshopLink.innerHTML = `<a href="ws${i}/index.html">Workshop ${i}</a>`;
        workshopList.appendChild(workshopLink);
    }
    for (let i = 1; i <= 2; i++) {
        let projectLink = document.createElement('li');
        projectLink.innerHTML = `<a href="pr${i}/index.html">Project ${i}</a>`;
        projectList.appendChild(projectLink);
    }
}

window.onload = app;