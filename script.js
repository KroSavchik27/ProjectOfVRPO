let element1 = document.querySelector('.element1');//
let rotate1 = () =>{//
    element1.classList.toggle('rotate180');//
} //это надо повторить 30 раз
let element2 = document.querySelector('.element2');
let rotate2 = () =>{
    element2.classList.toggle('rotate180');
}
let element3 = document.querySelector('.element3');
let rotate3 = () =>{
    element3.classList.toggle('rotate180');
}
let element4 = document.querySelector('.element4');
let rotate4 = () =>{
    element4.classList.toggle('rotate180');
}
let firstMode = document.querySelector('.firstMode');
let secondMode = document.querySelector('.secondMode');
let thirdMode = document.querySelector('.thirdMode');
let forthMode = document.querySelector('.forthMode');
let nav = document.querySelector('nav');
let nav2 = document.querySelector('.nav2');
let addNav2AndRemoveNav = () =>{
    nav.style.display = 'none';
    nav2.style.display = 'flex';
    element1.style.display = 'block';
    element2.style.display = 'block';//вот это надо повторить 30 раз
}
let quit = document.querySelector('.quit');
let removeNav2AndAddNav = () =>{
    nav.style.display = 'flex';
    nav2.style.display = 'none';
    element1.style.display = 'none';//вот это надо повторить 30 раз
    element2.style.display = 'none';
}
let random_start = 1; // От какого генерировать
let random_end = 15; // До какого генерировать

allСycles = 15;

let arrayOfOddClassNames = [];
let arrayOfEvenClassNames = [];
let arrayOfOddElements = [];
arrayOfOddElements.push(element1);
arrayOfOddElements.push(element3);
arrayOfOddElements.push(element5);
arrayOfOddElements.push(element7);
arrayOfOddElements.push(element9);
arrayOfOddElements.push(element11);
arrayOfOddElements.push(element13);
arrayOfOddElements.push(element15);
arrayOfOddElements.push(element17);
arrayOfOddElements.push(element19);
arrayOfOddElements.push(element21);
arrayOfOddElements.push(element23);
arrayOfOddElements.push(element25);
arrayOfOddElements.push(element27);
arrayOfOddElements.push(element29);
let arrayOfEvenElements = [];
arrayOfEvenElements.push(element2);
arrayOfEvenElements.push(element4);
arrayOfEvenElements.push(element6);
arrayOfEvenElements.push(element8);
arrayOfEvenElements.push(element10);
arrayOfEvenElements.push(element12);
arrayOfEvenElements.push(element14);
arrayOfEvenElements.push(element16);
arrayOfEvenElements.push(element18);
arrayOfEvenElements.push(element20);
arrayOfEvenElements.push(element22);
arrayOfEvenElements.push(element24);
arrayOfEvenElements.push(element26);
arrayOfEvenElements.push(element28);
arrayOfEvenElements.push(element30);
for(i=random_start;i<=random_end;i++){
   arrayOfOddClassNames.push(i);
}

for(countCycles=1;countCycles<=allСycles;countCycles++){
    arrayOfOddElements.classList('1_' + `arrayOfOddClassNames.splice(Math.random()*arrayOfOddClassNames.length,1)[0]`);
}
for(i=random_start;i<=random_end;i++){
    arrayOfEvenId.push(i);
}
 
for(countCycles=1;countCycles<=allСycles;countCycles++){
    arrayOfEvenElements.classList.add('1_' + `arrayOfEvenClassNames.splice(Math.random()*arrayOfEvenClassNames.length,1)[0]`);
}