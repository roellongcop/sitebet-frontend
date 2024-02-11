document.addEventListener("DOMContentLoaded", function() {
  // Define jQuery selectors for the elements
  var $navbarToggler = $('.navbar-toggler');
  var $closeToggler = $('.close-icon-container button');
  var $menu = $('#navbarSupportedContent');

  // Function to explicitly open or close the menu
  function openMenu() {
    $menu.addClass('show-menu');
  }

  function closeMenu() {
    $menu.removeClass('show-menu');
  }

  // Handle click on the close toggler
  $closeToggler.click(function(event) {
    event.stopPropagation();
    closeMenu();
  });
  // Toggle the menu when the navbar toggler is clicked
  $navbarToggler.click(function(event) {
    event.stopPropagation(); // Prevent the click from being propagated to the document

    if ($menu.hasClass('show-menu')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close the menu when clicking outside of it
  $(document).click(function(event) {
    // Check if the target of the click is not the menu or navbar toggler
    if (!$menu.is(event.target) && !$menu.has(event.target).length && !$navbarToggler.is(event.target) && !$navbarToggler.has(event.target).length) {
      closeMenu();
    }
  });

  $('.img-container').each(function() {
    var imgSrc = $(this).attr('data-src');
    if (imgSrc) {
      $(this).css('background-image', 'url(' + imgSrc + ')');
    }
  });

  $('.language-dropdown').on('mouseover', function() {
    $(this).find('.dropdown-menu').show();
  }).on('mouseleave', function() {
    $(this).find('.dropdown-menu').hide();
  })

  $('.language-dropdown .dropdown-menu .dropdown-item').on('click', function() {
    const value = $(this).data('value');
    const src = $(this).find('img').attr('src');
    $(this).closest('.dropdown-menu').hide();
    $('.selected-language').text(value);
    $('.btn-language img').attr('src', src);
    $(this).closest('.dropdown-menu').find('.dropdown-item').removeClass('active');
    $(this).addClass('active');
  });

  $('main .tab-container .tab-item').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.tab-main-container').find('.tab-item').removeClass('active')
    $(this).addClass('active')
  });

  $('.deposit-tab .payment-option-container button.btn-block').on('click', function() {
    $('.deposit-tab .payment-option-container button.btn-block').removeClass('active');
    $(this).addClass('active')
  })

  $('.search-container .dropdown-menu li').on('click', function(e) {
    e.preventDefault();
    const value = $(this).find('a').data('value');
    $(this).closest('.dropdown').find('.dropdown-toggle').text(`${value}`)
  })

  $('.country-code-container .dropdown-menu li').on('click', function(e) {
    e.preventDefault();
    const value = $(this).find('a').data('value');
    $(this).closest('.dropdown').find('.dropdown-toggle').text(`${value}`)
  })
});