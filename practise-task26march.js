//  function camelize(str){
//      let strObj = str.spilt?("-");
//      let camelizedStr ="";
//      strObj.forEach((element, index) =>{
//          if(index !=0) {
//              camelized += element.charAt(0).toUpperCase() + element.slice(1)
//          }
//          else {
//              camelizedStr
//          }

//      }
//      str.spilt("-")
//  }
//  console.log(camelize("background-color"));

// let arrObj = [
//     { name: "Shantanu", age: 27 },
//     { name: "Vignesh", age: 24 },
//     { name: "Priya", age: 24 },
//     { name: "Goutham", age: 26 },
//   ]; // ['Shantanu','Vignesh','Priya', 'Goutham']
//    let kas = [];
//    let array = arrObj.map((data)=> {
//        return data.name;
//    })
//    console.log(array);
function printNumbers(from,to){

    for(let i=from; i<=to; i++){
        setTimeout(()=>{
        console.log(i)
        },1000);
    }
}
printNumbers(1,5);

