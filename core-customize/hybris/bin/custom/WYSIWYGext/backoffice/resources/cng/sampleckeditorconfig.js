CKEDITOR.editorConfig = function(config) {
	config.toolbar = [
		{ name: 'styles', items: [ 'Format' ] },
		{ name: 'basicstyles', items: [ 'Bold', 'Italic' ] },
		{ name: 'links', items: [ 'Link' ] },
		{ name: 'paragraph', items: [ 'BulletedList' ] },
		{ name: 'document', items: [ 'Source' ] },
		{ name: 'clipboard', items: [ 'Undo', 'Redo' ] }
	];
};