var $ = function(id){
    return document.getElementById(id);
}

var countDownEvent = function(){

    var namee = $('eventName');
    var date = $('date');
    isValid = true;

    if (namee.value.length === 0){
        namee.nextElementSibling.innerHTML = "Làm ơn nhập tên sự kiện :'(";
        isValid = false;
    } else {
        namee.nextElementSibling.innerHTML = " ";
    }

    if (date.value.length == 0){
        date.nextElementSibling.innerHTML = "Làm ơn nhập ngày :'(";
        isValid = false;
    } else {
        date.nextElementSibling.innerHTML = " ";
    }
}

function event(){
    
}


var submitButton = $('btn');
submitButton.onclick = countDownEvent;