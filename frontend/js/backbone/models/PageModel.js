// OsciTk Namespace Initialization //
if (typeof OsciTk === 'undefined'){OsciTk = {};}
if (typeof OsciTk.models === 'undefined'){OsciTk.models = {};}
// OsciTk Namespace Initializaiotn //

jQuery(function() {
	OsciTk.models.Page = OsciTk.models.BaseModel.extend({

		defaults: function() {
			return {
				
			};
		},
	
		sync: function(method, model, options) {
			// console.log('OsciTkSection.sync: ' + method);
		},
	
		parse: function(response) {
			console.log('parse section');
		},
		
		loadContent: function() {
			
		}
	});
});