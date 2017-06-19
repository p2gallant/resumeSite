function main() {
    var resumeButton = document.getElementById("resume");
    resumeButton.onclick(resumeClick);
    var resumeClick = function(){
        document.getElementById("content").innerHTML = "<p>testContent.txt</p>";
    };
}