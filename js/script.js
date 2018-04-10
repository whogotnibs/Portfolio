$(function(){
  $('#headercontent').data('size','big');
});

$(window).scroll(function(){
  if($(document).scrollTop() > 0)
{
    if($('#headercontent').data('size') == 'big')
    {
        $('#headercontent').data('size','small');
        $('#headercontent').stop().animate({
            height:'40px'
        },500);
    }
}
else
  {
    if($('#headercontent').data('size') == 'small')
      {
        $('#headercontent').data('size','big');
        $('#headercontent').stop().animate({
            height:'100px'
        },500);
      }
  }
});
