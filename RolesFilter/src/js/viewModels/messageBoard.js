define(['knockout', 'jquery','ojs/ojarraydataprovider', "ojs/ojasyncvalidator-regexp","ojs/ojconverterutils-i18n","ojs/ojconverter-datetime",
        'ojs/ojknockout', 'ojs/ojbutton', "ojs/ojinputtext", "ojs/ojlistitemlayout", "ojs/ojlistview"],
    function(ko, $, ArrayDataProvider, AsyncRegExpValidator, ojconverterutils, dateTimeConverter) {
        function viewModel () {
            // 服务器地址
            var address = window.location.protocol + "//" + window.location.hostname + ":8080";

            this.messageValidator = ko.observableArray([
                new AsyncRegExpValidator({
                    pattern: '[^/\\\\:*?"<>|\]{1,200}',
                    hint: "",
                    messageDetail: '不能含有特殊字符 \\ / : * ? \" < > |',
                }),
            ]);

            this.messageList = ko.observableArray();
            this.messageListDP = new ArrayDataProvider(this.messageList, {keyAttributes: "uuid"});

            var findAll = function (){
                openLoading();
                $.ajax({
                    url: address + "/message",
                    dataType: "json",
                    success: function(data){
                        loadData(data);
                        closeLoading();
                    }
                });
            }.bind(this);

            var loadData = function (data){
                if(data){
                    this.messageList(data);
                }
            }.bind(this);

            findAll();

            this.inputMessage = ko.observable();

            this.submitMessage = function () {
                if(!this.inputMessage()){
                    alert("留言不能为空!");
                    return;
                }
                openLoading();
                $.ajax({
                    url: address + "/message?content=" + encodeURI(this.inputMessage()),
                    dataType: "json",
                    type:"POST",
                    success: function(data){
                        submitResult(data);
                        closeLoading();
                    }
                });
            }.bind(this);

            var submitResult = function (data){
                if(data){
                    alert("留言提交成功!");
                    findAll();
                }
            }.bind(this);

            this.convertTime = function (timeNumber){
                const dateConverter = new dateTimeConverter.IntlDateTimeConverter({pattern:"yyyy/MM/dd HH:mm:ss"});
                const localIso = ojconverterutils.IntlConverterUtils.dateToLocalIso(new Date(timeNumber));
                return dateConverter.format(localIso);
            }.bind(this);

            //打开加载遮罩层
            function openLoading(){
                $(".loading").show();
            }
            //关闭加载遮罩层
            function closeLoading(){
                $(".loading").hide();
            }
        }
        return new viewModel();
    }
);