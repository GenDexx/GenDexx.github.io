

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


document.addEventListener('DOMContentLoaded', function() {
const slider = document.getElementById('slider');
const contents = document.querySelectorAll('.main');

slider.addEventListener('input', function() {
    const value = this.value;

    contents.forEach((content, index) => {
        const distance = Math.abs(index - value / 24); // Adjust the number as needed
        // Change display based on distance
        content.style.display = distance > 1 ? 'none' : 'flex';
  


    });
});
});



    const slider = document.getElementById('slider');
    const contents = document.querySelectorAll('.main');

    slider.addEventListener('input', function() {
        const value = this.value;

        contents.forEach((content, index) => {
            const distance = Math.abs(index - value / 24); //change the number 25
            content.style.opacity = distance > 1 ? 0 : 1 - distance;
        });
    });