$(document).ready(function(){
	/**
	 * @todo turn into jquery plugin so the visualizer can call it
	 */
	
	$('[data-toggle]').each(function(){
		var toggleElement = $('#' + $(this).data('toggle'));
		$(toggleElement).hide();
		
		$(this).text($(this).data('toggle-closed'));
		$(this).data('toggle-state', 'closed');
	});
	
	$('[data-toggle]').click(function(event){
		event.preventDefault();
		
		var toggleElement = $('#' + $(this).data('toggle'));
		var newState      = ($(this).data('toggle-state') == 'closed') ? 'opened' : 'closed';
		
		$(toggleElement).toggle();
		$(this).text($(this).data('toggle-' + newState));
		$(this).data('toggle-state', newState);
	});
});
