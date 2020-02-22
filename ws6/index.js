function app() {
    const title = 'Workshop 6';
    document.title = title;
    document.querySelector('header h1').innerHTML = title;
}

window.onload = app;