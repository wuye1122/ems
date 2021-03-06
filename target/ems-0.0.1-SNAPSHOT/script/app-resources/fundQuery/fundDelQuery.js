var deleteOperator="";
var Edate="";
var Ldate="";
$(function () {
    //1.初始化Table
    var oTable = new TableInit();
    oTable.Init();
});
var TableInit = function () {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        $('#tb_fundDelRecord').bootstrapTable({
            url:contextPath+"/fundDelQuery/queryFundDelRecord.do",   //请求后台的URL（*）
            method: 'post',      //请求方式（*）
            toolbar: '#toolbar',    //工具按钮用哪个容器
            striped: true,      //是否显示行间隔色
            cache: false,      //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,     //是否显示分页（*）
            sortable: false,      //是否启用排序
            contentType:"application/x-www-form-urlencoded; charset=UTF-8",
            // sortOrder: "asc",     //排序方式
            queryParams: oTableInit.queryParams,//传递参数（*）
            sidePagination: "server",   //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,      //初始化加载第一页，默认第一页
            pageSize:5,      //每页的记录行数（*）
            pageList: [5, 10, 20, 50],  //可供选择的每页的行数（*）
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
                // {
                // radio: true
            // },
            {
                field: 'fName',
                title: '单据类型',
                width: 150
            }, {
                field: 'fAmount',
                title: '作废金额',
                width: 150,
                formatter:function(value,rows,index){
                    if(rows.fName=='支出'){
                        return "-"+value;
                    }
                    else {
                        return value;
                    }
                }
            },{
                field: 'fDeldate',
                title: '作废日期',
                width: 150
            },{
                field: 'fPayment',
                title: '收支对象',
                width: 100

            },{
                field: 'fOprationer',
                title: '操作人',
                width: 100
            },{
                field: 'fRemark',
                title: '删除说明',
                width: 100,
                formatter:function(value,rows,index){
                  if(value=="null") {
                      return "";
                  }else{
                      return value;
                  }
                }
            }],
            onLoadSuccess: function(data){
                var total=0;
                $.each(data.rows,function (index,Data) {

                    if(Data.fName=="支出")
                    {
                        total=total-parseInt(Data.fAmount);
                    }
                    else{
                        total=total+parseInt(Data.fAmount);
                    }
                })
                var str="<tr>" +
                    "<td style='text-align: right'>" +"汇总:"+
                    "</td>" +
                    "<td style='color: red;text-align: left' colspan='5'>" +total+
                    "</td>" +
                    "</tr>";
                $('#tb_fundDelRecord').append(str);
            }
        });
    };
    //得到查询的参数
    oTableInit.queryParams = function (params) {
        var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            pageSize: params.limit, //页面大小
            page: params.offset, //页码
            fOprationer: deleteOperator,
            Edate: Edate,
            Ldate: Ldate,
        };
        return temp;
    };
    return oTableInit;
};
    function queryFundDelList() {
        deleteOperator=$("#deleteOperator").val();
        Edate=$("#Edate").val();
        Ldate=$("#Ldate").val();
        $('#tb_fundDelRecord').bootstrapTable('selectPage',1);
    }
//清楚选项
function queryclear() {
        $("#deleteOperator").val("");
        $("#Edate").val("");
        $("#Ldate").val("");
}
