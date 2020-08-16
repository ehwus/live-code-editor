function compile() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;

    document.body.onkeyup = function () {
        code.open();
        code.writeln(
            html.value +
            "<style>" +
            css.value +
            "</style>" +
            "<script>" +
            js.value +
            "</script>"
        );
        code.close();
    };
}

function save() {
    var zip = new JSZip();
    zip.file("index.html", html.value);
    zip.file("style.css", css.value);
    zip.file("app.js", js.value);
    zip.generateAsync({ type: "blob" })
        .then(function (content) {
            saveAs(content, "MySite.zip");
        });
}

document.getElementById("save").addEventListener("click", save);
compile();