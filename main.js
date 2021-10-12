let index = 0;

function felvesz() {
    let inputData = document.getElementById("bevitel").value;
    let sor = document.createElement("li");
    let checkbox = document.createElement("input");
    let x = document.createElement("span");
    x.append("X");
    x.className = "torles";
    x.setAttribute("data-id", index);

    checkbox.type = "checkbox";
    sor.appendChild(checkbox);
    sor.append(inputData);
    sor.appendChild(x);

    document.getElementById("todo_data").appendChild(sor);

    document.getElementById("bevitel").value = "";
    index++;
}


function init() {
    document.getElementById("bevitel_gomb").addEventListener("click", felvesz);
    document.getElementById("todo_data").addEventListener('click', function(e) {
        this.removeChild(e.target);
      })
}

document.addEventListener("DOMContentLoaded", init);
