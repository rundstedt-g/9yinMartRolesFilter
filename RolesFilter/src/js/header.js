define(['knockout', 'jquery',  'ojs/ojknockout', "ojs/ojformlayout", "ojs/ojinputtext"],
    function (ko, $, ) {
        function ViewModel() {
            // 服务器地址
            var address = window.location.protocol + "//" + window.location.hostname + ":8080";

            this.updateTime = ko.observable();

            this.affiche = ko.observable();

            var now = new Date();
            today = now.getDate();
            this.remainingDays = ko.observable(30 - today - 1);

            $.ajax({
                url: address + "/isMaintenance",
                dataType: "json",
                success: function(data){
                    loadData(data);
                }
            });

            var loadData = function (data){
                if(data.isMaintenance == true){
                    location.replace("./maintenance.html");
                }
                else{
                    this.updateTime('数据更新时间：' + data.time);
                    this.affiche(data.affiche);
                }
            }.bind(this);
        }
        return new ViewModel();
    }
);