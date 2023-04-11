/*

!! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project,
 however the current external resource MUST remain in place for the tests to work.
 BABEL must also be left in place.

 */

/***********
INSTRUCTIONS:
  - Select the project you would
    like to complete from the dropdown
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank
    pen.
  - Click the "TESTS" button to see
    the individual test cases.
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go
    from red to green.
  - As you start to build out your
    project, when tests are failing,
    you should get helpful errors
    along the way!
    ************/
/*

PLEASE NOTE: Adding global style rules using the * selector, or by adding
rules to body {..} or html {..}, or to all elements within body or html,
i.e. h1 {..}, has the potential to pollute the test suite's CSS.
Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.

*/

/*
Build a Tribute Page

Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/zNqgVx.

Fulfill the below user stories and get all of the tests to pass. Give it your own personal style.

You can use HTML, JavaScript, and CSS to complete this project. Plain CSS is recommended because that is what the lessons have covered so far and you should get some practice with plain CSS. You can use Bootstrap or SASS if you choose. Additional technologies (just for example jQuery, React, Angular, or Vue) are not recommended for this project, and using them is at your own risk. Other projects will give you a chance to work with different technology stacks like React. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

User Story #1: My tribute page should have an element with a corresponding id="main", which contains all other elements.

User Story #2: I should see an element with a corresponding id="title", which contains a string (i.e. text) that describes the subject of the tribute page (e.g. "Dr. Norman Borlaug").

User Story #3: I should see either a figure or a div element with a corresponding id="img-div".

User Story #4: Within the img-div element, I should see an img element with a corresponding id="image".

User Story #5: Within the img-div element, I should see an element with a corresponding id="img-caption" that contains textual content describing the image shown in img-div.

User Story #6: I should see an element with a corresponding id="tribute-info", which contains textual content describing the subject of the tribute page.

User Story #7: I should see an a element with a corresponding id="tribute-link", which links to an outside site that contains additional information about the subject of the tribute page. HINT: You must give your element an attribute of target and set it to _blank in order for your link to open in a new tab (i.e. target="_blank").

User Story #8: The img element should responsively resize, relative to the width of its parent element, without exceeding its original size.

User Story #9: The img element should be centered within its parent element.

You can build your project by using this CodePen template and clicking Save to create your own pen.
Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js.
*/




/**
* En produccion reemplazar albums.js por albums.json
*/
  // fetch("albums.json")
  //   .then(response => response.json())
  //   .then(data => {
  //
  //
  // });


/**
* Apuntes para acceder a los datos del json
*/

// let discNumber = 1;
//
// console.log(data.compilations[discNumber].year);
// console.log(data.compilations[discNumber].title);
// console.log(data.compilations[discNumber].description);
//
// console.log(data.compilations[discNumber].songs[1].title);
// console.log(data.compilations[discNumber].songs[1].length);
//
// for(let i = 0; i < data.compilations[discNumber].songs.length; i++){
//   console.log(data.compilations[discNumber].songs[i].title + " " + data.compilations[discNumber].songs[i].length);
// }





/*
* Generate the albums covers
*/
var discography = document.getElementById("discography");

for (let i = 0; i < data.albums.length; i++) {

  let template = document.getElementsByTagName("template")[0];
  let clon = template.content.cloneNode(true);
  discography.appendChild(clon);

  let cover = "img/covers/a" + (i+1) + ".webp";
  let imgCover = document.getElementsByClassName("album-cover")[i];
  imgCover.setAttribute("src", cover);
  imgCover.setAttribute("alt", data.albums[i].title);
  imgCover.setAttribute("onclick", "showAlbumModal(" + i + ")");
  document.getElementsByClassName("album-figcaption")[i].innerHTML = data.albums[i].title;

}


/*
* Album details modal
*/
var modal = document.getElementById("album-modal");

function showAlbumModal(discNumber){
  modal.style.display = "block";

  let template = document.getElementsByTagName("template")[1].content;
  // let template = document.getElementById("template-single-album");
  // let clon = template.content.cloneNode(false);
  // let clone = template.cloneNode(false);
  modal.appendChild(template);

  document.getElementsByClassName("album-title")[0].innerHTML = data.albums[discNumber].title;

  let cover = "img/covers/a" + (discNumber+1) + ".webp";
  let imgCover = document.getElementsByClassName("album-cover-single")[0];
  imgCover.setAttribute("src", cover);

  let songList = document.getElementsByClassName("songs")[0];
  let cantSong = data.albums[discNumber].songs.length;

  for(let i = 0; i < cantSong; i++){
    let li  = document.createElement("li");
    li.innerHTML = data.albums[discNumber].songs[i].title;
    songList.appendChild(li);
  }






  // console.log(data.albums[discNumber].title);
  // console.log(data.albums[discNumber].description);
  //
  // console.log(data.albums[discNumber].songs[1].title);
  // console.log(data.albums[discNumber].songs[1].length);
}

function hideAlbumModal(){
  modal.style.display = "none";
}
