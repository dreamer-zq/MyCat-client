/**
 * 初始化下拉选择框
 * @param c
 */
function initSelect(c) {
    var _inner = {
        "nation": ["汉族", "蒙古族", "彝族", "侗族", "哈萨克族",
            "畲族", "纳西族", "仫佬族", "仡佬族", "怒族", "保安族",
            "鄂伦春族", "回族", "壮族", "瑶族", "傣族", "高山族",
            "景颇族", "羌族", "锡伯族", "乌孜别克族", "裕固族", "赫哲族",
            "藏族", "布依族", "白族", "黎族", "拉祜族", "柯尔克孜族", "布朗族",
            "阿昌族", "俄罗斯族", "京族", "门巴族", "维吾尔族", "朝鲜族",
            "土家族", "傈僳族", "水族", "土族", "撒拉族", "普米族", "鄂温克族",
            "塔塔尔族", "珞巴族", "苗族", "满族", "哈尼族", "佤族", "东乡族",
            "达斡尔族", "毛南族", "塔吉克族", "德昂族", "独龙族", "基诺族"],
        "industryType":["机构组织","农林牧渔","医药卫生","建筑建材","冶金矿产","石油化工",
            "水利水电","交通运输","信息产业","机械机电","轻工食品","服装纺织",
            "专业服务","安全防护","环保绿化","旅游休闲","办公文教","电子电工",
            "玩具礼品","家居用品","物资","包装","体育","办公","其他"],
        "jobType":["工人","农民","公务员","事业单位人员","专业技术人员","企业职员","商业\服务业人员","军人","学生","其他"],
        "shengxiao": ["鼠", "牛", "虎", "兔", "蛇", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
        "degree": ["小学", "初中", "高中", "中专", "大专", "本科", "硕士", "博士"],
        "language":["简体中文","繁体中文","英文"],
        "upgrade_type":[[1,"PC客户端"],[2,"手机客户端"]],
        "sex": [
            ['1', "男"],
            ['0', "女"]
        ],
        "tiveType":[['0','阴性'],['1','阳性']],
        "seriousness":[['1','轻度'],['2','重度']],
        "heartDisease":[['1','先天性心脏病'],['2','风心病'],['3','心肌炎'],['4','心衰']],
        "thyriodDisease":[['1','甲减'],['2','甲亢'],['3','亚甲炎']],
        "dmType":[[1,"I型糖尿病"],[2,"II型糖尿病"],[3,"妊娠糖尿病"],[4,"其他类型"]
        ],
        "alertType":[[1,"高血糖告警"],[2,"低血糖告警"],[3,"持续高血糖告警"],[4,"持续低血糖告警"],[5,"佩戴超时告警"]],
        "mealType":[[1,"早餐"],[2,"中餐"],[3,"晚餐"],[4,"其他"]
            ],
        "glucoseType":[
            [1, "mmol/L"],
            [2, "mg/dl"]
        ],
        "userStatus": [['0','禁用'],['1','正常']],
        "isTrue": [
            ['1', "是"],
            ['0', "否"]
        ],
        "haveType": [
            ['1', "有"],
            ['0', "无"]
        ],
        "bloodType":[['1',"A"],['2','B'],['3','O'],['4','AB']],
        "bloodRh":[['1','+'],['2','-']],
        "parturitionState":[['0',"产前"],['1',"产后"]
        ],
        "birthType":[['1','剖腹产'],['2','平产'],['3','助产'],['4','会阴侧切']],
        "multipleBirths":[['1','单胎'],['2','双胎'],['3','三胎'],['4','四胎'],['5','五胎']],
        "searchFunctionLevel": [
            ['1', "一级菜单"],
            ['2', "二级菜单"],
            ['3', "三级菜单"],
            ['4', "四级菜单"]
        ],
        "insulinType":[['1','长效胰岛素'],['2','速效胰岛素']],
        "event_type":[[1,"饮食"],[2,"注射胰岛素"],[3,"用药"],[4,"锻炼"]],
        "hospitalType": ["公立", "私立"],
        "hospitalRank": ["一级甲等", "一级乙等", "一级丙等", "二级甲等", "二级乙等", "二级丙等","三级特等" ,"三级甲等", "三级乙等", "三级丙等"]
    };
    var _select = document.getElementById(c["id"]);
    var _array = c["array"] || _inner[c["type"]];
    var _val = c["val"];
    var _txt = c["txt"];
    if(_select && _array){
        for (var i = 0; i < _array.length; i++) {
            var _value = _array[i];
            var _text = _array[i];
            if (_value instanceof Array) {
                var array = _array[i];
                _value = array[0];
                _text = array[1];
            }
            if(_txt && _val && _value[_txt] && _value[_val]){
                _text = _value[_txt];
                _value = _value[_val];
            }
            _select.options[_select.options.length] = new Option(_text, _value);
            if(_value == c["selected"]){
                _select.options[_select.options.length-1].selected = true;
            }
        }
        c["onchange"] && (_select.onchange = c["onchange"]);
    }
}
function Map() {
    this.keys = new Array();
    this.data = new Array();

    //添加键值对
    this.set = function (key, value) {
        if (this.data[key] == null) {//如键不存在则身【键】数组添加键名
            this.keys.push(key);
        }
        this.data[key] = value;//给键赋值
    };

    //获取键对应的值
    this.get = function (key) {
        return this.data[key];
    };

    //去除键值，(去除键数据中的键名及对应的值)
    this.remove = function (key) {
        this.keys.remove(key);
        this.data[key] = null;
    };

    //判断键值元素是否为空
    this.isEmpty = function () {
        return this.keys.length == 0;
    };

    //获取键值元素大小
    this.size = function () {
        return this.keys.length;
    };
}//省市县划分
var provinceList = new Map();
var cities = new Map();
cities.set("东城");
cities.set("西城");
cities.set("崇文");
cities.set("宣武");
cities.set("朝阳");
cities.set("丰台");
cities.set("石景山");
cities.set("海淀");
cities.set("门头沟");
cities.set("房山");
cities.set("通州");
cities.set("顺义");
cities.set("昌平");
cities.set("大兴");
cities.set("平谷");
cities.set("怀柔");
cities.set("密云");
cities.set("延庆");
provinceList.set("北京", cities);

cities = new Map();
cities.set("黄浦");
cities.set("卢湾");
cities.set("徐汇");
cities.set("长宁");
cities.set("静安");
cities.set("普陀");
cities.set("闸北");
cities.set("虹口");
cities.set("杨浦");
cities.set("闵行");
cities.set("宝山");
cities.set("嘉定");
cities.set("浦东");
cities.set("金山");
cities.set("松江");
cities.set("青浦");
cities.set("南汇");
cities.set("奉贤");
cities.set("崇明");
provinceList.set("上海", cities);

cities = new Map();
cities.set("和平");
cities.set("东丽");
cities.set("河东");
cities.set("西青");
cities.set("河西");
cities.set("津南");
cities.set("南开");
cities.set("北辰");
cities.set("河北");
cities.set("武清");
cities.set("红挢");
cities.set("塘沽");
cities.set("汉沽");
cities.set("大港");
cities.set("宁河");
cities.set("静海");
cities.set("宝坻");
cities.set("蓟县");
provinceList.set("天津", cities);

cities = new Map();
cities.set("万州");
cities.set("涪陵");
cities.set("渝中");
cities.set("大渡口");
cities.set("江北");
cities.set("沙坪坝");
cities.set("九龙坡");
cities.set("南岸");
cities.set("北碚");
cities.set("万盛");
cities.set("双挢");
cities.set("渝北");
cities.set("巴南");
cities.set("黔江");
cities.set("长寿");
cities.set("綦江");
cities.set("潼南");
cities.set("铜梁");
cities.set("大足");
cities.set("荣昌");
cities.set("壁山");
cities.set("梁平");
cities.set("城口");
cities.set("丰都");
cities.set("垫江");
cities.set("武隆");
cities.set("忠县");
cities.set("开县");
cities.set("云阳");
cities.set("奉节");
cities.set("巫山");
cities.set("巫溪");
cities.set("石柱");
cities.set("秀山");
cities.set("酉阳");
cities.set("彭水");
cities.set("江津");
cities.set("合川");
cities.set("永川");
cities.set("南川");
provinceList.set("重庆", cities);

cities = new Map();
cities.set("石家庄");
cities.set("邯郸");
cities.set("邢台");
cities.set("保定");
cities.set("张家口");
cities.set("承德");
cities.set("廊坊");
cities.set("唐山");
cities.set("秦皇岛");
cities.set("沧州");
cities.set("衡水");
provinceList.set("河北", cities);

cities = new Map();
cities.set("太原");
cities.set("大同");
cities.set("阳泉");
cities.set("长治");
cities.set("晋城");
cities.set("朔州");
cities.set("吕梁");
cities.set("忻州");
cities.set("晋中");
cities.set("临汾");
cities.set("运城");
provinceList.set("山西", cities);

cities = new Map();
cities.set("呼和浩特");
cities.set("包头");
cities.set("乌海");
cities.set("赤峰");
cities.set("呼伦贝尔盟");
cities.set("阿拉善盟");
cities.set("哲里木盟");
cities.set("兴安盟");
cities.set("乌兰察布盟");
cities.set("锡林郭勒盟");
cities.set("巴彦淖尔盟");
cities.set("伊克昭盟");
provinceList.set("内蒙古", cities);

cities = new Map();
cities.set("沈阳");
cities.set("大连");
cities.set("鞍山");
cities.set("抚顺");
cities.set("本溪");
cities.set("丹东");
cities.set("锦州");
cities.set("营口");
cities.set("阜新");
cities.set("辽阳");
cities.set("盘锦");
cities.set("铁岭");
cities.set("朝阳");
cities.set("葫芦岛");
provinceList.set("辽宁", cities);

cities = new Map();
cities.set("长春");
cities.set("吉林");
cities.set("四平");
cities.set("辽源");
cities.set("通化");
cities.set("白山");
cities.set("松原");
cities.set("白城");
cities.set("延边");
provinceList.set("吉林", cities);

cities = new Map();
cities.set("哈尔滨");
cities.set("齐齐哈尔");
cities.set("牡丹江");
cities.set("佳木斯");
cities.set("大庆");
cities.set("绥化");
cities.set("鹤岗");
cities.set("鸡西");
cities.set("黑河");
cities.set("双鸭山");
cities.set("伊春");
cities.set("七台河");
cities.set("大兴安岭");
provinceList.set("黑龙江", cities);

cities = new Map();
cities.set("南京");
cities.set("镇江");
cities.set("苏州");
cities.set("南通");
cities.set("扬州");
cities.set("盐城");
cities.set("徐州");
cities.set("连云港");
cities.set("常州");
cities.set("无锡");
cities.set("宿迁");
cities.set("泰州");
cities.set("淮安");
provinceList.set("江苏", cities);

cities = new Map();
cities.set("杭州");
cities.set("宁波");
cities.set("温州");
cities.set("嘉兴");
cities.set("湖州");
cities.set("绍兴");
cities.set("金华");
cities.set("衢州");
cities.set("舟山");
cities.set("台州");
cities.set("丽水");
provinceList.set("浙江", cities);

cities = new Map();
cities.set("合肥");
cities.set("芜湖");
cities.set("蚌埠");
cities.set("马鞍山");
cities.set("淮北");
cities.set("铜陵");
cities.set("安庆");
cities.set("黄山");
cities.set("滁州");
cities.set("宿州");
cities.set("池州");
cities.set("淮南");
cities.set("巢湖");
cities.set("阜阳");
cities.set("六安");
cities.set("宣城");
cities.set("亳州");
provinceList.set("安徽", cities);

cities = new Map();
cities.set("福州");
cities.set("厦门");
cities.set("莆田");
cities.set("三明");
cities.set("泉州");
cities.set("漳州");
cities.set("南平");
cities.set("龙岩");
cities.set("宁德");
provinceList.set("福建", cities);

cities = new Map();
cities.set("南昌市");
cities.set("景德镇");
cities.set("九江");
cities.set("鹰潭");
cities.set("萍乡");
cities.set("新馀");
cities.set("赣州");
cities.set("吉安");
cities.set("宜春");
cities.set("抚州");
cities.set("上饶");
provinceList.set("江西", cities);

cities = new Map();
cities.set("济南");
cities.set("青岛");
cities.set("淄博");
cities.set("枣庄");
cities.set("东营");
cities.set("烟台");
cities.set("潍坊");
cities.set("济宁");
cities.set("泰安");
cities.set("威海");
cities.set("日照");
cities.set("莱芜");
cities.set("临沂");
cities.set("德州");
cities.set("聊城");
cities.set("滨州");
cities.set("菏泽");
provinceList.set("山东", cities);

cities = new Map();
cities.set("郑州");
cities.set("开封");
cities.set("洛阳");
cities.set("平顶山");
cities.set("安阳");
cities.set("鹤壁");
cities.set("新乡");
cities.set("焦作");
cities.set("濮阳");
cities.set("许昌");
cities.set("漯河");
cities.set("三门峡");
cities.set("南阳");
cities.set("商丘");
cities.set("信阳");
cities.set("周口");
cities.set("驻马店");
cities.set("济源");
provinceList.set("河南", cities);

cities = new Map();
cities.set("武汉");
cities.set("宜昌");
cities.set("荆州");
cities.set("襄樊");
cities.set("黄石");
cities.set("荆门");
cities.set("黄冈");
cities.set("十堰");
cities.set("恩施");
cities.set("潜江");
cities.set("天门");
cities.set("仙桃");
cities.set("随州");
cities.set("咸宁");
cities.set("孝感");
cities.set("鄂州");
provinceList.set("湖北", cities);

cities = new Map();
cities.set("长沙");
cities.set("常德");
cities.set("株洲");
cities.set("湘潭");
cities.set("衡阳");
cities.set("岳阳");
cities.set("邵阳");
cities.set("益阳");
cities.set("娄底");
cities.set("怀化");
cities.set("郴州");
cities.set("永州");
cities.set("湘西");
cities.set("张家界");
provinceList.set("湖南", cities);

cities = new Map();
cities.set("广州");
cities.set("深圳");
cities.set("珠海");
cities.set("汕头");
cities.set("东莞");
cities.set("中山");
cities.set("佛山");
cities.set("韶关");
cities.set("江门");
cities.set("湛江");
cities.set("茂名");
cities.set("肇庆");
cities.set("惠州");
cities.set("梅州");
cities.set("汕尾");
cities.set("河源");
cities.set("阳江");
cities.set("清远");
cities.set("潮州");
cities.set("揭阳");
cities.set("云浮");
provinceList.set("广东", cities);

cities = new Map();
cities.set("南宁");
cities.set("柳州");
cities.set("桂林");
cities.set("梧州");
cities.set("北海");
cities.set("防城港");
cities.set("钦州");
cities.set("贵港");
cities.set("玉林");
cities.set("南宁地区");
cities.set("柳州地区");
cities.set("贺州");
cities.set("百色");
cities.set("河池");
provinceList.set("广西", cities);

cities = new Map();
cities.set("海口");
cities.set("三亚");
provinceList.set("海南", cities);

cities = new Map();
cities.set("成都");
cities.set("绵阳");
cities.set("德阳");
cities.set("自贡");
cities.set("攀枝花");
cities.set("广元");
cities.set("内江");
cities.set("乐山");
cities.set("南充");
cities.set("宜宾");
cities.set("广安");
cities.set("达川");
cities.set("雅安");
cities.set("眉山");
cities.set("甘孜");
cities.set("凉山");
cities.set("泸州");
provinceList.set("四川", cities);

cities = new Map();
cities.set("贵阳");
cities.set("六盘水");
cities.set("遵义");
cities.set("安顺");
cities.set("铜仁");
cities.set("黔西南");
cities.set("毕节");
cities.set("黔东南");
cities.set("黔南");
provinceList.set("贵州", cities);

cities = new Map();
cities.set("昆明");
cities.set("大理");
cities.set("曲靖");
cities.set("玉溪");
cities.set("昭通");
cities.set("楚雄");
cities.set("红河");
cities.set("文山");
cities.set("思茅");
cities.set("西双版纳");
cities.set("保山");
cities.set("德宏");
cities.set("丽江");
cities.set("怒江");
cities.set("迪庆");
cities.set("临沧");
provinceList.set("云南", cities);

cities = new Map();
cities.set("拉萨");
cities.set("日喀则");
cities.set("山南");
cities.set("林芝");
cities.set("昌都");
cities.set("阿里");
cities.set("那曲");
provinceList.set("西藏", cities);

cities = new Map();
cities.set("西安");
cities.set("宝鸡");
cities.set("咸阳");
cities.set("铜川");
cities.set("渭南");
cities.set("延安");
cities.set("榆林");
cities.set("汉中");
cities.set("安康");
cities.set("商洛");
provinceList.set("陕西", cities);

cities = new Map();
cities.set("兰州");
cities.set("嘉峪关");
cities.set("金昌");
cities.set("白银");
cities.set("天水");
cities.set("酒泉");
cities.set("张掖");
cities.set("武威");
cities.set("定西");
cities.set("陇南");
cities.set("平凉");
cities.set("庆阳");
cities.set("临夏");
cities.set("甘南");
provinceList.set("甘肃", cities);

cities = new Map();
cities.set("银川");
cities.set("石嘴山");
cities.set("吴忠");
cities.set("固原");
provinceList.set("宁夏", cities);

cities = new Map();
cities.set("西宁");
cities.set("海东");
cities.set("海南");
cities.set("海北");
cities.set("黄南");
cities.set("玉树");
cities.set("果洛");
cities.set("海西");
provinceList.set("青海", cities);

cities = new Map();
cities.set("乌鲁木齐市",["天山区","沙依巴克区","新市区","水磨沟区","头屯河区","达坂城区","米东区","乌鲁木齐县"]);
cities.set("克拉玛依市",["独山子区","克拉玛依区","白碱滩区","乌尔禾区"]);
cities.set("吐鲁番地区",["吐鲁番市","鄯善县","托克逊县"]);
cities.set("伊犁哈萨克自治州");
cities.set("巴音郭楞蒙古自治州");
cities.set("昌吉回族自治州");
cities.set("克孜勒苏柯尔克孜自治州");
cities.set("博尔塔拉蒙古自治州");
cities.set("哈密地区");
cities.set("塔城地区");
cities.set("石河子市");
cities.set("喀什地区");
cities.set("和田地区");
cities.set("阿克苏地区");
cities.set("阿勒泰地区");
provinceList.set("新疆", cities);

cities = new Map();
provinceList.set("香港", cities);

cities = new Map();
provinceList.set("澳门", cities);

cities = new Map();
cities.set("台北");
cities.set("高雄");
cities.set("台中");
cities.set("台南");
cities.set("屏东");
cities.set("南投");
cities.set("云林");
cities.set("新竹");
cities.set("彰化");
cities.set("苗栗");
cities.set("嘉义");
cities.set("花莲");
cities.set("桃园");
cities.set("宜兰");
cities.set("基隆");
cities.set("台东");
cities.set("金门");
cities.set("马祖");
cities.set("澎湖");
provinceList.set("台湾", cities);

cities = new Map();
cities.set("北美洲");
cities.set("南美洲");
cities.set("亚洲");
cities.set("非洲");
cities.set("欧洲");
cities.set("大洋洲");
provinceList.set("其他", cities);
/**
 * 初始化地域选择框
 * @param c
 */
function selectCity(c) {
    var _province = c["province"], _city = c["city"], _county = c["county"];
    var province_id = c["province_id"], city_id = c["city_id"], county_id = c["county_id"];
    var notNull = c["notNull"];
    var preHtml = "";
    if(!notNull){
        preHtml = "<option value=''>--请选择--</option>";
    }
    initProvince();
    function initProvince(){
        if (province_id) {
            $('#'+province_id).html(preHtml);
            initSelect({"id": province_id, "array": provinceList.keys, "selected": _province,'onchange':function(){
                $('#'+city_id).html(preHtml);
                _province = $('#'+province_id).val();
                initCity();
            }});
            _province = $('#'+province_id).val();
        } else if (!c["province"]) {
            alert("必须设置省标签id或值");
        }
        initCity();
    }
    function initCity(){
        if(city_id){
            $('#'+city_id).html(preHtml);
            if (_province) {
                initSelect({"id": city_id, "array": provinceList.get(_province).keys, "selected": _city,'onchange':function(){
                    $('#'+county_id).html(preHtml);
                    _city = $('#'+city_id).val();
                    initCounty();
                }});
                _city = $('#'+city_id).val();
            }
        }
        initCounty();
    }
    function initCounty(){
        if(county_id){
            $('#'+county_id).html(preHtml);
            if (_city) {
                initSelect({"id": county_id, "array": provinceList.get(_province).get(_city), "selected": _county});
                _county = $('#'+county_id).val();
            }
        }
    }
}