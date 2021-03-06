/**
 * Created by wangjs on 2016/12/12.
 */
// $(function () {
//     //1.初始化Table
//     var oTable_addBed = new TableInit_addBed();
//     oTable_addBed.Init();
// });
function init_addBed(){
    //1.初始化Table
    var oTable_addBed = new TableInit_addBed();
    oTable_addBed.Init();
}
var TableInit_addBed = function () {
    var oTableInit_addBed = new Object();
    //初始化Table
    oTableInit_addBed.Init = function () {
        $('#tb_Bed').bootstrapTable({
            url: contextPath + "/bed/queryBed.do",   //请求后台的URL（*）
            method: 'post',      //请求方式（*）
            //toolbar: '#toolbar',    //工具按钮用哪个容器
            striped: true,      //是否显示行间隔色
            cache: false,      //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,     //是否显示分页（*）
            sortable: false,      //是否启用排序
            sortOrder: "asc",     //排序方式
            queryParams: oTableInit_addBed.queryParams,//传递参数（*）
            sidePagination: "server",   //分页方式：client客户端分页，server服务端分页（*）
            pageNumber: 1,      //初始化加载第一页，默认第一页
            pageSize: 10,      //每页的记录行数（*）
            pageList: [10, 25, 50, 100],  //可供选择的每页的行数（*）
            // search: false,      //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: true,
            // showColumns: true,     //是否显示所有的列
            // showRefresh: true,     //是否显示刷新按钮
            minimumCountColumns: 2,    //最少允许的列数
            clickToSelect: true,    //是否启用点击选中行
            height: 350,      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "ID",      //每一行的唯一标识，一般为主键列
            // showToggle: true,     //是否显示详细视图和列表视图的切换按钮
            // cardView: false,     //是否显示详细视图
            detailView: false,     //是否显示父子表

            columns: [{
                radio: true
            }, {
                field: 'fBedNumber',
                title: '床位号',
                align: "center",
                valign: "middle",
            }, {
                field: 'fRoomName',
                title: '房间名称',
                align: "center",
                valign: "middle",
            }, {
                field: 'fBedPrice',
                title: '床位价格',
                align: "center",
                valign: "middle",
            }, {
                field: 'fStatus',
                title: '状态',
                align: "center",
                valign: "middle",
                formatter:function(value){
                    if(value=='2'){
                        return '<span style="color:#00ff00">空闲</span>'
                    }else if(value=='11'){
                        return '<span style="color:#FF0000">使用</span>'
                    }else if(value=='10'){
                        return '<span style="color:#0000cc">请假</span>'
                    }else if(value=='01'){
                        return '<span style="color:#ffff00">预约</span>'
                    }
                }
            }, {
                field: 'fAdministratorsID',
                title: '护理员',
                align: "center",
                valign: "middle",
            }, {
                field: 'fExplain',
                title: '说明',
                align: "center",
                valign: "middle",
            }]
        });
    };

    //得到查询的参数
    oTableInit_addBed.queryParams = function (params) {
        var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            pageSize: params.limit, //页面大小
            page: params.offset,//页码
            fRoomID: $("#addfRoomID").val(),
            // value: $("#searchValue").val()
        };
        return temp;
    };
    return oTableInit_addBed;
};
//
// $(document).ready(
//     getCharge()
// )
//房间价格取自缴费标准表
// function getCharge() {
//     $.ajax({
//         url: contextPath + "/charge/queryCharge.do",
//         type: "post",
//         success: function (data) {
//             var len3 = data.total;
//             var row3 = data.rows;
//             var charge = "<option value=''> --请选择-- </option>";
//             for (var i = 0; i < len3; i++) {
//                 var acharge = document.getElementById("afBedPrice").innerText;
//                 var achargeName = row3[i].fChrgeType;
//                 if (acharge == achargeName) {
//                     charge += "<option value='" + row3[i].fID + "'>" + row3[i].fPrice + "</option>";
//                 }
//             }
//             $("#addfBedPrice").html(charge);
//         }
//     });
// }
function check_add(){
    var result=true;

    if(!check_add_BedNumber()){
        result=false;
    }

    if(!check_add_bedPrice()){
        result=false;
    }

    return result;
}

function check_add_BedNumber(){
    var result=true;
    var bedNumber = $("#addfBedNumber").val().trim();
    $("#errorfBedNumber").html("");
    if (bedNumber==""){
        $("#errorfBedNumber").html("!!!");
        result = false;
    }
    return result;
}

function check_add_bedPrice(){
    var result=true;
    var bedPrice = $("#addfBedPrice").val().trim();
    $("#errorfBedPrice").html("");
    if (bedPrice==""){
        $("#errorfBedPrice").html("!!!");
        result = false;
    }
    return result;
}

//新增床位
function addBed() {
    if(check_add()){
        $.ajax({
            url: contextPath + "/bed/addBed.do",
            type: "post",
            data: {
                page: 0,
                pageSize: 10,
                fBedNumber: $("#addfBedNumber").val(),
                fBedPrice: $("#addfBedPrice").val(),
                fAdministratorsID: $("#addfAdministratorsIDs").val(),
                fStatus: $("#addfStatus").val(),
                fExplain: $("#addBedExplain").val(),

                fRoomID: $("#addfRoomID").val()
            },
            success: function (data) {
                console.log(data.message);
                // setAlert(data.message, "添加床位成功");
                alert("添加床位成功");
                $('#tb_Bed').bootstrapTable('load', data);
                $('#tb_Room').bootstrapTable('refresh', {url: 'query.do'});
            }
        });
    }else{
        return 0;
    }
    closeBedModal()
}
function closeBedModal(flag) {
    $("#addfBedNumber").val("");
    $("#addfBedPrice").val("");
    $("#addChrgeName").val("");
    $("#addChrgeType").val("");
    $("#addBedExplain").val("");
    if(flag==1){
        $("#addModal").modal("hide");
        $("#addfRoomID").val("");
    }
    // $('#tb_Bed').bootstrapTable('removeAll');
}

//页面回显数据
function gotoUpdate() {
    var carrentItem = $("#tb_chargeStandard").bootstrapTable('getSelections');
    if (carrentItem[0]) {

        var ChrgeTypeSel = "";
        for (var i = 0; i < len; i++) {
            var ChrgeType = document.getElementById("ChrgeType").innerText;
            var ChargeTyleName = row[i].name;
            if (ChrgeType == ChargeTyleName) {
                var valueTemp1 = row[i].value;
                var tempValue1 = carrentItem[0].fChrgeType;
                if (valueTemp1 == tempValue1) {
                    ChrgeTypeSel += "<option selected='selected' value='" + row[i].value + "'>" + row[i].value + "</option>";
                } else {
                    ChrgeTypeSel += "<option value='" + row[i].value + "'>" + row[i].value + "</option>";
                }
            }
        }
        $("#updChrgeType").html(ChrgeTypeSel);

        var aUnitSel = "";
        for (var i = 0; i < len; i++) {
            var uUnit = document.getElementById("uUnit").innerText;
            var aUnitleName = row[i].name;
            if (uUnit == aUnitleName) {
                var valueTemp2 = row[i].value;
                var tempValue2 = carrentItem[0].fUnit;
                if (valueTemp2 == tempValue2) {
                    aUnitSel += "<option selected='selected' value='" + row[i].value + "'>" + row[i].value + "</option>";
                } else {
                    aUnitSel += "<option value='" + row[i].value + "'>" + row[i].value + "</option>";
                }
            }
        }
        $("#updUnit").html(aUnitSel);

        var uChargeCycleSel = "";
        for (var i = 0; i < len; i++) {
            var uChargeCycle = document.getElementById("uChargeCycle").innerText;
            var aChargeCycleName = row[i].name;
            if (uChargeCycle == aChargeCycleName) {
                var valueTemp3 = row[i].value;
                var tempValue3 = carrentItem[0].fChargeCycle;
                if (valueTemp3 == tempValue3) {
                    uChargeCycleSel += "<option selected='selected' value='" + row[i].value + "'>" + row[i].value + "</option>";
                } else {
                    uChargeCycleSel += "<option value='" + row[i].value + "'>" + row[i].value + "</option>";
                }

            }
        }
        $("#updChargeCycle").html(uChargeCycleSel);

        var aNursingLevelSel = "";
        for (var i = 0; i < len; i++) {
            var uNursingLevel = document.getElementById("uNursingLevel").innerText;
            var aNursingLevelName = row[i].name;
            if (uNursingLevel == aNursingLevelName) {
                var valueTemp4 = row[i].value;
                var tempValue4 = carrentItem[0].fNursingLevel;
                if (valueTemp4 == tempValue4) {
                    aNursingLevelSel += "<option selected='selected' value='" + row[i].value + "'>" + row[i].value + "</option>";
                } else {
                    aNursingLevelSel += "<option value='" + row[i].value + "'>" + row[i].value + "</option>";
                }

            }
        }
        $("#updNursingLevel").html(aNursingLevelSel);

        var aValueSel = "";
        for (var i = 0; i < len; i++) {
            var uValue = document.getElementById("uValue").innerText;
            var aValueName = row[i].name;
            if (uValue == aValueName) {
                var valueTemp5 = row[i].value;
                var tempValue5 = carrentItem[0].fValue;
                if (valueTemp5 == tempValue5) {
                    aValueSel += "<option selected='selected' value='" + row[i].value + "'>" + row[i].value + "</option>";
                } else {
                    aValueSel += "<option value='" + row[i].value + "'>" + row[i].value + "</option>";
                }

            }
        }
        $("#updValue").html(aValueSel);

        $("#FID").val(carrentItem[0].fID);
        $("#updNursinghomeID").val(carrentItem[0].fNursinghomeID);
        $("#updChrgeNumber").val(carrentItem[0].fChrgeNumber);
        $("#updChrgeName").val(carrentItem[0].fChrgeName);
        $("#updPrice").val(carrentItem[0].fPrice);
        $(".updRefundType").val(carrentItem[0].fRefundType);
        $("#updChrgeStartDate").val(carrentItem[0].fChrgeStartDate);
        $("#updChrgeStopDate").val(carrentItem[0].fChrgeStopDate);
        $("#updStatus").val(carrentItem[0].fStatus);
        $("#updExplain").val(carrentItem[0].fExplain);
        $("#update_btn").click();
    } else {
        setAlert("error", "请先选择一条数据");
    }
}
