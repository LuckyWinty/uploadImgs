/**
 * @author winty
 * @version 1.0.0
 * @description 纯前端图片预览组件
 */
 ;(function(){
  function setPreviewPic(fileObj,preview,picWrap,maxImgSize,width,height){
  var pattern=new RegExp('\.(jpg|png|jpeg)+$','i');

    if(fileObj.files && fileObj.files[0]){
      //判断图片格式是否正确
      if(pattern.test(fileObj.files[0].name)){
        if(judgeSize(fileObj.files[0].size/1024),maxImgSize){
        //火狐下，直接设置img的样式
        preview.style.display='block';
        preview.style.width=width+'px';
        preview.style.height=height+'px';
        
        //火狐7以上版本不能用getAsDataURL()
        preview.src=window.URL.createObjectURL(fileObj.files[0]);
        }else{
        alert('你上传的图片太大！');
        }

      }else{
        fileObj.files[0]=[];
        alert('你上传的好像不是图片哦，请检查！');
      }
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
   function judgeSize(fileSize,maxSize){
      if(fileSize>maxSize){
        return false;
      }else{
        return true;
      }
   }
window['setPreviewPic']=setPreviewPic;
 })()
