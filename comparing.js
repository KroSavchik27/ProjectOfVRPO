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