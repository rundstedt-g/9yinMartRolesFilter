define(['knockout',  'jquery','ojs/ojarraydataprovider', 'ojs/ojpagingdataproviderview', 'ojs/ojhtmlutils', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojmenu',
        'ojs/ojoption', 'ojs/ojlistview', 'ojs/ojdialog', 'ojs/ojlistitemlayout', 'ojs/ojtable', 'ojs/ojpagingcontrol', 'ojs/ojbinddom', 'ojs/ojactioncard',
        'ojs/ojswitcher',"ojs/ojselectsingle"],
    function(ko, $, ArrayDataProvider, PagingDataProviderView, HtmlUtils) {
        function viewModel () {
            // 下拉框
            this.menuItems = [
                {value: '徒手套路', submenu:[
                        {value: '粗浅功夫', submenu: [{value: '粗浅功夫-猛虎推山'}]},
                        {value: '太祖长拳', submenu: [{value: '太祖长拳-进步冲捶'}, {value: '太祖长拳-落步盘花'}]},
                        {value: '捻花功(古谱)', submenu: [{value: '捻花功(古谱)-登云'}, {value: '捻花功(古谱)-腾风'}]},
                        {value: '太极拳(古谱)', submenu: [{value: '太极拳(古谱)-开太极'}]},
                        {value: '金顶绵掌', submenu: [{value: '金顶绵掌-梵心降魔'}]},
                        {value: '逍遥腿法', submenu: [{value: '逍遥腿法-姗姗绿影'}]},
                        {value: '鹰爪拳', submenu: [{value: '鹰爪拳-鹰扬虎噬'}]},
                        {value: '莲花掌', submenu: [{value: '莲花掌-火中生莲'}, {value: '莲花掌-接天碧莲'}, {value: '莲花掌-落花流水'}]},
                        {value: '魔心连环手', submenu: [{value: '魔心连环手-魔踏七星'}, {value: '魔心连环手-魔隨空生'}, {value: '魔心连环手-魔极屠情'}, {value: '魔心连环手-魔睛迷踪'}]},
                        {value: '太极拳', submenu: [{value: '太极拳-开太极'}]},
                        {value: '捻花功', submenu: [{value: '捻花功-腾风'}]},
                        {value: '花神七式', submenu: [{value: '花神七式-花须蝶芒'}, {value: '花神七式-披星戴月'}, {value: '花神七式-枯木生花'}, {value: '花神七式-飞花落叶'}, {value: '花神七式-神鬼莫敌'}]},
                        {value: '花神七式(无缺)', submenu: [{value: '花神七式(无缺)-花须蝶芒'}, {value: '花神七式(无缺)-披星戴月'}, {value: '花神七式(无缺)-枯木生花'}, {value: '花神七式(无缺)-飞花落叶'}, {value: '花神七式(无缺)-神鬼莫敌'}]},
                        {value: '心佛掌', submenu: [{value: '心佛掌-非常无常'}, {value: '心佛掌-空相无相'}, {value: '心佛掌-寂灭加持'}, {value: '心佛掌-天鼓雷音如来印'}]},
                        {value: '大力金刚指', submenu: [{value: '大力金刚指-指矢天日'}, {value: '大力金刚指-旁指曲谕'}, {value: '大力金刚指-一弹指顷'}, {value: '大力金刚指-凌虚点指'}, {value: '大力金刚指-弹指倏生'}]},
                        {value: '降龙掌法', submenu: [{value: '降龙掌法-狂龙乱舞'}]},
                        {value: '九阳·绝学', submenu: [{value: '九阳·绝学-大哉乾元'}]},
                        {value: '圣梅秘诀', submenu: [{value: '圣梅秘诀-纵横捭阖'}, {value: '圣梅秘诀-异军突起'}, {value: '圣梅秘诀-指点江山'}, {value: '圣梅秘诀-移山填海'}, {value: '圣梅秘诀-龙游大海'}]},
                        {value: '圣梅秘诀(古谱)', submenu: [{value: '圣梅秘诀(古谱)-纵横捭阖(古谱)'}, {value: '圣梅秘诀(古谱)-异军突起(古谱)'}, {value: '圣梅秘诀(古谱)-指点江山(古谱)'}, {value: '圣梅秘诀(古谱)-移山填海(古谱)'}, {value: '圣梅秘诀(古谱)-龙游大海(古谱)'}]}
                    ]
                },
                {value: '单剑套路', submenu:[
                        {value: '清风剑法', submenu: [{value: '清风剑法-浊泾清渭'}, {value: '清风剑法-激浊扬清'}]},
                        {value: '太极剑', submenu: [{value: '太极剑-太极剑舞'}]},
                        {value: '落英飞花剑', submenu: [{value: '落英飞花剑-风花雪月'}, {value: '落英飞花剑-镜花水月'}]},
                        {value: '洞天箫法', submenu: [{value: '洞天箫法-寒光浮动'}, {value: '洞天箫法-苍云从龙'}, {value: '洞天箫法-袅袅余音'}, {value: '洞天箫法-凤凰来仪'}]},
                        {value: '追命十三剑', submenu: [{value: '追命十三剑-弑神灭佛'}]},
                        {value: '流沙', submenu: [{value: '流沙-厚积薄发'}]},
                        {value: '雪斋剑法', submenu: [{value: '雪斋剑法-惊雪无常'}, {value: '雪斋剑法-锋霜影雪'}, {value: '雪斋剑法-漫天风雪'}, {value: '雪斋剑法-雪落无痕'}, {value: '雪斋剑法-寒心恨雪'}]},
                        {value: '神龙北武剑', submenu: [{value: '神龙北武剑-驱雷奔云'}, {value: '神龙北武剑-游行乾坤'}, {value: '神龙北武剑-龙吟怒涛'}]},
                        {value: '墨子剑法', submenu: [{value: '墨子剑法-墨点江山'}]},
                        {value: '太阴剑诀', submenu: [{value: '太阴剑诀-流星飞堕'}, {value: '太阴剑诀-紫气东来'}, {value: '太阴剑诀-江上弄笛'}, {value: '太阴剑诀-扫荡群魔'}, {value: '太阴剑诀-群邪辟易'}]},
                        {value: '魅影剑法', submenu: [{value: '魅影剑法-暗香疏影'}, {value: '魅影剑法-敛影逃形'}, {value: '魅影剑法-形影不离'}, {value: '魅影剑法-魅影幢幢'}, {value: '魅影剑法-鬼步斩影'}]},
                        {value: '海月清辉曲', submenu: [{value: '海月清辉曲-连涛叠浪'}]},
                        {value: '游龙剑法', submenu: [{value: '游龙剑法-蛟龙擘水'}, {value: '游龙剑法-飞龙在天'}, {value: '游龙剑法-龙飞凤舞'}, {value: '游龙剑法-剑指苍龙'}, {value: '游龙剑法-云起龙腾'}]},
                        {value: '西洋击剑', submenu: [{value: '西洋击剑-甩'}, {value: '西洋击剑-拖'}, {value: '西洋击剑-绞'}, {value: '西洋击剑-压'}, {value: '西洋击剑-突'}]},
                        {value: '太玄镶华剑谱', submenu: [{value: '太玄镶华剑谱-龙战玄黄'}]},
                        {value: '洛神剑法', submenu: [{value: '洛神剑法-笔墨留香'}]},
                        {value: '寒梅剑法', submenu: [{value: '寒梅剑法-梅间照雪'}, {value: '寒梅剑法-轻弄梅雪'}, {value: '寒梅剑法-微雪拂梅'}, {value: '寒梅剑法-傲香苦寒'}, {value: '寒梅剑法-暗香雪影'}]},
                        {value: '华山剑法', submenu: [{value: '华山剑法-云本无心'}, {value: '华山剑法-剑问青鸾'}, {value: '华山剑法-长虹贯日'}, {value: '华山剑法-金雁横空'}, {value: '华山剑法-无边落木'}]},
                        {value: '风行剑诀', submenu: [{value: '风行剑诀-纵风止燎'}, {value: '风行剑诀-掀风鼓浪'}, {value: '风行剑诀-风行草偃'}, {value: '风行剑诀-乘风破浪'}, {value: '风行剑诀-追风掣电'}]},
                        {value: '旭日剑法', submenu: [{value: '旭日剑法-归阳'}]},
                        {value: '天山剑法', submenu: [{value: '天山剑法-凛雪空落'}, {value: '天山剑法-幽莲云寰'}, {value: '天山剑法-寒霜碎影'}, {value: '天山剑法-飞凌九霄'}, {value: '天山剑法-万里冰封'}]},
                    ]
                },
                {value: '双剑套路', submenu:[
                        {value: '流云剑法', submenu: [{value: '流云剑法-流水行云'}, {value: '流云剑法-断雨残云'}, {value: '流云剑法-云起龙骧'}, {value: '流云剑法-雷奔云谲'}, {value: '流云剑法-烟消云散'}]},
                        {value: '九宫剑法', submenu: [{value: '九宫剑法-二四为肩'}, {value: '九宫剑法-六八为足'}, {value: '九宫剑法-一剑九乘'}, {value: '九宫剑法-上下对易'}, {value: '九宫剑法-九九还原'}]},
                        {value: '天心剑诀', submenu: [{value: '天心剑诀-窄袖轻罗'}, {value: '天心剑诀-万蕊参差'}, {value: '天心剑诀-宽兮绰兮'}, {value: '天心剑诀-玉瘦檀轻'}, {value: '天心剑诀-在水一方'}]},
                        {value: '天岳剑法', submenu: [{value: '天岳剑法-霜雪霁寒宵'}, {value: '天岳剑法-皓腕凝霜雪'}, {value: '天岳剑法-暮雪醉荒年'}, {value: '天岳剑法-怒涛卷霜雪'}, {value: '天岳剑法-雪暗凋旗画'}]},
                        {value: '忘川剑法', submenu: [{value: '忘川剑法-风风雨雨啸山海'}, {value: '忘川剑法-纷纷扰扰锁千峰'}, {value: '忘川剑法-星星点点灭苍茫'}, {value: '忘川剑法-恍恍惚惚黯销魂'}, {value: '忘川剑法-潇潇洒洒断红尘'}]}
                    ]
                },
                {value: '单刀套路', submenu:[
                        {value: '失魂刀法', submenu: [{value: '失魂刀法-魂兮何去'}]},
                        {value: '陪风刀诀', submenu: [{value: '陪风刀诀-横心肃杀'}]},
                        {value: '血杀刀法', submenu: [{value: '血杀刀法-赶尽杀绝'}, {value: '血杀刀法-血战八方'}, {value: '血杀刀法-格杀勿论'}, {value: '血杀刀法-刀光血影'}, {value: '血杀刀法-寒锋饮血'}]},
                        {value: '泼天风雨刀', submenu: [{value: '泼天风雨刀-风雨欲来'}, {value: '泼天风雨刀-摧花折柳'}, {value: '泼天风雨刀-倏影无痕'}, {value: '泼天风雨刀-风啸千杀'}, {value: '泼天风雨刀-迎风破浪'}]},
                        {value: '血月刀法', submenu: [{value: '血月刀法-冰壶秋月'}]},
                        {value: '困天刀诀', submenu: [{value: '困天刀诀-偷天换日'}]},
                        {value: '血海魔刀录', submenu: [{value: '血海魔刀录-孽海茫茫'}, {value: '血海魔刀录-饮恨滔天'}, {value: '血海魔刀录-离经叛道'}, {value: '血海魔刀录-舍神弃佛'}, {value: '血海魔刀录-放下屠刀'}]},
                        {value: '血刀诀', submenu: [{value: '血刀诀-血·祭'}]},
                        {value: '旷海千旋斩', submenu: [{value: '旷海千旋斩-鲨齿噬人'}]},
                        {value: '天英破阵刀', submenu: [{value: '天英破阵刀-醉卧沙场'}]},
                        {value: '广武征霸刀', submenu: [{value: '广武征霸刀-烽烬星落'}]},
                        {value: '四海归刀诀', submenu: [{value: '四海归刀诀-四海横行'}]}
                    ]
                },
                {value: '双刀套路', submenu:[
                        {value: '追风刀', submenu: [{value: '追风刀-力劈华山'}, {value: '追风刀-八方风雨'}]},
                        {value: '鸳鸯双刀', submenu: [{value: '鸳鸯双刀-青屏半掩'}, {value: '鸳鸯双刀-鸾凤和鸣'}, {value: '鸳鸯双刀-梦里春宵'}]}
                    ]
                },
                {value: '匕首套路', submenu:[
                        {value: '金蛇刺', submenu: [{value: '金蛇刺-吞鲸'}]},
                        {value: '夺魄勾心刺', submenu: [{value: '夺魄勾心刺-群妖乱舞'}]},
                        {value: '焚天令秘笈', submenu: [{value: '焚天令秘笈-石火电光'}, {value: '焚天令秘笈-火中取栗'}, {value: '焚天令秘笈-明火执仗'}, {value: '焚天令秘笈-刀山火海'}, {value: '焚天令秘笈-星火燎原'}]}
                    ]
                },
                {value: '双刺套路', submenu:[
                        {value: '离别刺', submenu: [{value: '离别刺-伯劳飞燕'}]},
                        {value: '霓裳动', submenu: [{value: '霓裳动-排云袂'}, {value: '霓裳动-翩缟衣'}]},
                        {value: '姑洗刺诀', submenu: [{value: '姑洗刺诀-行路难'}, {value: '姑洗刺诀-忆江南'}, {value: '姑洗刺诀-醉花阴'}]},
                        {value: '惊雪刺', submenu: [{value: '惊雪刺-无边霜雪'}]}
                    ]
                },
                {value: '长棍套路', submenu:[
                        {value: '达摩棍法', submenu: [{value: '达摩棍法-万佛归宗'}, {value: '达摩棍法-佛法无边'}]},
                        {value: '岳家枪法', submenu: [{value: '岳家枪法-长驱河洛'}, {value: '岳家枪法-长河落日'}]},
                        {value: '慈航普渡棍', submenu: [{value: '慈航普渡棍-佛念三千'}, {value: '慈航普渡棍-焚天救世'}, {value: '慈航普渡棍-净土慈航'}, {value: '慈航普渡棍-观音垂目'}, {value: '慈航普渡棍-普渡众生'}]},
                        {value: '日月连环枪', submenu: [{value: '日月连环枪-日异月殊'}, {value: '日月连环枪-皓月长空'}, {value: '日月连环枪-回天挽日'}, {value: '日月连环枪-翻江落月'}, {value: '日月连环枪-日月重光'}]},
                        {value: '狂龙八啸', submenu: [{value: '狂龙八啸-怒龙锁月'}, {value: '狂龙八啸-荒龙震地'}, {value: '狂龙八啸-腾龙翻云'}, {value: '狂龙八啸-擎龙归涧'}, {value: '狂龙八啸-狂龙穿海'}]},
                        {value: '万兽荒腾斩', submenu: [{value: '万兽荒腾斩-四荒游朔'}, {value: '万兽荒腾斩-神浪狂飙'}, {value: '万兽荒腾斩-腾翔率舞'}, {value: '万兽荒腾斩-腾云泼墨'}]}
                    ]
                },
                {value: '短棍套路', submenu:[
                        {value: '打狗八绝(古谱)', submenu: [{value: '打狗八绝(古谱)-倒踩犬足'}, {value: '打狗八绝(古谱)-掌叩犬首'}, {value: '打狗八绝(古谱)-赤手搏犬'}, {value: '打狗八绝(古谱)-犬嘴拔牙'}, {value: '打狗八绝(古谱)-关门打狗'}]},
                        {value: '疯魔乱棍', submenu: [{value: '疯魔乱棍-心魔摧魂'}, {value: '疯魔乱棍-疯魔乱舞'}]},
                        {value: '打狗八绝', submenu: [{value: '打狗八绝-倒踩犬足'}, {value: '打狗八绝-掌叩犬首'}, {value: '打狗八绝-赤手搏犬'}, {value: '打狗八绝-犬嘴拔牙'}, {value: '打狗八绝-关门打狗'}]}
                    ]
                },
                {value: '暗器套路', submenu:[
                        {value: '阎王帖', submenu: [{value: '阎王帖-阎王掷笔'}]},
                        {value: '迷魂镖', submenu: [{value: '迷魂镖-流星追月'}, {value: '迷魂镖-飞散天花'}, {value: '迷魂镖-勾魂摄魄'}]},
                        {value: '天魔追魂刀', submenu: [{value: '天魔追魂刀-阴魂不散'}, {value: '天魔追魂刀-千里追魂'}, {value: '天魔追魂刀-孤魂惑神'}, {value: '天魔追魂刀-野鬼缠身'}, {value: '天魔追魂刀-天魔降世'}]},
                        {value: '追魂爪', submenu: [{value: '追魂爪-铁劲刚拳'}, {value: '追魂爪-白骨摄魄'}, {value: '追魂爪-鬼爪探幽'}, {value: '追魂爪-血雨腥风'}, {value: '追魂爪-大漠孤魂'}]},
                        {value: '三阳玄针', submenu: [{value: '三阳玄针-神针追命'}]},
                        {value: '玲珑骰', submenu: [{value: '玲珑骰-地虎'}, {value: '玲珑骰-板凳'}, {value: '玲珑骰-长三'}, {value: '玲珑骰-梅花'}, {value: '玲珑骰-天王'}]},
                        {value: '天地搜魂锁', submenu: [{value: '天地搜魂锁-惊魂摄魄'}, {value: '天地搜魂锁-销魂荡魄'}, {value: '天地搜魂锁-暗无天日'}, {value: '天地搜魂锁-天网恢恢'}, {value: '天地搜魂锁-翻天覆地'}]}
                    ]
                },
                {value: '奇门套路', submenu:[
                        {value: '潇湘水云谱', submenu: [{value: '潇湘水云谱-影涵万象'}]},
                        {value: '神箭九策', submenu: [{value: '神箭九策-游鸿惊弦'}, {value: '神箭九策-熊渠猎虎'}, {value: '神箭九策-纪昌挂虱'}, {value: '神箭九策-李广射石'}, {value: '神箭九策-后羿落日'}]},
                        {value: '裂云八箭', submenu: [{value: '裂云八箭-销光定尘'}, {value: '裂云八箭-渡鸟穿林'}, {value: '裂云八箭-分云贯日'}, {value: '裂云八箭-缠风弄影'}, {value: '裂云八箭-暴雨连珠'}]},
                        {value: '寒泉洗心谱', submenu: [{value: '寒泉洗心谱-闭心自慎'}, {value: '寒泉洗心谱-远近相安'}, {value: '寒泉洗心谱-寂境无扰'}, {value: '寒泉洗心谱-四望溪山'}, {value: '寒泉洗心谱-风起云淡'}]},
                        {value: '月明沧海诀', submenu: [{value: '月明沧海诀-苏世独立'}, {value: '月明沧海诀-月溯流光'}, {value: '月明沧海诀-悲此凛秋'}, {value: '月明沧海诀-静里乾坤'}, {value: '月明沧海诀-一醉千日'}]},
                        {value: '素幽令', submenu: [{value: '素幽令-白日昭昭'}, {value: '素幽令-洒洒灵空'}, {value: '素幽令-鱼戏冷泉'}, {value: '素幽令-平野苍翠'}, {value: '素幽令-浓墨焕彩'}]}
                    ]
                }
            ];

            this.menuItemAction = function (event) { //武学下拉框的点击选择事件监听
                if(this.selectedMenuItem().length >= 5){ // 判断是否可以继续添加
                    // 打开弹窗
                    document.querySelector('#dialogWithUserDefinedHeader').open();
                    return;
                }
                if(this.selectedMenuItem.indexOf(event.target.value) == -1){ // 先判断是否已经添加，防止重复添加
                    this.selectedMenuItem.push(event.target.value);
                }
            }.bind(this);

            this.onlyDisplaySkill= function(skill){
                var index = skill.indexOf('-')
                return skill.slice(index+1,skill.length);
            }

            // 选择的筛选项集合
            this.selectedMenuItem = ko.observableArray([]); // 监控选择的武学
            this.dataProvider = new ArrayDataProvider(this.selectedMenuItem); // 数据来源
            this.remove = function(event, current, bindingContext) { //筛选项点击移除监听
                this.selectedMenuItem.remove(current.data);
            }.bind(this);

            // 错误弹窗关闭
            this.handleOKClose = function () {
                document.querySelector('#dialogWithUserDefinedHeader').close();
            };

            // 搜索按钮
            this.search = function () {
                var skillArray =  this.selectedMenuItem();
                var len = skillArray.length;
                var param = len>0 || this.selectedServer() ? '?':'';
                for(var i=0; i<len; i++){
                    var separatorIndex = skillArray[i].indexOf('-');
                    var tempLenth = skillArray[i].length;
                    var wuxue = skillArray[i].slice(0,separatorIndex);
                    var skill = skillArray[i].slice(separatorIndex+1,tempLenth);
                    param += 'wx' + (i+1) + '=' + wuxue + '&ts' + (i+1) + '=' + skill;
                    if(i<len-1){
                        param += '&';
                    }
                }
                var serverParam = "";
                if(this.selectedServer()){
                    if(len>0){
                        serverParam =  serverParam + "&";
                    }
                    serverParam = serverParam + "server=" + this.selectedServer();
                }

                openLoading();
                $.ajax({
                    url:"http://localhost:8080/byThreeSkills" + param + serverParam,
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
                    url:"http://localhost:8080/getRole?id=" + context.row.roleID,
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
                url:"http://localhost:8080/getServers",
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