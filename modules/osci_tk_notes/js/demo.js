jQuery(document).ready(function() {
	var $ = jQuery;
	
	// override the Store submit
	var store_submit = $('#edit-submit');
	store_submit.click(function(event) {
		event.preventDefault();
		var data = {
			'section_id'	: $('#edit-section-id').val(),
			'content_id'	: $('#edit-content-id').val(),
			'tags'			: $('#edit-tags').val().split(/\s*,\s*/),
			'note'			: $('#edit-note').val(),
		};
		var target = $('#store-result');
		store_note(data, target);
	});
	
	// override the Retrieve submit
	var ret_submit = $('#edit-submit--2');
	ret_submit.click(function(event) {
		event.preventDefault();
		var data = {
			'section_id'		: $('#edit-section-id--2').val(),
			'content_id'		: $('#edit-content-id--2').val(),
			'include_children'	: $('#edit-include-children').is(':checked')
		};
		var target = $('#ret-result');
		target.html('');
		retrieve_note(data, target);
	});
});

function store_note(data, target) {
	var $ = jQuery;
	var endpoint = Drupal.settings.basePath + 'api/notes/';
	
	$.post(endpoint, data, function(data) {
		target.html(data);
	})
}

function retrieve_note(data, target) {
	var $ = jQuery;
	var endpoint = Drupal.settings.basePath + 'api/notes/';
	$.get(endpoint, data, function(data) {
		target.html(data);
	})
}