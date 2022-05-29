function echoType(parameter) {
    console.log(typeof(parameter));
    console.log(typeof(parameter) === "string" || typeof(parameter) === "number" 
    ? parameter
    : "Parameter is not suitable for printing"
    )
}
echoType('Hello, JavaScript!');