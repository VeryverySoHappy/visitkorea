$(document).ready(function(){
    var bg=$('<div class="subbg"></div>')
    $('header').append(bg)
    $('.gnb > ul > li').on({
        mouseenter:function(){
            $(this).css({
                color:'#d67d70'
            })

            $('.subwrap').show();
            $('.subbg').show();
            
        },
        mouseleave:function(){
            $(this).css({
                color:'#fff'
            })

            $('.subwrap').hide();
            $('.subbg').hide();
        }
    })

    $('.subwrap').on({
        mouseenter:function(){
            $(this).parent().find('> li').css({
                color:'#000'
            })
            $(this).parent().find()
            $(this).parent().addClass('over')
            $(this).find('>li').css({
                color:'#fff'
            })
            $('.subwrap').show();
            $(this).prev().show();
            $('.subbg').show();
        },
        mouseleave:function(){
            $(this).parent().find('> li').css({
                color:'#333'
            })
            $(this).parent().removeClass('over')
            $(this).find('>li').css({
                color:'#333'
            })
            $('.subwrap').hide();
            $('.iconwrap').hide();
            $('.subbg').hide();
        }
    })
})