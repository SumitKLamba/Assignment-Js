//for scrolling to the section on header buttons click
//also could have been done through a href linking to that section or document.querySelector().scrollIntoView
function onButtonClick(id) {
    const header = document.querySelector('.header').getBoundingClientRect();
    const section = document.getElementById(id).getBoundingClientRect();
    const tillTitle = section.top - header.height;
    return window.scrollBy({
        top: tillTitle,
        behavior: "smooth"
    });
}