/*global $, window, console*/ 


$(function () {


    "use strict";
    //mob-head stars 

    
    // Stars :

    // stars : part1 > assign data-value to 1 during clicking on specified star & fullfill the previous stars
    $("stars .fa-star").click(function(){
        if($(this).hasClass('checked')){
            $(this).nextAll().attr("class","far fa-star");
            // assign data value to 1 for checking that the user clicked here
            $(this).attr("data-value","1").siblings().attr("data-value","0");
        }
        else{
            $(this).attr("class","fas fa-star checked");
            $(this).prevAll().attr("class","fas fa-star checked");
            // assign data value to 1 for checking that the user clicked
            $(this).attr("data-value","1").siblings().attr("data-value","0");
        }
    });
        // Stars : lighting stars during hover

    $("stars .fa-star").hover(function () {
            $(this).nextAll().attr("class","far fa-star");
            $(this).attr("class","fas fa-star checked");
            $(this).prevAll().attr("class","fas fa-star checked").delay(2000);

        }, function (){
            if($(this).attr("data-value") == 1){
            $("stars .fa-star").attr("class","fas fa-star checked");
            $("stars .fa-star[data-value='1']").nextAll().attr("class","far fa-star");
            $("stars .fa-star[data-value='1']").prevAll().attr("class","fas fa-star checked");
            }
            else{
                $("stars .fa-star:nth-child(1)").attr("class","fas fa-star checked");
                $("stars .fa-star:nth-child(2)").attr("class","fas fa-star checked");
                $("stars .fa-star:nth-child(3)").attr("class","fas fa-star checked");
                $("stars .fa-star:nth-child(4)").attr("class","far fa-star");
                $("stars .fa-star:nth-child(5)").attr("class","far fa-star");

            }

            
        });

        // centering the mobile photo which exists after nav
        $(window).resize(function () { 
        $(".white-mob").css("left",(($(".part-white").innerWidth())-($(".white-mob img").width()))/2);
        $(".gray").css("left",(($(".part-white").innerWidth())-($(".gray").width()))/2);
        });

        $(".white-mob").css("left",(($(".part-white").innerWidth())-($(".white-mob img").width()))/2);
        $(".gray").css("left",(($(".part-white").innerWidth())-($(".gray").width()))/2);

               // centering the mobile photo which exists in latest mobiles section

               $(window).resize(function () {  
            $(".latest-mobs .img").css("left",(($(".white-latest").width())-($(".latest-mobs img").width()))/2);
            $(".gray-latest").css("left",(($(".white-latest").width())-($(".gray-latest").width()))/2);
               });


            $(".latest-mobs .img").css("left",(($(".white-latest").width())-($(".latest-mobs img").width()))/2);
            $(".gray-latest").css("left",(($(".white-latest").width())-($(".gray-latest").width()))/2);

               // centering the mobile photo which exists in latest mobiles section which appears on tablet
               $(window).resize(function () { 
                $(".java .img").css("left",(($(".java .white-latest").width())-($(".java img").width()))/2);
                $(".java .gray-latest").css("left",(($(".java .white-latest").width())-($(".java .gray-latest").width()))/2);  
               });
            $(".java .img").css("left",(($(".java .white-latest").width())-($(".java img").width()))/2);
            $(".java .gray-latest").css("left",(($(".java .white-latest").width())-($(".java .gray-latest").width()))/2);




        // make The button "معلومات أكثر" Clickable
        var more=$("mob-info .more");

    more.click(function(){
        if (more.attr("data-value")==0){
            $("mob-info ul > li").hide(500,function(){
            $("ul > li:nth-child(1)").fadeIn();
            $("ul > li:nth-child(2)").fadeIn();
            $("ul > li:nth-child(3)").fadeIn();
            more.text("معلومات أكثر");
            $(window).scrollTop(480);
            more.attr("data-value","1");
        });
    }

        else{
            $("mob-info ul > li").show();
            more.text("معلومات أقل");
            more.attr("data-value","0");
        }

    });

        // Increasing the highet automatically in case of insreasing the text in mobile info which is in the right part
   $("mob-info ul > li span.content").each(function () {
    $(this).animate({
    },10,function(){
        if($(this).height() != '62'){
            $(this).css("line-height","31px");
        }
    });
    $(this).animate({
    },10,function(){
            $(this).parent().height($(this).height());
    });

    });

    // show text during hover on the green point in mob-info & increaseing font-size of the green
    $("mob-info .info-right .content i").hover(function () {
        $(this).parent().siblings("span.text").css("visibility","visible");
        $(this).css("font-size","13px");
        
    }, function () {
        $(this).parent().siblings("span.text").css("visibility","hidden");
        $(this).css("font-size","11px");
    }
);
            
        });
                

