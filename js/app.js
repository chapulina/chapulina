/* Isotope for layout filtering */

$(document).ready(function () {

  // Init Isotope
  let $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: 30,
    }
  })

  // Layout Isotope after each image loads
  $grid.imagesLoaded().progress(function() {
    $grid.isotope('layout');
  });

  // Store filter for each group
  var filters = {};

  $('.filters').on( 'click', '.btn', function() {
    var $this = $(this);
    var $buttonGroup = $this.parents('.btn-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    filters[filterGroup] = $this.attr('data-filter');
    var filterValue = concatValues(filters);
    $grid.isotope({filter: filterValue});
  });

  // change is-checked class on buttons
  $('.btn-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'btn', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

  // flatten object by concatting values
  function concatValues(obj) {
    var value = '';
    for (var prop in obj) {
      value += obj[prop];
    }
    return value;
  }
})
