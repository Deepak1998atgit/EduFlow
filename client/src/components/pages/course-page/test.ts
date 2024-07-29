// let array1=[[1,2],[1,2],[1,1],[1,2],[2,2],[1,2],[1,2],[2,1],[2,1]]
// //3

// let array2=[[1,2],[2,1],[3,4],[5,6],[2,1]]
// function Dominos(array){
//     let checked={}
//     let count=1;
//     for(let i=0;i<array.length-1;i++){
//         if(checked[i] !=="cheaked"){
            
//          for(let j=i+1 ;j<array.length;j++){
            
//              if((array[i][0] === array[j][0] && array[i][1] === array[j][1] ) || (array[i][0] === array[j][1] && array[i][1] === array[j][0])){
//                  console.log("i",i,"u")
//                  checked[j]="cheaked"
//                  count++
//              } else {
//                  continue;
//              }
//          }
//         }
    
//     }
//     console.log(checked)
//     count = (count*(count-1))/2
//   return count
// }

// // 1+2 =3 - 1=2   || total sum same

// let result =Dominos(array1)
// console.log(result)


// function fibo(num) {
//     let sum=0
//     let t0 = 0
//     let t1 = 1;
//     let t2 = 1
//     let count =3
//     while (count <= num) {
//         let temp =[]
//         temp[1] = t2;
//         t2 = t0 + t1 + t2
//         temp[0] = t1
//         t1 = temp[1]
//         t0=temp[0]
//         count++
//     }
//     return t2
// }// 1 0 1 2 3 6  11 20  
// 0 1 1 2 4 7 13 24  44 81 149
// 0 1 2 3 4 5  6  7  8  9  10
// console.log(fibo(10))

