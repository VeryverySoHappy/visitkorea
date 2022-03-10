$(document).ready(function(){
  $('.sec2_inner > div:gt(0)').hide();
  $('.sec2_list a').on('click',function(e){
    e.preventDefault();
    $('.sec2_list a.on').removeClass('on');
    var num =$(this).parent().index();
    $('.sec2_inner > div').hide();
    $(this).addClass('on')
    $('.sec2_inner > div:eq('+num+')').show();
  })
})
