let countEl = document.getElementById("count-el")
let count=0

function increment(){
	count=count+1
	countEl.innerText=count
}

let saveEl=document.getElementById("save-el")
function save(){
	let countStr= count+" - "
	saveEl.textContent = saveEl.textContent + countStr //	saveEl.innerText = saveEl.innerText + countStr
    countEl.innerText=0
    count=0
}


let welcomeEl=document.getElementById("welcome-el")
let name='Charu'
let greeting = 'Welcome Back'
welcomeEl.innerText= greeting + " "+ name 
