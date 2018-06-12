<%--
  Created by IntelliJ IDEA.
  User: wangjs
  Date: 2016/12/29
  Time: 20:06
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!-- Modal -->
<form id="form_validate" class="form-horizontal">
    <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="width: 1040px; margin-left: 0px; left: 20px;">
            <div class="modal-content" style="height: 520px">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title" id="myModalLabel">添加减免</h4>
                </div>
                <div class="modal-body">

                    <div class="form-group row">
                        <label class="col-sm-2 control-label">老人</label>
                        <div class="col-sm-4">
                            <input type="hidden" id="addOldManFreeID"/>
                            <input onclick="selectOldMan()" type="text" class="form-control" id="oldManFreeName" placeholder="必填项">
                            <label id="add_name_free" style="color: red;width: 250px;height: auto" >&nbsp;&nbsp;&nbsp;</label>
                        </div>

                        <label class="col-sm-2 control-label">减免项目</label>
                        <div class="col-sm-4">
                            <select onblur="addCheck_FreeItem_free()" class="form-control" id="addfFreeItem" name="addfFreeItem">

                            </select>
                            <label id="add_Item_free" style="color: red;width: 250px;height: auto" >&nbsp;&nbsp;&nbsp;</label>
                        </div>
                    </div>


                    <div class="form-group row">
                        <label class="col-sm-2 control-label">减免数量</label>
                        <div class="col-sm-3">
                            <input onblur="addCheck_FreeNumber_free()" type="text" class="form-control"
                                   id="addfFreeNumber" name="addfFreeNumber" placeholder="必填项">
                            <label id="add_number_free" style="color: red;width: 250px;height: auto" >&nbsp;&nbsp;&nbsp;</label>
                        </div>
                        <div class="col-sm-1">
                            <select class="form-control" id="addUnit" name="addUnit"  style="width:65px">
                                <option value="天">天</option>
                                <option value="月">月</option>
                            </select>
                        </div>

                        <label class="col-sm-2 control-label">减免时间</label>
                        <div class="col-sm-4">
                            <input onblur="addCheck_CreateTime_free()" class="form-control" onFocus="WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM'})" type="text" id="addfCreateTime" placeholder="必填项">
                            <label id="add_time_free" style="color: red;width: 250px;height: auto" >&nbsp;&nbsp;&nbsp;</label>
                        </div>

                    </div>

                    <div class="form-group row">
                        <label class="col-sm-2 control-label">减免单价</label>
                        <div class="col-sm-4">
                            <input  onblur="addCheck_FreePrice_free()" type="text" class="form-control" id="addfFreePrice" name="addfFreePrice" placeholder="必填项">
                            <label id="add_price_free" style="color: red;width: 250px;height: auto" >&nbsp;&nbsp;&nbsp;</label>
                        </div>

                        <label id="aChargeCycle" class="col-sm-2 control-label" value="费用周期">减免总价</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="addfFreeTotal" name="addfFreeTotal" readonly="readonly">
                        </div>
                    </div>

                    <%--<input type="hidden" value="era34" id="addfNumber"/>--%>
                    <%--<input type="hidden" value="0" id="addfStatus"/>--%>
                    <%--<input type="hidden" id="addfPaymentID"/>--%>
                    <div class="form-group row">
                        <label class="col-sm-2 control-label">备注
                        </label>
                        <div class="col-sm-6">
							<textarea class="form-control" rows="5" style="resize: none;"
                                      name="addfExplain" id="addfExplain"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" onclick="closeFreeModal()">关闭</button>
                    <button type="button" class="btn btn-primary" onclick="addOldManFree()">保存</button>
                </div>
            </div>
        </div>

    </div>
</form>
