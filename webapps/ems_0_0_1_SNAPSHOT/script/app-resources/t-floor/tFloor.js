$(function () {
    //1.初始化Table
    var oTable = new TableInit();
    oTable.Init();
    getBuilding();
});

var TableInit = function () {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        $('#tb_Floor').bootstrapTable({
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
            pageSize: 10,      //每页的记录行数（*）
            pageList: [10, 25, 50, 100],  //可供选择的每页的行数（*）
            search: false,      //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: true,
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
                title: '编号',
                align: "center",
                valign: "middle",
            }, {
                field: 'fBuildingName',
                title: '大厦名称',
                align: "center",
                valign: "middle",
            }, {
                field: 'fFLoorName',
                title: '楼层名称',
                align: "center",
                valign: "middle",
            }, {
                field: 'fStatus',
                title: '状态',
                align: "center",
                formatter:function(value){
                    if(value==11){
                        return '<span style="color:#00ff00">启用</span>'
                    }else if(value==10){
                        return '<span style="color:#FF0000">禁用</span>'
                    }
                }
            }, {
                field: 'fAdministratorsID',
                title: '楼层管理员',
                align: "center",
                valign: "middle",
            }]
        });
    };

    //得到查询的参数
    oTableInit.queryParams = function (params) {
        var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            pageSize: params.limit, //页面大小
            page: params.offset, //页码
            fFLoorName: $("#searchName").val(),
            fStatus: $("#searchValue").val()
        };
        return temp;
    };
    return oTableInit;
};
function queryClear(){
    $("#searchName").val(""),
    $("#searchValue").val("")
}
//查询楼层
function queryFloor(){
    $.ajax({
        url:contextPath+"/floor/query.do",
        type:"post",
        data:{
            fFLoorName:$("#searchName").val(),
            fStatus:$("#searchValue").val(),
            page:0,
            pageSize:10
        },
        success:function(data) {
            $('#tb_Floor').bootstrapTable('load', data);
        }
    });
}
var len="";
var row="";
//回显大厦到添加界面所属大厦下拉框
function getBuilding(){
    $.ajax({
        url:contextPath+"/building/get.do",
        type:"post",
        success:function(data) {
            len=data.total;
            row=data.rows;
            var build="<option value=''> --请选择-- </option>";
            for(var i=0;i<len;i++){
                if(row[i].fStatus=="11"){
                    build += "<option value='" + row[i].fID + "'>" + row[i].fBuildingName + "</option>";
                }
            }
            $("#addfBuildingID").html(build);
        }
    });
}
function check_add(){
    var result=true;

    if(!addCheck_BuildingID_floor()){
        result=false;
    }

    if(!addCheck_floorName_floor()){
        result=false;
    }

    if(!addCheck_Status_floor()){
        result=false;
    }

    return result;
}

function addCheck_BuildingID_floor(){
    var result=true;
    var addfBuildingID = $("#addfBuildingID").val().trim();
    $("#errorName").html("");
    if (addfBuildingID==""){
        $("#errorName").html("请选择大厦！");
        result = false;
    }
    return result;
}

function addCheck_floorName_floor(){
    var result=true;
    var fLoorName = $("#addfFLoorName").val().trim();
    $("#errorFloorName").html("");
    if (fLoorName==""){
        $("#errorFloorName").html("请填写楼层名称");
        result = false;
    }
    return result;
}

function addCheck_Status_floor(){
    var result=true;
    var addfStatus = $("#addfStatus").val().trim();
    $("#errorType").html("");
    if (addfStatus==""){
        $("#errorType").html("请选择楼层状态");
        result = false;
    }
    return result;
}

//新增楼层
function addFloor(){
    if(check_add()){
        $.ajax({
            url:contextPath+"/floor/addFloor.do",
            type:"post",
            data:{
                fNursingHomeID:$("#addfNursinghomeID").val(),
                fLoorNumber:$("#addfFloorNumber").val(),

                fBuildingID:$("#addfBuildingID").val(),

                fFLoorName:$("#addfFLoorName").val(),
                fAdministratorsID:$("#addfAdministratorsID").val(),

                fStatus:$("#addfStatus").val(),
                fExplain:$("#addfExplain").val()
            },
            success:function(data) {
                console.log(data.message);
                if(data.success){
                    setAlert("success",data.msg);
                }else{
                    setAlert("success",data.msg);
                }
                $('#tb_Floor').bootstrapTable('refresh', {url: 'query.do'});
            }
        });
    }else{
        return 0;
    }
    closeModal();
}

function closeModal() {
    $("#addfBuildingID").val("");
    $("#addfFLoorName").val("");
    $("#addfStatus").val("");
    $("#addfExplain").val("");
    $("#addfAdministratorsID").val("");
    $("#addModal").modal("hide");

    $(".updRefundType").val();
    $("#updChrgeStartDate").val();
    $("#updChrgeStopDate").val();
    $("#updStatus").val();
    $("#updExplain").val();
    $("#updateModal").modal("hide");
}
function check_upd(){
    var result=true;
    var updName = $("#updfFLoorName").val().trim();
    $("#errorUpdName").html("");
    if (updName==""){
        $("#errorUpdName").html("楼层名称不能为空！");
        result = false;
    }

    // var addfStatus = $("#addfStatus").val().trim();
    // $("#errorType").html("");
    // if (addfStatus==""){
    //     $("#errorType").html("请选择大厦状态");
    //     result = false;
    // }
    return result;
}
//修改楼层
function updFloor(){
    if(check_upd()){
        $.ajax({
            url:contextPath+"/floor/updFloor.do",
            type:"post",
            data:{
                fID:$("#floor_id").val(),

                fNursingHomeID:$("#updfNursinghomeID").val(),
                fLoorNumber:$("#updfFloorNumber").val(),

                fBuildingID:$("#updfBuildingID").val(),

                fFLoorName:$("#updfFLoorName").val(),
                fAdministratorsID:$("#updfAdministratorsID").val(),

                fStatus:$("#updfStatus").val(),
                fExplain:$("#updfExplain").val()

            },
            success:function(data) {
                console.log(data.message);
                if(data.success){
                    setAlert("success",data.msg);
                }else{
                    setAlert("success",data.msg);
                }
                $('#tb_Floor').bootstrapTable('refresh', {url: 'query.do'});
            }
        });
    }else{
        return 0;
    }
    closeModal();
}

//删除楼层
function gotoUpdateState(){
    var carrentItem = $("#tb_Floor").bootstrapTable('getSelections');
    if(carrentItem[0]){
        $.ajax({
            url:contextPath+"/floor/updStateFloor.do",
            type:"post",
            data:{
                fID:carrentItem[0].fID,
                fStatus:10,
            },
            success:function(data) {
                if(data.success){
                    setAlert("success",data.msg);
                }else{
                    setAlert("success",data.msg);
                }
                $('#tb_Floor').bootstrapTable('refresh', {url: 'query.do'});
            }
        });
    }else{
        setAlert("error","请先选择一条数据");
    }
}

//页面回显数据
function gotoUpdate(){
    var carrentItem = $("#tb_Floor").bootstrapTable('getSelections');
    if(carrentItem[0]){

        $("#floor_id").val(carrentItem[0].fID);
        $("#updfNursinghomeID").val(carrentItem[0].fNursingHomeID);
        $("#updfFloorNumber").val(carrentItem[0].fLoorNumber);

        var build="";
        for(var i=0;i<len;i++){
            if(row[i].fStatus=="11") {
                if (row[i].fBuildingName == carrentItem[0].fBuildingName) {
                    build += "<option selected='selected' value='" + row[i].fID + "'>" + row[i].fBuildingName + "</option>";
                }else{
                    build += "<option value='" + row[i].fID + "'>" + row[i].fBuildingName + "</option>";
                }
            }
        }
        $("#updfBuildingID").html(build);

        $("#updfFLoorName").val(carrentItem[0].fFLoorName);
        $("#updfAdministratorsID").val(carrentItem[0].fAdministratorsID);
        $("#updfStatus").val(carrentItem[0].fStatus);
        $("#updfExplain").val(carrentItem[0].fExplain);
        $("#update_btn").click();
    }else{
        setAlert("error","请先选择一条数据");
    }
}
