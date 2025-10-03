//select
let addClass = document.getElementsByClassName("classes-to-add")
let removeClass = document.getElementsByClassName("classes-to-remove")
let currentElement = document.getElementsByClassName("current")
let resultClass = document.querySelector(".classes-list").lastElementChild


//focus on the add
onload = function(){
    addClass[0].focus()
}
// handel Var
let result = []
//add
    if(resultClass.innerHTML == ""){
        resultClass.innerHTML = "No classes add"
    }

addClass[0].addEventListener("focus",function(){
    addClass[0].addEventListener("blur",function(){
        let valueAdd = (addClass[0].value).split(" ")
        if(addClass[0].value != ""){
        for(let i = 0;i < valueAdd.length; i++){
            if(!(currentElement[0].classList.contains(valueAdd[i])) && valueAdd[i] != ''){
                currentElement[0].classList.add(valueAdd[i].toLowerCase())
                if(resultClass.innerHTML != ""){
                    if(resultClass.innerHTML == "No classes add"){
                        resultClass.innerHTML = ""
                    }
                    resultClass.innerHTML += `<span>${valueAdd[i].toLowerCase()}</span>`
                }
                        result.push(valueAdd[i].toLowerCase()) 
                        console.log(result)
            }
        }
        addClass[0].value = ""
    }
})
})


//remove

removeClass[0].addEventListener("focus",function(){
    removeClass[0].addEventListener("blur",function(){
        let valueRemove = (removeClass[0].value).split(" ")
        if(removeClass[0].value != ""){
            for(let i = 0;i < valueRemove.length; i++){   
                if(valueRemove[i] != ''){
                    currentElement[0].classList.remove(valueRemove[i].toLowerCase())
                    resultClass.removeChild(resultClass.childNodes[result.indexOf(valueRemove[i].toLowerCase())])
                    result.splice(result.indexOf(valueRemove[i].toLowerCase()),1)
                    removeClass[0].value = ""
                }
        }
        console.log(result)
        if(resultClass.innerHTML == ""){
            resultClass.innerHTML = "No classes add"
        }
        }
    })
})