function combine(n1, n2) {
    if (typeof (n1) === "number" && typeof (n2) === "number") {
        return n1 + n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
var num1 = 5;
var num2 = "7";
var result = combine(num1, num2);
console.log(result);
