const text_field = document.querySelector("#todo_field")
const list_container = document.getElementById("list_container")
const btn = document.querySelector("#btn")

btn.addEventListener('click', () => {
    
    if(text_field.value === ''){
        alert("please enter a task in your list");
    }
    else{ 
      let li = document.createElement("li")
      li.innerHTML = text_field.value
      list_container.appendChild(li);
      let span = document.createElement("span")
      span.innerHTML="\u00d7";
      li.appendChild(span)
    }
    
    text_field.value = "";
    saveData()
});

list_container.addEventListener("click", function(e){

  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData()
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData()
  }

},false)

function saveData(){
    localStorage.setItem("data", list_container.innerHTML)
}
function displayData(){
    list_container.innerHTML = localStorage.getItem("data");
}
displayData();