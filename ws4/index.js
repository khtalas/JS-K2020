function app() {
    const title = 'Workshop 4';
    document.title = title;
    document.querySelector('header h1').innerHTML = title;
}

window.onload = app;