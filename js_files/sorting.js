// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature

function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
// basically this function will disable all the sorting buttons
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
// basically this will enable all the sorting buttions
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
    // this queryselector selects the slider as the id of the slider is arr_sz
}

// Enables size slider used in conjunction with disable
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
    // this queryselector selects the slider as the id of the slider is arr_sz
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

// Used in async function so that we can show animations of sorting, takes input time in ms (1000 = 1s)
// https://stackoverflow.com/questions/42529476/let-promise-wait-a-couple-of-seconds-before-return
// the delay which is calculated below by delayElement function is passed into this during any sorting function call
function waitforme(milisec) { 
    // resolve() method returns a Promise object that is resolved with a given value.
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

// Selecting size slider from DOM
let arraySize = document.querySelector('#arr_sz');

// Event listener to update the bars on the UI
// Javascript has events to provide a dynamic interface to a webpage. These events are hooked to elements in the Document Object Model(DOM). 
// https://www.geeksforgeeks.org/javascript-addeventlistener-with-examples/

arraySize.addEventListener('input', function(){
    console.log(typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));  // The parseInt() function parses a string argument and returns an integer of the specified radix 
    // basically we are taking the array size from the slider which is in range 10 to 130 and then passing it into the createNewArray function which
    // takes the no. bars as the parameter
});

// Default input for waitforme function (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
// when the speed is changed from the slider then the input is taken in delayElement variable and and is listen iusing evrnt listener which
// triggers the funtion defined as soon as input is given
delayElement.addEventListener('input', function(){
    // console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);     // the maximum value is 300 for the speed input so we are updating delay based on that input
});

// Creating array to store randomly generated numbers
let array = [];

// Call to display bars right when you visit the site
createNewArray();

// To create new array input size of array
function createNewArray(noOfBars = 60) {  // by default theno of bars is set to 60
    // calling helper function to delete old bars from dom
    deleteChild();

    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        // here we are generating the heights of bar, multiplied by 250 to ensure proper height and 1 is added toensure we dont get 0 value
        array.push(Math.floor(Math.random() * 250) + 1); // Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)
    }
    // console.log(array);

    // select the div #bars element
    const bars = document.querySelector("#bars"); 

    // create multiple div element using by iterating over all the array elements and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");  // In an HTML document, the document.createElement() method creates the HTML element specified by tagName,
        bar.style.height = `${array[i]*2}px`;       // setting the height of the bars based on the randomly generated heights values of array, calculated above 
        // The classList property returns the class name(s) of an element, as a DOMTokenList object. 
        // This property is useful to add, remove and toggle CSS classes on an element.
        bar.classList.add('bar');       // it will trigger the bar class css styling
        bar.classList.add('flex-item');     // ensures that all the bars are displayed in a row side-by-side
        bar.classList.add(`barNo${i}`);     // will triger that bar no class styling
        bars.appendChild(bar);      // appending each bar in a variable bars having classname #bars
    } 
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
    // The Element property innerHTML gets or sets the HTML or XML markup contained within the element.
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
}

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector(".newArray");

// this event listener is called whenever the generate_new_array button is clicked
newArray.addEventListener("click", function(){
    // console.log("From newArray " + arraySize.value);
    // console.log("From newArray " + delay);
    enableSortingBtn(); // enabling sorting buttons
    enableSizeSlider(); // enabling slider for size
    createNewArray(arraySize.value);    // calling create new array fn to randomly create an array of that size
});
