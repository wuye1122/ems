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
<form  class="form-horizontal notprint">
	<div class="modal fade" id="relationAdd" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
					</button>
					<h4 class="modal-title" id="myModalLabel">添加亲属信息</h4>
				</div>
				<div class="modal-body">
					<div class="form-group row">
						<label for="fRelationAdd" class="col-sm-2 control-label">关系</label>
							<div class="col-sm-4">
							<select class="form-control" id="fRelationAdd"
								name="fRelationAdd">
							</select>
							</div>
						<label for="fRelationNameAdd" class="col-sm-2 control-label">姓名</label>
						<div class="col-sm-4">
							<input type="text" class="form-control"  id="fRelationNameAdd" name="fRelationNameAdd">
						</div>
					</div>
					<div class="form-group row">
						<label for="fRelationSexAdd" class="col-sm-2 control-label">性别</label>
						<div class="col-sm-4">
							<select class="form-control" id="fRelationSexAdd" name="fRelationSexAdd">
								<option selected="selected" value='男'>男</option>
                                <option value='女'>女</option>
							</select>
						</div>
						<label for="fRelationAgeAdd" class="col-sm-2 control-label">年龄</label>
						<div class="col-sm-4">
							<input type="text" class="form-control"  id="fRelationAgeAdd" name="fRelationAgeAdd" placeholder="数字">
						</div>
					</div>
					<div class="form-group row">
						<label for="fRelationMobileAdd" class="col-sm-2 control-label">手机</label>
						<div class="col-sm-4">
							<input type="text" class="form-control"  id="fRelationMobileAdd" name="fRelationMobileAdd" placeholder="15543783892">
						</div>
						<label for="fRelationPhoneAdd" class="col-sm-2 control-label">电话</label>
						<div class="col-sm-4">
							<input type="text" class="form-control"  id="fRelationPhoneAdd" name="fRelationPhoneAdd" placeholder="0000-00000000">
						</div>
					</div>
					<div class="form-group row">
						<label for="fRelationQQAdd" class="col-sm-2 control-label">QQ</label>
						<div class="col-sm-4">
							<input type="text" class="form-control"  id="fRelationQQAdd" name="fRelationQQAdd" placeholder="请输入有效QQ">
						</div>
						<label for="fRelationMMAdd" class="col-sm-2 control-label">微信</label>
						<div class="col-sm-4">
							<input type="text" class="form-control"  id="fRelationMMAdd" name="fRelationMMAdd" placeholder="请输入有效微信">
						</div>
					</div>
					<div class="form-group row">
						<label for="fRelationCompanyAdd" class="col-sm-2 control-label">工作单位</label>
						<div class="col-sm-4">
							<textarea class="form-control"  id="fRelationCompanyAdd" name="fRelationCompanyAdd" rows="3"></textarea>
							<!--<input type="text" class="form-control"  id="fRelationCompanyAdd" name="fRelationCompanyAdd">-->
						</div>
						<label for="fRelationAdrressAdd" class="col-sm-2 control-label">家庭住址</label>
						<div class="col-sm-4">
							<textarea class="form-control"  id="fRelationAdrressAdd" name="fRelationAdrressAdd" rows="3"></textarea>
							<!--<input type="text" class="form-control"  id="fRelationAdrressAdd" name="fRelationAdrressAdd" ">-->
						</div>
					</div>
					<div class="form-group row">
						<label for="fIDAddRel" class="col-sm-2 control-label"></label>
						<div class="col-sm-4">
							<input type="text" class="form-control"  id="fIDAddRel" name="fIDAddRel" style="visibility: hidden;">
						</div>
						 <input type="hidden" id="addfOldManID" />
					</div>
				</div>
					<div class="modal-footer">
					<button type="button" class="btn btn-primary" id="addHealButton" 
						onclick="relationAdd()">保存</button>
					<button id="add_close_btn" type="button" class="btn btn-primary"
						data-dismiss="modal" onclick="closeModalAddRel()">关闭</button>
				<button id="control_btn" type="button" class="btn btn-default" data-toggle="modal"data-dismiss="modal" style="display:none">
						</button>
				</div>
			</div>
		</div>
	</div>
</form>