<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
	String cssRoot = request.getContextPath();
	String appCss = cssRoot + "/orderMgmt.css";
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Web based call center</title>
<Link rel="stylesheet" type="text/css" href="<%= appCss%>"/>
</head>
<body>
<jsp:include page="./header.jsp"></jsp:include>
<jsp:include page="./includeDojo.jsp"></jsp:include>
<jsp:include page="./footer.jsp"></jsp:include>
</body>
</html>