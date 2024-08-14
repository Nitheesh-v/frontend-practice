var popup=document.querySelector(".popup")
var action=document.querySelector(".action")
var adding=document.querySelector(".add")
function show(){
    
    popup.style.display="block"
    action.style.display="block"
}
function cancel(event){
    event.preventDefault()
    popup.style.display="none"
    action.style.display="none"
}
function book(event){

event.preventDefault()
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("title")
var container=document.querySelector(".container")
var author=document.getElementById("author")
var text=document.getElementById("description")
var div=document.createElement("div")
div.setAttribute("class","book-container")
div.innerHTML=`<h2>${booktitle.value}</h2>
<h5>${author.value}</h5>
<p>${text.value}</p>
<button class="btn" onclick="delete1(event)">
    delete
</button>`
container.append(div)
popup.style.display="none"
    action.style.display="none"  
    
}
function delete1(event){
 event.target.parentElement.remove()  

}
