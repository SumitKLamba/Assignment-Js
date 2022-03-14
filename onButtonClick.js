function onButtonClick(id) {
    const header = document.querySelector('.header').getBoundingClientRect();
    const section = document.getElementById(id).getBoundingClientRect();
    const tillTitle = section.top - header.height;
    return window.scrollBy({
        top: tillTitle,
        behavior: "smooth"
    });
}