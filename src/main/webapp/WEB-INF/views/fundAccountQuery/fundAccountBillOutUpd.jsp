<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!-- Modal -->
<style>
    .modal-body .row label {
        line-height: 30px;
    }
    .row {
        margin-bottom: 5px;
    }
</style>
<form class="form-horizontal notprint" id="upd_form_validate" >
	<div class="modal fade" id="fundAccountBillOutUpd" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
					</button>
					<h4 class="modal-title" id="myModalLabel">修改账户明细信息</h4>
				</div>
				<div class="modal-body">
					<div class="form-group row">
						<label class="control-label col-sm-2" for="up_fOutAmount">支出金额</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" name="up_fOutAmount" id="up_fOutAmount"/>
						</div>
						<label class="control-label col-sm-2" for="up_fOutnumber">单号</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" name="up_fOutnumber" id="up_fOutnumber" readonly="readonly"/>
						</div>
						</div>
					<div class="form-group row">
						<label class="control-label col-sm-2 " for="up_fOutDate">收账日期</label>
						<div class="col-sm-4 ">
							<input class="form-control" style="width: 166px;" placeholder="点击选择时间"
								onFocus="WdatePicker({readOnly:true})"
								type="text" class="form-control" id="up_fOutDate"
								name="up_fOutDate">
						</div>
						<label class="control-label col-sm-2 " for="up_fOutPayments">支出杂项</label>
						<div class="col-sm-4 ">
							<select class="form-control" name="up_fOutPayments"
								id="up_fOutPayments">
							</select>
						</div>
					</div>
					<div class="form-group row">
						<label class="control-label col-sm-2" for="up_fOutFundaccount">支出账户</label>
						<div class="col-sm-4">
							<select class="form-control" name="up_fOutFundaccount"
								id="up_fOutFundaccount" onchange="onchangeFundAcc()">
							</select>
						</div>
						<label class="control-label col-sm-2" for="up_fOutBusinessitem">业务项目</label>
						<div class="col-sm-4">
						<select class="form-control" name="up_fOutBusinessitem"
								id="up_fOutBusinessitem">
							</select>
						</div>
					</div>
					<div class="form-group row">	
						<label class="control-label col-sm-2" for="up_fOutOperator">经手人</label>
						<div class="col-sm-4">
							<select class="form-control" name="up_fOutOperator"
								id="up_fOutOperator">
							</select>
						</div>
						<label class="control-label col-sm-2" for="up_fOutPayment">支付人</label>
						<div class="col-sm-4">
						<input type="text" class="form-control" name="up_fOutPayment" id="up_fOutPayment"/>
						</div>
					</div>
					<div class="form-group row">
					 <label class="control-label col-sm-2" for="up_fOutProofdoc">凭据编号</label>
						<div class="col-sm-4">
						<input type="text" class="form-control" name="up_fOutProonum" id="up_fOutProonum" readonly="readonly"/>
						</div>
						<label class="control-label col-sm-2" for="up_fOutProofdoc">凭据文件</label>
						<div class="col-sm-4">
						<input type="file" class="form-control" name="up_fOutProofdoc" id="up_fOutProofdoc"/>
						</div>
					</div>
					<div class="form-group row">
					<label for="up_fOutRemarks" class="control-label col-sm-2">记账说明
					</label>
						<div class="col-sm-8">
							<textarea class="form-control" rows="3" style="resize: none;"
								name="up_fOutRemarks" id="up_fOutRemarks"></textarea>
						</div>
						<div class="col-sm-1">
						<input type="text" class="form-control" style="visibility: hidden;" name="up_OutfId" id="up_OutfId"/>
						</div>
					</div>
					<div class="form-group row">
					<label for="up_fOutRemarks" class="control-label col-sm-2">修改说明
					</label>
						<div class="col-sm-8">
							<textarea class="form-control" rows="3" style="resize: none;"
								name="up_fOutRemarks" id="up_fOutRemarks"></textarea>
						</div>
						<div class="col-sm-1">
						<input type="text" class="form-control" style="visibility: hidden;" name="before_amount" id="before_amount"/>
						</div>
							<div class="col-sm-1">
						<input type="text" class="form-control" style="visibility: hidden;" name="before_account" id="before_account"/>
						</div>
					</div>
					<div class="form-group row">
						<div class="col-sm-3" style="text-align:center;">
                    	</div>
					</div>
				</div>
				<div class="modal-footer">
					 <button type="submit" style="margin-left: 30px" id="btn_query" class="btn btn-primary">保存</button>
					<button id="add_close_btn" type="button" class="btn btn-primary"
						data-dismiss="modal">关闭</button>
				</div>
			</div>
		</div>
	</div>
</form>