/**
 * 
 */
define(["jquery"],function($){
	$(function(){
		console.log("jQuery ready!!");
		var spanElement = $("<span></span>");
		spanElement.text("Hello Amd world!!");
		$("#divContent").append(spanElement);
	});
});