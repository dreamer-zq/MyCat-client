<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>雇员管理</title>
    <link href="${request.contextPath}/css/public.css" rel="stylesheet" type="text/css" />
    <link href="${request.contextPath}/css/css.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="${request.contextPath}/lib/jquery/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="${request.contextPath}/js/common/tips.js"></script>
    <script type="text/javascript">
        $(document).ready(function(){
            showTips("${ope_result}",false);

        });

        /**
         * 启用、禁用用户
         * @param flag
         * @param id
         */
        function enableUser(flag,id){
            if(!flag && confirm("确认禁用用户？")){
                window.location.href = "${request.contextPath}/user/disable?id="+id;
            }if(flag && confirm("确认启用用户？")){
                window.location.href="${request.contextPath}/user/enable?id="+id;
            }
        }
        /**
         * 重置密码
         * @param id
         */
        function resetPwd(id){
            if(confirm("确认重置密码？")){
                $.get("${request.contextPath}/user/resetPwd?id="+id,function(result){if(result=='success'){alert("密码被设置为用户名");}});
            }
        }

        function toAdd(code){
            window.location.href = "${request.contextPath}/user/toAdd?roleCode="+code;
        }
    </script>
</head>
<body>
<#if employees?size gt 0>
    <table border="0" bordercolor="#cccccc" cellpadding="0" cellspacing="0">
        <tr>
            <th class="al_list1">编号</th>
            <th class="al_list3">名称</th>
            <th class="al_list1">分区ID</th>
            <th class="al_list3">操作</th>
        </tr>
        <#list employees as obj>
        <tr>
            <td class="al_list1">
                ${obj.id}
            </td>
            <td class="al_list3">${obj.name}</td>
            <td class="al_list1">${obj.shardingId}</td>
            <td class="al_list3">
                <a href="${request.contextPath}/user/toEdit?id=${obj.id}">修改</a>&nbsp;
            </td>
        </tr>
        </#list>
    </table>
</#if>
</body>
</html>