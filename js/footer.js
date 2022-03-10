$(document).ready(function(){
  $('form[name=rel_f]').submit(function(){
    var url=$('select',this).val();
    window.open(url);
    return false;
  })
})