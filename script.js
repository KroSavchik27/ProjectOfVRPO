let random_start = 1;
let random_end = 15;

allСycles = 15;

let arrayOfOddClassNames = [];
let arrayOfEvenClassNames = [];

for(i=random_start;i<=random_end;i++){
   arrayOfOddClassNames.push(i);
}
for(i=random_start;i<=random_end;i++){
    arrayOfEvenClassNames.push(i);
}
let value1 = arrayOfOddClassNames.splice(Math.random()*arrayOfOddClassNames.length,1)[0];
let value2 = arrayOfEvenClassNames.splice(Math.random()*arrayOfEvenClassNames.length,1)[0];
let value3 = arrayOfOddClassNames.splice(Math.random()*arrayOfOddClassNames.length,1)[0];
let value4 = arrayOfEvenClassNames.splice(Math.random()*arrayOfEvenClassNames.length,1)[0];
let value5 = arrayOfOddClassNames.splice(Math.random()*arrayOfOddClassNames.length,1)[0];
let value6 = arrayOfEvenClassNames.splice(Math.random()*arrayOfEvenClassNames.length,1)[0];
let value7 = arrayOfOddClassNames.splice(Math.random()*arrayOfOddClassNames.length,1)[0];
let value8 = arrayOfEvenClassNames.splice(Math.random()*arrayOfEvenClassNames.length,1)[0];
let value9 = arrayOfOddClassNames.splice(Math.random()*arrayOfOddClassNames.length,1)[0];
let value10 = arrayOfEvenClassNames.splice(Math.random()*arrayOfEvenClassNames.length,1)[0];
let value11 = arrayOfOddClassNames.splice(Math.random()*arrayOfOddClassNames.length,1)[0];
let value12 = arrayOfEvenClassNames.splice(Math.random()*arrayOfEvenClassNames.length,1)[0];
let value13 = arrayOfOddClassNames.splice(Math.random()*arrayOfOddClassNames.length,1)[0];
let value14 = arrayOfEvenClassNames.splice(Math.random()*arrayOfEvenClassNames.length,1)[0];
let value15 = arrayOfOddClassNames.splice(Math.random()*arrayOfOddClassNames.length,1)[0];
let value16 = arrayOfEvenClassNames.splice(Math.random()*arrayOfEvenClassNames.length,1)[0];
let value17 = arrayOfOddClassNames.splice(Math.random()*arrayOfOddClassNames.length,1)[0];
let value18 = arrayOfEvenClassNames.splice(Math.random()*arrayOfEvenClassNames.length,1)[0];
let value19 = arrayOfOddClassNames.splice(Math.random()*arrayOfOddClassNames.length,1)[0];
let value20 = arrayOfEvenClassNames.splice(Math.random()*arrayOfEvenClassNames.length,1)[0];
let value21 = arrayOfOddClassNames.splice(Math.random()*arrayOfOddClassNames.length,1)[0];
let value22 = arrayOfEvenClassNames.splice(Math.random()*arrayOfEvenClassNames.length,1)[0];
let value23 = arrayOfOddClassNames.splice(Math.random()*arrayOfOddClassNames.length,1)[0];
let value24 = arrayOfEvenClassNames.splice(Math.random()*arrayOfEvenClassNames.length,1)[0];
let value25 = arrayOfOddClassNames.splice(Math.random()*arrayOfOddClassNames.length,1)[0];
let value26 = arrayOfEvenClassNames.splice(Math.random()*arrayOfEvenClassNames.length,1)[0];
let value27 = arrayOfOddClassNames.splice(Math.random()*arrayOfOddClassNames.length,1)[0];
let value28 = arrayOfEvenClassNames.splice(Math.random()*arrayOfEvenClassNames.length,1)[0];
let value29 = arrayOfOddClassNames.splice(Math.random()*arrayOfOddClassNames.length,1)[0];
let value30 = arrayOfEvenClassNames.splice(Math.random()*arrayOfEvenClassNames.length,1)[0];
let arrayOfOddValues = [];
arrayOfOddValues.push(value1);
arrayOfOddValues.push(value3);
arrayOfOddValues.push(value5);
arrayOfOddValues.push(value7);
arrayOfOddValues.push(value9);
arrayOfOddValues.push(value11);
arrayOfOddValues.push(value13);
arrayOfOddValues.push(value15);
arrayOfOddValues.push(value17);
arrayOfOddValues.push(value19);
arrayOfOddValues.push(value21);
arrayOfOddValues.push(value23);
arrayOfOddValues.push(value25);
arrayOfOddValues.push(value27);
arrayOfOddValues.push(value29);
let arrayOfEvenValues = [];
arrayOfEvenValues.push(value2);
arrayOfEvenValues.push(value4);
arrayOfEvenValues.push(value6);
arrayOfEvenValues.push(value8);
arrayOfEvenValues.push(value10);
arrayOfEvenValues.push(value12);
arrayOfEvenValues.push(value14);
arrayOfEvenValues.push(value16);
arrayOfEvenValues.push(value18);
arrayOfEvenValues.push(value20);
arrayOfEvenValues.push(value22);
arrayOfEvenValues.push(value24);
arrayOfEvenValues.push(value26);
arrayOfEvenValues.push(value28);
arrayOfEvenValues.push(value30);
let h = 0;
let arrayOfOddElements = [];
let arrayOfEvenElements = [];
let element1 = document.querySelector('.element1');
arrayOfOddElements.push(element1);
let rotate1 = () =>{
    arrayOfOddElements[0].classList.toggle(`elem1_${arrayOfOddValues[0]}`);
    arrayOfOddElements[0].classList.toggle('flag1');
    h++;
}
let element2 = document.querySelector('.element2');
arrayOfEvenElements.push(element2);
let rotate2 = () =>{
    arrayOfEvenElements[0].classList.toggle(`elem1_${arrayOfEvenValues[0]}`);
    arrayOfEvenElements[0].classList.toggle('flag2');
    h++;
}
let element3 = document.querySelector('.element3');
arrayOfOddElements.push(element3);
let rotate3 = () =>{
    arrayOfOddElements[1].classList.toggle(`elem1_${arrayOfOddValues[1]}`);
    arrayOfOddElements[1].classList.toggle('flag1');
    h++;
}
let element4 = document.querySelector('.element4');
arrayOfEvenElements.push(element4);
let rotate4 = () =>{
    arrayOfEvenElements[1].classList.toggle(`elem1_${arrayOfEvenValues[1]}`);
    arrayOfEvenElements[1].classList.toggle('flag2');
    h++;
}
let element5 = document.querySelector('.element5');
arrayOfOddElements.push(element5);
let rotate5 = () =>{
    arrayOfOddElements[2].classList.toggle(`elem1_${arrayOfOddValues[2]}`);
    arrayOfOddElements[2].classList.toggle('flag1');
    h++;
}
let element6 = document.querySelector('.element6');
arrayOfEvenElements.push(element6);
let rotate6 = () =>{
    arrayOfEvenElements[2].classList.toggle(`elem1_${arrayOfEvenValues[2]}`);
    arrayOfEvenElements[2].classList.toggle('flag2');
    h++;
}
let element7 = document.querySelector('.element7');
arrayOfOddElements.push(element7);
let rotate7 = () =>{
    arrayOfOddElements[3].classList.toggle(`elem1_${arrayOfOddValues[3]}`);
    arrayOfOddElements[3].classList.toggle('flag1');
    h++;
}
let element8 = document.querySelector('.element8');
arrayOfEvenElements.push(element8);
let rotate8 = () =>{
    arrayOfEvenElements[3].classList.toggle(`elem1_${arrayOfEvenValues[3]}`);
    arrayOfEvenElements[3].classList.toggle('flag2');
    h++;
}
let element9 = document.querySelector('.element9');
arrayOfOddElements.push(element9);
let rotate9 = () =>{
    arrayOfOddElements[4].classList.toggle(`elem1_${arrayOfOddValues[4]}`);
    arrayOfOddElements[4].classList.toggle('flag1');
    h++;
}
let element10 = document.querySelector('.element10');
arrayOfEvenElements.push(element10);
let rotate10 = () =>{
    arrayOfEvenElements[4].classList.toggle(`elem1_${arrayOfEvenValues[4]}`);
    arrayOfEvenElements[4].classList.toggle('flag2');
    h++;
}
let element11 = document.querySelector('.element11');
arrayOfOddElements.push(element11);
let rotate11 = () =>{
    arrayOfOddElements[5].classList.toggle(`elem1_${arrayOfOddValues[5]}`);
    arrayOfOddElements[5].classList.toggle('flag1');
    h++;
}
let element12 = document.querySelector('.element12');
arrayOfEvenElements.push(element12);
let rotate12 = () =>{
    arrayOfEvenElements[5].classList.toggle(`elem1_${arrayOfEvenValues[5]}`);
    arrayOfEvenElements[5].classList.toggle('flag2');
    h++;
}
let element13 = document.querySelector('.element13');
arrayOfOddElements.push(element13);
let rotate13 = () =>{
    arrayOfOddElements[6].classList.toggle(`elem1_${arrayOfOddValues[6]}`);
    arrayOfOddElements[6].classList.toggle('flag1');
    h++;
}
let element14 = document.querySelector('.element14');
arrayOfEvenElements.push(element14);
let rotate14 = () =>{
    arrayOfEvenElements[6].classList.toggle(`elem1_${arrayOfEvenValues[6]}`);
    arrayOfEvenElements[6].classList.toggle('flag2');
    h++;
}
let element15 = document.querySelector('.element15');
arrayOfOddElements.push(element15);
let rotate15 = () =>{
    arrayOfOddElements[7].classList.toggle(`elem1_${arrayOfOddValues[7]}`);
    arrayOfOddElements[7].classList.toggle('flag1');
    h++;
}
let element16 = document.querySelector('.element16');
arrayOfEvenElements.push(element16);
let rotate16 = () =>{
    arrayOfEvenElements[7].classList.toggle(`elem1_${arrayOfEvenValues[7]}`);
    arrayOfEvenElements[7].classList.toggle('flag2');
    h++;
}
let element17 = document.querySelector('.element17');
arrayOfOddElements.push(element17);
let rotate17 = () =>{
    arrayOfOddElements[8].classList.toggle(`elem1_${arrayOfOddValues[8]}`);
    arrayOfOddElements[8].classList.toggle('flag1');
    h++;
}
let element18 = document.querySelector('.element18');
arrayOfEvenElements.push(element18);
let rotate18 = () =>{
    arrayOfEvenElements[8].classList.toggle(`elem1_${arrayOfEvenValues[8]}`);
    arrayOfEvenElements[8].classList.toggle('flag2');
    h++;
}
let element19 = document.querySelector('.element19');
arrayOfOddElements.push(element19);
let rotate19 = () =>{
    arrayOfOddElements[9].classList.toggle(`elem1_${arrayOfOddValues[9]}`);
    arrayOfOddElements[9].classList.toggle('flag1');
    h++;
}
let element20 = document.querySelector('.element20');
arrayOfEvenElements.push(element20);
let rotate20 = () =>{
    arrayOfEvenElements[9].classList.toggle(`elem1_${arrayOfEvenValues[9]}`);
    arrayOfEvenElements[9].classList.toggle('flag2');
    h++;
}
let element21 = document.querySelector('.element21');
arrayOfOddElements.push(element21);
let rotate21 = () =>{
    arrayOfOddElements[10].classList.toggle(`elem1_${arrayOfOddValues[10]}`);
    arrayOfOddElements[10].classList.toggle('flag1');
    h++;
}
let element22 = document.querySelector('.element22');
arrayOfEvenElements.push(element22);
let rotate22 = () =>{
    arrayOfEvenElements[10].classList.toggle(`elem1_${arrayOfEvenValues[10]}`);
    arrayOfEvenElements[10].classList.toggle('flag2');
    h++;
}
let element23 = document.querySelector('.element23');
arrayOfOddElements.push(element23);
let rotate23 = () =>{
    arrayOfOddElements[11].classList.toggle(`elem1_${arrayOfOddValues[11]}`);
    arrayOfOddElements[11].classList.toggle('flag1');
    h++;
}
let element24 = document.querySelector('.element24');
arrayOfEvenElements.push(element24);
let rotate24 = () =>{
    arrayOfEvenElements[11].classList.toggle(`elem1_${arrayOfEvenValues[11]}`);
    arrayOfEvenElements[11].classList.toggle('flag2');
    h++;
}
let element25 = document.querySelector('.element25');
arrayOfOddElements.push(element25);
let rotate25 = () =>{
    arrayOfOddElements[12].classList.toggle(`elem1_${arrayOfOddValues[12]}`);
    arrayOfOddElements[12].classList.toggle('flag1');
    h++;
}
let element26 = document.querySelector('.element26');
arrayOfEvenElements.push(element26);
let rotate26 = () =>{
    arrayOfEvenElements[12].classList.toggle(`elem1_${arrayOfEvenValues[12]}`);
    arrayOfEvenElements[12].classList.toggle('flag2');
    h++;
}
let element27 = document.querySelector('.element27');
arrayOfOddElements.push(element27);
let rotate27 = () =>{
    arrayOfOddElements[13].classList.toggle(`elem1_${arrayOfOddValues[13]}`);
    arrayOfOddElements[13].classList.toggle('flag1');
    h++;
}
let element28 = document.querySelector('.element28');
arrayOfEvenElements.push(element28);
let rotate28 = () =>{
    arrayOfEvenElements[13].classList.toggle(`elem1_${arrayOfEvenValues[13]}`);
    arrayOfEvenElements[13].classList.toggle('flag2');
    h++;
}
let element29 = document.querySelector('.element29');
arrayOfOddElements.push(element29);
let rotate29 = () =>{
    arrayOfOddElements[14].classList.toggle(`elem1_${arrayOfOddValues[14]}`);
    arrayOfOddElements[14].classList.toggle('flag1');
    h++;
}
let element30 = document.querySelector('.element30');
arrayOfEvenElements.push(element30);
let rotate30 = () =>{
    arrayOfEvenElements[14].classList.toggle(`elem1_${arrayOfEvenValues[14]}`);
    arrayOfEvenElements[14].classList.toggle('flag2');
    h++;
}
let arrayOfOddFunctions = [];
let arrayOfEvenFunctions = [];
arrayOfOddFunctions.push(rotate1);
arrayOfOddFunctions.push(rotate3);
arrayOfOddFunctions.push(rotate5);
arrayOfOddFunctions.push(rotate7);
arrayOfOddFunctions.push(rotate9);
arrayOfOddFunctions.push(rotate11);
arrayOfOddFunctions.push(rotate13);
arrayOfOddFunctions.push(rotate15);
arrayOfOddFunctions.push(rotate17);
arrayOfOddFunctions.push(rotate19);
arrayOfOddFunctions.push(rotate21);
arrayOfOddFunctions.push(rotate23);
arrayOfOddFunctions.push(rotate25);
arrayOfOddFunctions.push(rotate27);
arrayOfOddFunctions.push(rotate29);

arrayOfEvenFunctions.push(rotate2);
arrayOfEvenFunctions.push(rotate4);
arrayOfEvenFunctions.push(rotate6);
arrayOfEvenFunctions.push(rotate8);
arrayOfEvenFunctions.push(rotate10);
arrayOfEvenFunctions.push(rotate12);
arrayOfEvenFunctions.push(rotate14);
arrayOfEvenFunctions.push(rotate16);
arrayOfEvenFunctions.push(rotate18);
arrayOfEvenFunctions.push(rotate20);
arrayOfEvenFunctions.push(rotate22);
arrayOfEvenFunctions.push(rotate24);
arrayOfEvenFunctions.push(rotate26);
arrayOfEvenFunctions.push(rotate28);
arrayOfEvenFunctions.push(rotate30);
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
setInterval(() =>{
    if(h%2 == 0){
        let flag1 = 0;
        let flag2 = 0;
        arrayOfOddElements.forEach((el, index) =>{
            if(el.classList.contains('flag1')){
                flag1++;
                if(flag1 == 1){
                    index1 = index;
                    firstValue = arrayOfOddValues[index1];
                }
                else if(flag1 == 2){
                    index2 = index;
                    setTimeout(() =>{
                        arrayOfOddFunctions[index1]();
                        arrayOfOddFunctions[index2]();
                    }, '1500');
                }
            }
        })
        arrayOfEvenElements.forEach((el, index) =>{
            if(el.classList.contains('flag2')){
                flag2++;
                if(flag2 == 1){
                    index2 = index;
                    secondValue = arrayOfEvenValues[index2];
                }
                else if(flag2 == 2){
                    index1 = index;
                    setTimeout(() =>{
                        arrayOfEvenFunctions[index2]();
                        arrayOfEvenFunctions[index1]();
                    }, '1500');
                }
            }
        })
        if(flag1 == 1){
            if(firstValue == secondValue){
                setTimeout(() =>{
                    arrayOfOddElements[index1].style.display = 'none';
                    arrayOfEvenElements[index2].style.display = 'none';
                }, '1500')
            }
            else{
                setTimeout(() =>{
                    arrayOfOddFunctions[index1]();
                    arrayOfEvenFunctions[index2]();
                }, '1500');
            }
        }
    }
}, '1600');
