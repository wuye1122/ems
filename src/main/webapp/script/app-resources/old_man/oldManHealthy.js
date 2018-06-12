/**
 * Created by lizhu
 */
$(function () {
    //1.初始化Table
    var oTable = new TableInit();
    oTable.Init();
});

var TableInit = function () {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        $('#tb_oldManHealthy').bootstrapTable({
            url: 'query.do',   //请求后台的URL（*）
            method: 'post',      //请求方式（*）
            contentType:"application/x-www-form-urlencoded; charset=UTF-8",
            toolbar: '#toolbar',    //工具按钮用哪个容器
            striped: true,      //是否显示行间隔色
            cache: false,      //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,     //是否显示分页（*）
            queryParams: oTableInit.queryParams,//传递参数（*）
            sidePagination: "server",   //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,      //初始化加载第一页，默认第一页
            pageSize: 5,      //每页的记录行数（*）
            pageList: [5,10, 25, 50, 100],  //可供选择的每页的行数（*）
            search: false,      //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: false,
            searchOnEnterKey:false,
            showColumns: true,     //是否显示所有的列
            showRefresh: true,     //是否显示刷新按钮
            minimumCountColumns: 2,    //最少允许的列数
            clickToSelect: true,    //是否启用点击选中行
            height: 350,      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "ID",      //每一行的唯一标识，一般为主键列
            showToggle:true,     //是否显示详细视图和列表视图的切换按钮
            cardView: false,     //是否显示详细视图
            detailView: false,     //是否显示父子表
            columns: [{
                radio: true
            }, {
                field: 'fID',
                title: '序号',
            },{
                field: 'fOldManName',
                title: '老人姓名',
            },{
                field: 'fHealthyCondition',
                title: '健康状况',
				formatter:function(value,row,index){
					if(value==''){
						return '无';
					}else{
						return value;
					}
				}
            },{
                field: 'fMedicalHistory',
                title: '老人病史',
				formatter:function(value,row,index){
					if(value==''){
						return '无';
					}else{
						return value;
					}
				}
            },{
                field: 'fDietTrait',
                title: '饮食特点',
				formatter:function(value,row,index){
					if(value==''){
						return '无';
					}else{
						return value;
					}
				}
            },{
                field: 'fHobby',
                title: '老人嗜好',
				formatter:function(value,row,index){
					if(value==''){
						return '无';
					}else{
						return value;
					}
				}
            },{
                field: 'fAttention',
                title: '注意事项',
				formatter:function(value,row,index){
					if(value==''){
						return '无';
					}else{
						return value;
					}
				}
            }
            ]
        });
    };

    //得到查询的参数
    oTableInit.queryParams = function (params) {
        var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            pageSize: params.limit, //页面大小
            page: params.offset, //页码
            foldManName:$("#searchName").val()
        };
        return temp;
    };
    return oTableInit;
};

//请求选择老人界面
function selectOldMan(){
	$('#oldManModal').modal('show');
	// 初始化老人列表
	initChooseOldManTb();
}
//打通过照片取老人
function getOldManWithPhoto(ID,name){
	// $("#addfOldManID").val(temp.getAttribute("selectOmId"))
	// $("#addfOldManID").html(temp.getAttribute("selectName"))
	$("#addfOldManID").val(ID);
	$("#oldManName").val(name);
	// $("#addfOldManID").text(temp.getAttribute("selectName"))
	$('#oldManModal').modal('hide')
}

function queryBy(){
	foldManName=$("#searchName").val();
	$("#tb_oldManHealthy").bootstrapTable('selectPage',1);
}


//新增健康信息
function addHealthy(){
		if(checkAdd()){
			$.ajax({
				url:contextPath+"/healthy/add.do",
				type:"post",
				data:{
					fOldManID:$("#addfOldManID").val(),
					fHealthyCondition:$("#fHealthyCondition").val(),
					fMedicalHistory:$("#fMedicalHistory").val(),
					fDietTrait:$("#fDietTrait").val(),
					fAttention:$("#fAttention").val(),
					fHobby:$("#fHobby").val(),
				},
				success:function(data) {
		            $('#tb_oldManHealthy').bootstrapTable('refresh', {url: 'query.do'});
		            if(data.msg=="success"){
		            	setAlert("success","添加成功");
		            	closeModal();
		            	$("#addBase_btn").click();
		            }else if(data.msg=="老人不存在"){
						setAlert("error","老人不存在");
						closeModal();
						$("#addBase_btn").click();
					}else{
		            	setAlert("error","添加失败");
		            }
				}
			});
		}
	}
/**
 * 清除输入框
 */
function closeModal() {
	$("#oldManName").val("");
	$("#addfOldManID").val("");
    $("#fHealthyCondition").val("");
    $("#fMedicalHistory").val("");
    $("#fDietTrait").val("");
    $("#fAttention").val("");
    $("#fHobby").val("");
}
//健康信息新增
function checkFHealthyCondition(){
	var fHealthyCondition=$("#fHealthyCondition").val();
	if(fHealthyCondition==""){
		alert('请填写健康信息');
		return false;
	}
	return true;
}

//健康信息新增
function checkFoldMan(){
	var oldManName=$("#oldManName").val();
	if(oldManName==""){
		alert('请选择老人');
		return false;
	}
	return true;
}
//健康信息修改
function checkFHealthyConditionUpd(){
	var fHealthyCondition=$("#fHealthyConditionUpd").val();
	if(fHealthyCondition==""){
		alert('请填写健康信息');
		return false;
	}
	return true;
}
//医疗病史新增
function checkFMedicalHistory(){
	var fMedicalHistory=$("#fMedicalHistory").val();
	if(fMedicalHistory==""){
		alert('请填写老人病史');
		return false;
	}
	return true;
}
//医疗病史修改
function checkFMedicalHistoryUpd(){
	var fMedicalHistory=$("#fMedicalHistoryUpd").val();
	if(fMedicalHistory==""){
		alert('请填写老人病史');
		return false;
	}
	return true;
}
//饮食特点新增
function checkFDietTrait(){
	var fDietTrait=$("#fDietTrait").val();
	if(fDietTrait==""){
		alert('请填写饮食特点');
		return false;
	}
	return true;
}
//饮食特点修改
function checkFDietTraitUpd(){
	var fDietTrait=$("#fDietTraitUpd").val();
	if(fDietTrait==""){
		alert('请填写饮食特点');
		return false;
	}
	return true;
}
//注意事项新增
function checkFAttention(){
	var fAttention=$("#fAttention").val();
	if(fAttention==""){
		alert('请填写注意事项');
		return false;
	}
	return true;
}
//注意事项修改
function checkFAttentionUpd(){
	var fAttention=$("#fAttentionUpd").val();
	if(fAttention==""){
		alert('请填写注意事项');
		return false;
	}
	return true;
}
//注意老人嗜好新增
function checkFHobby(){
	var fHobby=$("#fHobby").val();
	if(fHobby==""){
		alert('请填写老人嗜好');
		return false;
	}
	return true;
}
//老人嗜好修改
function checkFHobbyUpd(){
	var fHobby=$("#fHobbyUpd").val();
	if(fHobby==""){
		alert('请填写老人嗜好');
		return false;
	}
	return true;
}
//校验
function checkAdd(){
	//if(checkFHealthyCondition()&&checkFMedicalHistory()&&checkFDietTrait()&&checkFAttention()&&checkFHobby()&&checkFoldMan()&&isExist()){
	if(checkFoldMan()&&isExist()){
		return true;
	}
	return false;
}

//校验
function checkUpd(){
	if(checkFHealthyConditionUpd()&&checkFMedicalHistoryUpd()&&checkFDietTraitUpd()&&checkFAttentionUpd()&&checkFHobbyUpd()){
		return true;
	}
	return false;
}


function clearInput(){
	$("#searchName").val("");
}
/**
 * 
 */
function getUpdateHeal(){
	var currentItem = $("#tb_oldManHealthy").bootstrapTable('getSelections');
	if(currentItem[0]){
		$("#fHealthyConditionUpd").val(currentItem[0].fHealthyCondition);
		$("#fMedicalHistoryUpd").val(currentItem[0].fMedicalHistory);
		$("#fDietTraitUpd").val(currentItem[0].fDietTrait);
		$("#fAttentionUpd").val(currentItem[0].fAttention);
		$("#fHobbyUpd").val(currentItem[0].fHobby);
		$("#fOldManId").val(currentItem[0].fOldManID);
		$("#updHealthy_btn").click();
	}else{
		 setAlert("error","请先选择一条数据");
	}
}

function updateHeal(){
	$.ajax({
		url:contextPath+"/healthy/update.do",
		type:"post",
		data:{
				fOldManID:$("#fOldManId").val(),
				fHealthyCondition:$("#fHealthyConditionUpd").val(),
				fMedicalHistory:$("#fMedicalHistoryUpd").val(),
				fDietTrait:$("#fDietTraitUpd").val(),
				fAttention:$("#fAttentionUpd").val(),
				fHobby:$("#fHobbyUpd").val(),
		},
		success:function(data){
			  $('#tb_oldManHealthy').bootstrapTable('refresh', {url: 'query.do'});
	            if(data.msg=="success"){
	            	alert('修改成功');
	            }else{
	            	alert('修改失败');
	            }
		}
	});
}

function isExist(){
	var fOldManId=$("#addfOldManID").val();
	var bol;
	$.ajax({
		url:contextPath+"/healthy/query.do",
		type:"post",
		async: false, 
		data:{
			page:0,
			pageSize:5,
			fID:fOldManId
		},
		success:function(data){
			var total=data.total;
			if(total>0){
				alert('不能重复录入健康信息');
			     bol=false;
			}else{
				  bol=true;
			}
		}
	});
	return bol;
}
