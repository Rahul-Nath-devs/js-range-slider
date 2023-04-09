
//* Volume change js
let rangeSlider=document.querySelector(".settings .slider")
let range = document.querySelector(".settings .val")
let icon= document.querySelector(".settings .vol")


function priceChange(){
    range.innerHTML=rangeSlider.value
    if(rangeSlider.value == 0){
         icon.innerHTML=`<i class="bi bi-volume-mute"></i>`
    }else{
        icon.innerHTML=`<i class="bi bi-volume-up"></i>`
    }
}

rangeSlider.addEventListener("change" , priceChange)
// Volume change js ends

//* Brightness change js

let priceSlider = document.querySelector(".settings .slide")
let price = document.querySelector(".settings .valu")
let iconTwo = document.querySelector(".settings .bright")

function rangeChange(){
    price.innerHTML=priceSlider.value
    if(priceSlider.value==0){
        iconTwo.innerHTML=`<i class="bi bi-brightness-low"></i>`
    }else{
       iconTwo.innerHTML= `<i class="bi bi-brightness-high"></i>`
    }
}  
    priceSlider.addEventListener("change" , rangeChange)

//* Brightness js ends