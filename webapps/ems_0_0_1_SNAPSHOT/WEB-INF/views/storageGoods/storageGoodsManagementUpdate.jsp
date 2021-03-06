<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<style>
    .popover-content{
        padding-bottom: 14px;
        padding-top: 14px;
    }
    tr {
        padding-bottom: 14px;
        padding-top: 14px;
    }
    td {
        vertical-align: middle;
        padding-bottom: 7px;
        font-size: 14px;
    }
    table {
        max-width: 100%;
        background-color: transparent;
        border-collapse: collapse;
        border-spacing: 0;
    }
    .modal-content{
        background-color:#F0F0F0;
    }
</style>
<!-- Modal -->
<form id="form_validate" class="form-horizontal">
    <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" id="modal" style="width: 750px">
            <div class="modal-content" style="background-color:#F0F0F0;">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title" id="myModalLabel">修改操作</h4>
                </div>
                <div class="modal-body">
                    <input type="hidden" id="Goods_id">
                    <div align="center" class="popover-content" style="width: 450px;margin-left: 50px">
                        <table style="width: 600px;position: relative;max-width: 100%; background-color: transparent;border-collapse: collapse;border-spacing: 0;">
                            <tbody>
                            <tr>
                                <td >所属分类:</td>
                                <td>
                                    <select id="update_type" class="input_text"  style="width: 130px;height: 30px" onblur="update_check_type();">

                                    </select>
                                    <label id="update_type_message" style="color: red;width: 80px;height: 30px"></label>
                                </td>
                                <td >物品名称:</td>
                                <td>
                                    <input id="update_name" class="input_text" type="text"   placeholder="必填项"   style="width: 130px;height: 30px" onblur="update_check_name();">
                                    <label id="update_name_message" style="color: red;width: 80px;height: 30px"></label>
                                </td>
                            </tr>
                            <tr>
                                <td >物品规格:</td>
                                <td>
                                    <input id="update_standard" class="input_text" type="text"   placeholder="必填项"   style="width: 130px;height: 30px" onblur=" update_check_standard();">
                                    <label id="update_standard_message" style="color: red;width: 80px;height: 30px"></label>
                                </td>
                                <td >采 购 价:</td>
                                <td>
                                    <input id="update_price" class="input_text" type="text"   placeholder="必填项"   style="width: 130px;height: 30px" onblur="update_check_price();" onkeyup="value=value.replace(/[^\d.]/g,'')">
                                    <label id="update_price_message" style="color: red;width: 100px;height: 30px"></label>
                                </td>
                            </tr>
                            <tr>
                                <td >最小库存:</td>
                                <td>
                                    <input id="update_lowStock" class="input_text" type="text"   placeholder="必填项"   style="width: 130px;height: 30px" onblur="update_check_lowStock();" onkeyup="value=value.replace(/[^\d]/g,'')">
                                    <label id="update_lowStock_message" style="color: red;width: 80px;height: 30px"></label>
                                </td>
                                <td >单　　位:</td>
                                <td>
                                    <input id="update_unit" class="input_text" type="text"   placeholder="必填项"   style="width: 130px;height: 30px" onblur="update_check_unit();">
                                    <label id="update_unit_message" style="color: red;width: 80px;height: 30px"></label>
                                </td>
                            </tr>
                            <tr>
                                <td >备　　注:</td>
                                <td rowspan="2" colspan="3">
                                    <textarea id="update_remark" class="input_text" type="text"   style="width:420px;height: 60px;resize: none;"  ></textarea>

                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;&nbsp;&nbsp;</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button id="update_close_btn"  type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary"  onclick="updateStorageGoodsManagement()">修改</button>
                </div>
            </div>
        </div>

    </div>
</form>
