console.log("main.js!!");

window.onload = ()=>{
	console.log("onload!!");

	// JavaScriptここから
	//7-22
	document.querySelector('.toggle-btn').onclick = function(){
		new bootstrap.Collapse('.collapse').toggle();
	}

	//7-25
	let collapseElem = document.querySelector('#sample');
	let collapseButton = document.querySelector('.toggle-btn');
	collapseElem.addEventListener('hide.bs.collapse',function(){
		collapseButton.innerHTML = '表示する';
	});
	collapseElem.addEventListener('show.bs.collapse',function(){
		collapseButton.innerHTML = '非表示にする';
	});
}