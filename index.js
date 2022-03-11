//adding different sections
    let main = document.querySelector("#main");

    const titles = ['Trending', 'Most Popular', 'Most Viewed', 'Your Choice']; //add or change section titles from here

    for(let i=0; i<titles.length; i++) {
        //cloning the template
        const sectionsTemplate = document.querySelector('#sectionsTemplate').cloneNode(true);

        //changing the id's and name accordingly
        const sectionId = titles[i]; 
        sectionsTemplate.id = sectionId;
        sectionsTemplate.querySelector("#title").innerHTML = titles[i];
        sectionsTemplate.querySelector("#blogsTemplate").id = `blogsOf ${titles[i]}`;

        //appending the cloned items back into DOM
        main.appendChild(document.importNode(sectionsTemplate, true));
    }

    //deleting the template from the DOM
    let sectionTemplate = document.querySelector('#sectionsTemplate');
    sectionTemplate.parentNode.removeChild(sectionTemplate);


//adding multiple blogs inside a section
    for(let i = 0; i<titles.length; i++) {
        let section = document.getElementById(`blogsOf ${titles[i]}`);

        for(let j=0; j<15; j++) {
            const blogsTemplate = document.querySelector("#card").cloneNode(true);
            blogsTemplate.id = "card" + (j+1);
            section.appendChild(document.importNode(blogsTemplate, true));
        }

        let firstCard = document.querySelector('#card');
        firstCard.parentNode.removeChild(firstCard);
    }