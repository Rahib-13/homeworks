let reverseWord = "Hello World!",
    reverseWord2= "a good example";


function reverse(){
   let reversed= reverseWord2.split(" ").reverse().join(" ")
    return reversed
}
console.log(reverse(reverseWord2));


// !task 2 


let a = "A"


console.log(a.toLowerCase().charCodeAt());
console.log(a.toUpperCase().charCodeAt());



// !task3

function toString(cumle){
    const cevrilmiscumle= cumle.split('').reverse().join('');
    const cevrilmissoz=cevrilmiscumle.split(' ').reverse().join(' ');   
    return cevrilmissoz
}
let cumlemiz= "Hello World!"


console.log(toString(cumlemiz));





