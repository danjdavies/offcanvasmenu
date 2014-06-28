// Responsive Menu

var DD = {}

/*DD.SideMenuNavigation = function()
{

	var menuOpen  = $('.menu-icon');
		menuLines  = $('<span class="border-menu"></span>');
		nav		  = $('#nav');
		menuClose = $('<span class="close-icon">x</span>');


	// Click Menu Button which slides in the menu

	menuOpen.click(openmenu);



	function openmenu(e){
		e.preventDefault();
		nav.toggleClass('open');
		nav.animate({ left: '300px' }, 800);
		menuOpen.html(menuClose);
		menuOpen.off('click', openmenu);
		menuOpen.on('click', closemenu);
	};

	function closemenu(e){
		e.preventDefault();
		nav.animate({ left: '0px' }, 800);
		menuOpen.html(menuLines);
		menuOpen.on('click', openmenu);
		menuOpen.off('click', closemenu);
	};



}*/

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




