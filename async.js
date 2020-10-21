window.onload = function () {

    var callback = function (fruit) {
        console.log(fruit);
    };

    var fruits = ["banana", "apple", "pear"];
    fruits.forEach(callback);

    console.log("done");
};