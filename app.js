let allImages = Array.from(document.querySelectorAll('.image-grp'));
let upImage = document.querySelector('.up-image');
let cross = document.querySelector('.cross');
let right = document.querySelector('.right');
let left = document.querySelector('.left');
let preview = upImage.querySelector('img');
let currentPosition = 0;

let rightForward = () => {
    if(currentPosition == allImages.length -1){
        currentPosition = 0;
    }
    else{
        currentPosition += 1;
    }
    preview.src = allImages[currentPosition].src;
}

allImages.map((elmt,index) =>{
    elmt.addEventListener('click' , ()=> {
     currentPosition = index;
     preview.src = allImages[index].src;
     upImage.classList.add('active')
     right.addEventListener('click' , rightForward)
    })
})

cross.addEventListener('click' , ()=> {
    upImage.classList.remove('active');
})

upImage.addEventListener('click' , (e)=> {
    if(e.target.classList.contains('active')){
        upImage.classList.remove('active');
    }

})


// window.addEventListener('keyup' , (e)=> {
//     if(e.key == 'ArrowRight'){
//         rightForward()
//     }
//     else if(e.key == 'Arrowleft'){
//         leftForward()
//     }

    
// })


window.addEventListener('keydown', (e) => {
    if(e.key == 'ArrowRight'){
        rightForward()
    } else if(e.key == 'ArrowLeft'){
        leftForward()
    }
})

let leftForward = () => {
    if(currentPosition == 0){
        currentPosition = allImages.length - 1;
    }
    else{
        currentPosition -= 1;
    }
    preview.src = allImages[currentPosition].src;
}

allImages.map((elmt,index) =>{
    elmt.addEventListener('click' , ()=> {
     currentPosition = index;
     preview.src = allImages[index].src;
     upImage.classList.add('active')
     left.addEventListener('click' , leftForward)
    })
})


