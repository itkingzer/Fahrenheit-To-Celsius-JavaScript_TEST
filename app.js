let Value1 = document.getElementById("inputvalue");
let Value2 = document.getElementById("inputvalue2")
let Answer = document.getElementById("Answer");
let Title = document.getElementById("title");
function ChangeEvent(){
    if (Value1.id == "inputvalue"){
        Value1.id = "inputvalue2"
        Title.innerHTML ="โปรแกรมแปลงค่า Celsius เป็น Fahrenheit "
        Answer.innerHTML = ""
    }else if(Value1.id == "inputvalue2"){
         Value1.id = "inputvalue"
         Title.innerHTML ="โปรแกรมแปลงค่า Fahrenheit เป็น Celsius "
         Answer.innerHTML = ""
    }
}

function convertFahrenheit(){
    let result = (Value1.value-32) * 5/9;
    Answer.innerHTML = result.toFixed(2)+"°C"
}

function convertCelsius(){
    let result = (Value1.value*9/5) + 32;
Answer.innerHTML = result.toFixed(2)+"°F"
}

function Enterpress(event){
    if(event.key=="Enter"){
        if (Value1.id == "inputvalue"){
            Title.innerHTML="โปรแกรมแปลงค่า Fahrenheit เป็น Celsius"
            convertFahrenheit();
        }else{
            convertCelsius();
        }
    }
}



