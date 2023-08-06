// 实时监听窗口变化
function displayWindowSize() {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    document.getElementById("windowSize").innerHTML = "W "+ w +" * H "+ h;
}
window.addEventListener("resize",displayWindowSize);
displayWindowSize();

// 重复点击事件
function isTrue() {
    alert("ERROR：当前为目标页面")
}