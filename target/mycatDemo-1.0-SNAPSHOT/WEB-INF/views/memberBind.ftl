<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>会员信息绑定</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no">
    <link rel="stylesheet" href="${request.contextPath}/css/weixin.css" media="all" type="text/css" />
    <script type="text/javascript" src="${request.contextPath}/js/weixin.js"></script>
    <script type="text/javascript">
        var $=function(id){return document.getElementById(id);};
        var dataForWeixin={
            appId:"",
            MsgImg:"${request.contextPath}/images/weixin/share_msg.png",
            TLImg:"${request.contextPath}/images/weixin/share.png",
            path:"",
            title:"中闽汇通微信助手",
            desc:"使用中闽汇通微信助手可以在朋友圈或聊天对话框发送更丰富的信息类型",
            fakeid:"",
            callback:function(){}
        };
    </script>

</head>
<body>
<div class="area2 notice">会员信息绑定</div>
<div class="area1">
    <input type="text" id="ucode" name="ucode" maxlength="20" placeholder="身份证号/护照号" />
</div>
<div class="area1">
    <input type="text" id="mOre" name="mOre" maxlength="30" placeholder="手机号/电子邮箱" value=""/><br/><br/>
    <span style="font-size:12px;">注：仅限中国大陆手机号码</span>
</div>
<div class="area1">
    <input type="text" id="code" name="code" maxlength="6" style="width:80px;" placeholder="验证码" value=""/>&nbsp;
    <button id="btnAuthCode" class="button2" style="width:100px;" onclick="authCode._post();">获取验证码</button>
</div>
<div>
    <button class="button1" onclick="_member._post();">提交</button>
</div>
<script type="text/javascript">
    var _member={
        _post:function(){
            var _ucode=$("ucode").value.trim(),_mOre=$("mOre").value.trim(),_code=$("code").value.trim();
            if(_ucode==""){_system._toast("请输入身份证号或护照号.");return;}
            if(_mOre==""){_system._toast("请输入手机号或电子邮箱.");return;}
            if(_code==""){_system._toast("请输入验证码.");return;}
            var wechatNo="${wechatNo}";
            _$("${request.contextPath}/api/relateMember","ucode="+_ucode+"&mOre="+_mOre+"&code="+_code+"&wechatNo="+wechatNo,"请稍候","_member._ok");
        },
        _ok:function(result){
            if(result==-1){_system._toast("没有输入有效的身份证号或护照号.");return;}
            if(result==-2){_system._toast("没有输入有效的手机号或邮箱.");return;}
            if(result==-3){_system._toast("没有输入有效的验证码.");return;}
            if(result==-4){_system._toast("没有获取到微信号.");return;}
            if(result==1){_system._toast("输入的手机号或邮箱不合法.");return;}
            if(result==2){_system._toast("身份不匹配,绑定失败.");return;}
            if(result==3){_system._toast("验证码已失效.");return;}
            if(result==4){_system._toast("验证码不匹配.");return;}
            if(result==0){
                _system._toast("绑定操作成功.");
                time();//停顿几秒
                window.location.href="http://182.92.224.165/api/member";
            }
            //_system._guide();
        }
    };
    var authCode={
        _post:function(){
            var _ucode=$("ucode").value.trim(),_mOre=$("mOre").value;
            if(_ucode==""){_system._toast("请输入身份证号或护照号.");return;}
            if(_mOre==""){_system._toast("请输入手机号或电子邮箱.");return;}
            var mobileReg=/^((13[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/;
            var emailReg=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/;
            if (mobileReg.test(_mOre) || emailReg.test(_mOre)){
                _$("${request.contextPath}/api/sendAuthCode","ucode="+_ucode+"&mOre="+_mOre,"请稍候","authCode._ok");
            }else{
                _system._toast("请输入有效的手机号或电子邮箱.");return;
            }
        },
        _ok:function(result){
            if(result==-1){_system._toast("没有输入有效的身份证号或护照号.");return;}
            if(result==-2){_system._toast("没有输入有效的手机号或邮箱.");return;}
            if(result==1){_system._toast("输入的手机号或邮箱不合法.");return;}
            if(result==2){_system._toast("身份信息或邮箱没有注册.");return;}
            if(result==3){_system._toast("身份信息或手机号没有注册.");return;}
            if(result==0){_system._toast("验证码发送成功.");}
            //dataForWeixin.callback=function(){
               // _system._toast("验证发送成功.");
                // _$("/ajaxExt/toShare.action?id="+json.loginVo.dataId,"","");
            //};
            //_system._guide();
        }
    };

    var wait=5;
    function time(){
        if (wait == 0) {
            //o.removeAttribute("disabled");
            //o.value="获取短信验证码";
            wait = 5;
        } else {
            //o.setAttribute("disabled", true);
            //o.value="重新发送(" + wait + ")";
            wait--;
            setTimeout(function() {time()},1000);
        }
    }
</script>

<div id="ok"><img src="${request.contextPath}/images/weixin/ok.png"><div id="ok_text"></div></div>
<div id="cover"></div>
<div id="loading"><img src="${request.contextPath}/images/weixin/loading.gif"><div id="loading_text"></div></div>
<div id="toast"></div>
</body>
</html>
