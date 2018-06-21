//open a modal box for specialization consulting
var modal1 = document.getElementById('consulting-description');
var btn1 = document.getElementById("consulting");
var span1 = document.getElementById("close1");
btn1.onclick = function() {
    modal1.style.display = "block";
};
span1.onclick = function() {
    modal1.style.display = "none";
};

//open a modal box for specialization entrepreneurship & innovation
var modal2 = document.getElementById('entrepreneurship-description');
var btn2 = document.getElementById("entrepreneurship");
var span2 = document.getElementById("close2");
btn2.onclick = function() {
    modal2.style.display = "block";
};
span2.onclick = function() {
    modal2.style.display = "none";
};

//open a modal box for specialization information system
var modal3 = document.getElementById('information-description');
var btn3 = document.getElementById("information");
var span3 = document.getElementById("close3");
btn3.onclick = function() {
    modal3.style.display = "block";
};
span3.onclick = function() {
    modal3.style.display = "none";
};

//click other places in the page will also close modal box
window.onclick = function(event) {
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
    if (event.target === modal3) {
        modal3.style.display = "none";
    }
};