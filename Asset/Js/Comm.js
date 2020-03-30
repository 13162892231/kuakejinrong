var mySwiper, timeout = null, timeouta = null, timeoutb = null, timeoutc = null;
var shareUrl="http://www.ufirefly.com/chuanyue-h5/HtmlPage.html", shareImgUrl="http://www.ufirefly.com/chuanyue-h5/Asset/Images/result_0.jpg";
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

$(function () {
    var url = location.href;
    var id = GetQueryString("type");
    if ( id != null) {
        $(".loader").hide();
        $(".swiper-container").hide();
        $(".question").hide();
        $("#result").show();
        $(".transition").hide();
        $(".result").show();
        $(".result" + id).show();
        $(".result2 .left_enter").addClass("flower");
        $(".result3 .left_enter").addClass("runner");
        $(".result4 .left_enter").addClass("horse");
        $(".result5 .left_enter").addClass("hand");
        $(".result6 .left_enter").addClass("apple");
        $(".result6 .animate").addClass("go");
        $(".result7 .right_enter").addClass("eagle");
        $(".return").addClass("float");
        $(".show").addClass("float");
        $(".share_content").show();
        $(".share_content .btn_chuan").click(function () {
            var jumpUrl = url.split("?")[0];
            window.location.href = jumpUrl;
        });
    }
    var audioPaused = true;
    document.onreadystatechange = subSomething;//当页面加载状态改变的时候执行这个方法. 
    
    function subSomething() 
    { 
        if(document.readyState == 'complete') //当页面加载状态 
            $(".loader").hide();//页面加载完成，去掉loading
        var comm = new Comm();
        mySwiper = comm.swiper();
        //comm.vadio();
    }
    
    //答题跳转
    var number;
    var score=0;
   
    $(".question_con a").each(function(i){
        $(this)[0].addEventListener('touchstart',touch, false);       
    });
    function touch (event){
        var event = event || window.event;
        if(event.type=="touchstart"){
            $(event.currentTarget).parent().parent().find("a").find("span").removeClass("cur");
            var parentId = $(event.currentTarget).parent().parent().parent().parent().attr("id");
            $("#" + parentId + " .question_con a").each(function () {
                $(this).find("img").attr("src", "../chuanyue-h5/Asset/Images/answer_" + $(this).find("img").attr("cur") + ".png");
            });
                $(event.currentTarget).find("img").attr("src", "../chuanyue-h5/Asset/Images/answer_" + $(event.currentTarget).find("img").attr("cur") + "_1.png");
            $(event.currentTarget).find("span").addClass("cur");
        }
    }

    $(".question_con a").click(function () {
        $(this).parent().parent().find("a").find("span").removeClass("cur");
        var parentId = $(this).parent().parent().parent().parent().attr("id");
        $("#" + parentId + " .question_con a").each(function () {
            $(this).find("img").attr("src", "../chuanyue-h5/Asset/Images/answer_" + $(this).find("img").attr("cur") + ".png");
        });
        $(this).find("img").attr("src", "../chuanyue-h5/Asset/Images/answer_" + $(this).find("img").attr("cur") + "_1.png");
        $(this).find("span").addClass("cur");
        var number = parseInt(parentId.split('_')[1]);
        if (number == 14) {
            timeout = setTimeout(function () {
                $(".question").hide();
                $(".swiper-container").hide();
                $(".transition").show();
                $("#result").show();
                $(".result").hide();
            }, 500);
            //分数
            $(".question").each(function () {
                var cla = $(this).find(".cur").parent().attr("class");
                var grade = parseInt(cla.split('_')[1]);
                score += grade;
            });
        } else {
            timeout=setTimeout(function () {
                $("#question_" + number).hide();
                $("#question_" + (number + 1)).show();
                number++;
            }, 500);
        };
       
        
        
        
    })
    //上一题
    $(".left").click(function () {

        var id = $(this).parent().parent().parent().attr("id");
        number = parseInt(id.split('_')[1]);
        if (id == "question_1") {
            
        }
        else {
                    
                $("#question_" + number).hide();
            number--;
            $("#question_" + number).show();
                    
        }
    })
    //下一题
    $(".right").click(function () {
        var id = $(this).parent().parent().parent().attr("id");
        number = parseInt(id.split('_')[1]);
        if (id == "question_14") {
            if($("#question_" + number).find(".cur").length==0){
                        
            }
            else{
            $(".question").hide();
            $(".swiper-container").hide();
            $(".transition").show();
            $("#result").show();
            $(".result").hide();
            //分数
            $(".question").each(function () {
                var cla = $(this).find(".cur").parent().attr("class");
                var grade = parseInt(cla.split('_')[1]);
                score += grade;
            });
        }
        }
        else {
            if($("#question_" + number).find(".cur").length==0){
                        
            }
            else{
            $("#question_" + number).hide();
            number++;
            $("#question_" + number).show();
        }
        }
    })
        
    var cc = null;
    document.getElementById("unhold").addEventListener('touchstart',touchLong, false);
    document.getElementById("unhold").addEventListener('touchend',touchLong, false);         
    function touchLong (event) {
        var event = event || window.event;
        if(event.type=="touchstart"){
            event.preventDefault();
            $(".mask").addClass("maskAnimation");
            $(".unhold").hide();
            $("#hold").show();
            cc = setTimeout(function () {
                    $(".result").hide();
                    $(".unhold").hide();
                    $(".chuan").addClass("btn_chuanAnimation");
                    $(".return").addClass("float");
                    $(".show").addClass("float");
                    $('.transition').hide();
                    $('.result1').hide();
                    $('.result2').hide();
                    $('.result3').hide();
                    $('.result4').hide();
                    $('.result5').hide();
                    $('.result6').hide();
                    $('.result7').hide();
                //结果
                    if (score >= 0 && score <= 10) {
                        $(".result3").show();
                        shareUrl = "http://www.ufirefly.com/chuanyue-h5/HtmlPage.html?type=3";
                        shareImgUrl = "http://www.ufirefly.com/chuanyue-h5/Asset/Images/result_3.jpg";
                    }
                    else if (score >= 11 && score <= 18) {
                        $(".result6").show();
                        shareUrl = "http://www.ufirefly.com/chuanyue-h5/HtmlPage.html?type=6";
                        shareImgUrl = "http://www.ufirefly.com/chuanyue-h5/Asset/Images/result_6.jpg";
                    }
                    else if (score >= 19 && score <= 26) {
                        $(".result5").show();
                        shareUrl = "http://www.ufirefly.com/chuanyue-h5/HtmlPage.html?type=5";
                        shareImgUrl = "http://www.ufirefly.com/chuanyue-h5/Asset/Images/result_5.jpg";
                    }
                    else if (score >= 27 && score <= 32) {
                        $(".result2").show();
                        
                        shareUrl = "http://www.ufirefly.com/chuanyue-h5/HtmlPage.html?type=2";
                        shareImgUrl = "http://www.ufirefly.com/chuanyue-h5/Asset/Images/result_2.jpg";
                    }
                    else if (score >= 33 && score <= 39) {
                        $(".result1").show();
                        shareUrl = "http://www.ufirefly.com/chuanyue-h5/HtmlPage.html?type=1";
                        shareImgUrl = "http://www.ufirefly.com/chuanyue-h5/Asset/Images/result_1.jpg";
                    }
                    else if (score >= 40 && score <= 48) {
                        $(".result4").show();
                        shareUrl = "http://www.ufirefly.com/chuanyue-h5/HtmlPage.html?type=4";
                        shareImgUrl = "http://www.ufirefly.com/chuanyue-h5/Asset/Images/result_4.jpg";
                    }
                    else if (score >= 49 && score <= 56) {
                        $(".result7").show();
                        shareUrl = "http://www.ufirefly.com/chuanyue-h5/HtmlPage.html?type=7";
                        shareImgUrl = "http://www.ufirefly.com/chuanyue-h5/Asset/Images/result_7.jpg";
                    }
                    $(".result").show();
                    $(".title").addClass("titleAnimation");
                    //$(".left_enter").addClass("left_enterAnimation");
                    //$(".right_enter").addClass("right_enterAnimation");
                    $(".result2 .left_enter").addClass("flower");
                    $(".result3 .left_enter").addClass("runner");
                    $(".result4 .left_enter").addClass("horse");
                    $(".result5 .left_enter").addClass("hand");
                    $(".result6 .left_enter").addClass("apple");
                    $(".result6 .animate").addClass("go");
                    $(".result7 .right_enter").addClass("eagle");
                    $(".normal").show();
            }, 1000)
        }
        else if(event.type=="touchend"){
            event.preventDefault();
            $(".mask").removeClass("maskAnimation");
            $("#hold").hide();
            $(".unhold").show();
            clearTimeout(cc);
        }
    }

    $(".normal .btn_chuan").click(function () {
        $("#result").hide();
        $(".result").hide();
        $(".swiper-container").show();
        mySwiper.swipeTo(0);
        window.location.reload();
    });
    $(".btn_return").click(function () {
        $("#result").hide();
        $("#question_1").show();
        $(".question_con a").find("span").removeClass("cur");
        $(" .question_con a").each(function () {
            $(this).find("img").attr("src", "../chuanyue-h5/Asset/Images/answer_" + $(this).find("img").attr("cur") + ".png");
            });
        score=0;
        clearclass();
        $(".unhold").show();
        $("#hold").hide();

    });
    $(".btn_show").click(function () {
        $(".shake_mark").show();
    });
    $(".shake_mark").click(function () {
        $(".shake_mark").hide();
    })
});


        var Comm = function () {
            this.swiper = function () {
                mySwiper = new Swiper('.swiper-container', {
                    mode: 'vertical',
                    onSwiperCreated: function (swiper) {
                        $(".scene-a").addClass("scene-a_bg1");
                        timeouta = setTimeout(function () {
                            $(".scene-a").removeClass("scene-a_bg1");
                            $(".scene-a").addClass("scene-a_bg2");
                            $(".icon").addClass("iconAnimation");
                            $(".scene_01").addClass("Animation_01");
                            $(".scene_02").addClass("Animation_01");
                            $(".scene_03").addClass("Animation_01");
                            $(".scene_04").addClass("Animation_01");
                            $(".scene_05").addClass("Animation_01");
                            $(".scene_06").addClass("Animation_01");
                            $(".scene_07").addClass("Animation_01");
                            $(".scene_08").addClass("Animation_01");
                            $(".scene_09").addClass("Animation_01");
                            $(".mask").addClass("maskAnimation");
                        }, 1000);
                        
                    },
                    onSlideChangeEnd: function (swiper) {
                        clearclass();
                        activeIndex = swiper.activeIndex;
                        switch (activeIndex) {
                            case 0:
                                $(".scene-a").addClass("scene-a_bg1");
                                timeoutb = setTimeout(function () {
                                    $(".scene-a").removeClass("scene-a_bg1");
                                    $(".scene-a").addClass("scene-a_bg2");
                                    $(".icon").addClass("iconAnimation");
                                    $(".scene_01").addClass("Animation_01");
                                    $(".scene_02").addClass("Animation_01");
                                    $(".scene_03").addClass("Animation_01");
                                    $(".scene_04").addClass("Animation_01");
                                    $(".scene_05").addClass("Animation_01");
                                    $(".scene_06").addClass("Animation_01");
                                    $(".scene_07").addClass("Animation_01");
                                    $(".scene_08").addClass("Animation_01");
                                    $(".scene_09").addClass("Animation_01");
                                    $(".mask").addClass("maskAnimation");
                                }, 1000);
                                break;
                            case 1:
                                $(".main").addClass("mask");
                                $(".b_runner_01").addClass("runner");
                                $(".b_runner_02").addClass("runner");
                                $(".b_runner_03").addClass("runner");
                                $(".light").addClass("lightAnimation");
                                $(".b_icon").addClass("iconAnimation");
                                timeoutc =setTimeout(function () {
                                    $(".main").addClass("scaleOut");
                                },3000)
                                break;
                            case 2:
                                $(".c_runner_01").addClass("runner");
                                $(".c_runner_02").addClass("runner");
                                $("#question_1").show();
                                break;
                            case 3:
                                $("#result").show();
                                $(".transition").show();
                                $(".chuan").addClass("btn_chuanAnimation");
                                $(".return").addClass("float");
                                $(".show").addClass("float");
                                break;
                        }
                    },
                    onSlideChangeStart: function (swiper) {
                        clearclass();
                        activeIndex = swiper.activeIndex;
                        switch (activeIndex) {
                            case 0: break;
                            case 1: break;
                            case 2: break;
                            case 3: break;
                            case 4: break;
                        }
                    }
                });
                return mySwiper;
            }

            this.vadio = function () {
                $(".globalAudio").bind("click", function () {
                    var media = $(this).find("audio")[0];
                    if (media.paused) {
                        media.play();
                        audioPaused = true;
                        $(this).addClass("play");
                    } else {
                        media.pause();
                        audioPaused = false;
                        $(this).removeClass("play");
                    }
                });
            }
        }
        var clearclass = function () {
            $(".scene-a").removeClass("scene-a_bg");
            $(".scene_01").removeClass("Animation_01")
            $(".scene_02").removeClass("Animation_01")
            $(".scene_03").removeClass("Animation_01")
            $(".scene_04").removeClass("Animation_01")
            $(".scene_05").removeClass("Animation_01")
            $(".scene_06").removeClass("Animation_01")
            $(".scene_07").removeClass("Animation_01")
            $(".scene_08").removeClass("Animation_01")
            $(".scene_09").removeClass("Animation_01")
            $(".main").removeClass("mask");
            $(".main").removeClass("scaleOut");
            $(".b_runner_01").removeClass("runner");
            $(".b_runner_02").removeClass("runner");
            $(".b_runner_03").removeClass("runner");
            $(".light").removeClass("lightAnimation");
            $(".b_icon").removeClass("iconAnimation");
            $(".shake_mark").removeClass("shake_markAn");
            $(".chuan").removeClass("btn_chuanAnimation");
            $(".return").removeClass("float");
            $(".show").removeClass("float");
            $(".question_con span").removeClass("cur");
            $(".left_enter").removeClass("left_enterAnimation");
            $(".right_enter").removeClass("right_enterAnimation");
            $(".title").removeClass("titleAnimation");
            $(".result2 .left_enter").removeClass("flower");
            $(".result4 .left_enter").removeClass("horse");
            $(".result5 .left_enter").removeClass("hand");
            $(".result6 .left_enter").removeClass("apple");
            $(".result6 .animate").removeClass("go");
            $(".result7 .right_enter").removeClass("eagle");
        }
