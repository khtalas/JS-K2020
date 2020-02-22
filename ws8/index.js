function app() {
    const title = 'Workshop 8';
    document.title = title;
    document.querySelector('header h1').innerHTML = title;
}

window.onload = app;