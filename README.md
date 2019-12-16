# uploadImgs
This plugin is using to preview imgs when we upload !

#HTML Structrue
```html
	<div id="pic">
		<img id="preview" src="../imgs/default.jpeg">
	</div>
	<input type="file" id="uploadBtn" accept="image/*" onchange="setPreviewPic()">
```
#Parameter configuration

######fileObj,  //上传图片的input按钮
######preview,  //img标签
######picWrap, //包裹着img的div
######maxImgSize, //最大的单张照片的值，单位为KB
######width,//照片显示的宽度
######height//照片显示的高度

#Usage
```js
	<script type="text/javascript" src="../js/singlePic.js"></script>
	<script>
		var fileObj=document.getElementById('uploadBtn');
		var preview=document.getElementById('preview');
		var picWrap=document.getElementById('pic');
		fileObj.onchange=function(){
			var obj=new SetPreviewPic(fileObj,preview,picWrap,100);
			//定义上传图片对象，参数分别为上传图片的input按钮、img标签包、裹着img的div、最大的单张照片的值，单位为KB
			obj.uploadSinglePic(200,250);//单张图片上传，参数分别为每张的宽度、高度
			// obj.uploadPics(200,250,2);  //多张图片上传，参数分别为每张的宽度、高度、最多上传张数
		}
	</script>
```
