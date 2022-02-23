/*
 * @Description: 
 * @Author: lz
 * @Date: 2022-02-09 01:02:54
 * @LastEditors: lz
 * @LastEditTime: 2022-02-21 10:54:48
 */
$(function(){
    var windowHeight=$(window).height();
    var documentHeight=$(document).height();
    //console.log(windowHeight);
    //console.log(documentHeight);
    $(window).scroll(function(){
        var scrollHeight=$(document).scrollTop();
        //console.log(scrollHeight);
        var n=documentHeight-windowHeight;
        var bili=scrollHeight/n;
        // console.log(bili*100+"%")
        $(".top-bar").width(bili*100+"%");
    })
})