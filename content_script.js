var url = window.location.href;

function zap(ele) {
	var element = document.getElementById(ele);
	if (typeof (element) != 'undefined' && element != null) {
		element.style.visibility = "hidden";
	}
}

function zapimg() {
	var images = document.getElementsByTagName('img');
	while (images.length > 0) {
		images[0].parentNode.removeChild(images[0]);
	}
}

function mutetube() {
	zapimg();
	zap("related");
	zap("items");
	zap("comments");
	zap("continuations");
	zap("chips");
}

if (url.includes("youtube.com")) {
	document.getElementById("title").innerHTML = "Minimalist Youtube<br> <br><div style='font-size:1em;font-weight: normal;'> Just search and only watch you actually need. <br>- No thumbnails <br>- No comments <br>- No recommendations<br><br> In case you want to see the video preview, hover over the thumbnail.</div>";
	zapimg();
	zap("contents");
	zap("chips");
	setInterval(function () {
		mutetube();
	}, 10000);
}
