$(document).ready(function() {
     $('.category_item').click(function() {
          var category = $(this).attr('id');

          if(category =='all'){
               $('.draw_items').addClass('hide');
               setTimeout(function () {
                    $('.draw_items').removeClass('hide');
               }, 300);
          } else {
               $('.draw_items').addClass('hide');
               setTimeout(function () {
                    $('.' + category).removeClass('hide');
               }, 300);
          }
     });
});
