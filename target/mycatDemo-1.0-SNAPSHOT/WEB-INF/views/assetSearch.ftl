<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>资产查询</title>
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
<div class="area2 notice">${lender.name},您的已出借资产为：${lender.useAsset}元,详情如下：</div>
<div class="area1">
    <table>
        <tr>
            <td>编号</td>
            <td>姓名</td>
            <td>额度</td>
            <td>类型</td>
        </tr>
        <tr>
            <td>ZMJK201409001</td>
            <td><a href="${request.contextPath}/api/assetDetail?type=1&u=1">刘小东</a></td>
            <td>25万元</td>
            <td>汽车</td>
        </tr>
        <tr>
            <td>ZMJK201409002</td>
            <td><a href="${request.contextPath}/api/assetDetail?type=1&u=2">王东升</a></td>
            <td>23万元</td>
            <td>汽车</td>
        </tr>
        <tr>
            <td>ZMJK201409003</td>
            <td><a href="${request.contextPath}/api/assetDetail?type=2">秦刚</a></td>
            <td>212万元</td>
            <td>房产</td>
        </tr>
    </table>
</div>

<div id="ok"><img src="${request.contextPath}/images/weixin/ok.png"><div id="ok_text"></div></div>
<div id="cover"></div>
<div id="loading"><img src="${request.contextPath}/images/weixin/loading.gif"><div id="loading_text"></div></div>
<div id="toast"></div>
</body>
</html>
