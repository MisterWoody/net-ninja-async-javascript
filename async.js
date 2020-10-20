window.onload = function () {

    // jquery method
    $.get("data/tweets.json", function (data) {
        console.log(data);
    });
    console.log("test");
};