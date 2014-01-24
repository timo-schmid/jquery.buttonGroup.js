/**
 * jQuery buttonGroup Plugin 0.1
 * Author: Timo Schmid <timo.schmid@gmail.com>
 */
(function($) {
	$.fn.buttonGroup = function() {
		var input = $(this);
		input.hide();
		var rawData = input.attr('data-values');
		if(!rawData) {
			console.error('buttonGroup(): No values given. Specify the data as a map in data-values.');
			return;
		}
		try {
			var data = $.parseJSON(rawData);
		} catch(error) {
			try {
				eval('data = ' + rawData);
			} catch(err) {
				console.error('buttonGroup(): Unable to decode JSON: ' + rawData);
				return false;
			}
		}
		var btnGroup = $('<div class="btn-group"></div>');
		input.after(btnGroup);
		$.each(data, function(k, v) {
			var button = $('<button type="button" class="btn btn-default">' + v + '</button>');
			button.click(function() {
				var wasActive = button.hasClass('active');
				$('button', btnGroup).removeClass('active');
				if(wasActive) {
					input.attr('value', '');
				} else {
					$(this).addClass('active');
					input.attr('value', k);
				}
				button.blur();
			});
			if(k == input.val()) {
				button.addClass('active');
			}
			btnGroup.append(button);
		});
		return this;
	};
} (jQuery));
