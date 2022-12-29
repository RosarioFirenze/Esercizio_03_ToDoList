/* ASSEGNAZIONI CONSTANTI */

const btn = document.getElementById("btn");
const title = document.getElementById("title");
const aggiorna = document.getElementById("aggiorna");
let firsArr = [];
const cancella = document.getElementById("delete");
const myList = document.getElementById("mylist");
const deleteAll = document.getElementById("elimina");

/* EVENTO Click su tasto Inserisci---pusha nuovi elementi nell'array e aggiorna la lista a video */
btn.addEventListener("click", function(){
  let text = document.getElementById("inputext").value;
  firsArr.push(text);
  aggiorna_lista();
});

/*aggiorna la lista a video */
function aggiorna_lista() {
  document.getElementById("inputext").value = "";
  myList.innerHTML = "";
  firsArr.forEach((element) => {
    let parag = document.createElement("li");
    myList.append(parag);
    parag.insertAdjacentHTML("beforeend", element);
  });
}

/* EVENTO Click su tasto Inserisci---pusha nuovi elementi nell'array e */
cancella.addEventListener("click", function () {
  firsArr.pop();
  console.log(firsArr);
  aggiorna_lista();
});

/* EVENTO Click su tasto Inserisci---pusha nuovi elementi nell'array e */

deleteAll.addEventListener("click", eliminaTutto);
function eliminaTutto() {  
  firsArr.forEach((element) => {
    firsArr= [];
    myList.innerHTML = "";});
}
