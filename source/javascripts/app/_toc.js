//= require ../lib/_jquery
//= require ../lib/_jquery_ui
//= require ../lib/_jquery.tocify
//= require ../lib/_imagesloaded.min
(function (global) {
  'use strict';

  var closeToc = function() {
    $(".tocify-wrapper").removeClass('open');
    $("#nav-button").removeClass('open');
  };

  var makeToc = function() {
    global.toc = $("#toc").tocify({
      selectors: 'h1, h2',
      extendPage: false,
      theme: 'none',
      smoothScroll: false,
      showEffectSpeed: 0,
      hideEffectSpeed: 180,
      ignoreSelector: '.toc-ignore',
      highlightOffset: 60,
      scrollTo: -1,
      scrollHistory: true,
      hashGenerator: function (text, element) {
        return element.prop('id');
      }
    }).data('toc-tocify');

    $("#nav-button").click(function() {
      $(".tocify-wrapper").toggleClass('open');
      $("#nav-button").toggleClass('open');
      return false;
    });

    $(".page-wrapper").click(closeToc);
    $(".tocify-item").click(closeToc);
  };

  // Hack to make already open sections to start opened,
  // instead of displaying an ugly animation
  function animate() {
    setTimeout(function() {
      toc.setOption('showEffectSpeed', 180);
    }, 50);
  }

  $(function() {
    makeToc();
    animate();
    setupLanguages($('body').data('languages'));
    $('.content').imagesLoaded( function() {
      global.toc.calculateHeights();
    });
  });


  // Change the text in the sidebar to match the CRUD css styles
  // It's duplicate code, but will update it in the future
  $(function(){

    var search = 'GET';

    $(".tocify-wrapper .tocify-subheader .tocify-item > a:contains('"+search+"')").each(
      function (){
        var regex = new RegExp(search, 'gi');
        $(this).html($(this).text().replace(regex, "<span class='get-toc'>"+search+"</span>"));
      });

    var search = 'POST';

    $(".tocify-wrapper .tocify-subheader .tocify-item > a:contains('"+search+"')").each(
      function (){
        var regex = new RegExp(search, 'gi');
        $(this).html($(this).text().replace(regex, "<span class='post-toc'>"+search+"</span>"));
      });

    var search = 'PUT';

    $(".tocify-wrapper .tocify-subheader .tocify-item > a:contains('"+search+"')").each(
      function (){
        var regex = new RegExp(search, 'gi');
        $(this).html($(this).text().replace(regex, "<span class='put-toc'>"+search+"</span>"));
      });

    var search = 'DELETE';

    $(".tocify-wrapper .tocify-subheader .tocify-item > a:contains('"+search+"')").each(
      function (){
        var regex = new RegExp(search, 'gi');
        $(this).html($(this).text().replace(regex, "<span class='delete-toc'>"+search+"</span>"));
      });

  }); 

  
})(window);

