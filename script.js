let good= document.getElementById("good")
let map= document.getElementById("map")
let button= document.getElementById("button")
let pirate= document.getElementById("pirate")




map.onclick=function (event) {
    pirate.style.left=event.offsetX-25+"px"
    pirate.style.top=event.offsetY-50+"px"
    // event.log(input.value)a
    // event.perevntdefaoult()
    console.log("hellow world")
    good.innerHTML=("HOT!!!!!!")
}

button.onclick=function (event){
    console.log("hellow world")
}
