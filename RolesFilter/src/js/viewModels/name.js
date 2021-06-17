define(['knockout',  'jquery','ojs/ojarraydataprovider', 'ojs/ojpagingdataproviderview', 'ojs/ojhtmlutils', "ojs/ojasyncvalidator-regexp", 'ojs/ojknockout',
        'ojs/ojbutton', 'ojs/ojmenu', 'ojs/ojoption', 'ojs/ojlistview', 'ojs/ojdialog', 'ojs/ojlistitemlayout', 'ojs/ojtable', 'ojs/ojpagingcontrol', 'ojs/ojbinddom',
        'ojs/ojactioncard', 'ojs/ojswitcher',"ojs/ojselectsingle","ojs/ojinputtext"],
    function(ko, $, ArrayDataProvider, PagingDataProviderView, HtmlUtils, AsyncRegExpValidator) {
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
                var param = this.name() || this.selectedServer() ? '?':'';
                if(this.name()){
                    param = param + "name=" + this.name();
                }

                var serverParam = "";
                if(this.selectedServer()){
                    if(this.name()){
                        serverParam =  serverParam + "&";
                    }
                    serverParam = serverParam + "server=" + this.selectedServer();
                }

                openLoading();
                $.ajax({
                    url: address + "/byName" + param + serverParam,
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
                // event.detail.originalEvent.stopPropagation();
                document.querySelector('#detailsDialog').open();

                this.roleID(context.row.roleID);
                this.roleName(context.row.name);
                this.rolePrice(context.row.price);
                this.roleServer(context.row.server);

                openLoading();
                $.ajax({
                    url: address + "/getRole?id=" + context.row.roleID,
                    dataType: "json",
                    success: function(data){
                        loadRole(data);
                        closeLoading();
                    }
                });

            }.bind(this);

            this.roleID = ko.observable("000000");
            this.roleName = ko.observable("NULL");
            this.rolePrice = ko.observable("0");
            this.roleServer = ko.observable("NULL");

            var self = this;

            // 宝物
            self.treasureData = ko.observableArray([]);

            // 三技能
            self.threeSkillsData = ko.observableArray([]);

            //风物志
            self.skinData = ko.observableArray([]);
            self.skinDataProvider = new ArrayDataProvider(self.skinData, { keyAttributes: 'sID' });

            var loadRole = function (data){
                //宝物集
                var treasureDom = [];
                for(var k=0; k< data['treasure'].length ; k++){
                    treasureDom.push({ view: HtmlUtils.stringToNodeArray(data['treasure'][k]['dataInfo']), data: {}});
                }
                self.treasureData(treasureDom);

                //三技能集
                var threeSkillsDom = [];
                for(var k=0; k< data['threeSkills'].length ; k++){
                    threeSkillsDom.push({ view: HtmlUtils.stringToNodeArray(data['threeSkills'][k]['dataInfo']), data: {}});
                }
                self.threeSkillsData(threeSkillsDom);

                //风物志
                self.skinData.removeAll();
                self.skinData(data['skin']);
            };

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
            this.selectedServerChanged =  ()=>{
                if(this.switcherSelectedItem() == "pagingControl"){
                    this.search();
                }
            }
            $.ajax({
                url: address + "/getServers",
                dataType: "json",
                success: function(servers){
                    loadServers(servers);
                }
            });
            var loadServers = function (servers){
                this.server( servers.map(item=> ({value:item.server, label:item.server})) );
                this.server.push({value:"", label:"全区全服"})
            }.bind(this);

        }
        return new viewModel();
    }
);