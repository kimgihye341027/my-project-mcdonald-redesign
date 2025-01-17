$(document).ready(function(){
    $(".gnb").hover(
        function () {  
          $(this).find(".depth2").stop().slideDown();
        },
        function () {
          $(this).find(".depth2").stop().slideUp();
        }
      );
})