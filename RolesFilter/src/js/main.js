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
          "knockout":"libs/knockout/knockout-3.5.1",
          "jquery":"libs/jquery/jquery-3.5.1.min",
          "jqueryui-amd":"libs/jquery/jqueryui-amd-1.12.1.min",
          "promise":"libs/es6-promise/es6-promise.min",
          "hammerjs":"libs/hammer/hammer-2.0.8.min",
          "ojdnd":"libs/dnd-polyfill/dnd-polyfill-1.0.2.min",
          "ojs":"libs/oj/v9.2.0/min" + (_ojNeedsES5 ? "_es5" : ""),
          "ojL10n":"libs/oj/v9.2.0/ojL10n",
          "ojtranslations":"libs/oj/v9.2.0/resources",
          "persist":"libs/persist/min",
          "text":"libs/require/text",
          "signals":"libs/js-signals/signals.min",
          "touchr":"libs/touchr/touchr",
          "regenerator-runtime":"libs/regenerator-runtime/runtime",
          "corejs":"libs/corejs/shim.min",
          "customElements":"libs/webcomponents/custom-elements.min",
          "proj4":"libs/proj4js/dist/proj4-src",
          "css":"libs/require-css/css.min",
          "css-builder":"libs/require-css/css-builder",
          "normalize":"libs/require-css/normalize",
      },
      shim: {
          'particles-conf':{

          },
          "particles.min" : {

          }
      }
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
require(['ojs/ojbootstrap', 'knockout', 'appController', 'ojs/ojknockout', 'particles.min', 'particles-conf'],
  function (Bootstrap, ko, app) {
      Bootstrap.whenDocumentReady().then(
          function () {
              function init() {
                  ko.applyBindings(app, document.getElementById('wrapper'));
              }
              if (document.body.classList.contains('oj-hybrid')) {
                  document.addEventListener('deviceready', init);
              } else {
                  init();
              }
          }
      );
  }
);


