<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>会员须知</title>
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
<div class="area2 notice">会员须知</div>
<div class="area1">
    会员须知内容......
</div>

<div id="ok"><img src="${request.contextPath}/images/weixin/ok.png"><div id="ok_text"></div></div>
<div id="cover"></div>
<div id="loading"><img src="${request.contextPath}/images/weixin/loading.gif"><div id="loading_text"></div></div>
<div id="toast"></div>
</body>
</html>
