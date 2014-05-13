<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%
    	String urlRoot = request.getContextPath();
    	String dojoClaroTheme = urlRoot +  "/dojo-release-1.8.6/dijit/themes/claro/claro.css";
    	String dojoMainCss = urlRoot + "/dojo-release-1.8.6/dojo/resources/dojo.css";
    	String dojoMainJs = urlRoot + "/dojo-release-1.8.6/dojo/dojo.js";
    %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<Link rel="stylesheet" type="text/css" href="<%= dojoClaroTheme%>"/>
<Link rel="stylesheet" type="text/css" href="<%= dojoMainCss%>"/>
<script type="text/javascript" src="<%= dojoMainJs%>" data-dojo-config="parseOnLoad: true"></script>
<script type="text/javascript">
	require(["dijit/TitlePane",
	         "dijit/form/TextBox",
	         "dijit/form/Button",
	         "dojo/domReady!"],
	         function(titlePane,textBox,button){
		
		//ready(function(){
			console.log("---dojo ready!!!----" + textBox);
		//});
	});
</script>
</head>
<body class="claro">
	<div data-dojo-type="dijit/TitlePane" data-dojo-props="title: 'Order Search'" id="orderSearch">
		<label for="orderNo">Order No:</label>
		<input type="text" data-dojo-type="dijit/form/TextBox" id="orderNo"></input>
		<input type="button" data-dojo-type="dijit/form/Button" data-dojo-props="label:'Order Search'" id="orderSearchBtn" ></input>
	</div>
</body>
</html>