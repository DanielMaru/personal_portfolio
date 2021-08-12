$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// Get the modal
var modal = document.getElementById("myModal");

var imgPreview = document.getElementById("preview-gift");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openModal(width, src, type){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        document.getElementById(type+'-download').click();
    } else {
        if (width === 'full') {
            imgPreview.className = "modal-preview-gift modal-full";
        } else {
            imgPreview.className = "modal-preview-gift modal-responsive";
        }
        imgPreview.src = src;
        modal.style.display = "inline-flex";
    }
    
}