var css = "\
	.abstracted {\
		position: relative;\
		transition: filter 1s;\
	}\
	.abstract-flush {\
		margin: 0;\
		padding: 0;\
		border: 0;\
	}\
";
addEventListener("load", function() {
	
});
var Abstractor = function(wd) {
	this.target = wd || document.body;
	this.target.classList.add("abstracted");
	this.navigator = this.target.querySelectorAll(".non-abstract");
	this.location = {
		reload: function() {
			var _request = new XMLHttpRequest();
			var _thissuper = this;
			_request.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    _thissuper.inject(this.responseText, true);
                }
				else {
					//_thissuper.displayNoFile();
				}
            };
			console.log(this.href);
			_request.open("GET", this.href, true);
            _request.send();
		},
		set href(url) {
			this.reload();
		}
	};
	this.inject = function(txt, append) {
		var prsv = this.target.querySelectorAll(":not(.non-abstract)");
		if (!append) {
		for (var i = 0; i < prsv.length; i++) {
			prsv[i].parentNode.removeChild(prsv[i]);
		}
		}
		var newel = document.createElement("div");
		newel.className = "abstract-flush";
		newel.appendChild(document.createTextNode(txt));
	    this.target.appendChild(newel);
	}
};