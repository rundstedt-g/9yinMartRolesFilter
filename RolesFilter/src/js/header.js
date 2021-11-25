define(['knockout', 'jquery',  'ojs/ojknockout', "ojs/ojformlayout", "ojs/ojinputtext"],
    function (ko, $, ) {
        function ViewModel() {
            // 服务器地址
            var address = window.location.protocol + "//" + window.location.hostname;

            this.updateTime = ko.observable();

            this.affiche = ko.observable();

            $.ajax({
                url: address + "/api/roleFilter/updateTime",
                dataType: "json",
                success: function(data){
                    loadData(data);
                }
            });

            var loadData = function (data){
                this.updateTime('数据更新时间：' + data.time);
                this.affiche(data.affiche);
            }.bind(this);
        }
        return new ViewModel();
    }
);