
              // Get the modal
var modal = document.getElementById('myModal');         //Calls the modal by its element ID (myModal)

                                                        // Gets the image and inserts it into the modal using the "alt" content as a caption
var img = $('.myImg');                                  // Sets the variable 'img' equal to the CSS class .myImg. 
var modalImg = $("#img01");                             // Sets the variable 'modalImg' equal to the ID of the modal-content CSS class (img01).
var captionText = document.getElementById("caption");   // Sets the variable 'captionText' equal to the ID of the modals caption. 
$('.myImg').click(function(){                           // Uses JQuery to create an onClick function. 
    modal.style.display = "block";                      // Sets the display style of the modal.
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
      