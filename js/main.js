"use strict";

$(document).ready(function () {
  //PRELOADER
  $(".preloader").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.

  // HOME PAGE HEIGHT
  function homeh() {
    var hometext = $(".home, .portfolio-main");

    hometext.css({
      height: $(window).height() + "px",
    });
  }
  homeh();
  $(window).resize(homeh);

  // SCROLL ANIMATION JS
  if ($(".wow").length) {
    var wow = new WOW({
      offset: 0,
      mobile: false,
    });

    wow.init();
  }

  //SMOOTH SCROLL
  var lastId,
    topMenu = $("nav"),
    topMenuHeight = topMenu.outerHeight() + 15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function () {
      //   var item = $($(this).attr("href"));
      //   if (item.length) { return item; }
    });

  menuItems.on("click", function (e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top + 1;
    $("html, body").stop().animate(
      {
        scrollTop: offsetTop,
      },
      500
    );
    e.preventDefault();
  });

  $(window).scroll(function () {
    var fromTop = $(this).scrollTop() + topMenuHeight;
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop) return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      menuItems
        .parent()
        .removeClass("active")
        .end()
        .filter("[href='#" + id + "']")
        .parent()
        .addClass("active");
    }
  });

  $(document).on("click", ".down-icon", function (event) {
    event.preventDefault();
    $("body,html").animate({ scrollTop: $(window).height() }, 800);
  });

  //NAVBAR SHOW - HIDE
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var homeheight = $(".home").height() - 86;

    if (scroll > homeheight) {
      $("header.fixed").slideDown(100);
    } else {
      $("header.fixed").slideUp(100);
    }
  });
  //Responsive Menu
  if ($(window).width() < 767) {
    $(".hassub a").on("click", function () {
      $(this).parent(".hassub").children(".submenu").slideToggle(300);
    });
  }

  // HOME TYPED JS
  if ($(".element").length) {
    $(".element").each(function () {
      $(this).typed({
        strings: [
          $(this).data("text1"),
          $(this).data("text2"),
          $(this).data("text3"),
        ],
        loop: $(this).data("loop") ? $(this).data("loop") : false,
        backDelay: $(this).data("backdelay") ? $(this).data("backdelay") : 2000,
        typeSpeed: 10,
      });
    });
  }

  // DOWN ICON EFFECT
  $(".down-icon").mouseleave(function (e) {
    TweenMax.to(this, 0.3, { scale: 1 });
    TweenMax.to(".icon-circle, .icon", 0.3, { scale: 1, x: 0, y: 0 });
  });

  $(".down-icon").mouseenter(function (e) {
    TweenMax.to(this, 0.3, { transformOrigin: "0 0", scale: 1 });
    TweenMax.to(".icon-circle", 0.3, { scale: 1.2 });
  });

  $(".down-icon").mousemove(function (e) {
    callParallax(e);
  });

  function callParallax(e) {
    parallaxIt(e, ".icon-circle", 60);
    parallaxIt(e, ".icon", 40);
  }

  function parallaxIt(e, target, movement) {
    var $this = $(".down-icon");
    var boundingRect = $this[0].getBoundingClientRect();
    var relX = e.pageX - boundingRect.left;
    var relY = e.pageY - boundingRect.top;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    TweenMax.to(target, 0.3, {
      x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
      y:
        ((relY - boundingRect.height / 2 - scrollTop) / boundingRect.width) *
        movement,
      ease: Power2.easeOut,
    });
  }

  //RESPONSIVE MENU
  $(".nav-icon").on("click", function () {
    $("header.type-1 nav").slideToggle();
  });

  if ($(window).width() < 768) {
    $("nav ul li a")
      .not("nav ul li.hassub a")
      .on("click", function () {
        $(
          "header.type-1 nav, header.type-1 nav ul li.hassub .submenu"
        ).slideUp();
      });
  }

  // INSTAGRAM API
  $(function () {
    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url:
        "https://api.instagram.com/v1/users/6094051279/media/recent/?access_token=6094051279.1677ed0.aa470eb4ccee48cb821ec2d558a56ccf",
      success: function (data) {
        for (var i = 0; i < 6; i++) {
          $(".instagram ul").append(
            "<li><a target='_blank' href='" +
              data.data[i].link +
              "'><img src='" +
              data.data[i].images.low_resolution.url +
              "' /></a></li>"
          );
        }
      },
    });
  });

  //OWL CAROUSEL GENERAL JS
  var owlcar = $(".owl-carousel");
  if (owlcar.length) {
    owlcar.each(function () {
      var $owl = $(this);
      var itemsData = $owl.data("items");
      var autoplayData = $owl.data("autoplay");
      var autoPlayTimeoutData = $owl.data("autoplaytimeout");
      var dotsData = $owl.data("dots");
      var navData = $owl.data("nav");
      var marginData = $owl.data("margin");
      var stagePaddingData = $owl.data("stagepadding");
      var itemsDesktopData = $owl.data("items-desktop");
      var itemsTabletData = $owl.data("items-tablet");
      var itemsTabletSmallData = $owl.data("items-tablet-small");
      $owl.owlCarousel({
        items: itemsData,
        dots: dotsData,
        nav: navData,
        margin: marginData,
        loop: true,
        stagePadding: stagePaddingData,
        autoplay: autoplayData,
        autoplayTimeout: autoPlayTimeoutData,
        navText: [
          "<i class='fas fa-arrow-left'></i>",
          "<i class='fas fa-arrow-right'></i>",
        ],
        responsive: {
          0: {
            items: itemsTabletSmallData,
            stagePadding: 0,
          },
          600: {
            items: itemsTabletData,
            stagePadding: 0,
          },
          1000: {
            items: itemsDesktopData,
          },
        },
      });
    });
  }

  // PORTFOLIO FILTER LINK
  $(".filter-link").on("click", function () {
    $(".portfolio_filter").show(300);
    $(".filter-link").hide(200);
  });

  // MAGNIFIC POPUP FOR PORTFOLIO PAGE
  if ($(".lightbox").length) {
    $(".lightbox").magnificPopup({
      type: "image",
      gallery: { enabled: true },
      zoom: { enabled: true, duration: 300 },
    });
  }

  // LIGHTBOX VIDEO
  if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").length) {
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false,
    });
  }
  // PORTFOLIO CONTENT
  $(".portfolio.type-1 #grid-container").cubeportfolio({
    layoutMode: "mosaic",
    defaultFilter: "*",
    animationType: "quicksand",
    gapHorizontal: 25,
    gapVertical: 25,
    gridAdjustment: "responsive",
    filters: ".portfolio_filter",
    mediaQueries: [
      {
        width: 1500,
        cols: 4,
      },
      {
        width: 1100,
        cols: 4,
      },
      {
        width: 800,
        cols: 4,
      },
      {
        width: 480,
        cols: 2,
        options: {
          gapHorizontal: 30,
          gapVertical: 10,
        },
      },
    ],
    caption: "zoom",
    displayType: "sequentially",
    displayTypeSpeed: 80,

    plugins: {
      loadMore: {
        element: "#port-loadMore",
        action: "click",
        loadItems: 3,
      },
    },

    // lightbox
    lightboxDelegate: ".cbp-lightbox",
    lightboxGallery: true,
    lightboxTitleSrc: "data-title",
    lightboxCounter:
      '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
  });

  // PORTFOLIO CONTENT  TYPE 2
  $(".portfolio.type-2 #grid-container").cubeportfolio({
    layoutMode: "grid",
    defaultFilter: "*",
    animationType: "quicksand",
    gapHorizontal: 25,
    gapVertical: 25,
    gridAdjustment: "responsive",
    filters: ".portfolio_filter",
    mediaQueries: [
      {
        width: 1500,
        cols: 3,
      },
      {
        width: 1100,
        cols: 3,
      },
      {
        width: 800,
        cols: 2,
      },
      {
        width: 480,
        cols: 1,
        options: {
          gapHorizontal: 30,
          gapVertical: 10,
        },
      },
    ],
    caption: "zoom",
    displayType: "sequentially",
    displayTypeSpeed: 80,

    plugins: {
      loadMore: {
        element: "#port-loadMore",
        action: "click",
        loadItems: 3,
      },
    },

    // lightbox
    lightboxDelegate: ".cbp-lightbox",
    lightboxGallery: true,
    lightboxTitleSrc: "data-title",
    lightboxCounter:
      '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
  });

  // PORTFOLIO CONTENT  TYPE 3
  $(".portfolio.type-3 #grid-container").cubeportfolio({
    layoutMode: "grid",
    defaultFilter: "*",
    animationType: "quicksand",
    gapHorizontal: 25,
    gapVertical: 25,
    gridAdjustment: "responsive",
    filters: ".portfolio_filter",
    mediaQueries: [
      {
        width: 1500,
        cols: 4,
      },
      {
        width: 1100,
        cols: 4,
      },
      {
        width: 800,
        cols: 4,
      },
      {
        width: 480,
        cols: 1,
        options: {
          gapHorizontal: 30,
          gapVertical: 10,
        },
      },
    ],
    caption: "zoom",
    displayType: "sequentially",
    displayTypeSpeed: 80,

    plugins: {
      loadMore: {
        element: "#port-loadMore",
        action: "click",
        loadItems: 3,
      },
    },

    // lightbox
    lightboxDelegate: ".cbp-lightbox",
    lightboxGallery: true,
    lightboxTitleSrc: "data-title",
    lightboxCounter:
      '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
  });
}); // document read end

$(window).load(function () {
  //FOOTER HEIGHT
  var wind = $(window);
  function footsize() {
    if ($("footer").height() < wind.height()) {
      $("body").css({
        "padding-bottom": $("footer").height() + "px",
      });
      $("footer").css({
        position: "fixed",
      });
    } else {
      $("body").css({
        "padding-bottom": "0",
      });
      $("footer").css({
        position: "relative",
      });
    }
  }
  footsize();
  wind.resize(footsize);
}); // document load end
