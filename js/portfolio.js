/*global $, window, console*/ 




$(function () {


    "use strict";
    //mob-head stars 


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


    $("stars .fa-star").hover(function () {
            $(this).nextAll().attr("class","far fa-star");
            $(this).attr("class","fas fa-star checked");
            $(this).prevAll().attr("class","fas fa-star checked");
            Delay(2000);

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
        
        $(".white-mob").css("left",(($(".part-white").width())-($(".white-mob img").width()))/2 + 12);
        $(".gray").css("left",(($(".part-white").width())-($(".gray").width()))/2 + 12);

        $(".latest-mobs .img").css("left",(($(".white-latest").width())-($(".latest-mobs img").width()))/2);
        $(".gray-latest").css("left",(($(".white-latest").width())-($(".gray-latest").width()))/2);


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


        // centering the element in mob-info if The characters is more than 26 Character
        $("mob-info ul > li span.content").each(function () {
                if($(this).text().length > 26){
                $(this).css({"lineHeight":"31px","paddingTop":"2px"});
                delay(500);
                $('mob-info ul > li span.content').eq(15).css({"lineHeight":"62px","paddingTop":"0px"});

                }
            });


        });
                

