let good= document.getElementById("good")
let map= document.getElementById("map")
let button= document.getElementById("button")
let pirate= document.getElementById("pirate")
let timur= "ANTARTİCA"
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
        good.innerHTML= "YOU WİN!!!!!!!!!!!!!"
    }
    else if(dist<40){
        good.innerHTML="BOİLİNG LAVA!!!!!!!!!!!!!!"
    }
    else if(dist<60){
        good.innerHTML="VERY HOT!!!!"
    }
    else if(dist<80){
        good.innerHTML="ooh yes thats not cold"
    }
    else if (dist<110){
        good.innerHTML= "not so cold !!!"
    }
    else if(dist<160){
        good.innerHTML=" yes NOT SO COLD "
    }
    else if(dist<200){
        good.innerHTML= " not so cold ore its not???"
    }
    else if(dist<300){
        good.innerHTML="COLD"
    }
    else if (dist<400){
        good.innerHTML="NOT antaratica but so COLD"
    }

}

button.onclick=function (event){
    console.log("hellow world")
}
