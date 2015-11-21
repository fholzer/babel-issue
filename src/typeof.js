class TestClass {
    constructor(arg) {
        if(typeof arg === "object") {
            console.log("You should see this message.");
        }
    }
}

var obj = {};
new TestClass(obj);
