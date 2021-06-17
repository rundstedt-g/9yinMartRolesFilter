define(['knockout', 'jquery', 'ojs/ojbootstrap', 'ojs/ojcorerouter', 'ojs/ojurlparamadapter', 'ojs/ojmodulerouter-adapter',
        'ojs/ojknockoutrouteradapter', 'ojs/ojknockout', 'ojs/ojnavigationlist', 'ojs/ojmodule-element'],
    function (ko, $, Bootstrap , CoreRouter, UrlParamAdapter, ModuleRouterAdapter, KnockoutRouterAdapter) {
        function ViewModel() {
            // 服务器地址
            var address = window.location.protocol + "//" + window.location.hostname + ":8080";

            $.ajax({
                url: address + "/isMaintenance",
                dataType: "json",
                success: function(data){
                    if(data.isMaintenance == true){
                        location.replace("./maintenance.html");
                    }
                    else{
                        document.getElementById('updateTime').innerText = '数据更新时间：' + data.time;
                    }
                }
            });

            // 定义路由
            var routes = [
                { path: "", redirect: "treasure" }, // 默认路由重定向到 treasure
                { path: "treasure"},
                { path: "threeSkills"},
                { path: "skin"},
                { path: "name"}
            ];

            // 创建路由器
            var router = new CoreRouter(routes, {urlAdapter: new UrlParamAdapter()} );
            router.sync(); // 将路由器与当前URL同步。

            // 创建模型路由器适配器，此类设计为oj-module元素和CoreRouter对象之间的适配器。
            // 在类上定义的属性与oj-module元素上的属性相对应。koObservableConfig该类创建和更新的属性基于CoreRouter的当前状态。
            this.moduleAdapter = new ModuleRouterAdapter(router);

            // 创建一个可观察对象以对当前路由器状态做出反应
            this.selection = new KnockoutRouterAdapter(router);
        }
        return new ViewModel();
    }
);