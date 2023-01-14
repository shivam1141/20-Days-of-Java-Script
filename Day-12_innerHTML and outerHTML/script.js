
    //Match function
    function match(string, pattern) {
        return string.match(pattern);
    }
    console.log(match("Hello World!", /world/i)); 

    //Closest function
    function closest(element, selector) {
        while(element && !element.matches(selector)) {
            element = element.parentNode;
        }
        return element;
    }
    console.log(closest(document.querySelector("p"), ".container")); 

    //Contain function
    function contain(element, text) {
        return element.textContent.includes(text);
    }
    console.log(contain(document.querySelector("p"), "Hello")); 
    console.log(contain(document.querySelector("p"), "Goodbye")); 

