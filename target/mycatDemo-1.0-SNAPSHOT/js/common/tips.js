//页面提示
var tips = {
    "error":"操作失败",
    "success":"操作成功",
    "add_success":"添加操作成功",
    "edit_success":"修改操作成功",
    "delete_success":"删除操作成功",
    "enable_user_success":"启用用户成功",
    "disable_user_success":"禁用用户成功",
    "update_my_info_success":"更新我的信息成功",
    "update_my_pwd_success":"更新我的密码成功",
    "finish_alert_success":"处理告警成功，告警已关闭",
    "report_alert_success":"处理告警成功，告警已上报",
    "please_handle_alert":"监控中心管理员不能上报告警，请处理告警信息",
    "have_same_name_hospital":"添加失败，已经有同名的医院",
    "set_center_hospital_success":"设置为中心医院成功",
    "have_same_name_organization":"添加失败，已经有同名的科室",
    "add_attention_success":"添加关注患者成功",
    "remove_attention_success":"移除关注患者成功",
    "have_same_code_role":"添加失败，已经有相同编码的角色",
    "enable_role_success":"启用角色成功",
    "disable_role_success":"禁用角色成功",
    "role_authorization_success":'角色授权成功'
};
/**
 * 显示提示
 * @param msg 提示内容
 * @param tag true:需要手动关闭提示，false:自动关闭提示
 */
function showTips(result,flag){
    if(result != null && result != ''){
        var codes = result.split(",");
        if(codes.length > 1){//后台传入前台的提示,带时间戳
            var code = codes[0];
            var num = codes[1];
            var msg = tips[code];
            if(!msg){
                msg = code;
            }
            if(parent && num > parent.tip_num){
                alertTips(msg,flag);
                parent.tip_num = num;
            }else if(opener && num != opener.tip_num){
                alertTips(msg,flag);
                opener.tip_num = num;
            }
        }else{//不带时间戳的提示
            var msg = tips[result];
            if(!msg || msg == ""){
                msg = result;
            }
            alertTips(msg,flag);
        }
    }
}
function getWindowDiv(id){
    var _div = document.getElementById(id);
    if(null  == _div){
        _div = $("<div id='"+id+"'></div>").appendTo("body");
    }else{
        _div = $(_div);
    }
    return _div;
}
function alertTips(msg,flag){
    var _div = getWindowDiv("div_tips");
    if(flag){//带关闭按钮的提示
        var html = '&nbsp;'+msg+'<img src="images/blank.gif" alt="关闭" onclick="closeTips();" class="fr square_x_11 wRemove"/>';
        _div.html(html).removeClass("tips").addClass('tips_error').show();
    }else{
        _div.html('&nbsp;'+msg).removeClass("tips_error").addClass('tips').show();
        setTimeout("$('#div_tips').delay(1000).fadeOut(1000)",1000);
    }
}
/**
 * 关闭提示
 */
function closeTips(){
    $('#div_tips').hide();
}