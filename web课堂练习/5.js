var video;
function init()
{
 video=document.getElementById("video1");
 video.addEventListener("ended",function (){alert("播放结束");}, true);

}
function play() {
    video.play();
}
function pause() {
    video.pause();
}
function load() {
    video.load();
}