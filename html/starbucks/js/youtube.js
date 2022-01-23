// YOUTUBE https://developers.google.com/youtube/iframe_api_reference?hl=ko

// 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// var player; 1. 필요 없음
function onYouTubeIframeAPIReady() {
 	// player = 2. 변수 위에서 지워서 필요없음
	new YT.Player('player', {
  // height: '360', 3. 필요없음
  // width: '640', 4. 필요없음
  videoId: 'fBVtXuA-xB8', // 최초 재생할 유튜브 영상 ID
	playerVars: { // 제어 명령어
		autoplay: true, // 자동 재생 유무
		loop: true, // 반복 재생 유무
		playlist: 'fBVtXuA-xB8' // loop를 추가하면 반듯이 다음에 재생할 유튜브 영상 ID를 입력해야함
	},
	events: {
		onReady: function (event) {
			event.target.mute() // 음소거
		}
	}
  
});
}