<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>账户支出</title>

    <link rel="shortcut icon" href="favicon.ico">
    <link href="${pageContext.request.contextPath}/script/lib/H+/css/bootstrap.min.css?v=3.3.6" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/script/lib/H+/css/font-awesome.css?v=4.4.0" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/script/lib/H+/css/plugins/bootstrap-table/bootstrap-table.min.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/script/lib/bootstrapvalidator/dist/css/bootstrapValidator.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/script/lib/H+/css/animate.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/script/lib/H+/css/style.css?v=4.1.0" rel="stylesheet">
</head>

<body class="gray-bg">
<div class="panel-body" style="padding-bottom:0px;">

    <div class="panel panel-default">
        <div class="panel-heading">账户支出</div>
        <div class="panel-body">
				<form id="form_validate" class="form-horizontal">
					<div class="form-group row" style="height: 50px;">
						<label class="control-label col-sm-1" for="fOutAmount">支出金额</label>
						<div class="col-sm-2">
							<input type="text" class="form-control" name="fOutAmount" id="fOutAmount"/>
						</div>
						<label class="control-label col-sm-1 " for="fOutDate">支出日期</label>
						<div class="col-sm-2 ">
							<input class="form-control" style="width: 166px;" placeholder="点击选择时间"
								   onFocus="WdatePicker({dateFmt:'yyyy-MM-dd',minDate:'#F{$dp.$D(\'nowtime\')}',readOnly:true})"
								type="text" class="form-control" id="fOutDate" name="fOutDate">
						</div>
						<label class="control-label col-sm-1 " for="fOutPayments">支出杂项</label>
						<div class="col-sm-2 ">
							<select class="form-control" name="fOutPayments"
								id="fOutPayments">
							</select>
						</div>
					</div>
					<div class="form-group row" style="height: 50px;">
						<label class="control-label col-sm-1" for="fOutFundaccount">支出账户</label>
						<div class="col-sm-2">
							<select class="form-control" name="fOutFundaccount"
								id="fOutFundaccount" onchange="getRestAccount();">
							</select>
						</div>
						<label class="control-label col-sm-1" for="fOutBusinessitem">业务项目</label>
						<div class="col-sm-2">
						<select class="form-control" name="fOutBusinessitem"
								id="fOutBusinessitem">
							</select>
						</div>
						<label class="control-label col-sm-1" for="fOutOperator">经手人</label>
						<div class="col-sm-2">
							<select class="form-control" name="fOutOperator"
								id="fOutOperator">
							</select>
						</div>
					</div>
					<div class="form-group row" style="height: 50px;">	
						<label class="control-label col-sm-1" for="fOutPayment">支付人</label>
						<div class="col-sm-2">
						<input type="text" class="form-control" name="fOutPayment" id="fOutPayment"/>
						</div>
						<label class="control-label col-sm-1" for="fOutProofdoc">凭据文件</label>
						<div class="col-sm-2">
						<input type="file" class="form-control" name="fOutProofdoc" id="fOutProofdoc"/>
						</div>
					</div>
					<div class="form-group row">
					<label for="fOutRemarks" class="control-label col-sm-1">记账说明
					</label>
						<div class="col-sm-5">
							<textarea class="form-control" rows="3" style="resize: none;"
								name="fOutRemarks" id="fOutRemarks"></textarea>
						</div>
						<div class="col-sm-2">
							<input type="text" class="form-control" style="visibility: hidden;" name="restAmount" id="restAmount"/>
						</div>
						<div class="col-sm-2">
							<input type="text" class="form-control"  style="visibility: hidden" name="nowtime" id="nowtime"/>
						</div>
					</div>
					<div class="form-group row">
						<div class="col-sm-3" style="text-align:center;">
                    	</div>
						<div class="col-sm-1" style="text-align:center;">
                        <button type="submit" style="margin-left: 30px" id="btn_query" class="btn btn-primary">保存</button>
                    	</div>
					</div>
				</form>
			</div>
    </div>
</div>
<!-- 全局js -->
<script src="${pageContext.request.contextPath}/script/lib/H+/js/jquery.min.js?v=2.1.4"></script>
<script src="${pageContext.request.contextPath}/script/lib/H+/js/bootstrap.min.js?v=3.3.6"></script>

<!-- 自定义js -->
<script src="${pageContext.request.contextPath}/script/lib/H+/js/content.js?v=1.0.0"></script>
<script src="${pageContext.request.contextPath}/script/app-resources/common/alert.js"></script>
<script src="${pageContext.request.contextPath}/script/app-resources/fundAccountOut/fundAccountOut.js"></script>
<script src="${pageContext.request.contextPath}/script/my97DatePicker/WdatePicker.js"></script>

<!-- Bootstrap table -->
<script src="${pageContext.request.contextPath}/script/lib/H+/js/plugins/bootstrap-table/bootstrap-table.min.js"></script>
<script src="${pageContext.request.contextPath}/script/lib/H+/js/plugins/bootstrap-table/bootstrap-table-mobile.min.js"></script>
<script src="${pageContext.request.contextPath}/script/lib/bootstrapvalidator/dist/js/bootstrapValidator.js"></script>
<script src="${pageContext.request.contextPath}/script/lib/H+/js/plugins/bootstrap-table/locale/bootstrap-table-zh-CN.min.js"></script>
<script type="text/javascript">
    var contextPath = "${pageContext.request.contextPath}";
</script>
<jsp:include  page="../alert.jsp"/>
</body>
</html>
