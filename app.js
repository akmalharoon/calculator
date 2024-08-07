// var input = document.getElementById("input")

// function value1(num) {
//  console.log(num)
//  input.value += num

// }
// function allclear1() {
//     input.value = ""
// }
// function equal() {
// input.value = eval(input.value)
    
// }

var input = document.getElementById("input")

function value_(num) {

    input.value += num
}
function clear_() {
    input.value = ""
    
}
function equall() {
    input.value = eval(input.value)
    if(input.value=== 'undefined'){
        input.value = ""
    }
    
        
    

}







function slice_() {

    var deletevalue= input.value.slice(0,-1)
    input.value=deletevalue
}  


var notAbleOnStart = ["+","*","/"]
var operators = ["+","-","*","/"]
function value_(num) {
    if (input.value.replace("-", "") === "") {
        if (notAbleOnStart.includes(num)) {
        } else {
            var lastIndex = input.value.slice(input.value.length - 1)
            if (operators.includes(lastIndex) && operators.includes(num)) {
                input.value = input.value.replace(lastIndex, num)
            } else {
                input.value += num
            }
        }
    } else {
        var lastIndex = input.value.slice(input.value.length - 1)
        if (operators.includes(lastIndex) && operators.includes(num)) {
            input.value = input.value.replace(lastIndex, num)
        } else {
            input.value += num
        }
    }
}



// var notAbleOnStart = ["+","*","/"]

// function value_(num) {
    
//     if(input.value === notAbleOnStart ){
//         input.value = ""
//     }
// }
