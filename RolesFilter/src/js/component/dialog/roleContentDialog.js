define(["knockout", 'jquery','ojs/ojarraydataprovider','ojs/ojhtmlutils',"ojs/ojdialog","ojs/ojknockout","ojs/ojmodule-element","ojs/ojprogress-circle",'ojs/ojswitcher'],
    function(ko, $, ArrayDataProvider, HtmlUtils){
        class RoleContentDialogViewModel{
            dialogViewModel;

            // 服务器地址
            address = window.location.protocol + "//" + window.location.hostname + ":8080";

            switcherSelectedItem = ko.observable("load");

            roleID = ko.observable("000000");
            roleName = ko.observable("NULL");
            rolePrice = ko.observable("0");
            roleServer = ko.observable("NULL");
            gender = ko.observable("NULL");
            school = ko.observable("NULL");
            grade = ko.observable("NULL");
            neigongyanxiu = ko.observable("NULL");
            status = ko.observable("NULL");

            // 宝物
            treasureData = ko.observableArray();

            // 宝物（背包）
            baowuOfBackpack = ko.observableArray();

            // 三技能
            threeSkillsData = ko.observableArray();

            // 双技能
            twoSkillsData = ko.observableArray();

            // 娃娃
            wawaData = ko.observableArray();

            // 娃娃(背包)
            wawaOfBackpackData = ko.observableArray();

            // 内功
            neigongs = ko.observableArray();
            neigongsProvider = new ArrayDataProvider(this.neigongs,{ keyAttributes: 'name' });

            // 古谱
            gupuWuxues = ko.observableArray();
            gupuWuxuesProvider = new ArrayDataProvider(this.gupuWuxues,{ keyAttributes: 'name' });

            // 99武学
            _99Wuxues = ko.observableArray();
            _99WuxuesProvider = new ArrayDataProvider(this._99Wuxues,{ keyAttributes: 'name' });

            // 经脉
            jingmais = ko.observableArray();
            jingmaisProvider = new ArrayDataProvider(this.jingmais,{ keyAttributes: 'name' });

            //风物志
            skinData = ko.observableArray();
            skinDataProvider = new ArrayDataProvider(this.skinData,{ keyAttributes: 'name' });

            // 坐骑
            mountsData = ko.observableArray();
            
            constructor(id,name,price,serverName,serverId,gender,school,grade,neigongyanxiu,status) {
                this.roleID(id);
                this.roleName(name);
                this.rolePrice(price);
                this.roleServer(serverName);
                this.gender(gender);
                this.school(school);
                this.grade(grade);
                this.neigongyanxiu(neigongyanxiu);
                this.status(status);

                this.switcherSelectedItem('load');
                $.ajax({
                    url: this.address + "/getRoleContent?serverId=" + serverId + "&itemId=" + id,
                    dataType: "json",
                    success: function(data){
                        this.loadRole(data);
                        this.switcherSelectedItem('content');
                    }.bind(this)
                });
            }

            open() {
                this.dialogViewModel.open();
            }

            connected(view){
                this.dialogViewModel = view;
            }

            disconnected(){

            }

            loadRole (data){
                //宝物集
                var treasureDom = [];
                for(var k=0; k< data['baowu'].length ; k++){
                    treasureDom.push({ view: HtmlUtils.stringToNodeArray(data['baowu'][k]), data: {}});
                }
                this.treasureData(treasureDom);

                // 宝物（背包）集
                var baowuOfBackpackDom = [];
                for(var k=0; k< data['baowuOfBackpack'].length ; k++){
                    baowuOfBackpackDom.push({ view: HtmlUtils.stringToNodeArray(data['baowuOfBackpack'][k]), data: {}});
                }
                this.baowuOfBackpack(baowuOfBackpackDom);

                //三技能集
                var threeSkillsDom = [];
                for(var k=0; k< data['threeSkills'].length ; k++){
                    threeSkillsDom.push({ view: HtmlUtils.stringToNodeArray(data['threeSkills'][k]), data: {}});
                }
                this.threeSkillsData(threeSkillsDom);

                //双技能集
                var twoSkillsDom = [];
                for(var k=0; k< data['twoSkills'].length ; k++){
                    twoSkillsDom.push({ view: HtmlUtils.stringToNodeArray(data['twoSkills'][k]), data: {}});
                }
                this.twoSkillsData(twoSkillsDom);

                //娃娃
                var wawaDom = [];
                for(var k=0; k< data['wawa'].length ; k++){
                    wawaDom.push({ view: HtmlUtils.stringToNodeArray(data['wawa'][k]), data: {}});
                }
                this.wawaData(wawaDom);

                //娃娃（背包）
                var wawaOfBackpackDom = [];
                for(var k=0; k< data['wawaOfBackpack'].length ; k++){
                    wawaOfBackpackDom.push({ view: HtmlUtils.stringToNodeArray(data['wawaOfBackpack'][k]), data: {}});
                }
                this.wawaOfBackpackData(wawaOfBackpackDom);

                //内功
                this.neigongs(data['neigongs']);

                //古谱武学
                this.gupuWuxues(data['gupuWuxues']);

                //99武学
                this._99Wuxues(data['_99Wuxues']);

                // 经脉
                this.jingmais(data['jingmais']);

                //风物志
                this.skinData.removeAll();
                this.skinData(data['useCardRecList']);

                //坐骑
                var mountsDom = [];
                for(var k=0; k< data['mounts'].length ; k++){
                    mountsDom.push({ view: HtmlUtils.stringToNodeArray(data['mounts'][k]), data: {}});
                }
                this.mountsData(mountsDom);
            };
        }
        return RoleContentDialogViewModel;
    }
)