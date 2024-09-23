

//function to change from dark to light mode
function modeFunction() {
    //create variable and assign it the value of the document body
    let element = document.body;
    //toggle the class of this element to "dark-mode", which changes css settings
    element.classList.toggle("dark-mode");
} 

//event listener that listens for the submit event and then
//prevents the default action of form submission
//which would cause a page refresh and wipe the data from user input
addEventListener('submit', function(event) { 
    event.preventDefault(); 
});


//function to create new blog upon form submission
function createNewBlog(){
    //create variables assigned with values from user input
    //to hold the new blog title, author, and entry
    let ele_title = document.getElementById(`title`).value;
    let ele_author = document.getElementById(`author`).value;
    let ele_entry = document.getElementById(`entry`).value;
    //further variable to hold the data of the current time and date
    //to timestamp new blog entries
    let ele_time = Date();

    //create blog object to hold the user input values in one object
    const blog={
        //create necessary properties within blog object
        //assign these with user input values from variables above
        _title: ele_title,

        _author: ele_author,

        _entry: ele_entry,

        _time: ele_time,

        //getters to help access the object properties
        get getTitle(){
            return this._title;
        },
    
        get getAuthor(){
            return this._author;
        },

        get getEntry(){
            return this._entry;
        },

        get getTime(){
            return this._time;
        }
    };

    //create variable JSON object to store the JavaScript object and corresponding data
    const myJSON = JSON.stringify(blog);
    //set item in local storage for data persistence  
    localStorage.setItem("blogJSON", myJSON);

    //create variable and assign the grid container to it
    //so can manipulate and add other elements within the grid container
    let container = document.getElementById("container");

    //create variable and assign it value of a newly created div element
    let newCard = document.createElement("div");
    
    //add this newCard div element to the grid container
    container.appendChild(newCard);

    //adding card as class name so the style is the same as other blog cards
    newCard.setAttribute(`class`, `card`);

    //now, have to add the new blog content to the new div card
    //create variable and assign it value of newly created h4 element
    //this will hold the blog title
    let newH4 = document.createElement("h4");

    //add this h4 element to the div card
    //to hold the title on the blog entry
    newCard.appendChild(newH4);

    //now, a similar process for adding the blog author element
    //create variable and assign value of newly created h5 element
    let newH5 = document.createElement("h5");

    //add this new h5 element to the new div card
    //to hold the author of the blog entry on the card
    newCard.appendChild(newH5);
    
    //now, the same process for adding the blog entry element
    //create new variable and assign it value of new p element
    let newP = document.createElement(`p`);

    //add this new p element to the new div card
    //to hold the content of the blog entry on the card
    newCard.appendChild(newP);

    //now, the same process for adding the timestamp to the blog entry
    //create new variable and assign it value of new p element
    let newPT = document.createElement(`p`);

    //add this new p element to the new div card
    //to hold the timestamp on the card
    newCard.appendChild(newPT);

    //now, after creating and correctly placing the new elements
    //need add user input information to them
    //first get JSON object from local storage and assign it to a new variable
    let text = localStorage.getItem("blogJSON");
    //then create another new variable to assign parsed value of that JSON object to
    let obj = JSON.parse(text);

    //finally, assign the user input data to the new elements
    //first create new variables to hold the appropriate properties, accessing these
    //by the getters for the blog object, which was carried through the JSON object
    //the assign the innerHTML of the new elements created above with the appropriate properties
    let newTitle = obj.getTitle;
    newH4.innerHTML = newTitle;
    let newAuthor = obj.getAuthor;
    newH5.innerHTML = newAuthor;
    let newEntry = obj.getEntry;
    newP.innerHTML = newEntry;
    let newTime = obj.getTime;
    newPT.innerHTML = newTime;

    //add the newly created card that holds the new blog entry to the top of the page
    //this works because the blog cards are list items
    //so the insertBefore method can be invoked
    let list = document.getElementById("myList");
    list.insertBefore(newCard, list.children[0]);

}


//form validation function
//this validates only that form content was entered for each input
//as blog data is varied and checking for type is ineffective
function validateForm() {
    //create variables and assign the value of the elements of user input from the form
    let ele_title = document.getElementById("title").value;
    let ele_author = document.getElementById("author").value;
    let ele_entry = document.getElementById("entry").value;

    //create variables and assign the span elements where the error message will be displayed
    let ele_title_error = document.getElementById("title-error");
    let ele_author_error = document.getElementById("author-error");
    let ele_entry_error = document.getElementById("entry-error");

    //assign textContent of the error message variables to an empty string to initialise
    ele_title_error.textContent = "";
    ele_author_error.textContent = "";
    ele_entry_error.textContent = "";

    //create boolean variable isValid, to track if the error messages should be displayed
    let isValid = true;

    //if statement to check if a title was input by user
    if (ele_title === "") {
        //if the title input was blank
        //the error message is assigned to the textContent of the correct variable, to then display in the correct span element
        ele_title_error.textContent = "Please enter your blog title.";
        //and the isValid boolean is assigned false
        isValid = false;
    }

    //if statement to check if an author was input by user
    if (ele_author === "") {
        //if the author input was blank
        //the error message is assigned to the textContent of the correct variable, to then display in the correct span element
        ele_author_error.textContent = "Please enter your name.";
        //and the isValid boolean is assigned false
        isValid = false;
    }

    //if statement to check if a entry was input by user
    if (ele_entry === "") {
        //if the entry input was blank
        //the error message is assigned to the textContent of the correct variable, to then display in the correct span element
        ele_entry_error.textContent ="Please enter your blog post.";
        //and the isValid boolean is assigned false
        isValid = false;
    }

    //return the isValid boolean
    //this returns true if all the above if statements checked to true with valid form input
    //meaning the error messages will not appear
    //this returns false if any user input was blank
    //meaning the appropriate error message will appear in the correct span element, the variable having been assigned that textContent
    return isValid;
}


