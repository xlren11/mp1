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

var top_icons = ["icon1", "icon2", "icon3"];
var opac = ["img1", "img2", "img3", "img4", "img5", "img6", "prevB", "nextB", "icon1", "icon2", "icon3", "close"];
var modal_button = ["img1", "img2", "img3", "img4", "img5", "img6"];
$(document).ready(function(){
    var modal = document.getElementById("mod");
    $(window).scroll(function() {
        var pos = $(document).scrollTop();
        if (pos > 50) {
            $("nav").addClass("shrink");
        } else {
            $("nav").removeClass("shrink");
        }
        var scroll_pos = [$('#icon1-scroll').position().top - 80, $('#icon2-scroll').position().top - 80, $('#icon3-scroll').position().top - 80];
        var scroll_height = [$('#icon1-scroll').outerHeight(true),$('#icon2-scroll').outerHeight(true),$('#icon3-scroll').outerHeight(true)];
        if (pos >= scroll_pos[0] && pos < scroll_pos[0] + scroll_height[0]) {
            $("#"+top_icons[0]).addClass("hlt_icon");
        }
        else {
            $("#"+top_icons[0]).removeClass("hlt_icon");
        }
        if (pos >= scroll_pos[1] && pos < scroll_pos[1] + scroll_height[1]) {
            $("#"+top_icons[1]).addClass("hlt_icon");
        }
        else {
            $("#"+top_icons[1]).removeClass("hlt_icon");
        }
        if (pos >= scroll_pos[2] && pos < scroll_pos[2] + scroll_height[2]) {
            $("#"+top_icons[2]).addClass("hlt_icon");
        }
        else {
            $("#"+top_icons[2]).removeClass("hlt_icon");
        }
    });
    for(var i=0; i<top_icons.length; i++) {
        document.getElementById(top_icons[i]).addEventListener("click", function(){
            var s_id = "#" + this.id + "-scroll";
            $('html, body').animate({
                scrollTop: $(s_id).position().top - 80
            }, 1000)
        });
    }
    for(var i = 0; i < opac.length; i++) {
        document.getElementById(opac[i]).addEventListener("mouseover", function() {
            $("#"+this.id).addClass("opacity");
        });
        document.getElementById(opac[i]).addEventListener("mouseout", function() {
            $("#"+this.id).removeClass("opacity");
        });
    }
    for(var i = 0; i < modal_button.length; i++) {
        document.getElementById(modal_button[i]).addEventListener("click", function() {
            var address = "media/introM" + this.id.slice(-1) + ".png";
            $("#mod-img").attr("src", address);
            modal.style.display = "block";
        });
    }
    $("#close").click(function() {
        modal.style.display = "none";
    })

    var slide_width = $('#carousel li').outerWidth();
    var left_shift = -slide_width;
    console.log("left_value=",left_shift);
    $('#carousel li:first').before($('#carousel li:last'));
    $('#carousel ul').css({'left' : left_shift});
    $('#prev').click(function() {
        var left_indent = parseInt($('#carousel ul').css('left')) + slide_width;
        console.log(left_indent);
        $('#carousel ul').animate({'left' : left_indent}, 300 ,function(){
            $('#carousel ul').css({'left' : left_shift});
            $('#carousel li:first').before($('#carousel li:last'));
        });
        return false;
    });
    $('#next').click(function() {
        var left_indent = parseInt($('#carousel ul').css('left')) - slide_width;
        console.log(left_indent);
        $('#carousel ul:not(:animated)').animate({'left' : left_indent}, 300, function () {
            $('#carousel ul').css({'left' : left_shift});
            $('#carousel li:last').after($('#carousel li:first'));
        });
        return false;
    });

});
