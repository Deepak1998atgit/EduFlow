

let arr1 = [2,3,1,3,2,4,6,7,9,2,19];
let arr2 = [2,1,4,3,9,6];   // output = [2,2,2,1,4,3,3,9,6,7,19]

function arrayU(array1,array2) {
    let count = {};
    let res = [];
    for (let i = 0; i < array2.length; i++) {
    
        for (let j = 0; j < array1.length; j++){
            if (array1[j] === array2[i]) {
                count[array1[j]] ="cheaked"
                res.push(array1[j])
               
            }
        }
    }
    let result = arr1.map((elements, index) => {
        if (count[elements] !== "cheaked") {
            return elements
        } 
    }).sort((a,b)=>a+b);
    return result;
}

let res = arrayU(arr1, arr2);
console.log(res);

// find the array2  elemnts  equals array 1
// if yes push to result pushed elemnts should cound as checked 
//  then sort  not checked elemtnts

