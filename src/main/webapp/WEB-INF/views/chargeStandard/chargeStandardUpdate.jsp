<%--
  Created by IntelliJ IDEA.
  User: wangjs
  Date: 2016/12/1
  Time: 14:38
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!-- Modal -->
<form id="form_validate" class="form-horizontal">
    <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="width: 950px">
            <div class="modal-content" style="height: 540px">


                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title" id="myModalLabel">修改费用项目</h4>
                </div>
                <div class="modal-body">

                    <%--<label for="addNursinghomeID" class="col-sm-2 control-label">养老院ID</label>--%>
                    <%--<div class="col-sm-4">--%>
                        <input type="hidden" id="FID">
                    <input type="hidden"  class="form-control" id="updNursinghomeID" name="updNursinghomeID" value="3">
                    <%--</div>--%>

                        <div class="form-group row">
                            <label for="updChrgeNumber" class="col-sm-2 control-label">费用编码</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" id="updChrgeNumber" readonly="readonly" name="updChrgeNumber">
                            </div>

                            <label for="updChrgeName" class="col-sm-2 control-label">费用名称</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" id="updChrgeName" name="updChrgeName">
                            </div>
                        </div>


                        <div class="form-group row">
                            <label for="updPrice" class="col-sm-2 control-label">费用价格</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" id="updPrice" name="updPrice" placeholder="Price">
                            </div>

                            <label id="uUnit" class="col-sm-2 control-label" value="单位">单位</label>
                            <div class="col-sm-4">
                                <select class="form-control" id="updUnit" name="updUnit">

                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="updChrgeType" class="col-sm-2 control-label" id="ChrgeType" value="费用类型">费用类型</label>
                            <div class="col-sm-4">
                                <select class="form-control" id="updChrgeType" name="updChrgeType">

                                </select>
                            </div>

                            <label id="uChargeCycle" class="col-sm-2 control-label" value="费用周期">费用周期</label>
                            <div class="col-sm-4">
                                <select class="form-control" id="updChargeCycle" name="updChargeCycle">

                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label id="uNursingLevel" class="col-sm-2 control-label" value="项目等级">项目等级</label>
                            <div class="col-sm-4">
                                <select class="form-control" id="updNursingLevel" name="updNursingLevel">

                                </select>
                            </div>

                            <%--<label id="uValue" class="col-sm-2 control-label" value="分值">分值</label>--%>
                            <%--<div class="col-sm-4">--%>
                                <%--<select class="form-control" id="updValue" name="updValue">--%>

                                <%--</select>--%>
                            <%--</div>--%>
                        </div>

                        <div class="form-group row">
                            <label for="updChrgeStartDate" class="col-sm-2 control-label">阶段费用开始时间</label>
                            <div class="col-sm-4">
                                <input onFocus="WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM-dd'})" type="text" class="form-control" id="updChrgeStartDate" name="updChrgeStartDate">
                            </div>

                            <label for="updChrgeStopDate" class="col-sm-2 control-label">阶段费用结束时间</label>
                            <div class="col-sm-4">
                                <input onFocus="WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM-dd'})" type="text" class="form-control" id="updChrgeStopDate" name="updChrgeStopDate">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="updValidityStartDate" class="col-sm-2 control-label">费用有效期开始时间</label>
                            <div class="col-sm-4">
                                <input onFocus="WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM-dd'})" type="text" class="form-control" id="updValidityStartDate" name="updValidityStartDate">
                            </div>

                            <label for="updValidityEndDate" class="col-sm-2 control-label">费用有效期结束时间</label>
                            <div class="col-sm-4">
                                <input onFocus="WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM-dd'})" type="text" class="form-control" id="updValidityEndDate" name="updValidityEndDate">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 control-label">退租时退款</label>
                            <div class="col-sm-4">
                                <input class="updRefundType" type="checkbox" name="updRefundType"  id="updRefundType1" value="1"/>是
                            </div>

                            <label class="col-sm-2 control-label">状态</label>
                            <div class="col-sm-4">
                                <select class="form-control" id="updStatus" name="updStatus">
                                    <option value="11" selected="value">启用</option>
                                    <option value="10" selected="value">禁用</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 control-label">全院必收费用</label>
                            <div class="col-sm-4">
                                <input class="updIsALLFee" type="checkbox" name="updIsALLFee" id="updIsALLFee1" value="1"/>是
                            </div>

                            <label class="col-sm-2 control-label">循环收取费用</label>
                            <div class="col-sm-4">
                                <input class="updIsCycleFee" type="checkbox" name="updIsCycleFee" id="updIsCycleFee1" value="1"/>是
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="updExplain" class="col-sm-2 control-label">说明</label>
                            <div class="col-sm-10">
                                <textarea class="form-control" name="updExplain" id="updExplain" placeholder="说明"></textarea>
                            </div>
                        </div>


                </div>
                <div class="modal-footer col-sm-12">
                    <button type="button" class="btn btn-default" onclick="closeModal()" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="updChargeStandard()">保存</button>
                </div>
            </div>
        </div>

    </div>
</form>