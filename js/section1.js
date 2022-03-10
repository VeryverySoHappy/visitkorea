      // notice_txt start
      var st;
      $(document).ready(function(){
        $('.prev').on('click',function(e){
          e.preventDefault();
          // Event 인터페이스의 preventDefault() 메서드는 어떤 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정합니다.
          clearInterval(st)
          // 전역 clearInterval()메서드는 에 대한 호출로 이전에 설정된 시간이 지정된 반복 작업을 취소합니다
          $('.list ul').prepend($('.list ul li:last'));
          // 전에 있던 것을 앞에 붙여줌
        })
        
        $('.bxpause').on('click',function(e){
          e.preventDefault();
          $(this).css('display','none')
          // 멈춤버튼은 안 보이게 됌
          clearInterval(st)
          $('.play').css('display','inline-block')
          // 시작버튼은 보이게 됌
        })
  
        $('.play').on('click',function(e){
          e.preventDefault();
          $(this).css('display','none')
          clearInterval(auto,1000)
          $('.bxpause').css('display','inline-block')
        })
  
        $('.next').on('click',function(e){
          e.preventDefault();
          clearInterval(st);
          $('.list ul').append($('.list ul li:first'));
          // Element.append()메서드는 의 마지막 자식 뒤에 Node개체 또는 개체 집합을 삽입합니다 . 개체는 등가 노드로 삽입됩니다.
          // 처음에 있는 것을 마지막에 붙여줌
        })
  
        st=setInterval(auto,2000)
        // 고정된 시간 지연으로 함수를 반복적으로 호출하거나 코드 조각을 실행
      })
      function auto (){
        if($('.list ul').is(':animated')==false){
        // 애니메이션 상태가 아니라면
          $('.list ul').animate({
            top:'-20px'
          },1000,function(){
            $('.list ul').append($('.list ul li:first'));
            $('.list ul').css('top', '0px')
          })
        }
      }
      // notice end

// photo_sl start
window.onload=function(){
  var list_zone = document.getElementById('inner_list');
  var list_a = list_zone.getElementsByTagName('a');
  var before_btn=document.getElementById('before_btn');
  var next_btn=document.getElementById('next_btn');
  var bnum = 0;
  before_btn.onclick=function(){
    if(bnum<=0) return false;
    bnum--;
    list_zone.style.marginLeft=-575*bnum+'px';
    return false;
  }

  next_btn.onclick=function(){
    if(bnum>=list_a.length-3)return false;
    // return false를 여기에  작성한 이유 : 항상 3개는 남아있어야하기 때문에
      bnum++;
      list_zone.style.marginLeft=-575*bnum+'px';
      // left라고 쓰지않고 marginLeft라고 쓴 이유
      // list_zone 부분에 position:absolut를 쓰지 않아서
      // position:absolute를 썼으면 당연히 left값을 가지고 작업을 하면 편함

      // position:absolut를 쓰고 marginLeft 대신 left를 쓰는게 더 좋음
      return false;
      // return false를 작성한 이유: a링크  태그라서
      // 링크 태그 실행 안 되고 onclick만 실행 시키기 위해
  }
}
