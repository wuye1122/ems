/**
 * Created by zhangxin on 2016/12/26.
 */
$(function () {
    //1.初始化Table
    var oTable = new TableInit();
    oTable.Init();
});

var length1='';
var num='';
var TableInit = function () {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        $('#tb_resEnterWarehouse').bootstrapTable({
            url: 'queryMainList.do',   //请求后台的URL（*）
            method: 'post', //请求方式（*）
            contentType:"application/x-www-form-urlencoded; charset=UTF-8",
            toolbar: '#toolbar',    //工具按钮用哪个容器
            striped: true,      //是否显示行间隔色
            cache: false,      //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,     //是否显示分页（*）
            sortable: false,      //是否启用排序
            sortOrder: "asc",     //排序方式
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
            height: 600,      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "ID",      //每一行的唯一标识，一般为主键列
            showToggle:true,     //是否显示详细视图和列表视图的切换按钮
            cardView: false,     //是否显示详细视图
            detailView: false,     //是否显示父子表
            columns: [{
                radio: true
            }, {
                field: 'fNumber',
                title: '编号'
            }, {
                field: 'fPurchaseDate',
                title: '采购时间'
            }, {
                field: 'fPurchaseManName',
                title: '采购员'
            }, {
                field: 'fStorageName',
                title: '仓库'
            }, {
                field: 'fStoremanName',
                title: '保管员'
            }, {
                field: 'fMaterialName',
                title: '物品名称'
            }, {
                field: 'fStandard',
                title: '规格'
            }, {
                field: 'fAmount',
                title: '数量'
            }],
            onLoadSuccess: function(data){
                hebing();
            }
        });
        $('#tb_resUpdate').bootstrapTable({
            url: 'query.do',   //请求后台的URL（*）
            method: 'get',      //请求方式（*）
            striped: true,      //是否显示行间隔色
            cache: false,      //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,     //是否显示分页（*）
            sortable: false,      //是否启用排序
            sortOrder: "asc",     //排序方式
            queryParams: oTableInit.queryParams2,//传递参数（*）
            sidePagination: "server",   //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,      //初始化加载第一页，默认第一页
            pageSize: 5,      //每页的记录行数（*）
            pageList: [10, 25, 50, 100],  //可供选择的每页的行数（*）
            search: false,      //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: true,
            showColumns: true,     //是否显示所有的列
            showRefresh: true,     //是否显示刷新按钮
            minimumCountColumns: 2,    //最少允许的列数
            clickToSelect: true,    //是否启用点击选中行
            // height: 600,      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            // uniqueId: "ID",      //每一行的唯一标识，一般为主键列
            showToggle:true,     //是否显示详细视图和列表视图的切换按钮
            cardView: false,     //是否显示详细视图
            detailView: false,     //是否显示父子表
            columns: [
                {
                    checkbox: true,
                    width:40,
                },{
                    field: 'material', /*'FStoreHouseName',*/
                    title: '仓库',
                    align: 'center',
                    width:135,
                    formatter:function(value1,row,index){

                        return queryGetHouse(index);
                    }
                }, {
                    field:  'material', /*'FStaffName',*/
                    title: '保管员',
                    align: 'center',
                    width:130,
                    formatter:function(value1,row,index){
                        return "<span id='span"+index+"'></span>";
                    }
                }, {
                    field: 'name',
                    title: '物品名称',
                    align: 'center',
                    width:130,
                }, {
                    field: 'standard',
                    title: '规格',
                    align: 'center',
                    width:130,
                }, {
                    field: 'purchasePrice',
                    title: '采购价',
                    align: 'center',
                    width:130,
                    formatter:function(value1,row,index){
                        row.stockCount;
                        return "<input value='"+row.purchasePrice+"'  type='text' class='price' style='width: 70px' onkeyup=\"value=value.replace(/[^\\d.]/g,'')\"/>";
                    }
                }, {
                    field: 'getCount',
                    title: '采购数量',
                    align: 'center',
                    width:130,
                    formatter:function(value1,row,index){
                        row.stockCount;
                        return "<input  type='text' class='count' style='width: 70px' onkeyup=\"value=value.replace(/[^\\d.]/g,'')\"/>";
                    }
                },{
                    field: 'unit',
                    title: '单位',
                    align: 'center',
                    width:127,
                },{
                    field: 'lowStock',
                    title: '最少库存量',
                    align: 'center',
                    width:128,
                }],onLoadSuccess: function(data){
                num=data.total;
                for(var i=0;i<num;i++) {
                    (function (i) {
                        $("#house" + i + "").change(function () {
                            $("#span" + i + "").html($("#house" + i + " option:selected").data("staffname"));
                        });
                    })(i);
                }
            }
        });
    };

    //合并编号相同的项
    function hebing() {
        var trlist=$("#tb_resEnterWarehouse tbody tr");
        var beging=0;
        var end=0;
        var number=0;
        var tdlist;
        for(var i=0;i<trlist.size();i++)
        {
            tdlist=trlist.eq(i).find(' td ');
            if(number==tdlist.eq(1).html())
            {
                end=i;
                if(end==(trlist.size()-1))
                {
                    tdlist=trlist.eq(beging).find(' td ');
                    tdlist.eq(0).attr("rowspan",end-beging+1);
                    tdlist.eq(1).attr("rowspan",end-beging+1);
                    tdlist.eq(2).attr("rowspan",end-beging+1);
                    for(var j=(beging+1);j<=end;j++)
                    {
                        tdlist=trlist.eq(j).find(' td ');
                        tdlist.eq(0).css('display','none');
                        tdlist.eq(1).css('display','none');
                        tdlist.eq(2).css('display','none');
                    }
                }
            }
            else{
                number=tdlist.eq(1).html();
                if((end-beging)>0)
                {
                    tdlist=trlist.eq(beging).find(' td ');
                    tdlist.eq(0).attr("rowspan",end-beging+1);
                    tdlist.eq(1).attr("rowspan",end-beging+1);
                    tdlist.eq(2).attr("rowspan",end-beging+1);

                    for(var j=(beging+1);j<=end;j++)
                    {
                        tdlist=trlist.eq(j).find(' td ');
                        tdlist.eq(0).css('display','none');
                        tdlist.eq(1).css('display','none');
                        tdlist.eq(2).css('display','none');

                    }
                }
                beging=i;
                end=i;
            }
        }
    }

    //得到查询的参数
    oTableInit.queryParams = function (params) {
        var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            pageSize: params.limit, //页面大小
            page: params.offset ,//页码
            fPurchaseManName:$("#searchName").val(),
            start:$("#searchEntryDate").val(),
            finish:$("#searchEndDate").val()
        };
        return temp;
    };
    oTableInit.queryParams2 = function (params) {
        var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            pageSize: params.limit, //页面大小
            page: params.offset , //页码
            name: $("#update_goodsAdd_material").val(),
            fCategoryID:$("#update_goodsAdd_type").val(),
        };
        return temp;
    };
    return oTableInit;
};
var rows='';
//可以进行选择仓库进行入库
function queryGetHouse(index){
    var c='';
    $.ajax({
        url : contextPath + "/InStorage/queryGetHouse.do",
        type : "post",
        success : function(data) {
            rows = data.rows;
            length1 = data.total;
        }
    });
    c = "<select class='form-control' id='house" + index + "'  ><option value=''  data-staffName='' data-staffid='' >-请选择-</option>"
    for (var i = 0; i < length1; i++) {
        c += "<option value='" + rows[i].FID + "'  data-staffName='" + rows[i].FStaffName + "' data-staffid='" + rows[i].Staffid + "'>" + rows[i].FStoreHouseName + "</option>";
    }
    c + "</select>"
    return c;
}

//新建入库单里的物品添加
function add_in_Add() {
    $('#tb_resUpdate').bootstrapTable('refresh', {url: 'query.do'});
    //下面进行动态赋值
    $("#updateGoodsModal").modal('show');
    $("#addOrUpdate").val('');
    $("#addOrUpdate").val('add');
}
function gotoAdd() {
    var newfDate = new Date();
    $("#addFPurchaseDate").val(formatDateTime(newfDate));
}

$(document).ready(
    getDataList(),
    getStorageGoodsSorting()
)
//加载物品查询里的物品分类下拉框
function getStorageGoodsSorting(){
    $.ajax({
        url:contextPath+"/storageGoods/getStorageGoodsSortingTypeList.do",
        type:"post",
        data:{
            id:'',
        },
        success:function(data) {
            $("#update_goodsAdd_type").empty();
            $("#update_goodsAdd_type").append("<option value=''></option>")
            $.each(data,function (key,Data) {
                $("#update_goodsAdd_type").append("<option value=" +Data.id + ">" + Data.typeName + "</option>")
            })
        }
    });
}
//得到数据字典的数据
function getDataList() {
    $.ajax({
        url:contextPath+"/sys/get.do",
        type:"post",
        data:{
            page:1,
            pageSize:1000000000
        },
        success:function(data) {

            $("#addFSupplyMome").html("");
            var $searchMome = $("#addFSupplyMome");
            $searchMome.append("<option value=''>    </option>");
            for (var i = 0; i < data.total; i++) {
                if (data.rows[i].name == "供货方式") {
                    $searchMome.append("<option value='" + data.rows[i].value + "'>" + data.rows[i].value + "</option>");
                }
            }
            $("#addFPaymentMode").html("");
            var $searchMode = $("#addFPaymentMode");
            $searchMode.append("<option value=''>    </option>");
            for (var i = 0; i < data.total; i++) {
                if (data.rows[i].name == "支付方式") {
                    $searchMode.append("<option value='" + data.rows[i].value + "'>" + data.rows[i].value + "</option>");
                }
            }

        }
    });
}

//清空查询条件
function clearSelect() {
    $("#update_goodsAdd_material").val("");
    $("#update_goodsAdd_type").val("");
    $('#tb_resUpdate').bootstrapTable('refresh', {url: 'query.do'});
}
function cleanData() {
    $("#searchName").val("");
    $("#searchEntryDate").val("");
    $("#searchEndDate").val("");
    $('#tb_resEnterWarehouse').bootstrapTable('refresh',{url:'queryMainList.do'})
}
//查询
function queryWarehouse(){
    $.ajax({
        url:contextPath+"/wareHouse/queryMaterial.do",
        type:"post",
        data:{
            name: $("#update_goodsAdd_material").val(),
            fCategoryID:$("#update_goodsAdd_type").val(),
            page:0,
            pageSize:10
        },
        success:function(data) {
            $('#tb_resUpdate').bootstrapTable('load', data);

            for(var i=0;i<num;i++) {
                (function (i) {
                    $("#house" + i + "").change(function () {
                        $("#span" + i + "").html($("#house" + i + " option:selected").data("staffname"));
                    });
                })(i);
            }
        }
    });
}
function queryMain(){
    fPurchaseManName = $("#searchName").val();
    start=$("#searchEntryDate").val();
    finish=$("#searchEndDate").val();
    $("#tb_resEnterWarehouse").bootstrapTable('selectPage',1);
}

function formatDateTime(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute;
}
//时间物品入库订单号
function formatDateTimeNumber(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    var seconds=date.getSeconds();
    seconds = seconds < 10 ? ('0' + seconds) : seconds;
    return y + '' + m + '' + d + '' + h + '' + minute+''+seconds;
}

//验证
function in_check_goodsadd() {
    $("#in_head_message").html("");
    $("#in_footer_message").html("");

    var carrentItem = $("#tb_resUpdate").bootstrapTable('getSelections');
    var str=[];
    if(carrentItem[0]){
        //选中tb_resUpdate下的tbody tr td 下的input
        $('#tb_resUpdate tbody tr td input[type=checkbox]:checked').each(function(index){
            if($(this).closest('tr').children('td').eq(2).text()==''){
                $("#in_head_message").html("")
                $("#in_head_message").html("请选择仓库");
                $("#in_footer_message").html("");
                $("#in_footer_message").html("请选择仓库");
                str[index]=false;

            }else {
                if ($(this).closest('tr').children('td').eq(6).find('input[type=text]').val() == '') {

                    $("#in_head_message").html("")
                    $("#in_head_message").html("添加物品数量不能为空");
                    $("#in_footer_message").html("");
                    $("#in_footer_message").html("添加物品数量不能为空");

                    str[index]=false;
                } else {
                    if ($(this).closest('tr').children('td').eq(6).find('input[type=text]').val() == '0') {

                        $("#in_head_message").html("")
                        $("#in_head_message").html("添加物品数量不能为0");
                        $("#in_footer_message").html("");
                        $("#in_footer_message").html("添加物品数量不能为0");
                        str[index]=false;
                    }else{
                        str[index]=true;
                    }
                }
            }
        });

    }else{
        $("#in_head_message").html("")
        $("#in_head_message").html("至少选择一行");
        $("#in_footer_message").html("");
        $("#in_footer_message").html("至少选择一行");
        str[0]=false;
    }
    return str;
}
function check_tel() {
    $("#in_message").html("");
    $("#in_in_message").html("");
    var addFTel = $("#addFTel").val().trim();
    var reg=new RegExp(/^1[34578]\d{9}$/);
    if(addFTel!=""&&!reg.test(addFTel)){
        $("#in_message").html("请输入正确的号码");
        $("#in_in_message").html("请输入正确的号码！");
    }
}

//添加
var i=0;
function update_MaterialsAdd() {
    var str = "";
    if(in_check_goodsadd().toString().indexOf("false")==-1) {
        var carrentItem = $("#tb_resUpdate").bootstrapTable('getSelections');
        if($("#addOrUpdate").val()=='add') {
            $('#tb_resUpdate tbody tr td input[type=checkbox]:checked').each(function (index) {
                str += "<tr>" +
                    "<td style='text-align: center; '>" +
                    "<input name='btSelectItem' type='checkbox'>" +
                    "</td> " +
                    "<td style='text-align: center; width: 70px'>" + carrentItem[index].name + "</td> " +
                    "<td style='text-align: center; display:none;' >" + carrentItem[index].fID + "</td> " +
                    "<td style='text-align: center; '>" + $(this).closest('tr').children('td').eq(1).find('select option:selected').html() + "</td> " +
                    "<td style='text-align: center;display:none; ' >" + $(this).closest('tr').children('td').eq(1).find('select option:selected').val() + "</td> " +
                    "<td style='text-align: center; '>" + $(this).closest('tr').children('td').eq(2).text() + "</td> " +
                    "<td style='text-align: center;display:none; ' >" + $(this).closest('tr').children('td').eq(1).find('select option:selected').data('staffid') + "</td> " +
                    "<td style='text-align: center; '><select class='form-control'  id='provider" + i + "'></select></td> " +
                    "<td style='text-align: center; '>" + $(this).closest('tr').children('td').eq(6).find('input[type=text]').val() + "</td> " +
                    "<td style='text-align: center; '>" + carrentItem[index].unit + "</td> " +
                    "<td style='text-align: center; '>" + $(this).closest('tr').children('td').eq(5).find('input[type=text]').val() + "</td> " +
                    "<td style='text-align: center; '>" + ($(this).closest('tr').children('td').eq(5).find('input[type=text]').val()) * ($(this).closest('tr').children('td').eq(6).find('input[type=text]').val()) + "</td> " +
                    "<td style='text-align: center; '><input class='form-control' id='remark'></td> " +
                    "<td style='text-align: center; display: none; '>" + carrentItem[index].standard + "</td> </tr>";
                add_provider(i);
                i++;
            });
            $("#add_Materials").append(str);
            $('#add_Materials tbody tr').unbind('click');
            $('#add_Materials tbody tr').click(function () {
                var input = $(this).find("input[type=checkbox]");
                if (input.prop("checked")) {
                    input.removeAttr("checked");
                }
                else {
                    input.prop("checked", "true");
                }
            });
        }else {
            $('#tb_resUpdate tbody tr td input[type=checkbox]:checked').each(function (index) {
                str += "<tr>" +
                    "<td style='text-align: center; '>" +
                    "<input name='btSelectItem' type='checkbox'>" +
                    "</td> " +
                    "<td style='text-align: center;display:none; ' >0</td> " +
                    "<td style='text-align: center; '>" + carrentItem[index].name + "</td> " +
                    "<td style='text-align: center; display:none;' >" + carrentItem[index].fID + "</td> " +
                    "<td style='text-align: center; '>" + $(this).closest('tr').children('td').eq(1).find('select option:selected').html() + "</td> " +
                    "<td style='text-align: center;display:none; ' >" + $(this).closest('tr').children('td').eq(1).find('select option:selected').val() + "</td> " +
                    "<td style='text-align: center; '>" + $(this).closest('tr').children('td').eq(2).text() + "</td> " +
                    "<td style='text-align: center;display:none; ' >" + $(this).closest('tr').children('td').eq(1).find('select option:selected').data('staffid') + "</td> " +
                    "<td style='text-align: center; '><select class='form-control'  id='provider" + i + "'></select></td> " +
                    "<td style='text-align: center; '>" + $(this).closest('tr').children('td').eq(6).find('input[type=text]').val() + "</td> " +
                    "<td style='text-align: center; '>" + carrentItem[index].unit + "</td> " +
                    "<td style='text-align: center; '>" + $(this).closest('tr').children('td').eq(5).find('input[type=text]').val() + "</td> " +
                    "<td style='text-align: center; '>" + ($(this).closest('tr').children('td').eq(5).find('input[type=text]').val()) * ($(this).closest('tr').children('td').eq(6).find('input[type=text]').val()) + "</td> " +
                    "<td style='text-align: center; '><input class='form-control' id='remark'></td> " +
                    "<td style='text-align: center; display: none; '>" + carrentItem[index].standard + "</td> </tr>";
                add_provider(i);
                i++;
            });
            $("#update_Materials").append(str);
            $('#update_Materials tbody tr').unbind('click');
            $('#update_Materials tbody tr').click(function () {
                var input = $(this).find("input[type=checkbox]");
                if (input.prop("checked")) {
                    input.removeAttr("checked");
                }
                else {
                    input.prop("checked", "true");
                }
            });
        }
        $("#update_MaterialsAdd_close_btn").click();
    }
}
//选择供应商
function add_provider(j) {
    $.ajax({
        url:contextPath+"/manager/query.do",
        type:"post",
        data:{
            page:0,
            pageSize:10000000
        },
        success:function(data) {
            $("#provider"+j+"").html("");
            var $add = $("#provider"+j+"");
            $add.append("<option value=''>    </option>");
            for (var i = 0; i < data.total; i++) {
                if(data.rows[i].sTATUS==1) {
                    $add.append("<option value='" + data.rows[i].fID + "'>" + data.rows[i].fSupplierName + "</option>");
                }
            }
        }
    });
}
//新建出库单里的物品删除
function add_in_Delect() {
    $('#add_Materials tbody tr').each(function(){
        var input= $(this).find("input[type=checkbox]");
        if(input.prop("checked"))
        {
            input.parent().parent().remove();
        }
    });
}

//更新入库单 回显数据
var son='';
var sonsize='';
var m=0;
var list;
var arr1='';
var test;
function gotoUpdate(){
    var carrentItem = $("#tb_resEnterWarehouse").bootstrapTable('getSelections');
    test=carrentItem[0].fNumber;
    var str="";
    if(carrentItem[0]){
        //如果被选中
        $.ajax({
            url : contextPath + "/wareHouse/getUpdateAllMaterial.do",
            type : "post",
            data:{
                fatherid:carrentItem[0].pID
            },
            success : function(data) {
                list=data;
                son=data.rows;
                sonsize=data.total;
                $("#update_Materials tbody").html('');
                m=0;
                for(var i=0;i<data.total;i++){
                    str += "<tr>" +
                        "<td style='text-align: center; '>" +
                        "<input name='btSelectItem' type='checkbox'>" +
                        "</td> " +
                        "<td style='text-align: center;display:none; ' >"+data.rows[i].AID+"</td> " +
                        "<td style='text-align: center; '>" + data.rows[i].FMaterialName + "</td> " +
                        "<td style='text-align: center; display:none;' >"+data.rows[i].fID+"</td> " +
                        "<td style='text-align: center; '>" +data.rows[i].FStoreHouseName+"</td> " +
                        "<td style='text-align: center;display:none; ' >"+data.rows[i].FStorageID+"</td> " +
                        "<td style='text-align: center; '>" +data.rows[i].FStoremanName + "</td> " +
                        "<td style='text-align: center;display:none; ' >"+data.rows[i].FStoremanID+"</td> " +
                        "<td style='text-align: center; '><select class='form-control' readonly='readonly' id='up_provider" + m + "'></select></td> " +
                        "<td style='text-align: center; '>" + data.rows[i].FAmount + "</td> " +
                        "<td style='text-align: center; '>" + data.rows[i].FStandard + "</td> " +
                        "<td style='text-align: center; '>" + data.rows[i].FPrice + "</td> " +
                        "<td style='text-align: center; '>" + data.rows[i].FSum + "</td> " +
                        "<td style='text-align: center; '><input class='form-control' id='remark' value='"+data.rows[i].FRemarks+"'></td> "+
                    update_provider(m);
                    m++;
                }
                $("#update_Materials").append(str);
                $('#update_Materials tbody tr').unbind('click');
                $('#update_Materials tbody tr').click(function () {
                    var input = $(this).find("input[type=checkbox]");
                    if(input.prop("checked"))
                    {
                        input.removeAttr("checked");
                    }
                    else
                    {
                        input.prop("checked","true");
                    }
                });
                $("#update_id").val(list.rows[0].Fatherid);
                $("#updateFPurchaseDate").val(list.rows[0].FPurchaseDate);
                $("#updateFTel").val(list.rows[0].FTel);
                $("#updateFReceivingPlace").val(list.rows[0].FReceivingPlace);
                $.ajax({
                    url:contextPath+"/sys/get.do",
                    type:"post",
                    data:{
                        page:1,
                        pageSize:1000000000
                    },
                    success:function(data1) {
                        $("#updateFSupplyMome").html("");
                        var $searchMome = $("#updateFSupplyMome");
                        $searchMome.append("<option value=''>    </option>");
                        for (var i = 0; i < data1.total; i++) {
                            if (data1.rows[i].name == "供货方式") {
                                if(list.rows[0].FSupplyMome== data1.rows[i].value) {
                                    $searchMome.append("<option selected='selected' value='" + data1.rows[i].value + "'>" + data1.rows[i].value + "</option>");
                                }else{
                                    $searchMome.append("<option value='" + data1.rows[i].value + "'>" +  data1.rows[i].value + "</option>");
                                }
                            }
                        }
                        $("#updateFPaymentMode").html("");
                        var $searchMode = $("#updateFPaymentMode");
                        $searchMode.append("<option value=''>    </option>");
                        for (var i = 0; i < data1.total; i++) {
                            if (data1.rows[i].name == "支付方式") {
                                if(list.rows[0].FPaymentMode== data1.rows[i].value) {
                                    $searchMode.append("<option selected='selected' value='" + data1.rows[i].value + "'>" + data1.rows[i].value + "</option>");
                                }else {
                                    $searchMode.append("<option value='" + data1.rows[i].value + "'>" + data1.rows[i].value + "</option>");
                                }
                            }
                        }
                    }
                });
            }
        });
        $("#update_btn").click();
    }else{
        setAlert("error","请先选择一条数据");
    }
}
function update_provider(j) {
    $.ajax({
        url:contextPath+"/manager/query.do",
        type:"post",
        data:{
            page:0,
            pageSize:10000000
        },
        success:function(data) {
            $("#up_provider"+j+"").html("");
            var $add = $("#up_provider"+j+"");
            $add.append("<option value=''>    </option>");
            for (var i = 0; i < data.total; i++) {
                    if (data.rows[i].fID == list.rows[j].FSupplierID) {
                        $add.append("<option  value='" + data.rows[i].fID + "' selected='selected'>" + data.rows[i].fSupplierName + "</option>");
                    } else {
                        $add.append("<option  value='" + data.rows[i].fID + "'>" + data.rows[i].fSupplierName + "</option>");
                    }
            }
        }
    });
}
//更新出库单里的物品删除
function update_in_Delect() {
    $('#update_Materials tbody tr').each(function(){
        var input= $(this).find("input[type=checkbox]");
        if(input.prop("checked"))
        {
            input.parent().parent().remove();
        }
    });
}
//更新出库单里添加数据
function update_in_Add() {
    $('#tb_resUpdate').bootstrapTable('refresh', {url: 'query.do'});
    //下面进行动态赋值
    $("#updateGoodsModal").modal('show');
    $("#addOrUpdate").val('');
    $("#addOrUpdate").val('update');
}
//更新保存
function update_in_Save() {
    var Delect="";
    var inStorageEntrySqlDelect = "";//未改动的库存信息
    var stockAccountSqlDelect = "";//未删除的库存信息
    var tr = $('#update_Materials tbody tr ');
    $("#update_close_btn").click();
    var inStorageEntrySql = "";
    var stockAccountSql = "";
    $("#up_in_in_message").html("");
    var reg=new RegExp(/^1[34578]\d{9}$/);
    //验证
    if ($("#updateFPurchaseDate").val().trim() == "") {
        $("#up_in_in_message").html("");
        $("#up_in_in_message").html("请选择采购日期");
    }
    else {
        if($("#updateFTel").val().trim() != "" &&!reg.test( $("#updateFTel").val())){
            $("#up_in_in_message").html("");
            $("#up_in_in_message").html("请输入正确的手机号");
        } else {
            var tr = $('#update_Materials tbody tr ');
            if (tr[0]) {
                    $("#up_in_message").html("");
                    $('#update_Materials tbody tr ').each(function () {
                        var td = $(this).find('td');//仓库id  数量  备注  物料id  保管员id  供应商id,单价price,金额fSum
                        console.log(td.eq(1).html());
                        //等于0代表直接增加的可用直接调用add方法
                        if ((td.eq(1).html() == '0')) {
                            inStorageEntrySql = inStorageEntrySql + "_"
                                +  td.eq(5).html() + "=" + td.eq(9).html() + "="
                                + td.eq(13).find('input').val()+ "=" + td.eq(3).html() + "="
                                + td.eq(7).html()+"="+td.eq(8).find('select').val()+"="
                                +td.eq(11).html()+"="+td.eq(12).html();
                        }else {
                            inStorageEntrySqlDelect += "_" + td.eq(1).html();
                        }
                    });
                    $('#update_Materials tbody tr ').each(function () {
                        var td = $(this).find('td');//仓库id  物料id 数量 规格
                        if ((td.eq(1).html() == '0')) {
                            stockAccountSql = stockAccountSql + "_" +
                                td.eq(5).html() + "=" +
                                td.eq(3).html() + "=" +
                                td.eq(9).html() + "=" +
                                td.eq(10).html();
                        }
                    });
                    console.log(inStorageEntrySql=="");
                    console.log("准备新增的账户：" + stockAccountSql=="");
                    console.log("准备更新的数据：" + inStorageEntrySqlDelect);
                    console.log("准备更新的账户：" + stockAccountSqlDelect);
                    console.log(son);
                    console.log(sonsize);
                    arr2=inStorageEntrySqlDelect.split("_");

                    for(var i=0;i<sonsize;i++){
                        arr1+=son[i].AID+','; //仓库id  物料id 数量 规格
                        stockAccountSqlDelect += "_" +son[i].FStorageID + "=" + son [i].FMaterialID+ "="
                                + son[i].FAmount + "=" + son[i].FStandard+"="+son[i].AID  ;
                }
                    console.log("更新的父亲id："+$("#update_id").val());
                    $.ajax({
                        url: contextPath + "/wareHouse/updateInStorage.do",
                        type: "post",
                        data: {
                            //主表需要信息
                            fid:$("#update_id").val(),
                            fNumber:test,
                            fPurchaseDate: $("#updateFPurchaseDate").val(),//物品入库时间
                            fTel: $("#updateFTel").val(),//物品入库时间
                            fSupplyMome: $("#updateFSupplyMome option:selected").val(), //供货方式
                            fPaymentMode: $("#updateFPaymentMode option:selected").val(),//支付方式
                            fReceivingPlace: $("#updateFReceivingPlace").val(),//收货地点
                            //字表需要信息
                            inStorageEntrySql: inStorageEntrySql,
                            //库存表
                            stockAccountSql: stockAccountSql,
                            //需要对库存进行修改数据
                            stockAccountSqlDelect:stockAccountSqlDelect,
                            //不需要删除的数据
                            inStorageEntrySqlDelect:inStorageEntrySqlDelect,
                            //原来的数据
                            arr1:arr1
                        },
                        success: function (data) {
                            $("#update_close_btn").click();
                            $('#tb_resEnterWarehouse').bootstrapTable('refresh', {url: 'queryMainList.do'});
                            setAlert(data.message, "物品更新成功");
                            arr1="";
                            closeModal();
                        }
                    });
                } else {
                $("#up_in_in_message").html("");
                $("#in_message_up").html("请选择添加物品");
            }
        }
    }
}

//保存
function add_in_Save() {
    var newfDate = new Date();
    var fNumber = "SA"+formatDateTimeNumber(newfDate);
    var inStorageEntrySql = "";
    var stockAccountSql = "";
    $("#in_message").html("");
    $("#in_in_message").html("");
    var reg=new RegExp(/^1[34578]\d{9}$/);
    //验证
    if ($("#addFPurchaseDate").val().trim() == "") {
        $("#in_message").html("");
        $("#in_in_message").html("");
        $("#in_message").html("请选择采购日期");
        $("#in_in_message").html("请选择采购日期");
    }
    else {
        if($("#addFTel").val().trim() != "" &&!reg.test( $("#addFTel").val())){
            $("#in_message").html("");
            $("#in_in_message").html("");
            $("#in_message").html("请输入正确的手机号");
            $("#in_in_message").html("请输入正确的手机号");
        } else {
            var tr = $('#add_Materials tbody tr ');
            if (tr[0]) {
                $("#in_message").html("");
                $("#in_in_message").html("");
                $('#add_Materials tbody tr ').each(function () {
                    var td = $(this).find('td');//仓库id  数量  备注  物料id  保管员id  供应商id,单价price,金额fSum
                    inStorageEntrySql = inStorageEntrySql + "_" + td.eq(4).html() + "=" + td.eq(8).html() + "=" + td.eq(12).find('input').val()+ "=" + td.eq(2).html() + "=" + td.eq(6).html()+"="+td.eq(7).find('select').val()+"="+td.eq(10).html()+"="+td.eq(11).html();
                });
                $('#add_Materials tbody tr ').each(function () {
                    var td = $(this).find('td');//仓库id  物料id 数量 规格
                    stockAccountSql = stockAccountSql + "_" + td.eq(4).html() + "=" + td.eq(2).html() + "=" + td.eq(8).html() + "=" + td.eq(13).html();
                });
                $.ajax({
                            url: contextPath + "/wareHouse/addInStorage.do",
                            type: "post",
                            data: {
                                //主表需要信息
                                fNumber: fNumber,//主表单号
                                fPurchaseDate: $("#addFPurchaseDate").val(),//物品入库时间
                                fTel: $("#addFTel").val(),//
                                fSupplyMome: $("#addFSupplyMome option:selected").val(), //供货方式
                                fPaymentMode: $("#addFPaymentMode option:selected").val(),//支付方式
                                fReceivingPlace: $("#addFReceivingPlace").val(),//收货地点
                                fRemarks: $("#addfRemarks").val(),//说明
                                //字表需要信息
                                inStorageEntrySql: inStorageEntrySql,
                                //库存表
                                stockAccountSql: stockAccountSql
                            },
                            success: function (data) {
                                $("#add_close_btn").click();
                                $('#tb_resEnterWarehouse').bootstrapTable('refresh', {url: 'queryMainList.do'});
                                setAlert(data.message, "物品入库成功");
                                closeModal();
                            }
                        });
            } else {
                $("#in_message").html("");
                $("#in_in_message").html("");
                $("#in_message").html("请选择添加物品");
                $("#in_in_message").html("请选择添加物品");
            }
        }
    }
}
//关闭
function closeModal() {
    $('#add_Materials tbody ').empty();
    $('#addFPurchaseDate').val("");
    $('#addFTel').val("");
    $('#addFSupplyMome').val("");
    $('#addFPaymentMode').val("");
    $('#addFReceivingPlace').val("");
    $('#addFRemarks').val("");
}

//根据指定单据编号 进行删除
function gotoDelete(){
    var carrentItem = $("#tb_resEnterWarehouse").bootstrapTable('getSelections');
    var Delect="";
    if(carrentItem[0]){
        //如果被选中
        $.ajax({
            url : contextPath + "/wareHouse/getUpdateAllMaterial.do",
            type : "post",
            data:{
                fatherid:carrentItem[0].pID
            },
            success : function(data) {
                son=data.rows;
                console.log(son);
                sonsize=data.total;
                for(var i=0;i<sonsize;i++){
                    //仓库id  物料id 数量 规格
                    Delect += "_" +son[i].FStorageID + "=" + son [i].FMaterialID+ "="
                        + son[i].FAmount + "=" + son[i].FStandard+"="+son[i].FID;
                }
                $.ajax({
                    url: contextPath + "/wareHouse/deleteInStorage.do",
                    type: "post",
                    data: {
                        //主表需要信息
                        fid:carrentItem[0].pID,
                        stockAccountSqlDelect:Delect

                    },
                    success: function (data) {
                        $('#tb_resEnterWarehouse').bootstrapTable('refresh', {url: 'queryMainList.do'});
                        setAlert(data.message, "物品删除成功");
                        closeModal();
                    }
                });
            }});
        console.log(carrentItem[0].fID);
        console.log(Delect);
    }else{
        setAlert("error","请先选择一条数据");
    }
}