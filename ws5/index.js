function app() {
    const title = 'Workshop 5';
    document.title = title;
    document.querySelector('header h1').innerHTML = title;
}

window.onload = app;