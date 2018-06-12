<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!-- Modal -->
<form id="form_validate" class="form-horizontal">
    <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="width:400px;">
            <div class="modal-content" >
                <div class="modal-header" >
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title" id="myModalLabel">更新分类</h4>
                </div>
                <div class="modal-body" >
                    <input id="update_id" hidden/>
                    <div class="form-group">
                        <label for="update_father_id">所属父类</label>
                        <select class="form-control" id="update_father_id"  name="fHigherUpID" style="width: 250px;height: 35px">

                        </select>
                    </div>
                    <div class="form-group">
                        <label for="update_sorting_name">分类名称</label>
                        <input type="text" class="form-control" id="update_sorting_name" placeholder="必填项" style="width: 250px;height: 35px" onblur="update_name_check()">
                        <label id="update_name_message"  style="color: red;width: 250px;height: 20px" >&nbsp;&nbsp;&nbsp;</label>
                    </div>
                    <div class="form-group" >
                        <label for="update_remarks">备注</label>
                        <textarea type="text" class="form-control" id="update_remarks"  style="width: 250px;height: 80px;resize: none;"></textarea>

                    </div>
                </div>
                <div class="modal-footer">
                    <button id="update_btn" type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary"  onclick="updateStorageGoodsSorting()">保存</button>
                </div>
            </div>
        </div>

    </div>
</form>