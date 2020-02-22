function app() {
    const title = 'Project 2 - Finnkino search';
    document.title = title;
    document.querySelector('header h1').innerHTML = title;
}

window.onload = app;