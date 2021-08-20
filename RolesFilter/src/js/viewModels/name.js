define(['knockout', 'jquery','ojs/ojarraydataprovider', 'ojs/ojpagingdataproviderview', 'ojs/ojhtmlutils', "ojs/ojasyncvalidator-regexp", 'component/dialog',
        'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojmenu', 'ojs/ojoption', 'ojs/ojlistview', 'ojs/ojdialog', 'ojs/ojlistitemlayout', 'ojs/ojtable', 'ojs/ojpagingcontrol', 'ojs/ojbinddom',
        'ojs/ojactioncard', 'ojs/ojswitcher',"ojs/ojselectsingle","ojs/ojinputtext"],
    function(ko, $, ArrayDataProvider, PagingDataProviderView, HtmlUtils, AsyncRegExpValidator, dialogUtil) {
        function viewModel () {
            // 服务器地址
            var address = window.location.protocol + "//" + window.location.hostname + ":8080";

            // 要搜索的名字
            this.name = ko.observable();

            this.nameValidator = ko.observableArray([
                new AsyncRegExpValidator({
                    pattern: '[^/\\\\:*?"<>|\]{1,5}',
                    hint: "",
                    messageDetail: '不能含有特殊字符 \\ / : * ? \" < > |',
                }),
            ]);

            // 搜索按钮
            this.search = function () {
                if(!this.name()){
                    alert("请输入一个名字!");
                    return;
                }
                if(!this.selectedServer()){
                    alert("请选择一个区服!");
                    return;
                }

                name = "name=" + this.name();
                serverId = "serverId=" + this.selectedServer();

                openLoading();
                $.ajax({
                    url: address + "/requestByName?" + name + "&" + serverId,
                    dataType: "json",
                    success: function(data){
                        loadData(data);
                        closeLoading();
                    }
                });

                this.switcherSelectedItem('pagingControl'); //切换到列表
            }.bind(this);

            var loadData = function (data){
                //数据源
                this.deptArray(data);
                document.getElementById('table').refresh(); //刷新表格组件
                document.getElementById('paging').refresh(); //刷新分页控制组件
            }.bind(this);

            // 搜索按钮进行内容切换
            this.switcherSelectedItem =  ko.observable('initial');

            // 商品表
            this.deptArray = ko.observableArray([{}]);

            // 分页控制数据提供
            this.pagingDataProvider = new PagingDataProviderView(new ArrayDataProvider(this.deptArray));

            // 监听表格行的按钮
            this.actionListener = function (event, context) {
                dialogUtil(context.row.id, context.row.name, context.row.price, context.row.server.name, context.row.server.id);
            }.bind(this);

            //打开加载遮罩层
            function openLoading(){
                $(".loading").show();
            }
            //关闭加载遮罩层
            function closeLoading(){
                $(".loading").hide();
            }

            this.server = ko.observableArray();
            this.serverDP = new ArrayDataProvider(this.server,{keyAttributes: "value"});
            this.selectedServer = ko.observable();

            $.ajax({
                url: address + "/serverList",
                dataType: "json",
                success: function(servers){
                    loadServers(servers);
                }
            });
            var loadServers = function (servers){
                this.server( servers.map(item=> ({value:item.id, label:item.name})) );
            }.bind(this);

        }
        return new viewModel();
    }
);