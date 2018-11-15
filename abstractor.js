//Abstractor.js by boraini. boraini.github.io github.com/boraini

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
			_request.onreadystatechange = (function(loc, ev) {
                if (this.readyState == 4 && this.status == 200) {
                    loc._parentAbs.inject(this.responseText, true);
                }
				else {
					//_thissuper.displayNoFile();
				}
            }).bind(null, this);
			console.log(this);
			_request.open("GET", this._href, true);
            _request.send();
		},
		set href(url) {
			this._href = url;
			console.log(this._href);
			if (this._href) this.reload();
		}
	};
	this.location._parentAbs = this;
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
