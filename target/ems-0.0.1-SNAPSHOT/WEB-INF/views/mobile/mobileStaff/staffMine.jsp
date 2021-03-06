<%@ page import="com.channelsoft.ems.po.UserPo" %><%--
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
        <a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-back" data-rel="back">返回</a>
        <h1>员工<%=((UserPo)request.getSession().getAttribute("mobileUser")).getName()%></h1>
        <a href="${pageContext.request.contextPath}/mobile/quit.do" class="ui-btn-right ui-btn ui-corner-all">退出</a>
    </div>
    <div data-role="main" class="ui-content">
        <form method="post" action="${pageContext.request.contextPath}/mobile/index.do">
            <div class="ui-field-contain">
                <label for="oldPassword">原密码:</label>
                <input type="text" name="oldPassword" id="oldPassword">
                <label for="newPassword">新密码</label>
                <input type="text" name="newPassword" id="newPassword">
            </div>
            <div style="height: 30px;text-align:center;"  >
                <input type="submit" data-inline="true" value="修改密码">
            </div>
        </form>
    </div>
    <div data-role="footer"  data-position="fixed">
        <div data-role="navbar" >
            <ul>
                <li><a href="${pageContext.request.contextPath}/staff/staffHome.do" class="ui-btn ui-icon-home ui-btn-icon-left">房间</a></li>
                <li><a href="${pageContext.request.contextPath}/staff/staffOldMan.do" class="ui-btn ui-icon-user ui-btn-icon-left">老人</a></li>
                <li><a href="${pageContext.request.contextPath}/staff/staffMessage.do" class="ui-btn ui-icon-mail ui-btn-icon-left">通知</a></li>
                <li><a href="${pageContext.request.contextPath}/staff/staffMine.do"  class="ui-btn ui-icon-user ui-btn-icon-top">我</a></li>
            </ul>
        </div>
    </div>
</div>
</body>
</html>