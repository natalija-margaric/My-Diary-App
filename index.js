const entryForm = document.getElementById("entryForm");
const entriesSection = document.getElementById("entries");
const entryTextBox = document.getElementsByClassName("entry-textbox");



function addEntryToDom(event) {
    event.preventDefault();
    const entryDiv = document.createElement("div");
    entryDiv.className = "single-entry";
    entryDiv.innerText = entryTextBox[0].value;
    entriesSection.appendChild(entryDiv);
}

entryForm.addEventListener("submit", addEntryToDom)


