window.addEventListener("load", function(event){


    var element = document.getElementsByClassName("navLogo");

    element[0].onmouseover = function(){
        element[0].classList.remove("animated","bounce");
        element[0].classList.add("animated","tada"); 
    }
    
    element[0].onclick = function(){
        element[0].classList.remove("animated","tada"); 
        element[0].classList.add("animated","bounce"); 
    }

    if (element[1]){
    
        element[1].onmouseover = function(){
            element[1].classList.remove("animated","bounce");
            element[1].classList.add("animated","tada"); 
        } 

        element[1].onclick = function(){
            element[1].classList.remove("animated","tada"); 
            element[1].classList.add("animated","bounce"); 
        }
    }

    if (element[2]){

        element[2].onmouseover = function(){
            element[2].classList.remove("animated","bounce");
            element[2].classList.add("animated","tada"); 
        } 

        element[2].onclick = function(){
            element[2].classList.remove("animated","tada"); 
            element[2].classList.add("animated","bounce"); 
        }

    }

});