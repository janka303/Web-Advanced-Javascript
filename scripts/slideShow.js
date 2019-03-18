// https://www.sitepoint.com/making-simple-image-slider-html-css-jquery/

var currentIndex = 0,
  items = $('#container div'),
  itemAmount = items.length;

function cycleItems() {
  var item = $('#container div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
  $("#pageNumber").html("Page Number: " + currentIndex);
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmount - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);

$('#next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmount - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('#prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmount - 1;
  }
  cycleItems();
});
