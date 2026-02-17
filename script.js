// This variable will store the blog post that is currently being edited
// Initially, no post is selected for editing, so it is null
let editPost = null;


// This function will handle BOTH adding a new post and updating an existing post
function addOrUpdatePost() {

    // Get the title input element
    const titleInput = document.getElementById("title");

    // Get the content textarea element
    const contentInput = document.getElementById("content");

    // Get the main button (Add Post / Update Post)
    const button = document.getElementById("mainBtn");

    // Get the value entered in the title input
    const title = titleInput.value;

    // Get the value entered in the content textarea
    const content = contentInput.value;

    // Check if title or content is empty
    if (title === "" || content === "") {
        // Show alert if any field is empty
        alert("Please fill all fields!");
        return;  // Stop execution of function
    }

    // If editPost is null, that means we are adding a NEW post
    if (editPost === null) {

        // Get the div where all blog posts are stored
        const blogList = document.getElementById("blog-list");

        // Create a new div element (this will be the blog card)
        const blogCard = document.createElement("div");

        // Add a CSS class to the blog card
        blogCard.classList.add("blog-card");

        // Add HTML content inside the blog card
        // It includes title, content, edit button, and delete button
        blogCard.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
            <button class="edit-btn" onclick="editPostFunction(this)">Edit</button>
            <button class="delete-btn" onclick="deletePost(this)">Delete</button>
        `;

        // Add the newly created blog card to the blog list
        blogList.appendChild(blogCard);

    } else {

        // If editPost is NOT null, that means we are updating an existing post

        // Change the title of the selected blog post
        editPost.querySelector("h3").innerText = title;

        // Change the content of the selected blog post
        editPost.querySelector("p").innerText = content;

        // After updating, reset editPost back to null
        editPost = null;

        // Change button text back to "Add Post"
        button.innerText = "Add Post";
    }

    // Clear the input fields after adding/updating
    titleInput.value = "";
    contentInput.value = "";
}



// This function deletes a blog post
function deletePost(button) {

    // button.parentElement refers to the blog card div
    // remove() deletes that entire blog card
    button.parentElement.remove();
}



// This function is called when Edit button is clicked
function editPostFunction(button) {

    // Store the selected blog card inside editPost variable
    editPost = button.parentElement;

    // Get the title text from the selected blog card
    const title = editPost.querySelector("h3").innerText;

    // Get the content text from the selected blog card
    const content = editPost.querySelector("p").innerText;

    // Put the existing title into the input field
    document.getElementById("title").value = title;

    // Put the existing content into the textarea
    document.getElementById("content").value = content;

    // Change the button text to "Update Post"
    document.getElementById("mainBtn").innerText = "Update Post";
}
