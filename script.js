let good= document.getElementById("good")
let map= document.getElementById("map")
let button= document.getElementById("button")
let pirate= document.getElementById("pirate")
let timur= "ANTARTİCA"
let treasureX=Math.random()*400+50
let treasureY=Math.random()*400+50
let gamenumber=document.getElementById("gamenumber")
let numbertitle=document.getElementById("numbertitle")
let steps=0





map.onclick=function (event) {
    let pirateX=event.offsetX-25
    let pirateY=event.offsetY-50
    pirate.style.left=pirateX+"px"
    pirate.style.top=pirateY+"px"
    let X=treasureX-pirateX
    let Y=treasureY-pirateY
    let dist=Math.sqrt(X**2+Y**2)
    //todo event.log(input.value)a
    //todo event.perevntdefaoult()
    console.log(dist)
    good.innerHTML=timur
    if (dist<10) {
        good.innerHTML= "YOU WİN!!!!!!!!!!!!!"
        map.style.pointerEvents="none"
    }

    else if(dist<25){
        good.innerHTML="BOİLİNG LAVA!!!!!!!!!!!!!!"
    }
    else if(dist<60){
        good.innerHTML="VERY HOT!!!!"
    }
    else if(dist<80){
        good.innerHTML="ooh yes thats HOT"
    }
    else if (dist<110){
        good.innerHTML= "yes warm "
    }
    else if(dist<160){
        good.innerHTML="  cool !!! ,not so cold"
    }
    else if(dist<200){
        good.innerHTML= " COLD"
    }
    else if(dist<300){
        good.innerHTML="NOT antaratica but so COLD"
    }
    else{
        good.innerHTML="ANTARCTİCA"
    }
    steps=steps+1
    console.log(steps)
    numbertitle.innerHTML="number="+steps

}

button.onclick=function (event){
    console.log("hellow world")
    good.innerHTML=("GOOD LUCK!!!!")
    map.style.pointerEvents="auto"
    pirate.style.left="55px"
    pirate.style.top="10px"
    steps=0
    numbertitle.innerHTML="number="+0
     treasureX=Math.random()*400+50
     treasureY=Math.random()*400+50
    //todo  console.log(treasureX,treasureY);
}
