const paragraphs = document.querySelectorAll("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
console.log(paragraphs);
console.log(document);
console.log(window);

window.onload = () => {
    // create a couple of elements in an otherwise empty HTML page
    const heading = document.createElement("h1");
    const headingText = document.createTextNode("Big Head!");
    heading.appendChild(headingText);
    document.body.appendChild(heading);
};


const story = document.body.querySelector(".story");

// const setText = document.body.querySelector("#set-text");
const setText = document.getElementById('set-text')
setText.addEventListener("click", () => {
    story.textContent = "It was a dark and stormy night...";
});

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
    story.textContent = "";
});


const parent = document.body.querySelector(".parent");

const addChild = document.body.querySelector("#add-child");
addChild.addEventListener("click", () => {
    // Only add a child if we don't already have one
    // in addition to the text node "parent"
    if (parent.childNodes.length > 1) {
        return;
    }
    const child = document.createElement("div");
    child.classList.add("child");
    child.textContent = "childdsad";
    parent.appendChild(child);
});

const removeChild = document.body.querySelector("#remove-child");
removeChild.addEventListener("click", () => {
    const child = document.body.querySelector(".child");
    parent.removeChild(child);
});

function change() {
    // document.getElementsByTagName("h2") returns a NodeList of the <h2>
    // elements in the document, and the first is number 0:
    const header = document.getElementsByTagName("h2").item(0);

    // The firstChild of the header is a Text node:
    header.firstChild.data = "A dynamic document";

    // Now header is "A dynamic document".

    // Access the first paragraph
    const para = document.getElementsByTagName("p").item(0);
    para.firstChild.data = "This is the first paragraph.";

    // Create a new Text node for the second paragraph
    const newText = document.createTextNode("This is the second paragraph.");

    // Create a new Element to be the second paragraph
    const newElement = document.createElement("DIV");

    // Put the text in the paragraph
    newElement.appendChild(newText);

    // Put the paragraph on the end of the document by appending it to
    // the body (which is the parent of para)
    para.parentNode.appendChild(newElement);



}
function setBackground() {
    // now, get all the p elements in the document
    const paragraphs = document.getElementsByTagName("p");

    // get the second paragraph from the list
    const secondParagraph = paragraphs[0];

    for (let index = 0; index < paragraphs.length; index++) {
        const newElement = document.createElement("DIV");
        const text = document.createTextNode('dfsafdf');
        newElement.appendChild(text);
        paragraphs[index].appendChild(newElement);
        paragraphs[index].style.background = 'red';
        paragraphs[index].style.border = '5px solid blue'

        paragraphs[index].removeChild(newElement);
    }

    // set the inline style
    secondParagraph.style.background = "red";
}