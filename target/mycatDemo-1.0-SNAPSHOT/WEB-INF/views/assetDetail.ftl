<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>资产详情</title>
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
<div class="area2 notice">资产详情</div>
<div class="area1">
<#if type==1>
    <table>
        <tr>
            <td>借款人姓名：${name}</td>
        </tr>
        <tr>
            <td>资产类型：汽车</td>
        </tr>
        <tr>
            <td>合同编号：${htbh}</td>
        </tr>
        <tr>
            <td>借款金额：${money}万元</td>
        </tr>
        <tr>
            <td>起始日期：2014-01-08</td>
        </tr>
        <tr>
            <td>抵押权人：罗小影</td>
        </tr>
        <tr>
            <td>出借人：罗明华</td>
        </tr>
        <tr>
            <td>出借编号：ZMCJ201401001</td>
        </tr>
        <tr>
            <td>
                证明材料：<br/>
                <img src="${request.contextPath}/images/sfz-1.jpg"/><br/>
                <img src="${request.contextPath}/images/sfz-2.jpg"/><br/>
                借款人：<br/>
                <img src="${request.contextPath}/images/jkr.jpg"/><br/>
                转账凭证(电子回单)：<br/>
                <img src="${request.contextPath}/images/zzpz.jpg"/><br/>
                汽车照片：<br/>
                <img src="${request.contextPath}/images/car-1.jpg"/><br/>
                <img src="${request.contextPath}/images/car-2.jpg"/><br/>
                登记信息：<br/>
                <img src="${request.contextPath}/images/car-dj.jpg"/><br/>
            </td>
        </tr>
    </table>
</#if>
<#if type==2>
    <table>
        <tr>
            <td>借款人姓名：秦刚</td>
        </tr>
        <tr>
            <td>资产类型：房产</td>
        </tr>
        <tr>
            <td>合同编号：ZMJK201409003</td>
        </tr>
        <tr>
            <td>借款金额：212万元</td>
        </tr>
        <tr>
            <td>起始日期：2014-04-18</td>
        </tr>
        <tr>
            <td>抵押权人：罗小影</td>
        </tr>
        <tr>
            <td>出借人：罗明华</td>
        </tr>
        <tr>
            <td>出借编号：ZMCJ201401002</td>
        </tr>
        <tr>
            <td>
                证明材料：<br/>
                <img src="${request.contextPath}/images/sfz-1.jpg"/><br/>
                <img src="${request.contextPath}/images/sfz-2.jpg"/><br/>
                借款人：<br/>
                <img src="${request.contextPath}/images/jkr.jpg"/><br/>
                房产照片：<br/>
                <img src="${request.contextPath}/images/fcz.jpg"/><br/>
                <img src="${request.contextPath}/images/house.jpg"/>
            </td>
        </tr>
    </table>
</#if>
</div>

<div id="ok"><img src="${request.contextPath}/images/weixin/ok.png"><div id="ok_text"></div></div>
<div id="cover"></div>
<div id="loading"><img src="${request.contextPath}/images/weixin/loading.gif"><div id="loading_text"></div></div>
<div id="toast"></div>
</body>
</html>
