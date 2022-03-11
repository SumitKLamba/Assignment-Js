function onButtonClick(id) {
    let header = document.getElementById('header').getBoundingClientRect();
    let section = document.getElementById(id).getBoundingClientRect();
    let tillTitle = section.top - header.height;
    return window.scrollBy({
        top: tillTitle,
        behavior: "smooth"
    });
}