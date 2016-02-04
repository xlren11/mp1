var divs = document.getElementsByTagName('div');
for(var i=0; i<divs.length; i++) {
  divs[i].addEventListener("click", highlightThis);
  /*
  divs[i].addEventListener("click", highlightThis, true);
  divs[i].addEventListener("click", highlightThis, false);*/
}

function highlightThis(event) {
    //event.stopPropagation();

    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor='yellow';
    alert(this.className);
    this.style.backgroundColor=backgroundColor;
}
$(document).ready(function(){
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $("nav").addClass("shrink");
        } else {
            //$("#navbar2").fadeIn();
            $("nav").removeClass("shrink");
        }
    });
    $("#icon1").click(function() {
        $('html, body').animate({
            scrollTop: $("#icon1-scroll").offset().top
        }, 500);
    });
    $("#icon2").click(function() {
        $('html, body').animate({
            //var x = $("#icon2-scroll").offset().top
            scrollTop: $("#icon2-scroll").offset().top
        }, 1000);
    });
});
