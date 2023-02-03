const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", () => {
    const myChapter = input.value;
    input.value = "";

    const listChapter = document.createElement("li");
    const listText = document.createElement("span")
    const deleteBtn = document.createElement("button");

    listChapter.appendChild(listText);
    listChapter.textContent = myChapter;
    listChapter.appendChild(deleteBtn);
    deleteBtn.textContent = "❌"
    list.append(listChapter);

    deleteBtn.addEventListener("click", () => {
        list.removeChild(listChapter);
    });

    input.focus();
});