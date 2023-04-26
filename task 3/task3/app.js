
let body=document.querySelector("body");

function randombg(){
    let images= [
        "/images/boxed-water-is-better-j4YqipX5v40-unsplash.jpg",
        "/images/daniela-beleva-c-xNplXnEHY-unsplash.jpg",
        "/images/daniela-beleva-SxWDjnfWPZU-unsplash.jpg",
        "/images/gabriel-ramos-JFkbmpLrF3o-unsplash.jpg",
        "/images/taisiia-shestopal-Qs9EOnLWgZ0-unsplash.jpg",
    ]
    let randomIndex = Math.floor(Math.random() * images.length)
 body.style.backgroundImage="url('"+images[randomIndex]+"')"
}

randombg()


// !oz fikrim (alnmadi)

// console.log(images.length);

// function getRandomNum(min, max) {
//     return Math.random() * (max - min) + min;
//   }


//   let random_num = getRandomNum(0, 5);




// let cevrilmis=Math.floor(random_num)
// console.log(cevrilmis);
// body.style.backgroundImage=images[0]

