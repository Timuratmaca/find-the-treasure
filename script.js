let good= document.getElementById("good")
let map= document.getElementById("map")
let button= document.getElementById("button")
let pirate= document.getElementById("pirate")
let timur= "HOT"
let treasureX=Math.random()*500
let treasureY=Math.random()*500





map.onclick=function (event) {
    let pirateX=event.offsetX-25
    let pirateY=event.offsetY-50
    pirate.style.left=pirateX+"px"
    pirate.style.top=pirateY+"px"
    let X=treasureX-pirateX
    let Y=treasureY-pirateY
    let dist=Math.sqrt(X**2+Y**2)
    // event.log(input.value)a
    // event.perevntdefaoult()
    console.log(dist)
    good.innerHTML=timur
    if (dist<10) {
        good.innerHTML= "you win!!!!!!!!!!!!!"
    }
    else if(dist<30){
        good.innerHTML="boiling lava"
    }
}

button.onclick=function (event){
    console.log("hellow world")
}
