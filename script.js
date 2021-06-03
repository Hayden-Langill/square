let number = 0
let number2 = 0
let go = 0

document.getElementById('button').addEventListener('click', square)

function square () {
number = document.getElementById('input').value
alert(number * number)
}

document.getElementById('button2').addEventListener('click', rectangle)

function rectangle () {
number = document.getElementById('input2').value
number2 = document.getElementById('input3').value
alert(number * number2)
}

document.getElementById('button3').addEventListener('click', triangle)

function triangle () {
number = document.getElementById('input4').value
number2 = document.getElementById('input5').value
go = number * number2
alert(go / 2)
}