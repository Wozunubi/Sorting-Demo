var canvas = document.getElementById("screen");
var c = canvas.getContext("2d");

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 100;

var items = [];
var method = "";
var speed = 60;
var x = 200;

function isSorted(list) {
    for (var i = 1; i < list.length; i++) {
        if (list[i].val < list[i-1].val) return false;
    }
    return true;
}

function draw() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.beginPath();

    for (var i = 0; i < items.length; i++) {
        c.rect((i*items[i].width)+20, canvas.height-items[i].height-20, items[i].width, items[i].height);
        c.fillStyle = items[i].colour;
        c.fill();
        c.stroke();

        //if (items[i].colour == "#FF0000") items[i].colour = "#808080";
    }
}

function simulate() {
    bogoSort();
}

function scramble() {
    items = [];
    itemNum = parseInt(document.getElementById("itemNum").value);
    for (var i = 1; i <= itemNum; i++) {
        items.push({val: i, 
            width: (canvas.width-40)/itemNum, 
            height: (i*(canvas.height-40))/itemNum, 
            colour: "#808080"});
    }
    items.sort(() => Math.random() - 0.5);
    method = document.getElementById("method");
    update();
}

function update() {
    simulate();
    draw();
    requestAnimationFrame(update);
}

function bogoSort() {
    if (!isSorted(items)) {
        items.sort(() => Math.random() - 0.5);
    }
}

function bubbleSort() {

}

function bucketSort() {

}

function countingSort() {

}

function heapSort() {

}

function insertionSort() {

}

function mergeSort() {

}

function quickSort() {

}

function radixSort() {

}

function selectionSort() {

}

function shellSort() {

}