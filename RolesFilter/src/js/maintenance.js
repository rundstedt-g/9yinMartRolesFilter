'use strict'; //严格模式声明

(function () {

    // UserAgent用于检测IE11。只有IE11需要ES5。
    function _ojIsIE11() {
        var nAgt = navigator.userAgent;
        return nAgt.indexOf('MSIE') !== -1 || !!nAgt.match(/Trident.*rv:11./);
    }
    var _ojNeedsES5 = _ojIsIE11();

    requirejs.config(
        {
            baseUrl: 'js',

            paths:{
                "jquery":"libs/jquery/jquery-3.5.1.min",
            },
        }
    );
}());

function myQrcodeShow(){
    document.getElementById("qrcodeDialog").style.display="block";
}
function myQrcodeHide(){
    document.getElementById("qrcodeDialog").style.display="none";
}

//初始化
require(['jquery'],
    function ($) {
        $.ajax({
            url:"http://localhost:8080/isMaintenance",
            dataType: "json",
            success: function(data){
                if(data.isMaintenance == false){
                    location.replace("./index.html");
                }
            }
        });
    }
);


