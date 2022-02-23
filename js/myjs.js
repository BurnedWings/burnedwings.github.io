/*
 * @Description: 
 * @Author: lz
 * @Date: 2022-02-23 22:57:49
 * @LastEditors: lz
 * @LastEditTime: 2022-02-23 22:57:50
 */
var navMid = document.getElementById("navMid");
    var navBar = document.getElementById("navBar");
    document.onwheel = function (event) {
        var heightTop = window.pageYOffset;
        if (heightTop == 0) {
            navBar.style.opacity = 0;
            navMid.style.left="53%";
        } else {
            navBar.style.opacity = 1;
            navMid.style.left="50%";
        }
        //  console.log(heightTop);
        //     navBar.style.opacity=1;
        // return false;
    }
    navBar.onmouseover = function (event) {
        navBar.style.opacity = 1;
        navMid.style.left="50%";
    }
    navBar.onmouseout = function (event) {
        var heightTop = window.pageYOffset;
        if (heightTop == 0) {
            navBar.style.opacity = 0;
            navMid.style.left="53%";
        }
    }
    //低版本jquery用的是$(window).load()函数，高版本用的是$(window).on()
    $(window).on('load',function handlePreloader() {
            if ($('.out').length) {
                $('.out').delay(2500).fadeOut(1000);
            }
        });