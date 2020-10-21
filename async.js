window.onload = function () {

    function callback(fruit) {
        console.log(fruit);
    };

    var fruits = ["banana", "apple", "pear"];
    fruits.forEach(callback);

};