console.log("main.js!!");
//ToDo:画像のパス変更
window.onload = ()=>{
	console.log("onload!!");

	// JavaScriptここから

	//==========
	// モーダルのイベント
	const modalElem = document.querySelector("#myModal");
	const mozi = document.querySelector("#mozi");
	const img = document.querySelector("#btnimg");

	// 表示される直前に発動
	modalElem.addEventListener("show.bs.modal",function(e){
		console.log("表示される直前に発動");
	});

	// 表示された直後に発動
	modalElem.addEventListener("shown.bs.modal",function(e){
		console.log("表示される直後に発動");
	});

	// 非表示にされる直前に発動
	modalElem.addEventListener("hide.bs.modal",function(e){
		console.log("非表示にされる直前に発動");
	});

	// 非表示にされた直後に発動
	modalElem.addEventListener("hidden.bs.modal",function(e){
		console.log("非表示にされる直後に発動");
	});

	//==========
	// ボタンのクリックイベント
	function txcim(tx,txc,im){
		mozi.textContent=tx;
		mozi.style.color=txc;
		img.src=im;
	};

	//閉じるボタン
	const btnclose = document.querySelector("#close");
	btnclose.addEventListener("click",function(e){
		console.log("赤いボタンが押されました");
		txcim("","","");
	});

	// 赤いボタン
	const btnRed = document.querySelector("#btnRed");
	btnRed.addEventListener("click",function(e){
		console.log("赤いボタンが押されました");
		txcim("赤いきつね","red","../images/kitune.jpeg");
	});

	// 緑のボタン
	const btnGreen = document.querySelector("#btnGreen");
	btnGreen.addEventListener("click",function(e){
		console.log("緑のボタンが押されました");
		txcim("緑のたぬき","green","../images/tanuki.jpeg");
	});

	// 青いボタン
	const btnBlue = document.querySelector("#btnBlue");
	btnBlue.addEventListener("click",function(e){
		console.log("青いボタンが押されました");
		txcim("青いねこ","blue","../images/neko.png");
	});
}