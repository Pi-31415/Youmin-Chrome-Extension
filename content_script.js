var url = window.location.href;

if (url.includes("youtube.com")) {
	//alert("Youtube");
	document.getElementById("title").innerHTML = "Minimalist Youtube";
	document.getElementById("contents").style.visibility = "hidden";
	
	if (url.includes("youtube.com") && url.includes("query")){
		alert("query");
	}
	
	
}