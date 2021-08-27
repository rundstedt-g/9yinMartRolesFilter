define(['knockout', 'jquery', 'ojs/ojbootstrap', 'ojs/ojarraydataprovider', 'ojs/ojarraytreedataprovider', 'ojs/ojpagingdataproviderview',
        'ojs/ojhtmlutils', 'ojs/ojcontext', 'component/dialog', 'ojs/ojaccordion', 'ojs/ojknockout', 'ojs/ojcheckboxset', 'ojs/ojbutton',  'ojs/ojswitch', 'ojs/ojmenu', 'ojs/ojoption',
        'ojs/ojdialog', 'ojs/ojtable', 'ojs/ojpagingcontrol', 'ojs/ojswitcher', 'ojs/ojmasonrylayout', 'ojs/ojlistview', 'ojs/ojavatar', 'ojs/ojpopup',
        'ojs/ojlistitemlayout', 'ojs/ojbinddom', 'ojs/ojactioncard', "ojs/ojselectsingle"],
    function(ko, $, Bootstrap, ArrayDataProvider, ArrayTreeDataProvider, PagingDataProviderView, HtmlUtils, Context, dialogUtil) {
        function viewModel () {
            // 服务器地址
            var address = window.location.protocol + "//" + window.location.hostname + ":8080";

            //复选框
            this.property1 = [
                {value: '气血上限', label: '气血上限'},
                {value: '内力上限', label: '内力上限'},
                {value: '气血恢复速率', label: '气血恢复速率'},
                {value: '内力恢复速率', label: '内力恢复速率'},
                {value: '招架耐力上限', label: '招架耐力上限'},
                {value: '每秒招架耐力恢复', label: '每秒招架耐力恢复'},
                {value: '轻功值上限', label: '轻功值上限'}
            ];
            this.propertyDP1 = ko.observable(new ArrayDataProvider(this.property1, {keyAttributes: 'value'}));

            this.property2 = [
                {value: '近身威力', label: '近身威力'},
                {value: '远程威力', label: '远程威力'},
                {value: '外功暴击', label: '外功暴击'},
                {value: '外功暴击率', label: '外功暴击率'},
                {value: '外功暴击伤害', label: '外功暴击伤害'},
                {value: '外功命中', label: '外功命中'},
                {value: '外功命中率', label: '外功命中率'},
                {value: '外功防御', label: '外功防御'},
                {value: '外功伤害减免', label: '外功伤害减免'},
                {value: '外功防御忽视', label: '外功防御忽视'},
                {value: '外功伤害减免忽视', label: '外功伤害减免忽视'},
                {value: '外功招架', label: '外功招架'},
                {value: '外功招架忽视', label: '外功招架忽视'}
            ];
            this.propertyDP2 = ko.observable(new ArrayDataProvider(this.property2, {keyAttributes: 'value'}));

            this.property3 = [
                {value: '内功威力', label: '内功威力'},
                {value: '内功暴击', label: '内功暴击'},
                {value: '内功暴击率', label: '内功暴击率'},
                {value: '内功暴击伤害', label: '内功暴击伤害'},
                {value: '内功命中', label: '内功命中'},
                {value: '内功命中率', label: '内功命中率'},
                {value: '内功防御', label: '内功防御'},
                {value: '刚防御', label: '刚防御'},
                {value: '刚伤害减免', label: '刚伤害减免'},
                {value: '柔防御', label: '柔防御'},
                {value: '柔伤害减免', label: '柔伤害减免'},
                {value: '阴防御', label: '阴防御'},
                {value: '阴伤害减免', label: '阴伤害减免'},
                {value: '阳防御', label: '阳防御'},
                {value: '阳伤害减免', label: '阳伤害减免'},
                {value: '内功防御忽视', label: '内功防御忽视'},
                {value: '刚防御忽视', label: '刚防御忽视'},
                {value: '柔防御忽视', label: '柔防御忽视'},
                {value: '阴防御忽视', label: '阴防御忽视'},
                {value: '阳防御忽视', label: '阳防御忽视'},
                {value: '内功伤害减免忽视', label: '内功伤害减免忽视'},
                {value: '内功化解', label: '内功化解'},
                {value: '内功化解忽视', label: '内功化解忽视'}
            ];
            this.propertyDP3 = ko.observable(new ArrayDataProvider(this.property3, {keyAttributes: 'value'}));

            this.property4 = [
                {value: '封劲', label: '封劲'},
                {value: '被暴击几率降低', label: '被暴击几率降低'},
                {value: '暴击伤害减免', label: '暴击伤害减免'},
                {value: '闪避', label: '闪避'},
                {value: '闪避率', label: '闪避率'}
            ];
            this.propertyDP4 = ko.observable(new ArrayDataProvider(this.property4, {keyAttributes: 'value'}));

            //下拉框
            this.menuItems = [
                { id: 'tushou', label: '徒手套路', submenuID: 'tushouMenu', submenu: [
                        {id :'tzcq', label:'太祖长拳'},
                        {id :'nhggp', label:'捻花功(古谱)'},
                        {id :'tjqgp', label:'太极拳(古谱)'},
                        {id :'jdmz', label:'金顶绵掌'},
                        {id :'xytf', label:'逍遥腿法'},
                        {id :'lhz', label:'莲花掌'},
                        {id :'mxlhs', label:'魔心连环手'},
                        {id :'hsqswq', label:'花神七式(无缺)'},
                        {id :'xfz', label:'心佛掌'},
                        {id :'dljgz', label:'大力金刚指'},
                        {id :'xlzfjs', label:'降龙掌法(绝世)'},
                        {id :'smmjgp', label:'圣梅秘诀(古谱)'}
                    ]
                },
                { id: 'danjian', label: '单剑套路', submenuID: 'danjianMenu', submenu: [
                        {id :'qfjf', label: '清风剑法'},
                        {id :'dtxf', label: '洞天箫法'},
                        {id :'tyjj', label: '太阴剑诀'},
                        {id :'myjf', label: '魅影剑法'},
                        {id :'yljf', label: '游龙剑法'},
                        {id :'hmjf', label: '寒梅剑法'}
                    ]
                },
                { id: 'shuangjian', label: '双剑套路', submenuID: 'shuangjianMenu', submenu: [
                        {id :'jgjf', label: '九宫剑法'},
                        {id :'wcjf', label: '忘川剑法'}
                    ]
                },
                { id: 'dandao', label: '单刀套路', submenuID: 'dandaoMenu', submenu: [
                        {id :'xsdf', label: '血杀刀法'},
                        {id :'ptfyd', label: '泼天风雨刀'},
                        {id :'xhmdl', label: '血海魔刀录'}
                    ]
                },
                { id: 'shuangdao', label: '双刀套路', submenuID: 'shuangdaoMenu', submenu: [
                        {id :'zfd', label: '追风刀'},
                        {id :'yysd', label: '鸳鸯双刀'}
                    ]
                },
                { id: 'bishou', label: '匕首套路', submenuID: 'bishouMenu', submenu: [
                        {id :'ftlmj', label: '焚天令秘笈'}
                    ]
                },
                { id: 'shuangci', label: '双刺套路', submenuID: 'shuangciMenu', submenu: [
                        {id :'tjdmc', label: '天绝地灭刺'}
                    ]
                },
                { id: 'changgun', label: '长棍套路', submenuID: 'changgunMenu', submenu: [
                        {id :'klbx', label: '狂龙八啸'},
                        {id :'rylhq', label: '日月连环枪'}
                    ]
                },
                { id: 'duangun', label: '短棍套路', submenuID: 'duangunMenu', submenu: [
                        {id :'dgbjgp', label: '打狗八绝(古谱)'}
                    ]
                },
                { id: 'anqi', label: '暗器套路', submenuID: 'anqiMenu', submenu: [
                        {id :'zhz', label: '追魂爪'},
                        {id :'ywt', label: '阎王帖'},
                        {id :'llt', label: '玲珑骰'}
                    ]
                },
                { id: 'qimen', label: '奇门套路', submenuID: 'qimenMenu', submenu: [
                        {id :'hqxxp', label: '寒泉洗心谱'},
                        {id :'ymchj', label: '月明沧海诀'}
                    ]
                }
            ];

            this.selectedMenuItem = ko.observable('');
            this.menuItemAction = function (event) { //武学下拉框的点击选择事件监听
                this.selectedMenuItem(event.target.value);
                var selectArray = this.selectVal1().concat(this.selectVal2(), this.selectVal3(), this.selectVal4(), this.selectedMenuItem());
                if(this.isChecked() == true){
                    selectArray = selectArray.concat(['翡翠墨玉璜']);
                }
                this.dataProvider(new ArrayDataProvider(selectArray));
            }.bind(this);

            //切换按钮
            this.isChecked = ko.observable(false);
            this.switchChanged = function(event) { //开关状态改变事件的监听
                var selectArray = this.selectVal1().concat(this.selectVal2(), this.selectVal3(), this.selectVal4());
                if(this.selectedMenuItem() != ''){
                    selectArray = selectArray.concat(this.selectedMenuItem());
                }
                if(event.target.value == true){
                    selectArray = selectArray.concat('翡翠墨玉璜');
                }
                this.dataProvider(new ArrayDataProvider(selectArray));
            }.bind(this);

            //选项集合
            this.selectVal1 = ko.observableArray(); //复选框选择项
            this.selectVal2 = ko.observableArray(); //复选框选择项
            this.selectVal3 = ko.observableArray(); //复选框选择项
            this.selectVal4 = ko.observableArray(); //复选框选择项

            this.dataProvider = ko.observable(new ArrayDataProvider([])); //选择的筛选项集合

            this.remove = function(event, current, bindingContext) { //筛选项点击移除监听
                var oldSelectVal1 = this.selectVal1();
                var oldSelectVal2 = this.selectVal2();
                var oldSelectVal3 = this.selectVal3();
                var oldSelectVal4 = this.selectVal4();
                if(oldSelectVal1.indexOf(current.data) != -1){ //判断是否属于此分类
                    oldSelectVal1.splice(oldSelectVal1.indexOf(current.data) ,1);  //删除当前点击的元素
                    this.selectVal1(oldSelectVal1); //替换删除当前点击的元素后的新数组
                }
                else if(oldSelectVal2.indexOf(current.data) != -1) { //判断是否属于此分类
                    oldSelectVal2.splice(oldSelectVal2.indexOf(current.data) ,1);  //删除当前点击的元素
                    this.selectVal2(oldSelectVal2); //替换删除当前点击的元素后的新数组
                }
                else if(oldSelectVal3.indexOf(current.data) != -1) { //判断是否属于此分类
                    oldSelectVal3.splice(oldSelectVal3.indexOf(current.data) ,1);  //删除当前点击的元素
                    this.selectVal3(oldSelectVal3); //替换删除当前点击的元素后的新数组
                }
                else if(oldSelectVal4.indexOf(current.data) != -1) { //判断是否属于此分类
                    oldSelectVal4.splice(oldSelectVal4.indexOf(current.data) ,1);  //删除当前点击的元素
                    this.selectVal4(oldSelectVal4); //替换删除当前点击的元素后的新数组
                }
                else if(current.data == '翡翠墨玉璜'){
                    this.isChecked(false);
                }
                else{ //武学
                    this.selectedMenuItem('');
                    // 因为复选框和开关按钮的监听都是valueChanged，所以不用手动渲染页面。而下拉菜单是点击事件，得手动编写代码渲染页面
                    var selectArray = this.selectVal1().concat(this.selectVal2(), this.selectVal3(), this.selectVal4());
                    if(this.isChecked() == true){
                        selectArray = selectArray.concat(['翡翠墨玉璜']);
                    }
                    this.dataProvider(new ArrayDataProvider(selectArray));
                }
            }.bind(this);

            this.selectCountFull = ko.observable(false);
            this.valueChanged = function(event, current, bindingContext) { //复选框筛选项增加事件的监听
                // 判断是否可以增加选项
                if(this.selectCountFull() == true && event.detail.updatedFrom == "internal"){
                    // 取消本次复选框所选
                    this.selectVal1.remove(event.detail.originalEvent.srcElement.value);
                    this.selectVal2.remove(event.detail.originalEvent.srcElement.value);
                    this.selectVal3.remove(event.detail.originalEvent.srcElement.value);
                    this.selectVal4.remove(event.detail.originalEvent.srcElement.value);
                    // 打开弹窗
                    document.querySelector('#errorDialog').open();
                    return ;
                }
                var selectArray = this.selectVal1().concat(this.selectVal2(), this.selectVal3(), this.selectVal4());

                // 更新可增加的状态
                if(selectArray.length >= 5){
                    this.selectCountFull(true);
                }
                else{
                    this.selectCountFull(false);
                }

                if(this.selectedMenuItem() != ''){
                    selectArray = selectArray.concat(this.selectedMenuItem());
                }
                if(this.isChecked() == true){
                    selectArray = selectArray.concat(['翡翠墨玉璜']);
                }
                this.dataProvider(new ArrayDataProvider(selectArray));
            }.bind(this);

            // 弹窗
            this.handleOKClose = function () {
                document.querySelector('#errorDialog').close();
            };

            // 搜索按钮
            this.search = function () {
                var bwa = this.selectVal1().concat(this.selectVal2(), this.selectVal3(), this.selectVal4());
                var bwaStr = "";
                if(bwa.length > 0 || this.selectedMenuItem() != '' || this.isChecked() == true || this.selectedServer()){ //存在参数
                    bwaStr = bwaStr + "?";
                }
                for(var i=1; i<=bwa.length; i++){
                    bwaStr = bwaStr + "bwa" + i + "=" + bwa[i-1];
                    if(i < bwa.length){
                        bwaStr = bwaStr + "&";
                    }
                }
                var skillParam = "";
                if(this.selectedMenuItem() != ''){
                    if(bwa.length > 0){
                        skillParam = skillParam + "&";
                    }
                    skillParam = skillParam + "skill=" + this.selectedMenuItem();
                }
                var is750Param = "";
                if(this.isChecked() == true){
                    if(bwa.length>0 || skillParam){
                        is750Param = is750Param + "&";
                    }
                    is750Param = is750Param + "is750=true";
                }

                var serverParam = "";
                if(this.selectedServer()){
                    if(bwa.length>0 || skillParam || is750Param){
                        serverParam =  serverParam + "&";
                    }
                    serverParam = serverParam + "server=" + this.selectedServer();
                }

                openLoading();
                $.ajax({
                    url: address + "/byTreasure" + bwaStr + skillParam + is750Param + serverParam,
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
                dialogUtil(
                    context.row.roleID,
                    context.row.name,
                    context.row.price,
                    context.row.server,
                    context.row.serverId,
                    context.row.gender,
                    context.row.school,
                    context.row.grade,
                    context.row.neigongyanxiu,
                    context.row.status
                );
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
        return viewModel;
    }
);