// https://www.sitepoint.com/making-simple-image-slider-html-css-jquery/

var currentIndex = 0,
  //all items stored in the container div (have to make a div for each picture)
  items = $('#container div'),
  //length of the container div (amt of items within)
  itemAmount = items.length;

//this function cycles the items and allows for them to be stacked. var item is equal to current Index
//items are hidden unless it is the current Index
function cycleItems() {
  var item = $('#container div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
  $("#pageNumber").html("Page Number: " + currentIndex);
}

//auto slide allows for cycle items function to go on automatically every 3 seconds
var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmount - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);

//clear interval cancels auto cycle
//next click allows for user to switch slides by themselves
$('#next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  //if index is on the last slide then show first slide
  if (currentIndex > itemAmount - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

//prev function allows to go back
$('#prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmount - 1;
  }
  cycleItems();
});
