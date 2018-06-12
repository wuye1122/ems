<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2017/2/24
  Time: 16:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <head>

        <!-- meta使用viewport以确保页面可自由缩放 -->
        <meta name="viewport" content="width=device-width, initial-scale=1">


        <!-- 引入 jQuery Mobile 样式 -->
        <link href="${pageContext.request.contextPath}/script/lib/H+/css/jquery.mobile-1.4.5.min.css" rel="stylesheet">

        <!-- 引入 jQuery 库 -->
        <script src="${pageContext.request.contextPath}/script/lib/H+/js/jquery.min.js"></script>

        <!-- 引入 jQuery Mobile 库 -->
        <script src="${pageContext.request.contextPath}/script/lib/H+/js/jquery.mobile-1.4.5.min.js"></script>

    <%--<!-- 引入 jQuery Mobile 样式 -->--%>
        <%--<link rel="stylesheet" href="http://apps.bdimg.com/libs/jquerymobile/1.4.5/jquery.mobile-1.4.5.min.css">--%>

        <%--<!-- 引入 jQuery 库 -->--%>
        <%--<script src="http://apps.bdimg.com/libs/jquery/1.10.2/jquery.min.js"></script>--%>

        <%--<!-- 引入 jQuery Mobile 库 -->--%>
        <%--<script src="http://apps.bdimg.com/libs/jquerymobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>--%>

        <style>
            th {
                border-bottom: 1px solid #d6d6d6;
            }
            tr:nth-child(even) {
                background: #e9e9e9;
            }
        </style>
    </head>
    <title>员工护理房间</title>
</head>
<body>
<div data-role="page">
    <div data-role="header">
        <%--<a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-back ui-btn-icon-notext" data-rel="back"></a>--%>
            <a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-back" data-rel="back">返回</a>
        <h1>AAA护理的老人</h1>
            <a href="${pageContext.request.contextPath}/mobile/quit.do" class="ui-btn-right ui-btn ui-corner-all">退出</a>
    <div>
        <div data-role="main" class="ui-content">
            <table data-role="table" data-mode="columntoggle" class="ui-responsive ui-shadow" id="myTable">
                <thead>
                <tr>
                    <th data-priority="3">房间号</th>
                    <th data-priority="2">床位号</th>
                    <th data-priority="1">护理老人</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>房间1</td>
                    <td>2223</td>
                    <td>李柱</td>
                </tr>
                <tr>
                    <td>房间2</td>
                    <td>2321</td>
                    <td>隔壁小兴兴</td>
                </tr>
                <tr>
                    <td>房间3</td>
                    <td>2222</td>
                    <td>大号龙</td>
                </tr>
                </tbody>
            </table>
        </div>
    <div data-role="footer"  data-position="fixed">
        <div data-role="navbar" >
            <div data-role="navbar" >
                <ul>
                    <li><a href="#myPopup" id="demo" data-rel="popup" class="ui-btn ui-icon-home ui-btn-icon-left" data-position-to="#demo">房间</a></li>
                    <li><a href="#myPopup" data-rel="popup" class="ui-btn ui-icon-home ui-btn-icon-left">老人</a></li>
                    <li><a href="${pageContext.request.contextPath}/staff/staffMessage.do" class="ui-btn ui-icon-mail ui-btn-icon-left">通知</a></li>
                    <li><a href="${pageContext.request.contextPath}/staff/staffMine.do"  class="ui-btn ui-icon-user ui-btn-icon-top">我</a></li>
                </ul>
                <div data-role="popup" id="myPopup" class="ui-content" data-arrow="b">
                    <a href='${pageContext.request.contextPath}/staff/staffHome.do' class='ui-btn'>我服务的房间</a>
                    <a href='${pageContext.request.contextPath}/staff/staffMine.do' class='ui-btn'>全院的房间</a>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>