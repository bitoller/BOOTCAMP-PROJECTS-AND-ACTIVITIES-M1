let chores = [
  { title: "Pick up after the dog", type: "urgent" },
  { title: "Do the dishes", type: "urgent" },
  { title: "Vacuum around", type: "priority" },
  { title: "Dust the shelves off", type: "normal" },
];

function createCards(chores, id) {
  let elementList = document.createElement("li");
  let name = document.createElement("span");
  name.innerText = chores.title;
  let type = document.createElement("div");
  type.classList.add("circle");
  type.classList.add(chores.type);
  let button = document.createElement("button");
  button.setAttribute("id", `trash-${id}`);
  button.setAttribute("onclick", `deleteItem(${id})`);
  let imgCard = document.createElement("img");
  imgCard.src = "./img/trash.svg";
  imgCard.classList.add("trash");
  button.append(imgCard);
  elementList.append(type, name, button);

  return elementList;
}

function renderCards(chores) {
  let choreList = document.querySelector(".choresList");
  choreList.innerHTML = "";
  let filteredChores = filterByType(chores);
  for (let i = 0; i < filteredChores.length; i++) {
    const render = createCards(filteredChores[i], i);
    choreList.append(render);
  }
}

function filterByType(chores) {
  const urgent = chores.filter(function (chore) {
    return chore.type == "urgent";
  });
  const priority = chores.filter(function (chore) {
    return chore.type == "priority";
  });
  const normal = chores.filter(function (chore) {
    return chore.type == "normal";
  });
  let filteredChores = [];
  filteredChores = filteredChores.concat(urgent);
  filteredChores = filteredChores.concat(priority);
  filteredChores = filteredChores.concat(normal);

  return filteredChores;
}
renderCards(chores);

function receiveInput() {
  const button = document.querySelector(".submit");
  button.addEventListener("click", function (event) {
    event.preventDefault();
    const inputResult = document.querySelector(".inputText").value;
    const selectResult = document.querySelector(".select").value;
    if (inputResult != "") {
      if (selectResult.toLowerCase() != "choose the type") {
        chores.push({ title: inputResult, type: selectResult });
        renderCards(chores);
      }
    }
  });
}
receiveInput();

function deleteItem(id) {
  chores.splice(id, 1);
  renderCards(chores);
}
//filter no chores
//input = receive input
//chamar render card no chores

function search() {
  const button = document.querySelector("#search");
  button.addEventListener("click", function () {
    const searchResult = document.querySelector(".search").value;
    let filteredChores = chores.filter(function (element) {
      return element.title.toLowerCase().includes(searchResult.toLowerCase());
    });
    renderCards(filteredChores);
  });
}
search();
