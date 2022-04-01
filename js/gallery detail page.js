window.onload=function(){
  var list_zone = document.getElementById('dp_photo_list')
  var list_a = document.getElementsByTagName('a');
  for(var i = 0; i<list_a.length; i++){
    list_a[i].num=i;
    list_a[i].onclick=function(){
      var isnum = this.num;
      var ph = document.getElementById('dp_photo').children[0];
      ph.setAttribute('src','./img/gallery_detail_page/dp'+(isnum-50)+'.png');
      return false;
    } 
  }
}