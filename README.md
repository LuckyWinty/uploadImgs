# uploadImgs
This plugin is using to preview imgs when we upload !

#HTML Structrue

<code>
	<div id="pic">
		<img id="preview" src="../imgs/default.jpeg">
	</div>
	<input type="file" id="uploadBtn" accept="image/*" onchange="setPreviewPic()">
</code>

#Parameter configuration

######fileObj,  //上传图片的input按钮
######preview,  //img标签
######picWrap, //包裹着img的div
######maxImgSize, //最大的单张照片的值
######width,//照片显示的宽度
######height//照片显示的高度

#Usage
<code>
	<script type="text/javascript" src="../js/singlePic.js"></script>
	<script>
		var fileObj=document.getElementById('uploadBtn');
		var preview=document.getElementById('preview');
		var picWrap=document.getElementById('pic');
		fileObj.onchange=function(){
			var obj=new SetPreviewPic(fileObj,preview,picWrap,100);
			obj.uploadSinglePic(200,250);
			// obj.uploadPics(200,250,2);
		}
	</script>
</pre>
