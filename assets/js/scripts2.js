
// Responsive Menu

var DD = {}

DD.SideMenuNavigation = function()
{

	var openPanel  = $(".open-panel");
		closePanel = $(".close-panel, #content");
		htmlVal	   = $("html")


	openPanel.click(function(){
  
	  htmlVal.addClass("openNav");
	  
	});
		
	closePanel.click(function(){
	  
	htmlVal.removeClass("openNav");
	  
	});


}

$(document).ready(function() {
	new DD.SideMenuNavigation();
});	