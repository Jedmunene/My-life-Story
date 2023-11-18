window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var content = document.getElementById('content');
    if (width < 600) {
        content.style.fontSize = '14px';
    } else {
        content.style.fontSize = '16px';
    }
});
function goBack() {
    window.history.back();
}
