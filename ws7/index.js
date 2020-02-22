function app() {
    const title = 'Workshop 7';
    document.title = title;
    document.querySelector('header h1').innerHTML = title;
}

window.onload = app;