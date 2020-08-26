$(function() {
    $('.hero-carousel').flickity({
      cellAlign: 'left',
      prevNextButtons: false
    });

    $('.carousel-products').flickity({
      cellAlign: 'left',
      pageDots: false,
      groupCells: 4
    });

    $('.store-header-nav .menu-toggle').on('click', function() {
      $('.store-header-nav .store-header-nav-list').toggleClass('is-active');
    });
});
