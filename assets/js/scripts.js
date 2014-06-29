// Responsive Menu

var DD = {}

DD.SideMenuNavigation = function()
{

	var nav		  = $('#nav');
		menuIcon  = $('.menu-icon');


	menuIcon.click(function(e){
		e.preventDefault();
		nav.toggleClass('open');
	})

}

$(document).ready(function() {
	new DD.SideMenuNavigation();
});	




