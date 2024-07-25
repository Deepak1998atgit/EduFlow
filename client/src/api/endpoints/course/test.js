let array1 = [1, 8,8,2, 3,11, 4, 5,67,0, 6,2,2]
let array2=[2,1,3,6,8,4]    //[2 2 2 1 3 6 8 8 4 0 5 11 67 ]

function Arrayu(array1, array2) {
    let freq={}
    let res = []

    for (let i = 0; i < 6; i++){
        for (let j = 0; j < 13; j++) {
            if (array1[j] === array2[i]) {
                if (freq[array1[j]]) {
                    freq[array1[j]]+1
                } else {
                    freq[array2[j]]=0
                }
             res.push(array1[j])
         }
        }
    }
    return freq
}

let result = Arrayu(array1,array2)
console.log(result)