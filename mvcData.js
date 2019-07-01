
function mvcData(s, a) {
	var r = {};
	if ($.isArray(s)) {
		$.each(s, function(i, j) {
			var t = a + '[' + i + ']';
			$.extend(r, mvcData(j, t));
		});
	}
	else if ($.isPlainObject(s)) {
		$.each(s, function(i, j) {
			var t = '';
			if(a) {
				t = a + '.';
			}
			t += i;
			$.extend(r, mvcData(j, t));
		});
	}
	else {
		r[a] = s;
	}
	return r;
}
