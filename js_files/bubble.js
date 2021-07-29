async function bubble() {
    console.log('In bubble()');     // to see in the console which sorting algorithm is running

    // using DOM - The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document 
    // as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree.

    // The querySelectorAll() method is a HTML DOM method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object.
    // The NodeList object represents a collection of nodes. The nodes can be accessed by index numbers. The index starts at 0.


    const ele = document.querySelectorAll(".bar");  // select all the elements having classname .bars of the generated array and iterate over it one by one
    // https://www.w3schools.com/jsref/met_document_queryselectorall.asp

    for(let i = 0; i < ele.length-1; i++){
        // console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            // console.log('In jth loop');
            ele[j].style.background = 'blue';  // giving a blue color to the elements being compared
            ele[j+1].style.background = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){  // compare the heights by converting them into int
                // console.log('In if condition');
                await waitforme(delay);     // call the function to add a delay otherwise the whole array will be sorted at once
                swap(ele[j], ele[j+1]);  // swap function is defined in sorting.js which sorts the elements based on their heights
            }
            ele[j].style.background = 'cyan';      // after comparision and sorting the color is changed back to original
            ele[j+1].style.background = 'cyan';
        }
        ele[ele.length-1-i].style.background = 'green';     // as we know in bubble sort after each iteration a max element is set to its position so coloring it green
    }
    ele[0].style.background = 'green';  // after the sorting process complete we will still be left the first element with its original color so change it to green
}

const bubSortbtn = document.querySelector(".bubbleSort");   // selecting the class for bubble sort which is bubble sort button
bubSortbtn.addEventListener('click', async function(){      /// on clicking any sorting method an eventlistner function is called which further calls the following funtions
    disableSortingBtn();    // disable these buttons while sorting is in process
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();     // enable the buttons after the process is complete
    enableSizeSlider();
    enableNewArrayBtn();
});
