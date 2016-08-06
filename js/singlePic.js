/**
 * @author winty
 * @version 1.0.0
 * @description 纯前端图片预览组件
 */
 ;(function(){
 	var SetPreviewPic=function(fileObj,preview,picWrap,maxImgSize){
 		this.fileObj=fileObj;
 		this.preview=preview;
 		this.picWrap=picWrap;
 		this.maxImgSize=maxImgSize;
 	}
 	SetPreviewPic.prototype.pattern=new RegExp('\.(jpg|png|jpeg)+$','i');

 	SetPreviewPic.prototype.uploadSinglePic=function(width,height){
 		if(this.fileObj.files && this.fileObj.files[0]){
      //判断图片格式是否正确
      if(this.pattern.test(fileObj.files[0].name)){
      	if(judgeSize(fileObj.files[0].size/1024,this.maxImgSize)){
        //火狐下，直接设置img的样式
        this.preview.style.display='block';
        this.preview.style.width=width+'px';
        this.preview.style.height=height+'px';
        
        //火狐7以上版本不能用getAsDataURL()
        this.preview.src=window.URL.createObjectURL(this.fileObj.files[0]);
    }else{
    	alert('你上传的图片太大！');
    }

}else{
	this.fileObj.files[0]=[];
	alert('你上传的好像不是图片哦，请检查！');
}
}else{
        //IE10下，使用滤镜
        this.fileObj.select();
        if(document.selection){
        	var imgSrc=document.selection.createRange().text;
        	var image=new Image();        
        	image.src=imgSrc;        
        	filesize=image.fileSize;  
        	if(judgeSize(image.fileSize/1024,this.maxImgSize)){
        //IE下必须设置包裹照片的div的大小
        this.picWrap.style.width=width+'px';
        this.picWrap.style.height=height+'px';

        try{
        	this.picWrap.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)';
        	this.picWrap.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src=imgSrc;
        }catch(e){
        	alert('你上传的图片格式有误,请重新选择！');
        	return false;
        }
        this.preview.style.display='none';
        document.selection.empty();
    }else{
    	alert('你上传的图片太大！');
    }
}
}
return true;
}
SetPreviewPic.prototype.uploadPics=function(width,height,maxPics,maxSize){

	if(maxPics){
		if(this.fileObj.files && this.fileObj.files[0]){
			var imgs=this.picWrap.querySelectorAll('img');
			var num=imgs.length;
			var html=this.picWrap.innerHTML;
			if(Number(num)<Number(maxPics)){
              if(num==1&&(!imgs[0].classList.contains('newLoad'))){ //覆盖第一张默认图片
              	html='';
              }
              if(this.pattern.test(fileObj.files[0].name)){
              	if(judgeSize(fileObj.files[0].size/1024,this.maxImgSize)){
              		html='<img class="newLoad" style="margin:5px;width:'+width+'px;height:'+height+'px;" src='+window.URL.createObjectURL(this.fileObj.files[0])+' />'+html;
              		this.picWrap.innerHTML=html;
              	}else{
              		alert('你上传的图片太大！');
              	}
              }else{
              	alert('你上传的好像不是图片哦，请检查！');
              }
          }else{
          	alert('每次最多上传'+maxPics+'张图片！');
          }
      }else{
        //IE下
        var nums=this.picWrap.childNodes.length;

        if(nums<maxPics+2){
        	this.fileObj.select();
        	if(document.selection){
        		var imgSrc=document.selection.createRange().text;

        		var image=new Image();        
        		image.src=imgSrc;        
        		filesize=image.fileSize;  
        		if(judgeSize(image.fileSize/1024,this.maxImgSize)){

        //IE下必须设置div的大小
        var ele=document.createElement('div');
        ele.style.width=width+'px';
        ele.style.height=height+'px';
        ele.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src='"+imgSrc+"')";

        try{
        	this.picWrap.appendChild(ele);
        }catch(e){
        	alert('你上传的图片格式有误,请重新选择！');
        	return false;
        }
        this.preview.style.display='none';
        document.selection.empty();
    }else{
    	alert('你上传的图片太大！');
    }
}
}else{
	alert('最多可上传'+maxPics+'张图片！');
}
}
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
window['SetPreviewPic']=SetPreviewPic;
})()
