let input = document.querySelector(".message")
let button_add = document.querySelector(".add")
let todo = document.querySelector(".todo")

let massiv = []

button_add.addEventListener("click", function(){
    let new_li = document.createElement("li")
    new_li.innerHTML = input.value
    new_li.id = "new_li_id"

    if (input.value){
        todo.appendChild(new_li);
        massiv.push(input.value)
        console.log(massiv)
    }
})

let button_delete = document.querySelector(".delete")

button_delete.addEventListener("click", function(){
    let delete_li = document.getElementById("new_li_id")
    delete_li.remove()
})