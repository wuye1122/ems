<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<div class="modal fade" id="printModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width: 1000px">
        <div class="modal-content" >
            <div class="modal-header notprint">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title" id="myModalLabel">打印
                </h4>
            </div>
            <div class="modal-body">
                <div  align="center" class="panel-heading" style="width: 100%;height: 60px; background-color: #F5F5F5" ><h2 class="modal-title" style="color: black"><span id="printTableName">2017年三月老人日常用品审核表</span></h2>
                </div>
                <div class="form-group" style="margin-top:15px">
                    <label class="control-label" for="printDate">打印日期：</label>
                    <span id="printDate"  >2013-04-12</span>
                    <label class="control-label" for="printDate" style="margin-left: 30px">盘点日期：</label>
                    <span id="checkDate"  >2013-04-12</span>
                    <label class="control-label" for="operator" style="margin-left: 30px">操作人：</label>
                    <span id="operator"  >院长</span>
                </div>

                <table id="tb_print"  class="table table-bordered" style="border:solid 2px black;margin-top: 10px;color: black;" >
                    <thead >
                    <tr>
                        <th style="text-align: center;width: 70px ;border-color: black" >
                            <div class="th-inner ">编号</div>
                        </th>
                        <th style="text-align: center;width: 90px;border-color: black " >
                            <div class="th-inner ">物品名称</div>
                        </th>
                        <th style="text-align: center;width: 90px ;border-color: black" >
                            <div class="th-inner ">规格</div>
                        </th>
                        <th style="text-align: center; width: 90px;border-color: black ">
                            <div class="th-inner ">账面数</div>
                        </th>
                        <th style="text-align: center; width: 90px;border-color: black " >
                            <div class="th-inner ">盘点数</div>
                        </th>
                        <th style="text-align: center; width: 90px;border-color: black " >
                            <div class="th-inner ">差异</div>
                        </th>
                        <th style="text-align: center; width: 90px;border-color: black " >
                            <div class="th-inner ">状态</div>
                        </th>
                        <th style="text-align: center;border-color: black " >
                            <div class="th-inner ">原因</div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>



                <div class="modal-footer notprint">
                    <button id="beginPrint" type="button" class="btn btn-primary" data-dismiss="modal" onclick="self.print()">打印</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" >关闭</button>
                </div>
            </div>

        </div>

    </div>
</div>
</form>
