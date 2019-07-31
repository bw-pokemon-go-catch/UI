window.addEventListener("load", function(event){

    var Style = "url(img/blueskymail.png)";

    var element = document.getElementsByClassName("contact-form-container");

    element[0].style["background-image"] = Style;

    function setMail(){
        Style = this.value;

        console.log(Style);

        if (Style === "creamsky"){
            Style = "url(img/blueskymail.png)";
            element[0].style["background-image"] = Style;
        }

        if (Style === "greetmail"){
            Style = "url(img/greetmail.png)";
            element[0].style["background-image"] = Style;
        }

        if (Style === "lovelymail"){
            Style = "url(img/lovelymail.png)";
            element[0].style["background-image"] = Style;
        }

        return 0;
    }
    document.getElementById("mail").onchange = setMail;

});