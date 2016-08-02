function setPreviewPic(fileObj,preview,picWrap,width,height){
    if(fileObj.files && fileObj.files[0]){
        //火狐下，直接设置img的样式
        preview.style.display='block';
        preview.style.width=width+'px';
        preview.style.height=height+'px';
        
        //火狐7以上版本不能用getAsDataURL()
        preview.src=window.URL.createObjectURL(fileObj.files[0]);
    }else{
        //IE下，使用滤镜
        fileObj.select();
        var imgSrc=document.selection.createRange().text;
        
        //IE下必须设置包裹照片的div的大小
        picWrap.style.width=width+'px';
        picWrap.style.height=height+'px';

     //图片异常的捕捉，防止用户修改非图片的后缀来伪造图片 
        try{
        	picWrap.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)';
            picWrap.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src=imgSrc;
       }catch(e){
       	alert('你上传的图片格式有误,请重新选择！');
       	return false;
       }
       preview.style.display='none';
       document.selection.empty();
    }
    return true;
}