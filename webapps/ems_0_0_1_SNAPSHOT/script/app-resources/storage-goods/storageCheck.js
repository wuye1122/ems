/**
 * Created by liuxing on 2017/1/6.
 */
//初始化
$(document).ready(function () {
    //仓库列表
    getStorageOutStoreHouseList();
    //盘点人
    getCheckManList();
});

$(function () {
    //1.初始化Table
    var oTable = new TableInit();
    oTable.Init();
});
var TableInit = function () {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        $('#tb_storageCheckList').bootstrapTable({
            url:'queryStorageCheckList.do',   //请求后台的URL（*）
            method: 'post',      //请求方式（*）
            contentType:"application/x-www-form-urlencoded; charset=UTF-8",
            toolbar: '#toolbar',    //工具按钮用哪个容器
            showExport:true,    //显示导出按钮
            exportDataType: "basic",//导出类型basic', 'all', 'selected'.当前页、所有数据、选中数据
            striped: true,      //是否显示行间隔色
            cache: false,      //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,     //是否显示分页（*）
            sortable: true,      //是否启用排序
            sortOrder: "asc",     //排序方式
            queryParams: oTableInit.queryParams,//传递参数（*）
            sidePagination: "server",   //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,      //初始化加载第一页，默认第一页
            pageSize:5,      //每页的记录行数（*）
            pageList: [5, 10, 50, 100],  //可供选择的每页的行数（*）
            search: false,      //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: true,
            showColumns: true,     //是否显示所有的列
            showRefresh: true,     //是否显示刷新按钮
            minimumCountColumns: 2,    //最少允许的列数
            clickToSelect: true,    //是否启用点击选中行
            height: 350,      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            // uniqueId: "number",      //每一行的唯一标识，一般为主键列
            showToggle:true,     //是否显示详细视图和列表视图的切换按钮
            cardView: false,     //是否显示详细视图
            detailView: false,     //是否显示父子表
            columns: [
                {
                    checkbox:true,
                    width: 40
                    // radio: true
                },
                {
                    field: 'checkDate',
                    title: '盘点日期',
                    align: 'center',
                    width: 200
                }, {
                    field: 'checkMan',
                    title: '盘点人',
                    align: 'center',
                    width: 200
                },{
                    field: 'storage',
                    title: '仓库',
                    align: 'center',
                    width: 150
                },{
                    field: 'remarks',
                    title: '说明',
                    align: 'center',
                    width: 300

                },{
                    field: 'stockCount',
                    title: '操作',
                    align: 'center',
                    formatter:function(value1,row,index){
                        // var str=JSON.stringify(row);
                        // str=str.replace(/\"/g,"_");
                        // return  "<a href='javascript:void(0)' class='glyphicon glyphicon-search' style='color: #1C84C6' onclick=\"get_to_search('"+str+"')\">查看</a>" +
                        //     "&nbsp;|&nbsp;<a href='javascript:void(0)'  class='glyphicon glyphicon-print' style='color: #1C84C6' onclick=\"get_to_print('"+str+"')\">打印</a>"
                        return  "<a id='look"+index+"' href='javascript:void(0)' class='glyphicon glyphicon-search' style='color: #1C84C6'>查看</a>" +
                            "&nbsp;|&nbsp;<a id='print"+index+"' href='javascript:void(0)'  class='glyphicon glyphicon-print' style='color: #1C84C6' >打印</a>"
                    }
                }],
            onLoadSuccess: function(data) {
                //动态绑定事件，传递参数
                for(var i=0;i<data.total;i++){
                    (function(i){
                        $("#look"+i+"").click(function () {
                            get_to_search(data.rows[i]);
                        })
                        $("#print"+i+"").click(function () {
                            get_to_print(data.rows[i]);
                        })
                    })(i);
                }
            }
        });
        $('#check_add_table').bootstrapTable({
            url:'',   //请求后台的URL（*）
            method: 'get',      //请求方式（*）
            // toolbar: '#toolbar',    //工具按钮用哪个容器
            // showExport:true,    //显示导出按钮
            // exportDataType: "basic",//导出类型basic', 'all', 'selected'.当前页、所有数据、选中数据
            striped: true,      //是否显示行间隔色
            cache: false,      //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: false,     //是否显示分页（*）
            sortable: true,      //是否启用排序
            sortOrder: "asc",     //排序方式
            queryParams: oTableInit.queryParams2(),//传递参数（*）
            sidePagination: "server",   //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,      //初始化加载第一页，默认第一页
            pageSize:5,      //每页的记录行数（*）
            pageList: [5, 10, 50, 100],  //可供选择的每页的行数（*）
            search: false,      //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: false,
            // showColumns: true,     //是否显示所有的列
            showRefresh: false,     //是否显示刷新按钮
            // minimumCountColumns: 2,    //最少允许的列数
            clickToSelect: true,    //是否启用点击选中行
            // height: 350,      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            // uniqueId: "number",      //每一行的唯一标识，一般为主键列
            showToggle:false,     //是否显示详细视图和列表视图的切换按钮
            cardView: false,     //是否显示详细视图
            detailView: false,     //是否显示父子表
            columns: [
                {
                    field: 'fnumber',
                    title: '产品号',
                    align: 'center',
                    width:210,
                }, {
                    field: 'material',
                    title: '物品名称',
                    align: 'center',
                    width:110,
                },{
                    field: 'paperNumber',
                    title: '账面数据',
                    align: 'center',
                    width:80,

                },{
                    field: 'checkNumber',
                    title: '盘点数据',
                    align: 'center',
                    width:80,
                    formatter:function(value1,row,index){
                        return "<input  type='text'  placeholder='必填项' style='width: 70px' placeholder='必填项' onblur=\"checkDifference(this.value,"+row.paperNumber+","+index+")\" onkeyup=\"value=value.replace(/[^\\d]/g,'')\"/>" ;
                    }

                },{
                    field: 'difference',
                    title: '差异',
                    align: 'center',
                    formatter:function(value1,row,index){
                        return "";
                    }

                },{
                    field: 'status',
                    title: '状态',
                    align: 'center',
                    width:100,
                    formatter:function(value1,row,index){
                        return "<select style='height: 24px'>" +
                            "<option value='1' selected>正常</option>" +
                            "<option value='0'>损坏</option>" +
                            "</select>";
                    }
                },{
                    field: 'explain',
                    title: '原因',
                    align: 'center',
                    formatter:function(value1,row,index){
                    return "<input  type='text'  style='width:400px' placeholder='必填项'/>" ;

                    }
                }]
        });
    };
    //得到查询的参数
    oTableInit.queryParams = function (params) {
        var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            pageSize: params.limit, //页面大小
            page: params.offset, //页码
            storage: $("#storage").val(),
            Edate: $("#Edate").val(),
            Ldate: $("#Ldate").val(),
        };
        return temp;
    };
    oTableInit.queryParams2 = function (params) {
        var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            storage: $("#add_store").val(),
        };
        return temp;
    };
    return oTableInit;
};


//仓库名称列表下拉框
function getStorageOutStoreHouseList() {
    $.ajax({
        url:contextPath+"/StorageOut/getStorageOutStoreHouseList.do",
        type:"post",
        data:{

        },
        success:function(data) {

            $("#storage").empty();
            $("#add_store").empty();
            $("#storage").append("<option value='' selected>-请选择-</option>")
            $.each(data,function (key,Data) {
                $("#storage").append("<option value=" +Data.storageID + ">" + Data.storageName + "</option>")
                $("#add_store").append("<option value=" +Data.storageID + ">" + Data.storageName + "</option>")
            })
        }
    });
}
//加载保管人下拉列表
function getCheckManList() {
    $.ajax({
        url:contextPath+"/StorageCheck/getCheckManList.do",
        type:"post",
        data:{
        },
        success:function(data) {
            $("#add_checkman").empty();
            $.each(data,function (key,Data) {
                $("#add_checkman").append("<option value=" +Data.checkManID + ">" + Data.checkMan + "</option>")
            })
        }
    });
}


//条件查询项目
function queryCheckList() {
    $.ajax({
        url: contextPath + "/StorageCheck/queryStorageCheckList.do",
        type: "post",
        data: {
            pageSize: 5, //页面大小
            page: 0, //页码
            storage: $("#storage").val(),
            Edate: $("#Edate").val(),
            Ldate: $("#Ldate").val(),
        },
        success: function (data) {
            $('#tb_storageCheckList').bootstrapTable('load', data);
        }
    });
}
//清除选项
function queryclear() {
    $("#storage").val("");
    $("#Edate").val("");
    $("#Ldate").val("");
}

//跳转查看
function get_to_search(po){
    $("#tb_print tbody").empty();
    var checkDate=(po.checkDate).split("-");
    var date=new Date();
    var printDate=date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    $("#operator").html(po.checkMan);
    $("#checkDate").html(po.checkDate);
    $("#printDate").html(printDate);
    $("#printTableName").html(checkDate[0]+"年"+checkDate[1]+"月"+po.storage+"盘点表");
    $.ajax({
        url:contextPath+"/StorageCheck/getPrintList.do",
        type:'post',
        data:{
            checkDate:po.checkDate,
            storageID:po.storageID,
        },
        success:function (data) {
            $.each(data,function (key,Data) {
                if(Data.status == "1")
                {
                    Data.status="正常";
                }
                else{
                    Data.status="损坏";
                }
                $("#tb_print").append("<tr>" +
                    "<td style='border-color: black'>"+Data.fnumber+"</td>" +
                    "<td style='border-color: black'>"+Data.material+"</td>" +
                    "<td style='border-color: black'>"+Data.storage+"</td>" +
                    "<td style='border-color: black'>"+Data.paperNumber+"</td>" +
                    "<td style='border-color: black'>"+Data.checkNumber+"</td>" +
                    "<td style='border-color: black'>"+Data.difference+"</td>" +
                    "<td style='border-color: black'>"+Data.status+"</td>" +
                    "<td style='border-color: black'>"+Data.explain+"</td>" +
                    "</tr>")
            });
        }
    })
    $("#print_btn").click();
}
//跳转打印
function get_to_print(po){
    get_to_search(po);
    setTimeout(function(){$("#beginPrint").click()},500);
}
//跳转增加
function go_to_add() {
    var date=new Date();
    var printDate=date.getFullYear()+"年"+(date.getMonth()+1)+"月 ";

    $("#add_date").html(printDate);
    $("#add_btn").click();
    $("#add_storage").html($("#add_store :selected").html());
    $.ajax({
        url:contextPath+"/StorageCheck/getStorageMaterial.do",
        type:"post",
        data:{
            storageID: $("#add_store").val(),
        },
        success:function (data) {
            $("#check_add_table").bootstrapTable('load',data);
        }
    })
}
//根据仓库条件查询仓库里的物品
function getStorageMaretial() {
    $("#add_storage").html($("#add_store :selected").html());
    $.ajax({
        url:contextPath+"/StorageCheck/getStorageMaterial.do",
        type:"post",
        data:{
            storageID: $("#add_store").val(),
        },
        success:function (data) {
            $("#check_add_table").bootstrapTable('load',data);
        }
    })
}
//获得差异数量
function checkDifference(difference,value,index) {
    difference=difference.trim();
    var tr = $("#check_add_table tbody tr").eq(index);
    var td = tr.find(" td ");
    if(difference!=""){
        difference=value-difference;
        td.eq(4).html(difference);
    }
    else{
        td.eq(4).html("");
    }
}
//添加的输入检查
function check_add() {
    var boolean = true;
    $("#check_add_table tbody tr").each(function () {
        var input=$(this).find(" td input ");
        if(input.eq(0).val()==""){
            alert("请填写盘点数据！");
            boolean=false;
            return false;
        }
        if(input.eq(1).val()==""){
            alert("请填写说明！");
            boolean=false;
            return false;
        }
    });
    if(boolean == true)
    {
        if($("#add_checkDate").val()=='')
        {
            alert("请填写盘点日期！");
            boolean=false;
        }
        else{
            if($("#add_store").val()=='')
            {
                alert("请选择仓库！");
                boolean=false;
            }else {
                if($("#add_remarks").val()=='')
                {
                    alert("请填写描述！");
                    boolean=false;
                }
            }
        }
    }
    return boolean;
}
//添加操作
function add_checklist(){
    if(check_add()) {
        var carrentItem;
        var str="";
        var i=0;
        $("#check_add_table tbody tr").each(function () {
            carrentItem= $("#check_add_table").bootstrapTable('getData')[i];
            var td = $(this).find(" td input");
            str = str+"_"+carrentItem.fnumber+
                "="+carrentItem.nursingHomeID+
                "="+$("#add_checkDate").val()+
                "="+carrentItem.storageManID+
                "="+carrentItem.storageID+
                "="+carrentItem.materialID+
                "="+carrentItem.paperNumber+
                "="+td.eq(0).val()+
                "="+(parseInt(carrentItem.paperNumber)-parseInt(td.eq(0).val()))+
                "="+$(this).find(" td select").val()+
                "="+td.eq(1).val()+
                "="+$("#add_remarks").val()+
                "="+$("#add_checkman").val();
            i++;
        })
        $.ajax({
            url:contextPath+'/StorageCheck/add_check.do',
            type:"post",
            data:{
                str:str,
            },
            success:function (data) {
                if(data.success)
                {
                    setAlert("success","操作成功！");
                }
                else {
                    setAlert("error","操作失败！");
                }
                $("#out_close_btn").click();
                $('#tb_storageCheckList').bootstrapTable('refresh', {url: 'queryStorageCheckList.do'});
            }
        })
    }
}