function main() {
    let a = 1;
    let b;
    let range = "";

    b = a + 1;

    for (let i=0; i < 9; i++) {
        range += i + ", ";
    }
    if (b!=0){
        console.info("b = "+b);
    }
    var today = new Date();
    console.info("Hello World");
    console.info(range.substring(0, range.length - 2));
    console.info(a, b);
    console.info("now is "+ today   );
}
main();