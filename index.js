const titles = [
  ["Trending", 12], //name and amount of blogs in a section
  ["Most Popular", 20],
  ["Most Viewed", 15],
  ["Your Choice", 10],
];

//adding different sections {
let main = document.querySelector("#main");

for (let i = 0; i < titles.length; i++) {
  //cloning the template
  const sectionsTemplate = document.querySelector("#sectionsTemplate").cloneNode(true);

  //changing the id's and name accordingly
  const sectionId = titles[i][0];
  sectionsTemplate.id = sectionId;
  sectionsTemplate.querySelector("#title").innerHTML = titles[i][0];
  sectionsTemplate.querySelector("#blogsTemplate").id = `blogsOf ${titles[i][0]}`;

  //appending the cloned items back into DOM
  main.appendChild(document.importNode(sectionsTemplate, true));
}

//deleting the template from the DOM
let sectionTemplate = document.querySelector("#sectionsTemplate");
sectionTemplate.parentNode.removeChild(sectionTemplate);
// } different sections added

//adding multiple blogs inside a section {
for (let i = 0; i < titles.length; i++) {
  let section = document.getElementById(`blogsOf ${titles[i][0]}`);

  for (let j = 0; j < titles[i][1]; j++) {
    const blogsTemplate = document.querySelector("#card").cloneNode(true);
    blogsTemplate.id = "card" + (j + 1);
    section.appendChild(document.importNode(blogsTemplate, true));
  }

  let firstCard = document.querySelector("#card");
  firstCard.parentNode.removeChild(firstCard);
}
// } blogs added
