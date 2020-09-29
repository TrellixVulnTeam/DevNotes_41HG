## Close the dropdown when clicked outside

// Frm ARR
$(".dropsub-menu").off("click").on("click",function(e){
	var MenuContainer = $(this).parent();
	MenuContainer.toggleClass("active-dropdown");

	var RemoveActive = function(e){
	if (!MenuContainer.is(e.target) && MenuContainer.has(e.target).length === 0) 
			{
				MenuContainer.removeClass("active-dropdown");
				$(document).off('click',RemoveActive);
			}
	};
		if(MenuContainer.hasClass("active-dropdown")) {
		$(document).on('click',RemoveActive);
	}
});

// The one i used 
$('.toggle-icon').on('click', function (e) {
	// var MenuContainer = $(this).closest('.tab-wrapper');
	var toggleIcon = $(this).closest('.toggle-icon');
	var target = $('.tog-nav');
	
	
	$(target).toggleClass('show');
	
	if($(target).hasClass('show')) {
		$(document).on('click', function (e) {
			if( ( !target.is(e.target) && target.has(e.target).length === 0 ) && (!toggleIcon.is(e.target) && toggleIcon.has(e.target).length === 0) ) {
				$(target).removeClass('show');
			}
		})
	} 
	
	
})
