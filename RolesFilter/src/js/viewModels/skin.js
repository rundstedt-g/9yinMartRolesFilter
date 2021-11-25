define([ 'knockout','jquery', 'ojs/ojarraydataprovider', 'ojs/ojpagingdataproviderview', 'ojs/ojhtmlutils', 'component/dialog', 'ojs/ojknockout',
        'ojs/ojnavigationlist', 'ojs/ojswitcher', 'ojs/ojlistview', 'ojs/ojavatar', 'ojs/ojselectcombobox','ojs/ojbinddom','ojs/ojactioncard',
        'ojs/ojpagingcontrol', 'ojs/ojtable', 'ojs/ojdialog', 'ojs/ojbutton',"ojs/ojselectsingle"],
    function(ko, $, ArrayDataProvider, PagingDataProviderView,HtmlUtils,dialogUtil) {
        function viewModel () {
            // 服务器地址
            var address = window.location.protocol + "//" + window.location.hostname;

            this.clothing = [{name:'康宁丰乐', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/912.png'},
                {name:'香墨揉蓝裳', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/898.png'},
                {name:'萤光栖月', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/901.png'},
                {name:'载月云间', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/900.png'},
                {name:'踱迹迷仙', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/899.png'},
                {name:'春融漫红', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/891.png'},
                {name:'华朝月夜衣', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/888.png'},
                {name:'木雅纯风', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/886.png'},
                {name:'幻氤鲤墨', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/874.png'},
                {name:'琼花玉胜', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/873.png'},
                {name:'君梦徊思', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/870.png'},
                {name:'踏花骄行套装', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/849.png'},
                {name:'兰亭芷兮', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/843.png'},
                {name:'抱云揽月裳', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/840.png'},
                {name:'百花药仙裳', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/839.png'},
                {name:'青鸾雪柳裳', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/831.png'},
                {name:'春风烛夜裳', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/509.png'},
                {name:'清霜凝玉裳', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/507.png'},
                {name:'清秋望月裳', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/491.png'},
                {name:'兰薰半锦', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/487.png'},
                {name:'燕雨摇袂', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/470.png'},
                {name:'绛云金绫裳', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/469.png'},
                {name:'琼霄裳', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/467.png'},
                {name:'柳花青拂裳', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/452.png'},
                {name:'殷蕊灼华衫', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/442.png'},
                {name:'星羽阑珊服', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/441.png'},
                {name:'春晖映雪裘', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/439.png'},
                {name:'韶华流紫衣', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/438.png'},
                {name:'流火未央套装', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/437.png'},
                {name:'墨染玉尘衫', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/435.png'},
                {name:'赤情魔焰衫', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/433.png'},
                {name:'彤霞星绮套装', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/431.png'},
                {name:'碧华涵瑞衣', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/429.png'},
                {name:'缥缈墨云套装', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/428.png'},
                {name:'雪兔衣', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/426.png'},
                {name:'蓝雪雅仙', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/425.png'},
                {name:'风舞雪影衫', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/399.png'},
                {name:'紫墨鸾羽衣', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/387.png'},
                {name:'云锦落霞衣', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/378.png'},
                {name:'韶华红颖裳', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/377.png'},
                {name:'圣耀焚金甲', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/375.png'},
                {name:'桃夜眠月裘', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/363.png'},
                {name:'湛影瑶光衫', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/360.png'},
                {name:'圣谛梵音裳', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/358.png'},
                {name:'惊神银装', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/341.png'},
                {name:'金蕊秋来裳', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/331.png'},
                {name:'移影尘寰裳', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/325.png'},
                {name:'蓝仙翁', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/324.png'},
                {name:'魏紫沉香裳', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/321.png'},
                {name:'飞鱼服', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/310.png'},
                {name:'化影衫', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/305.png'},
                {name:'子衿服', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/298.png'},
                {name:'银霜甲', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/289.png'},
                {name:'绣隐雉绒裘', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/288.png'},
                {name:'隐纹衫', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/277.png'},
                {name:'烟水衫', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/271.png'},
                {name:'紫云映雪袍', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/270.png'},
                {name:'鬼面修罗衣', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/267.png'},
                {name:'熊猫衣', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/266.png'},
                {name:'幽篁衫', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/265.png'},
                {name:'国士华服', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/257.png'},
                {name:'吟月罗裳', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/246.png'},
                {name:'紫凤衫', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/243.png'},
                {name:'风神劲装', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/232.png'},
                {name:'绯云裳', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/225.png'},
                {name:'寻音衫', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/215.png'},
                {name:'银狐裘', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/205.png'},
                {name:'紫宵袍', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/204.png'},
                {name:'千情衣', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/202.png'},
                {name:'碧蝉衫', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/200.png'},
                {name:'逐月销金袍', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/197.png'},
                {name:'断夜捻金服', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/181.png'},
                {name:'逍遥玉衣', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/179.png'},
                {name:'鬼翼纱', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/169.png'},
                {name:'羽仙裳', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/152.png'},
                {name:'虎头衣', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/149.png'},
                {name:'流云衫', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/148.png'},
                {name:'金蛇衣', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/138.png'},
                {name:'朱锦雪貂裘', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/136.png'},
                {name:'蝶恋衣', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/135.png'},
                {name:'蛟鳞衣', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/125.png'},
                {name:'黑白无常', type:'套装', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/118.png'}
            ];
            this.clothingProvider = new PagingDataProviderView(new ArrayDataProvider(this.clothing));

            this.sword = [{name:'修竹伯玉', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/940.png'},
                {name:'远山行香剑', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/908.png'},
                {name:'出神入剑', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/893.png'},
                {name:'莫凡剑鞘', type:'单剑', quality:'绝世', photo:'http://jishi.woniu.com/res/gui/special/card/890.png'},
                {name:'凤舞九天剑', type:'单剑', quality:'绝世', photo:'http://jishi.woniu.com/res/gui/special/card/882.png'},
                {name:'翠飐凌霄', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/863.png'},
                {name:'玄穹剑', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/857.png'},
                {name:'重野剑', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/846.png'},
                {name:'归冥弑刹剑', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/844.png'},
                {name:'梅中剑', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/838.png'},
                {name:'越梅剑', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/837.png'},
                {name:'忆梅剑', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/836.png'},
                {name:'玉梅剑', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/835.png'},
                {name:'荆棘紫薇剑', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/841.png'},
                {name:'紫风错金剑', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/446.png'},
                {name:'赤炼剑鞘', type:'单剑', quality:'绝世', photo:'http://jishi.woniu.com/res/gui/special/card/859.png'},
                {name:'香蕊寒春剑', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/412.png'},
                {name:'如意手(剑)', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/403.png'},
                {name:'新月长虹剑', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/401.png'},
                {name:'豪羽翠仙剑', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/400.png'},
                {name:'凤炎剑', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/390.png'},
                {name:'阳春弦雪剑', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/385.png'},
                {name:'金燕剑鞘', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/366.png'},
                {name:'四方镔铁锏', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/357.png'},
                {name:'王命金锏', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/356.png'},
                {name:'闪蝶剑鞘', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/328.png'},
                {name:'四象剑鞘', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/303.png'},
                {name:'伞·青花', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/297.png'},
                {name:'伞·丹鹤', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/296.png'},
                {name:'伞·墨兰', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/295.png'},
                {name:'伞·腊梅', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/294.png'},
                {name:'伞·锦鲤', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/293.png'},
                {name:'伞·翠竹', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/292.png'},
                {name:'伞·迎春', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/291.png'},
                {name:'血玉魔笛套', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/269.png'},
                {name:'湘妃笛套', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/268.png'},
                {name:'冰糖葫芦(单剑)', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/253.png'},
                {name:'易水寒冰剑鞘', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/231.png'},
                {name:'点墨剑鞘', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/219.png'},
                {name:'倚天剑鞘', type:'单剑', quality:'绝世', photo:'http://jishi.woniu.com/res/gui/special/card/218.png'},
                {name:'沉浮之剑', type:'单剑', quality:'绝世', photo:'http://jishi.woniu.com/res/gui/special/card/216.png'},
                {name:'碧影剑鞘', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/210.png'},
                {name:'墨子剑鞘', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/195.png'},
                {name:'合欢剑', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/191.png'},
                {name:'栖梧剑', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/187.png'},
                {name:'界王剑', type:'单剑', quality:'绝世', photo:'http://jishi.woniu.com/res/gui/special/card/186.png'},
                {name:'清音琴鞘', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/185.png'},
                {name:'游龙戏凤琴鞘', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/180.png'},
                {name:'玉魄凝光剑鞘', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/171.png'},
                {name:'焚天玄木伞套', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/151.png'},
                {name:'忆心套', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/150.png'},
                {name:'归真鞘', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/147.png'},
                {name:'乌金拐鞘', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/143.png'},
                {name:'龙头铁拐剑鞘', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/128.png'},
                {name:'黄金重剑鞘', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/126.png'},
                {name:'青竹枝', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/123.png'},
                {name:'碧玉箫套', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/111.png'},
                {name:'血鹃剑鞘', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/28.png'},
                {name:'青竹剑鞘', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/22.png'},
                {name:'血剑鞘', type:'单剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/18.png'},
                {name:'乌金伞套', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/15.png'},
                {name:'昆吾铁剑鞘', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/14.png'},
                {name:'真武剑鞘', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/13.png'},
                {name:'莫邪剑鞘', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/7.png'},
                {name:'干将剑鞘', type:'单剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/6.png'},
                {name:'魔娆剑', type:'单剑', quality:'绝世', photo:'http://jishi.woniu.com/res/gui/special/card/5.png'},
                {name:'云离钩鞘', type:'单剑', quality:'绝世', photo:'http://jishi.woniu.com/res/gui/special/card/2.png'}
            ];
            this.doubleSwords = [{name:'雁雪剑', type:'双剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/881.png'},
                {name:'青辉映雪剑', type:'双剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/448.png'},
                {name:'金燕双剑鞘', type:'双剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/372.png'},
                {name:'十方双剑鞘', type:'双剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/365.png'},
                {name:'四象双剑鞘', type:'双剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/304.png'},
                {name:'天剑绝刀双剑鞘', type:'双剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/264.png'},
                {name:'冰糖葫芦(双剑)', type:'双剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/255.png'},
                {name:'两仪双剑鞘', type:'双剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/221.png'},
                {name:'虹尘双剑鞘', type:'双剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/211.png'},
                {name:'九宫双剑鞘', type:'双剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/199.png'},
                {name:'合欢双剑', type:'双剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/193.png'},
                {name:'栖梧双剑', type:'双剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/189.png'},
                {name:'霜月鞘', type:'双剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/177.png'},
                {name:'墨雪双剑鞘', type:'双剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/133.png'},
                {name:'翠微剑鞘', type:'双剑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/114.png'},
                {name:'雌雄合股剑鞘', type:'双剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/34.png'},
                {name:'鸳鸯双剑鞘', type:'双剑', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/23.png'}
            ];
            this.knife = [{name:'赢战刀鞘', type:'单刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/880.png'},
                {name:'鳞翅刀鞘', type:'单刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/848.png'},
                {name:'虎齿刃', type:'单刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/842.png'},
                {name:'龙岩断金刀', type:'单刀', quality:'绝世', photo:'http://jishi.woniu.com/res/gui/special/card/833.png'},
                {name:'霜花斩铁刀', type:'单刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/445.png'},
                {name:'关山魂梦长', type:'单刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/415.png'},
                {name:'蛟纹刀鞘', type:'单刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/414.png'},
                {name:'龙魄定疆刀鞘', type:'单刀', quality:'绝世', photo:'http://jishi.woniu.com/res/gui/special/card/410.png'},
                {name:'百胜刀鞘', type:'单刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/409.png'},
                {name:'残阳星陨刃', type:'单刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/407.png'},
                {name:'如意手（刀）', type:'单刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/404.png'},
                {name:'吞金雪玉刀', type:'单刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/402.png'},
                {name:'归觐刀匣', type:'单刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/386.png'},
                {name:'金虎噬刃刀鞘', type:'单刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/368.png'},
                {name:'断罪魔刀', type:'单刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/359.png'},
                {name:'鹊首刀鞘', type:'单刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/326.png'},
                {name:'绣春刀', type:'单刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/311.png'},
                {name:'血海魔刀鞘', type:'单刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/290.png'},
                {name:'紫影蔽日伞鞘', type:'单刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/256.png'},
                {name:'冰糖葫芦(单刀)', type:'单刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/252.png'},
                {name:'金丝大环刀', type:'单刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/245.png'},
                {name:'炽金刀鞘', type:'单刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/233.png'},
                {name:'银魂刀鞘', type:'单刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/226.png'},
                {name:'阴阳刀鞘', type:'单刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/220.png'},
                {name:'梅花刀鞘', type:'单刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/208.png'},
                {name:'飞狐刀鞘', type:'单刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/198.png'},
                {name:'合欢刀', type:'单刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/192.png'},
                {name:'栖梧刀', type:'单刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/188.png'},
                {name:'柳叶刀', type:'单刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/183.png'},
                {name:'雪月寒刀鞘', type:'单刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/173.png'},
                {name:'鳄鱼剪鞘', type:'单刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/134.png'},
                {name:'邪月魔刀鞘', type:'单刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/132.png'},
                {name:'斩倭刀鞘', type:'单刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/122.png'},
                {name:'破天刀鞘', type:'单刀', quality:'绝世', photo:'http://jishi.woniu.com/res/gui/special/card/113.png'},
                {name:'鬼首绿影刀鞘', type:'单刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/35.png'},
                {name:'斩虎刀鞘', type:'单刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/24.png'},
                {name:'九环鬼头大刀鞘', type:'单刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/20.png'},
                {name:'秋鱼刀鞘', type:'单刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/19.png'},
                {name:'屠龙刀鞘', type:'单刀', quality:'绝世', photo:'http://jishi.woniu.com/res/gui/special/card/1.png'}
            ];
            this.doubleKnife = [{name:'紫云双刀', type:'双刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/830.png'},
                {name:'金蛟啸日刀', type:'双刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/510.png'},
                {name:'鸳鸯双刀鞘', type:'双刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/488.png'},
                {name:'雁翼连环刀', type:'双刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/447.png'},
                {name:'残阳星陨刃·双', type:'双刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/408.png'},
                {name:'金虎噬刃双刀鞘', type:'双刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/373.png'},
                {name:'邪龙双月刃鞘', type:'双刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/316.png'},
                {name:'天剑绝刀双刀鞘', type:'双刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/263.png'},
                {name:'冰糖葫芦(双刀)', type:'双刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/254.png'},
                {name:'沉香双刀鞘', type:'双刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/209.png'},
                {name:'合欢双刀', type:'双刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/194.png'},
                {name:'栖梧双刀', type:'双刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/190.png'},
                {name:'苍月鞘', type:'双刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/178.png'},
                {name:'丧门锏鞘', type:'双刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/127.png'},
                {name:'望月刀鞘', type:'双刀', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/116.png'},
                {name:'鸳鸯蝴蝶刀鞘', type:'双刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/31.png'},
                {name:'月牙银钩套', type:'双刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/30.png'},
                {name:'无敌钩套', type:'双刀', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/27.png'}
            ];
            this.shortStick = [{name:'尘清如意', type:'短棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/933.png'},
                {name:'昇龙烟斗(短棍)', type:'短棍', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/869.png'},
                {name:'亮银虬龙棒', type:'短棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/449.png'},
                {name:'如意手（棍）', type:'短棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/405.png'},
                {name:'捶金虎头棒套', type:'短棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/367.png'},
                {name:'云河棍套', type:'短棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/329.png'},
                {name:'赤蛇噬魂杖', type:'短棍', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/247.png'},
                {name:'红缨枪套', type:'短棍', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/213.png'},
                {name:'锁魂判官笔鞘', type:'短棍', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/207.png'},
                {name:'判官笔鞘', type:'短棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/206.png'},
                {name:'银盘龙棒套', type:'短棍', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/172.png'},
                {name:'快活挠套', type:'短棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/142.png'},
                {name:'少二两套', type:'短棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/141.png'},
                {name:'毒蛇杖', type:'短棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/137.png'},
                {name:'珊瑚骨首杖套', type:'短棍', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/117.png'},
                {name:'火龙棒套', type:'短棍', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/32.png'},
                {name:'青竹杖套', type:'短棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/26.png'}
            ];
            this.longStick = [{name:'元龙腾渊棍', type:'长棍', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/911.png'},
                {name:'万兽镰', type:'长棍', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/872.png'},
                {name:'凤翅镏金镗', type:'长棍', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/492.png'},
                {name:'盘龙两刃枪', type:'长棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/444.png'},
                {name:'靖海平波棍', type:'长棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/376.png'},
                {name:'如意祥云棍套', type:'长棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/371.png'},
                {name:'弥尊棍套', type:'长棍', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/330.png'},
                {name:'方天画戟套', type:'长棍', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/280.png'},
                {name:'半月戟套', type:'长棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/279.png'},
                {name:'定情枪', type:'长棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/262.png'},
                {name:'青龙偃月刀', type:'长棍', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/244.png'},
                {name:'擎天长刀套', type:'长棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/234.png'},
                {name:'翡翠青虹戟套', type:'长棍', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/212.png'},
                {name:'天行马杖套', type:'长棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/201.png'},
                {name:'冰玉长棍套', type:'长棍', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/176.png'},
                {name:'戏云叉套', type:'长棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/145.png'},
                {name:'乾坤耙套', type:'长棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/144.png'},
                {name:'狼牙棒套', type:'长棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/131.png'},
                {name:'禅杖套', type:'长棍', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/130.png'},
                {name:'月牙棍套', type:'长棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/25.png'},
                {name:'梨花银枪套', type:'长棍', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/21.png'},
                {name:'天机棍套', type:'长棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/17.png'},
                {name:'黄金棍套', type:'长棍', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/16.png'},
                {name:'霸王枪套', type:'长棍', quality:'绝世', photo:'http://jishi.woniu.com/res/gui/special/card/4.png'}
            ];
            this.dagger = [{name:'却邪卫真令', type:'匕首', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/934.png'},
                {name:'千忆扇', type:'匕首', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/879.png'},
                {name:'侠骨扇', type:'匕首', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/876.png'},
                {name:'昇龙烟斗（匕首）', type:'匕首', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/868.png'},
                {name:'金环银锋刺', type:'匕首', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/443.png'},
                {name:'赤鳞点金匕鞘', type:'匕首', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/369.png'},
                {name:'天下第一', type:'匕首', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/351.png'},
                {name:'情殇扇鞘', type:'匕首', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/350.png'},
                {name:'桃花扇鞘', type:'匕首', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/349.png'},
                {name:'流云停落·月', type:'匕首', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/348.png'},
                {name:'流云停落·雪', type:'匕首', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/347.png'},
                {name:'流云停落·花', type:'匕首', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/346.png'},
                {name:'流云停落·风', type:'匕首', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/345.png'},
                {name:'才子佳人', type:'匕首', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/344.png'},
                {name:'金童玉女', type:'匕首', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/343.png'},
                {name:'怜花刃鞘', type:'匕首', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/327.png'},
                {name:'鬼王扇鞘', type:'匕首', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/261.png'},
                {name:'鸣凤匕鞘', type:'匕首', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/214.png'},
                {name:'断夜紫刃', type:'匕首', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/184.png'},
                {name:'镂金血匕鞘', type:'匕首', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/174.png'},
                {name:'佛低头鞘', type:'匕首', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/140.png'},
                {name:'逍遥扇鞘', type:'匕首', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/121.png'},
                {name:'未央飘羽扇鞘', type:'匕首', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/120.png'},
                {name:'破军游龙扇鞘', type:'匕首', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/119.png'},
                {name:'镔铁判官笔鞘', type:'匕首', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/112.png'},
                {name:'游魂刺鞘', type:'匕首', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/29.png'}
            ];
            this.twinSpike = [{name:'金刚杵', type:'双刺', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/871.png'},
                {name:'云纹拨影环', type:'双刺', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/450.png'},
                {name:'引龙追凤环', type:'双刺', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/406.png'},
                {name:'如意镶金双月刺鞘', type:'双刺', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/370.png'},
                {name:'盘龙肆弈双刺', type:'双刺', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/224.png'},
                {name:'翠玉棋盘双刺', type:'双刺', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/223.png'},
                {name:'银薇双刺鞘', type:'双刺', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/222.png'},
                {name:'怜花双刺鞘', type:'双刺', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/196.png'},
                {name:'雪蝶鞘', type:'双刺', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/175.png'},
                {name:'收柯镰鞘', type:'双刺', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/146.png'},
                {name:'如意子鞘', type:'双刺', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/139.png'},
                {name:'子母龙凤环鞘', type:'双刺', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/129.png'},
                {name:'蝶恋双刺鞘', type:'双刺', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/115.png'},
                {name:'分水飞鱼刺鞘', type:'双刺', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/33.png'}
            ];
            this.Bow = [ {name:'盘龙腾焰弓', type:'弓', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/486.png'},
                {name:'霞翎凤落弓', type:'弓', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/416.png'}
            ];
            this.qin = [{name:'凰台游梦', type:'琴', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/909.png'},
                {name:'九天揽月琴', type:'琴', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/905.png'},
                {name:'沉湘宓妃琴', type:'琴', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/904.png'}
            ];

            var weaponMenuItems = ko.observableArray([
                { value: 'sword', label: '单剑'},
                { value: 'doubleSwords', label: '双剑'},
                { value: 'knife', label: '单刀'},
                { value: 'doubleKnife', label: '双刀'},
                { value: 'dagger', label: '匕首'},
                { value: 'shortStick', label: '短棍'},
                { value: 'longStick', label: '长棍'},
                { value: 'twinSpike', label: '双刺'},
                { value: 'Bow', label: '弓'},
                { value: 'qin', label: '琴'}
            ]);
            this.weaponTypeDP = new ArrayDataProvider(weaponMenuItems, { keyAttributes: 'value' });
            this.weaponValueChangedHandler = function (event) {
                var value = event.detail.data.value;
                switch (value){
                    case 'sword': this.weapon(this.sword);break;
                    case 'doubleSwords': this.weapon(this.doubleSwords);break;
                    case 'knife': this.weapon(this.knife);break;
                    case 'doubleKnife': this.weapon(this.doubleKnife);break;
                    case 'dagger': this.weapon(this.dagger);break;
                    case 'shortStick': this.weapon(this.shortStick);break;
                    case 'longStick': this.weapon(this.longStick);break;
                    case 'twinSpike': this.weapon(this.twinSpike);break;
                    case 'Bow': this.weapon(this.Bow);break;
                    case 'qin': this.weapon(this.qin);break;
                }
                let weaponTypeList =  document.getElementById('weaponTypeList');
                weaponTypeList.refresh();
            }.bind(this);

            this.weapon = ko.observableArray(this.sword);
            this.weaponProvider = new PagingDataProviderView(new ArrayDataProvider(this.weapon));

            this.ride = [{name:'如云之乘', type:'乘骑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/939.png'},
                {name:'凌踪马', type:'乘骑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/892.png'},
                {name:'赤缨马', type:'乘骑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/847.png'},
                {name:'傲天神行马', type:'乘骑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/468.png'},
                {name:'飞火流星', type:'乘骑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/436.png'},
                {name:'白龙驹', type:'乘骑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/374.png'},
                {name:'墨麟儿', type:'乘骑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/278.png'},
                {name:'玉逍遥', type:'乘骑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/230.png'},
                {name:'狮子骢', type:'乘骑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/217.png'},
                {name:'胭脂马', type:'乘骑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/203.png'},
                {name:'黑水仙', type:'乘骑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/170.png'},
                {name:'霜雪骓', type:'乘骑', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/124.png'},
                {name:'冷龙驹', type:'乘骑', quality:'绝世', photo:'http://jishi.woniu.com/res/gui/special/card/12.png'},
                {name:'汗血宝马', type:'乘骑', quality:'绝世', photo:'http://jishi.woniu.com/res/gui/special/card/11.png'},
            ];
            this.rideProvider = new PagingDataProviderView(new ArrayDataProvider(this.ride));

            this.cape = [{name:'花醉三千', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/749.png'},
                {name:'秋水胧月', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/748.png'},
                {name:'漠尘之华', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/746.png'},
                {name:'漫红馥雅', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/745.png'},
                {name:'紫绮矜凰', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/744.png'},
                {name:'耀世麟吟', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/743.png'},
                {name:'花开皇庭披', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/742.png'},
                {name:'漠漠云归', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/741.png'},
                {name:'幻影氅', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/740.png'},
                {name:'绫岚紫羽披', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/739.png'},
                {name:'朱羽绣玉披', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/738.png'},
                {name:'胭红暮雪披', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/737.png'},
                {name:'无双幻粉披风', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/736.png'},
                {name:'青云琉影披风', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/735.png'},
                {name:'金甲战披', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/733.png'},
                {name:'百花朝凤', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/732.png'},
                {name:'薇云披风·赤', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/731.png'},
                {name:'薇云披风·黄', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/730.png'},
                {name:'薇云披风·蓝', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/729.png'},
                {name:'星尘幻空披', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/728.png'},
                {name:'金领冰露披', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/727.png'},
                {name:'齐天凤翎披·蓝', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/726.png'},
                {name:'齐天凤翎披·紫', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/725.png'},
                {name:'齐天凤翎披·黄', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/724.png'},
                {name:'齐天凤翎披·朱', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/723.png'},
                {name:'鹤影霞鸾披', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/722.png'},
                {name:'锦龙氅', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/721.png'},
                {name:'追云·清', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/720.png'},
                {name:'追云·威', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/719.png'},
                {name:'追云·雅', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/718.png'},
                {name:'追云·冥', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/717.png'},
                {name:'追云', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/716.png'},
                {name:'破阵子·出塞', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/714.png'},
                {name:'游龙戏凤.玉', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/713.png'},
                {name:'游龙戏凤.绯', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/712.png'},
                {name:'游龙戏凤.蓝', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/711.png'},
                {name:'游龙戏凤.朱', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/710.png'},
                {name:'百战血披.玄', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/709.png'},
                {name:'百战血披.朱', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/708.png'},
                {name:'百战血披.青', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/707.png'},
                {name:'鹿锦醉花.玄', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/706.png'},
                {name:'鹿锦醉花.朱', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/705.png'},
                {name:'鹿锦醉花.紫', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/704.png'},
                {name:'雀绒映月.紫', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/703.png'},
                {name:'雀绒映月.朱', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/702.png'},
                {name:'雀绒映月.蓝', type:'披风', quality:'珍藏', photo:'http://jishi.woniu.com/res/gui/special/card/701.png'}
            ];

            this.mask = [];

            this.waist = [{name:'冰晶莲华', type:'腰饰', quality:'传说', photo:'http://jishi.woniu.com/res/gui/special/card/649.png'},
            ];

            this.back = [];

            var accessoryMenuItems = ko.observableArray([
                { value: 'cape', label: '披风'},
                { value: 'mask', label: '面具'},
                { value: 'waist', label: '腰饰'},
                { value: 'back', label: '背饰'}
            ]);
            this.accessoryTypeDP = new ArrayDataProvider(accessoryMenuItems, { keyAttributes: 'value' });
            this.accessoryValueChangedHandler = function (event) {
                var value = event.detail.data.value;
                switch (value){
                    case 'cape': this.accessory(this.cape);break;
                    case 'mask': this.accessory(this.mask);break;
                    case 'waist': this.accessory(this.waist);break;
                    case 'back': this.accessory(this.back);break;
                }
                let accessoryTypeList =  document.getElementById('accessoryTypeList');
                accessoryTypeList.refresh();
            }.bind(this);

            this.accessory = ko.observableArray(this.cape);
            this.accessoryProvider = new PagingDataProviderView(new ArrayDataProvider(this.accessory));

            // 导航所选
            this.selectedItem = ko.observable('clothing');

            // 所选风物志
            this.selectedClothDisplay = ko.observableArray([]);
            // 显示已选风物志的数据源
            this.dataProvider = new ArrayDataProvider(this.selectedClothDisplay);


            this.firstSelectedItem = ko.observable();

            // 点击风物志，添加到已选显示区域
            this.handleSelectedChanged = function (event){
                if(this.selectedClothDisplay().length >= 5){ // 判断是否可以继续添加
                    // 打开弹窗
                    document.querySelector('#dialogWithUserDefinedHeader').open();
                }
                else{
                    // 已选中
                    if(this.firstSelectedItem().data){
                        // 未添加
                        if(this.selectedClothDisplay.indexOf(this.firstSelectedItem().data.name) == -1){
                            this.selectedClothDisplay.push(this.firstSelectedItem().data.name);
                        }
                    }
                }
            }.bind(this);

            // 已选显示区域 删除已选项
            this.remove = function(event, current, bindingContext) { //筛选项点击移除监听
                this.selectedClothDisplay.remove(current.data);
            }.bind(this);

            // 错误弹窗关闭
            this.handleOKClose = function () {
                document.querySelector('#dialogWithUserDefinedHeader').close();
            };

            // 搜索按钮
            this.search = function () {
                var skillArray =  this.selectedClothDisplay();
                var len = skillArray.length;
                var param = len>0 || this.selectedServer() ? '?':'';
                for(var i=0; i<len; i++){
                    param += 'skin' + (i+1) + '=' + skillArray[i];
                    if(i<len-1){
                        param += '&';
                    }
                }
                var serverIdParam = "";
                if(this.selectedServer()){
                    if(len>0){
                        serverIdParam =  serverIdParam + "&";
                    }
                    serverIdParam = serverIdParam + "serverId=" + this.selectedServer();
                }

                openLoading();
                $.ajax({
                    url: address + "/api/roleFilter/bySkin" + param + serverIdParam,
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
                    context.row.id,
                    context.row.name,
                    context.row.price,
                    context.row.server_name,
                    context.row.server_id,
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
                url: address + "/api/roleFilter/serverList",
                dataType: "json",
                success: function(servers){
                    loadServers(servers);
                }
            });
            var loadServers = function (servers){
                this.server( servers.map(item=> ({value:item.id, label:item.name})) );
                this.server.push({value:"", label:"全区全服"})
            }.bind(this);
        }
        return viewModel;
    }
);