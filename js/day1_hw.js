
// //==================Exercise #1 ==========//
// /*Write a function that takes in the string and the list of dog names, loops through 
// the list and checks that the current name is in the string passed in. The output should be:
// "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
// */
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]


function findWords(arr,str){
    for (let i=0; i< arr.length; i++){
        if (str.includes(arr[i])){
            console.log(`Match found ${arr[0]}`)
        } else{
            console.log('no matches')
        }
    }
}
findWords(dog_names, dog_string)

// function findWords(arr,str){
//     for (let i=0; i< arr.length; i++){
//         if (arr[0].indexOf(str)>1){
//             console.log( arr[0])
//         } else{
//             console.log('no matches')
//         }
//     }
// }
// findWords(dog_names, dog_string)
// // function findWords(arr,str){
// //     for (let i=0; i< dog_names.length; i++){
// //         console.log(dog_string.includes(dog_names[i]))}
// //     }

// // let dog_func = dog_names.map( name => {
// //     if (name[0] in dog_string){
// //         console.log(name[0])} else{
// //             console.log('no matches')
// //         }
// //     }
// // })

// let dog_name = dog_names.map( name => {
//     if (name.indexOf(dog_string)){
//         console.log(name)}else{
//             console.log('bad')
//         }
//     })


// //============Exercise #2 ============//
// /*Write a fucntion that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i=0; i < arr.length;i++){
        if (i % 2 ==0){
            arr.splice(i,1,"even index")
        }
    } return arr
}
let array = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
console.log(replaceEvens(array))
// //Expected output
// //Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// //Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
