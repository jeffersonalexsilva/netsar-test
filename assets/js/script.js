jQuery(document).ready(function(){
    jQuery('.gallery a').on('click',function(e){
        var _img = jQuery(this).children('img');
        jQuery('.box-img .box-img-content img').attr('src',_img.attr('src'));
        jQuery('.box-img').css({'z-index':'50','opacity':'1'});
        e.preventDefault();
    });
    jQuery('.box a.close-img').on('click',function(e){
        jQuery('.box-img').css({'z-index':'-50','opacity':'0'});
        jQuery('.box-img .box-img-content img').attr('src','#');
        e.preventDefault();
    });
});