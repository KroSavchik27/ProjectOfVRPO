let firstMode = document.querySelector('.firstMode');
let nav = document.querySelector('nav');
let addNav2AndRemoveNav = () =>{
    arrayOfOddElements.forEach((el) =>{
        el.style.display = 'block';
    })
    arrayOfEvenElements.forEach((el) =>{
        el.style.display = 'block';
    })
}