<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>资产管理</title>
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
<div class="area2 notice">资产管理</div>
<div class="area1">
    <table>
        <tr>
            <td align="right">姓名：</td>
            <td align="left">${lender.name}</td>
        </tr>
        <tr>
            <td align="right">总出借资产：</td>
            <td align="left">${lender.totalAssets}</td>
        </tr>
        <tr>
            <td align="right">今日收益：</td>
            <td align="left">109.5</td>
        </tr>
        <tr>
            <td align="right">年化收益率：</td>
            <td align="left">5.6%</td>
        </tr>
        <tr>
            <td align="right">结息方式：</td>
            <td align="left">
                <#if lender.paymentWay==1>
                    按月
                </#if>
                <#if lender.paymentWay==2>
                    按季度
                </#if>
                <#if lender.paymentWay==3>
                    按年
                </#if>
            </td>
        </tr>
        <tr>
            <td align="right">结息日期：</td>
            <td align="left">${lender.useAsset}</td>
        </tr>
        <tr>
            <td align="right">当前总收益：</td>
            <td align="left">${lender.currentTotalAsset}</td>
        </tr>
        <tr>
            <td align="right">已出借资产：</td>
            <td align="left">${lender.useAsset}</td>
        </tr>
        <tr>
            <td align="right">未出借资产：</td>
            <td align="left">${lender.unspentAsset}</td>
        </tr>
        <tr>
            <td align="right">首次出借日期：</td>
            <td align="left">2013-10-10</td>
        </tr>
    </table><br/>
    <table>
        <tr>
            <td colspan="2" align="left"><b>追加投资记录</b></td>
        </tr>
        <tr>
            <td>追加日期</td>
            <td>追加金额</td>
        </tr>
        <tr>
            <td>2014-02-15</td>
            <td>10万元</td>
        </tr>
        <tr>
            <td>2014-04-10</td>
            <td>20万元</td>
        </tr>
    </table><br/>
    <table>
        <tr>
            <td colspan="2" align="left"><b>赎回资金记录</b></td>
        </tr>
        <tr>
            <td>赎回日期</td>
            <td>赎回金额</td>
        </tr>
        <tr>
            <td>2014-05-25</td>
            <td>10万元</td>
        </tr>
    </table>
</div>

<div id="ok"><img src="${request.contextPath}/images/weixin/ok.png"><div id="ok_text"></div></div>
<div id="cover"></div>
<div id="loading"><img src="${request.contextPath}/images/weixin/loading.gif"><div id="loading_text"></div></div>
<div id="toast"></div>
</body>
</html>
