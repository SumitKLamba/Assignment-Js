//adding different sections
let main = document.querySelector("#main");

const titles = ['Trending', 'Most Popular', 'Most Viewed', 'Your Choice']; //add or change section titles from here

for(let i=0; i<titles.length; i++) {
    const sectionsTemplate = document.querySelector('#sectionsTemplate').cloneNode(true);
    const sectionId = titles[i]; 
    sectionsTemplate.id = sectionId;
    sectionsTemplate.querySelector("#title").innerHTML = titles[i];
    main.appendChild(document.importNode(sectionsTemplate, true));
}

let elem = document.querySelector('#sectionsTemplate');
elem.parentNode.removeChild(elem);


//adding multiple blogs

let section = document.querySelector("#blogsTemplate");

for(let i=0; i<15; i++) {
    const blogsTemplate = document.querySelector("#card").cloneNode(true);
    console.log(blogsTemplate);
    blogsTemplate.id = "card" + (i+1);
    section.appendChild(document.importNode(blogsTemplate, true));
}