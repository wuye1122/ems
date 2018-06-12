//菜单树
function getTreeData() {
    $.ajax({
        type: "Post",
        url: contextPath + "/tree/treeList.do",
        success: function (result) {
            $('#tree').treeview({
                data: result, // 数据源
                // showCheckbox: true, //是否显示复选框
                // highlightSelected: true, //是否高亮选中
                collapsed: true,
                // unique: true,
                // expandIcon: "tree_arrows_right",
                // collapseIcon: "glyphicon glyphicon-music",
                levels: 3,
                // color:"#E8E8E8",
                onhoverColor: "#E8E8E8",
                // showBorder: false,
                // showTags: true,
                // highlightSearchResults:false,
                selectedBackColor: "#8D9CAA",
                // nodeIcon: 'glyphicon glyphicon-user', //节点上的图标
                nodeIcon: 'glyphicon glyphicon-home',
                // icon:'glyphicon glyphicon-music',
                // emptyIcon: 'glyphicon glyphicon-list-alt', //没有子节点的节点图标
                // multiSelect: false, //多选
                // onNodeChecked: function (event, data) {
                //     alert(data.nodeId);
                // },
                onNodeSelected: function (event, data) {
                    console.log(data);
                    queryRoom(data);
                }
            });
        },
        error: function () {
            // alert("树形结构加载==楼层==失败！")
        }
    });
}
$(function () {
    //1.初始化Table
    var oTable = new TableInit();
    oTable.Init();
    getTreeData();

});

var TableInit = function () {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        $('#tb_Room').bootstrapTable({
            url: 'query.do',   //请求后台的URL（*）
            method: 'get',      //请求方式（*）
            toolbar: '#toolbar',    //工具按钮用哪个容器
            striped: true,      //是否显示行间隔色
            cache: false,      //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,     //是否显示分页（*）
            sortable: false,      //是否启用排序
            sortOrder: "asc",     //排序方式
            queryParams: oTableInit.queryParams,//传递参数（*）
            sidePagination: "server",   //分页方式：client客户端分页，server服务端分页（*）
            pageNumber: 1,      //初始化加载第一页，默认第一页
            pageSize: 10,      //每页的记录行数（*）
            pageList: [10, 25, 50, 100],  //可供选择的每页的行数（*）
            search: false,      //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: true,
            showColumns: true,     //是否显示所有的列
            showRefresh: true,     //是否显示刷新按钮
            minimumCountColumns: 2,    //最少允许的列数
            clickToSelect: true,    //是否启用点击选中行
            // height: 500,      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "ID",      //每一行的唯一标识，一般为主键列
            showToggle: true,     //是否显示详细视图和列表视图的切换按钮
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
                title: '大厦',
                align: "center",
                valign: "middle",
            }, {
                field: 'fFLoorName',
                title: '楼层',
                align: "center",
                valign: "middle",
            }, {
                field: 'fRoomName',
                title: '房间',
                align: "center",
                valign: "middle",
            }, {
                field: 'fRoomType',
                title: '类型',
                align: "center",
                valign: "middle",
            }, {
                field: 'fRoomOrientation',
                title: '朝向',
                align: "center",
                valign: "middle",
            }, {
                field: 'fBedStatusA',
                title: '1(A)床',
                align: "center",
                valign: "middle",
                formatter:function(value){
                    var status=value;
                    if(status==null){
                        return '<span style="color:#f25100">无</span>'
                    }else if(status==2){
                        return '<span style="background-color:#00ff00">空闲</span>'
                    }else if(status==11){
                        return '<span style="background-color:#ff0000">使用</span>'
                    }else if(status==10){
                        return '<span style="background-color:#18c8f6">请假</span>'
                    }else if(status==01){
                        return '<span style="background-color:#ffff00">预约</span>'
                    }
                }
            }, {
                field: 'fBedStatusB',
                title: '2(B)床',
                align: "center",
                valign: "middle",
                formatter:function(value){
                    var status=value;
                    if(status==null){
                        return '<span style="color:#f25100">无</span>'
                    }else if(status==2){
                        return '<span style="background-color:#00ff00">空闲</span>'
                    }else if(status==11){
                        return '<span style="background-color:#ff0000">使用</span>'
                    }else if(status==10){
                        return '<span style="background-color:#18c8f6">请假</span>'
                    }else if(status==01){
                        return '<span style="background-color:#ffff00">预约</span>'
                    }
                }
            }, {
                field: 'fBedStatusC',
                title: '3(C)床',
                align: "center",
                valign: "middle",
                formatter:function(value){
                    var status=value;
                    if(status==null){
                        return '<span style="color:#f25100">无</span>'
                    }else if(status==2){
                        return '<span style="background-color:#00ff00">空闲</span>'
                    }else if(status==11){
                        return '<span style="background-color:#ff0000">使用</span>'
                    }else if(status==10){
                        return '<span style="background-color:#18c8f6">请假</span>'
                    }else if(status==01){
                        return '<span style="background-color:#ffff00">预约</span>'
                    }
                }
            }, {
                field: 'fBedStatusD',
                title: '4(D)床',
                align: "center",
                valign: "middle",
                formatter:function(value){
                    var status=value;
                    if(status==null){
                        return '<span style="color:#f25100">无</span>'
                    }else if(status==2){
                        return '<span style="background-color:#00ff00">空闲</span>'
                    }else if(status==11){
                        return '<span style="background-color:#ff0000">使用</span>'
                    }else if(status==10){
                        return '<span style="background-color:#18c8f6">请假</span>'
                    }else if(status==01){
                        return '<span style="background-color:#ffff00">预约</span>'
                    }
                }
            }, {
                field: 'fBedStatusE',
                title: '5(E)床',
                align: "center",
                valign: "middle",
                formatter:function(value){
                    var status=value;
                    if(status==null){
                        return '<span style="color:#f25100">无</span>'
                    }else if(status==2){
                        return '<span style="background-color:#00ff00">空闲</span>'
                    }else if(status==11){
                        return '<span style="background-color:#ff0000">使用</span>'
                    }else if(status==10){
                        return '<span style="background-color:#18c8f6">请假</span>'
                    }else if(status==01){
                        return '<span style="background-color:#ffff00">预约</span>'
                    }
                }
            }, {
                field: 'fBedStatusF',
                title: '6(F)床',
                align: "center",
                valign: "middle",
                formatter:function(value){
                    var status=value;
                    if(status==null){
                        return '<span style="color:#f25100">无</span>'
                    }else if(status==2){
                        return '<span style="background-color:#00ff00">空闲</span>'
                    }else if(status==11){
                        return '<span style="background-color:#ff0000">使用</span>'
                    }else if(status==10){
                        return '<span style="background-color:#18c8f6">请假</span>'
                    }else if(status==01){
                        return '<span style="background-color:#ffff00">预约</span>'
                    }
                }
            }]
        });
    };

    //得到查询的参数
    oTableInit.queryParams = function (params) {
        var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            pageSize: params.limit, //页面大小
            page: params.offset, //页码
            // name: $("#searchName").val(),
            // value: $("#searchValue").val(),
            fFLoorID:$("#treeSerachFloorId").val(),
            fBuildingID:$("#treeSerachBuildingId").val()
        };
        return temp;
    };
    return oTableInit;
};
//查询房间
function queryRoom(dataRoom) {
    var text=dataRoom.text;
    var res=text.charAt(text.length-1);
    var buiId="";
    var floorId="";
    if(res=="层"){
        floorId=dataRoom.fID;
        // $("#queryFloorId").val(floorId);

    }else{
        buiId=dataRoom.fID;
        // $("#queryBuildId").val(buiId);
    }
    $("#treeSerachFloorId").val(floorId);
    $("#treeSerachBuildingId").val(buiId);
    $.ajax({
        url: contextPath + "/room/query.do",
        type: "post",
        async:false,
        data: {
            fBuildingID:buiId,
            fFLoorID:floorId,
            page: 0,
            pageSize: 10
        },
        success: function (data) {
            $('#tb_Room').bootstrapTable('load', data);
            // getRoomBuilding();
            // getFloor()
        }
    });

}

function getEmp(administratorsId){
    $.ajax({
        url: contextPath + "/employee/get.do",
        type: "post",
        success: function (data) {
            var len = data.total;
            var row = data.rows;
            var build = "<option value=''>--请选择--</option>";
            for (var i = 0; i < len; i++) {
                if(row[i].fId==administratorsId){
                    build += "<option selected='selected' value='" + row[i].fId + "'>" + row[i].fStaffName + "</option>";
                }else{
                    build += "<option value='" + row[i].fId + "'>" + row[i].fStaffName + "</option>";
                }
            }
            $("#administratorsId").html(build);
            $("#updAdministratorsId").html(build);
        }
    });
}

//大厦，房间，床位联动
function getBuildID(){
    var buildId=$("#addfBuildingID").val();
    if(buildId==''){
        $("#addfFLoorID").html("");
    }else{
        getFloor(buildId);
    }
}

//大厦，房间，床位联动
function getUpdBuildID(){
    var buildId=$("#updBuildingID").val();
    if(buildId==''){
        $("#updFLoorID").html("");
    }else{
        getFloor(buildId);
    }
}

function getRoomBuilding(buildId) {
    // var queryBuildId=$("#queryBuildId").val();
    $.ajax({
        url: contextPath + "/building/get.do",
        type: "post",
        success: function (data) {
            var len = data.total;
            var row = data.rows;
            var build = "<option value=''> --请选择-- </option>";
            for (var i = 0; i < len; i++) {
                if(row[i].fStatus=="11"){
                    if(row[i].fID==buildId){
                        build += "<option selected='selected' value='" + row[i].fID + "'>" + row[i].fBuildingName + "</option>";
                    }else{
                        // if(queryBuildId!=""&&queryBuildId==row[i].fID){
                        //     build += "<option selected='selected' value='" + row[i].fID + "'>" + row[i].fBuildingName + "</option>";
                        // }else{
                            build += "<option value='" + row[i].fID + "'>" + row[i].fBuildingName + "</option>";
                        // }
                    }
                }
            }
            $("#addfBuildingID").html(build);
            $("#updBuildingID").html(build);
        }
    });
}

function getFloor(buildId,floorId) {
    // var floor=$("#queryFloorId").val();
    $.ajax({
        url: contextPath + "/floor/get.do",
        type: "post",
        async:false,
        data: {
            fBuildingID:buildId
        },
        success: function (data) {
            var len = data.total;
            var row = data.rows;
            var floor = "<option value=''> --请选择-- </option>";
            for (var i = 0; i < len; i++) {
                if(row[i].fStatus=="11"){
                    if(row[i].fID==floorId){
                        floor += "<option selected value='" + row[i].fID + "'>" + row[i].fFLoorName + "</option>";
                    }else{
                        // if(floor!=""&&floor==row[i].fID){
                        //     floor += "<option selected value='" + row[i].fID + "'>" + row[i].fFLoorName + "</option>";
                        // }else{
                            floor += "<option value='" + row[i].fID + "'>" + row[i].fFLoorName + "</option>";
                        // }
                    }

                }
            }
            $("#addfFLoorID").html(floor);
            $("#updFLoorID").html(floor);
        }
    });
}

// //房间价格取自缴费标准表
// function getRoomCharge(roomPrice) {
//     $.ajax({
//         url: contextPath + "/charge/queryCharge.do",
//         type: "post",
//         success: function (data) {
//             var len = data.total;
//             var row = data.rows;
//             var charge = "<option value=''>--请选择--</option>";
//             for (var i = 0; i < len; i++) {
//                 var acharge = document.getElementById("afRoomPrice").innerText;
//                 var achargeName = row[i].fChrgeType;
//                 if (acharge == achargeName) {
//                     if(row[i].fPrice==roomPrice){
//                         charge += "<option selected='selected' value='" + row[i].fPrice + "'>" + row[i].fPrice + "</option>";
//                     }else{
//                         charge += "<option value='" + row[i].fPrice + "'>" + row[i].fPrice + "</option>";
//                     }
//                 }
//             }
//             $("#addfRoomPrice").html(charge);
//             $("#updRoomPrice").html(charge);
//
//         }
//     });
// }

function getDcList(roomType,roomOrientation) {
    $.ajax({
        url: contextPath + "/sys/get.do",
        type: "post",
        success: function (data) {
            //获取UTC(国际统一时间/国际协调)格式的从1970.1.1 0:00以来的毫秒数
            var newDate = new Date();
            $("#addfRoomNumber").val("Room" + newDate.getTime());

            var len = data.total;
            var row = data.rows;
            var fRoomTypeSel = "";
            for (var i = 0; i < len; i++) {
                var fRoomType = document.getElementById("fRoomType").innerText;
                var fRoomTypeName = row[i].name;
                if (fRoomType == fRoomTypeName) {
                    if(row[i].value==roomType){
                        fRoomTypeSel += "<option selected='selected' value='" + row[i].value + "'>" + row[i].value + "</option>";
                    }else{
                        fRoomTypeSel += "<option value='" + row[i].value + "'>" + row[i].value + "</option>";
                    }
                }
            }
            $("#addfRoomType").html(fRoomTypeSel);
            $("#updRoomType").html(fRoomTypeSel);

            var afRoomOrientationSel = "";
            for (var i = 0; i < len; i++) {
                var afRoomOrientation = document.getElementById("afRoomOrientation").innerText;
                var afRoomOrientationSelName = row[i].name;
                if (afRoomOrientation == afRoomOrientationSelName) {
                    if(row[i].value==roomOrientation){
                        afRoomOrientationSel += "<option selected='selected' value='" + row[i].value + "'>" + row[i].value + "</option>";
                    }else{
                        afRoomOrientationSel += "<option value='" + row[i].value + "'>" + row[i].value + "</option>";
                    }
                }
            }
            $("#addfRoomOrientation").html(afRoomOrientationSel);
            $("#updRoomOrientation").html(afRoomOrientationSel);
        }
    });
}
function check_add_room(){
    var result=true;

    if(!addCheck_BuildingID_room()){
        result=false;
    }

    if(!addCheck_floorName_room()){
        result=false;
    }

    if(!addCheck_RoomName_room()){
        result=false;
    }

    if(!addCheck_BedCount_room()){
        result=false;
    }

    if(!addCheck_ManNumber_room()){
        result=false;
    }

    if(!addCheck_RoomPrice_room()){
        result=false;
    }

    if(!addCheck_administratorsId_room()){
        result=false;
    }

    if(getReRoomByBuild($("#addfBuildingID").val(), $("#addfRoomName").val())){
        result=false;
    }

    return result;
}

function addCheck_BuildingID_room() {
    var result=true;
    var addfBuildingID = $("#addfBuildingID").val().trim();
    $("#errorfBuildingID").html("");
    if (addfBuildingID==""){
        $("#errorfBuildingID").html("!!!");
        result = false;
    }
    return result;
}

function addCheck_floorName_room() {
    var result=true;
    var floorName = $("#addfFLoorID").val();
    $("#errorfFLoorID").html("");
    if (floorName==""||floorName==null){
        $("#errorfFLoorID").html("!!!");
        result = false;
    }
    return result;
}

function addCheck_RoomName_room() {
    var result=true;
    var RoomName = $("#addfRoomName").val().trim();
    $("#errorfRoomName").html("");
    if (RoomName==""){
        $("#errorfRoomName").html("!!!");
        result = false;
    }
    return result;
}

function addCheck_BedCount_room() {
    var result=true;
    var bedCount = $("#addfBedCount").val().trim();
    $("#errorfBedCount").html("");
    if (bedCount==""){
        $("#errorfBedCount").html("!!!");
        result = false;
    }
    return result;
}

function addCheck_ManNumber_room() {
    var result=true;
    var ManNumber = $("#addfManNumber").val().trim();
    $("#errorfManNumber").html("");
    if (ManNumber==""){
        $("#errorfManNumber").html("!!!");
        result = false;
    }
    return result;
}

function addCheck_RoomPrice_room() {
    var result=true;
    var RoomPrice = $("#addfRoomPrice").val().trim();
    $("#errorfRoomPrice").html("");
    if (RoomPrice==""){
        $("#errorfRoomPrice").html("!!!");
        result = false;
    }
    return result;
}

function addCheck_administratorsId_room() {
    var result=true;
    var administratorsId = $("#administratorsId").val().trim();
    $("#errorfRoomMan").html("");
    if (administratorsId==""){
        $("#errorfRoomMan").html("!!!");
        result = false;
    }
    return result;
}

function check_upd_room(){
    var result=true;

    if(!updCheck_BuildingID_room()){
        result=false;
    }

    if(!updCheck_floorName_room()){
        result=false;
    }

    if(!updCheck_RoomName_room()){
        result=false;
    }

    if(!updCheck_BedCount_room()){
        result=false;
    }

    if(!updCheck_ManNumber_room()){
        result=false;
    }

    if(!updCheck_RoomPrice_room()){
        result=false;
    }

    // if(getReRoomByBuild($("#updBuildingID").val(), $("#updRoomName").val())){
    //     result=false;
    // }

    return result;
}


function updCheck_BuildingID_room() {
    var result=true;
    var updBuildingID = $("#updBuildingID").val().trim();
    $("#errorUpdBuildingID").html("");
    if (updBuildingID==""){
        $("#errorUpdBuildingID").html("!!!");
        result = false;
    }
    return result;
}

function updCheck_floorName_room() {
    var result=true;
    var updLoorName = $("#updFLoorID").val();
    $("#errorUpdFLoorID").html("");
    if (updLoorName==""||updLoorName==null){
        $("#errorUpdFLoorID").html("!!!");
        result = false;
    }
    return result;
}

function updCheck_RoomName_room() {
    var result=true;
    var updRoomName = $("#updRoomName").val().trim();
    $("#errorUpdRoomName").html("");
    if (updRoomName==""){
        $("#errorUpdRoomName").html("!!!");
        result = false;
    }
    return result;
}

function updCheck_BedCount_room() {
    var result=true;
    var updBedCount = $("#updBedCount").val().trim();
    $("#errorUpdBedCount").html("");
    if (updBedCount==""){
        $("#errorUpdBedCount").html("!!!");
        result = false;
    }
    return result;
}

function updCheck_ManNumber_room() {
    var result=true;
    var updManNumber = $("#updManNumber").val().trim();
    $("#errorUpdManNumber").html("");
    if (updManNumber==""){
        $("#errorUpdManNumber").html("!!!");
        result = false;
    }
    return result;
}

function updCheck_RoomPrice_room() {
    var result=true;
    var updRoomPrice = $("#updRoomPrice").val().trim();
    $("#errorUpdRoomPrice").html("");
    if (updRoomPrice==""){
        $("#errorUpdRoomPrice").html("!!!");
        result = false;
    }
    return result;
}

function updCheck_administratorsId_room() {
    var result=true;
    var administratorsId = $("#administratorsId").val().trim();
    $("#errorfRoomMan").html("");
    if (administratorsId==""){
        $("#errorfRoomMan").html("!!!");
        result = false;
    }
    return result;
}


function getReRoomByBuild(build, roomName){
    var flag=false;
    $.ajax({
        url:contextPath+"/room/get.do",
        type:"post",
        async:false,
        data:{
            fRoomName:roomName,
            fBuildingID:build,
        },
        success:function(data){
            if(data.total>0){
                alert("添加房间失败，此大厦已经存在此房间！");
                flag=true;
            }

        }
    });
    return flag;
}

function btnOpen(){
    // 添加房间时初始化床位列表
    init_addBed();

    closeModal_Room();

    getDcList();
    getRoomBuilding();
    // getFloor();
    getEmp();
    // getRoomCharge();
    $("#addfFLoorID").html("");
    $("#roomBtn").attr("disabled", false);
}
//新增房间
function addRoom() {
    if(check_add_room()){
        $.ajax({
            url: contextPath + "/room/addRoom.do",
            type: "post",
            async:false,
            data: {
                fBuildingID: $("#addfBuildingID").val(),
                fFLoorID: $("#addfFLoorID").val(),
                fRoomNumber: $("#addfRoomNumber").val(),
                fRoomName: $("#addfRoomName").val(),
                fRoomType: $("#addfRoomType").val(),
                fRoomOrientation: $("#addfRoomOrientation").val(),
                fRoomPrice: $("#addfRoomPrice").val(),
                fAdministratorsID: $("#administratorsId").val(),
                fBedCount: $("#addfBedCount").val(),
                fStatus: $("#addRoomStatus").val(),
                fExplain: $("#addRoomExplain").val(),
                fManNumber: $("#addfManNumber").val()
            },
            success: function (data) {
                // console.log(data.message);
                // setAlert(data.message, "操作成功");
                alert("房间添加成功，请添加床位")
                $("#bedBtn").attr("disabled", false);
                $("#roomBtn").attr("disabled", true);
                $('#tb_Room').bootstrapTable('refresh', {url: 'query.do'});
                getLastRoom();
            }
        });
    }else{
        return 0;
    }
}

function closeModal_Room(flag) {
    // $("#addfNursingHomeID").val("");
    $("#addfBuildingID").val("");
    $("#addfFLoorID").val("");
    // $("#addfRoomNumber").val("");
    $("#addfRoomName").val("");
    // $("#addfRoomType").val("");
    // $("#addfRoomOrientation").val("");
    $("#addfRoomPrice").val("");
    $("#administratorsId").val("");
    $("#addfBedCount").val("");
    // $("#addRoomStatus").val("");
    $("#addRoomExplain").val("");
    $("#addfManNumber").val("");
    if(flag==1){
        $("#addModal").modal("hide");
        $("#updateModal").modal("hide");
    }
    $("#addfRoomID").val("");
    $('#tb_Bed').bootstrapTable('removeAll');

    $("#FID").val("");
    $("#updNursinghomeID").val();
    $("#updChrgeNumber").val();
    $("#updChrgeName").val();
    $("#updChrgeType").val();
    $("#updNursingLevel").val();
    $("#updPrice").val();
    $("#updUnit").val();
    $("#updValue").val();
    $("#updChargeCycle").val();
    $(".updRefundType").val();
    $("#updChrgeStartDate").val();
    $("#updChrgeStopDate").val();
    $("#updStatus").val();
    $("#updExplain").val();
}

function getLastRoom(){
    $.ajax({
        url: contextPath + "/room/getLastRoom.do",
        type: "post",
        async:false,
        success: function (data) {
            // alert(data.rows[0].fID)
            $("#addfRoomID").val(data.rows[0].fID);
        }
    });
}

//修改房间
function updRoom() {
    if(check_upd_room()){
        $.ajax({
        url: contextPath + "/room/updRoom.do",
        type: "post",
        data: {
            fID: $("#updRoomId").val(),

            fNursingHomeID: $("#updNursingHomeID").val(),
            fBuildingID: $("#updBuildingID").val(),
            fFLoorID: $("#updFLoorID").val(),
            fRoomNumber: $("#updRoomNumber").val(),
            fRoomName: $("#updRoomName").val(),
            fRoomType: $("#updRoomType").val(),
            fRoomOrientation: $("#updRoomOrientation").val(),
            fRoomPrice: $("#updRoomPrice").val(),
            fBedCount: $("#updBedCount").val(),
            fManNumber: $("#updManNumber").val(),
            fStatus: $("#updRoomStatus").val(),
            fExplain: $("#updRoomExplain").val(),
            fAdministratorsID: $("#updAdministratorsId").val(),
        },
        success: function (data) {
            console.log(data.message);
            alert("修改房间成功");
            $('#tb_Room').bootstrapTable('refresh', {url: 'query.do'});
            $('#tb_UpdBed').bootstrapTable('refresh', {url: contextPath + '/bed/queryBed.do'});
        }
    });
    }else{
        return 0;
    }
    // closeModal();
}

//删除房间,同时删除床位，已经有入住老人的房间，和以前入住过老人的房间都不允许删除。
function gotoDelete() {
    var carrentItem = $("#tb_Room").bootstrapTable('getSelections');
    if (carrentItem[0]) {
        var roomId=carrentItem[0].fID;
        if(check_room_hosing(roomId)){
            $.ajax({
                url: contextPath + "/room/delRoom.do",
                type: "post",
                async:false,
                data: {
                    fID: roomId
                },
                success: function (data) {
                    if(data.success){
                        delBedByRoomId(roomId);
                        setAlert("success", data.msg);
                    }else{
                        setAlert("error", data.msg);
                    }
                    $('#tb_Room').bootstrapTable('refresh', {url: 'query.do'});
                }
            });
        }else{
            alert("此房间已经被住过，不允许删除！")
        }

    } else {
        setAlert("error", "请先选择一条数据");
    }
}
// 检查房间是否已经入住过老人，和以前入住过老人的房间都不允许删除。
function check_room_hosing(roomId){
    var result=true;
    $.ajax({
        url: contextPath + "/hosing/getOldManRoom.do",
        type: "post",
        async:false,
        data: {
            froomID: roomId
        },
        success: function (data) {
            if(data.total>0){
                result=false;
            }
        }
    });
    return result;
}
// 删除房间时同时删除床位
function delBedByRoomId(roomId){
    $.ajax({
        url: contextPath + "/bed/delBed.do",
        type: "post",
        async:false,
        data: {
            fRoomID: roomId
        },
        // success: function (data) {
        // }
    });
}

//页面回显数据
function gotoRoomUpdate() {
    //修改房间时初始化床位
    init_updBed();

    var carrentItem = $("#tb_Room").bootstrapTable('getSelections');
    if (carrentItem[0]) {

        // 修改房间时加载该房间床位信息
        $("#updRoomId").val(carrentItem[0].fID);
        $('#tb_UpdBed').bootstrapTable('refresh', {url: contextPath + '/bed/queryBed.do'});

        getRoomBuilding(carrentItem[0].fBuildingID);
        getFloor(carrentItem[0].fBuildingID,carrentItem[0].fFLoorID);

        $("#updRoomNumber").val(carrentItem[0].fRoomNumber);
        $("#updRoomName").val(carrentItem[0].fRoomName);
        $("#updRoomPrice").val(carrentItem[0].fRoomPrice);

        getDcList(carrentItem[0].fRoomType,carrentItem[0].fRoomOrientation);
        // getRoomCharge(carrentItem[0].fRoomPrice);
        getEmp(carrentItem[0].fAdministratorsID);

        $("#updBedCount").val(carrentItem[0].fBedCount);
        $("#updManNumber").val(carrentItem[0].fManNumber);

        var state="";
        if(carrentItem[0].fStatus=="01"){
            state+="<option value='01'>空闲</option>";
            state+="<option value='11'>已满</option>";
            state+="<option value='10'>未满</option>";
            state+="<option value='2'>停用</option>";
        }else if(carrentItem[0].fStatus=="11"){
            state+="<option value='11'>已满</option>";
            state+="<option value='01'>空闲</option>";
            state+="<option value='10'>未满</option>";
            state+="<option value='2'>停用</option>";
        }else if(carrentItem[0].fStatus=="10"){
            state+="<option value='10'>未满</option>";
            state+="<option value='11'>已满</option>";
            state+="<option value='01'>空闲</option>";
            state+="<option value='2'>停用</option>";
        }else if(carrentItem[0].fStatus=="2"){
            state+="<option value='2'>停用</option>";
            state+="<option value='11'>已满</option>";
            state+="<option value='01'>空闲</option>";
            state+="<option value='10'>未满</option>";
        }
        $("#updRoomStatus").html(state);

        $("#updRoomExplain").val(carrentItem[0].fExplain);
        $("#update_btn").click();
    } else {
        setAlert("error", "请先选择一条数据");
    }
}