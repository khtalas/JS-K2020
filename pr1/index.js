function app() {
    const title = 'Project 1 - ToDo-list';
    document.title = title;
    document.querySelector('header h1').innerHTML = title;
}

window.onload = app;