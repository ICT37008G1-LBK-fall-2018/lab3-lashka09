var all = prompt("all");
var names = [];
for (i = 0; i < all; i++) {
    var nameIn = prompt("names");
    //  names[i] = "  " + nameIn;
    names.unshift("  " + nameIn);

}
alert(names);