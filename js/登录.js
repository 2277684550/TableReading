//创建一个form标签，并追加到Login_box因为每一次点击其他登录，会删除
//form，即账号登录，所以每一次点击账号登录都得重新创建form标签，
//为防止代码重复，用函数封装起来，方便调用
//因为After插入元素在IE里面不兼容，所以封装一个insertAfter函数，类似于insertBefer函数
function insertAfter(newelement,targetelement) {
    var parentelement = targetelement.parentNode;
    if (parentelement.lastChild == targetelement) {
        parentelement.appendChild(newelement);
    }
    else {
        parentelement.insertBefore(newelement,targetelement.nextSilbing);
    }
}
function New_form(){
	var Box=document.getElementsByClassName('Login_box')[0];
	var new_form=document.createElement('form');
	Box.appendChild(new_form);
}
//js执行阶段，就调用函数，创建一个form标签
New_form();
//获取form标签，因为多个地方需要获取form标签，所以创建函数封装起来
function form(){
	var form_=document.getElementsByTagName('form')[0];
	form_.className='form';
	return form_
}
//账号登录表单
function Account(){
	//获取form标签
    var form_=form();
	//创建user框
	var input_user=document.createElement('input');
	//朝父元素form追加子元素user框
	form_.appendChild(input_user);
	//为user框添加类名
	input_user.className='user';
	//为user框添加默认值
	input_user.setAttribute('placeholder','手机/邮箱/用户名');
	// 将tips_1提示框封装起来
	function tips_1(){
		var span_tips_1=document.createElement('span');
		insertAfter(span_tips_1,input_user);
		span_tips_1.className='span_tips_1';
	}
	//需要调用一次tips_1，创建一个span，使下面获取span元素时能够获取到
	tips_1();
	var as=document.getElementsByClassName('span_tips_1')[0];
	input_user.onblur=function(){
		//获取一次span标签
		var span_tips_1=document.getElementsByClassName('span_tips_1')[0];
		//正则表达式，不能输入汉字与空格，6~16位
		var reg=/^[^\u4e00-\u9fa5 ]{6,16}$/;
		if(!reg.test(input_user.value) || input_user.value.toLowerCase().includes('administrator')){
		     //如果不满足条件，则在span标签输出
             span_tips_1.innerHTML='用户名为6~16位，不得有汉字与空格'; 
			 return false
			}
			else{
			//因为此时span标签已经创建过了，无论满不满足条件，都有span标签，此时
			//删除不会报错
			span_tips_1.parentNode.removeChild(span_tips_1);
			//因为条件满足，输入框失去焦点后删除了span标签，因为tips_1函数只在外面
			//初始化了一次，此时删除了span标签，再次执行失去焦点函数时，已经没有了，
			// span标签，此时会报错，找不到span标签，所以需要再次执行一次tips_1函数
			// 重新创建一个span标签，此时再次执行焦点函数时才不会报错
			tips_1();
			return true
			}
	}
	//创建passed框
	var input_psd=document.createElement('input');
	//追加子元素passed框
	form_.appendChild(input_psd);
	//为passed框追加类名
	input_psd.className='psd';
	//为passed框添加type
	input_psd.setAttribute('type','password');
	//为passed框添加默认值
	input_psd.setAttribute('placeholder','密码');
	//创建显示密码栏，就是密码栏里面的眼睛
	var display_psd=document.createElement('span');
	form_.appendChild(display_psd);
	display_psd.className='display_psd';
	//设置计数器
	var index_psd=1;
	//为显示密码栏绑定事件
	display_psd.onclick=function(){
		//第一次点击时，让密码框变为文本框，显示密码，
		//第二次点击时，计数器加一，让密码框重新变为密码框
		if(index_psd%2!==0){
			input_psd.removeAttribute('type');
		}else{
			input_psd.setAttribute('type','password');
		}
		index_psd++;
	}
	//1.必须先创建一个span标签，并先初始化执行一次
	function tips_2(){
		var span_tips_2=document.createElement('span');
		insertAfter(span_tips_2,input_psd);
		span_tips_2.className='span_tips_2'
	}
	tips_2();
	//2.每一次
	input_psd.onblur=function(){
		var span_tips_2=document.getElementsByClassName('span_tips_2')[0];
		var reg =/^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]{8,30}$/;
		if(!reg.test(input_psd.value) || input_psd.value.toLowerCase().includes('administrator')){
		  span_tips_2.innerHTML='密码由大小写字母，数字与符号组成';
		  return false
		}
		else{
			span_tips_2.parentNode.removeChild(span_tips_2);
			tips_2();
			return true
		}
	}
	//创建记住密码选中框
	var checked=document.createElement('input');
	//追加记住密码选中框
	form_.appendChild(checked);
	//添加type属性
	checked.setAttribute('type','checkbox');
	//为checked框添加类名
	checked.className='check';
	// console.log(isrember_);
	//创建span，内容为‘记住密码’
	var span_1=document.createElement('span');
	//追加span标签
	form_.appendChild(span_1);
	//为span_1添加类名
	span_1.className='remember';
	//为span添加内容
	span_1.innerHTML='记住密码';
	//创建忘记密码元素
	var span_2=document.createElement('span');
	//追加忘记密码框
	form_.appendChild(span_2);
	//为span_2添加类名
	span_2.className='forget';
	//为span添加内容
	span_2.innerHTML='忘记密码';
	//创建button框
	var button_=document.createElement('input');
	//追加button框
	form_.appendChild(button_);
	//为button框添加value值
	button_.setAttribute('value','登录');			
	//为button框添加类名
	button_.className='button';
	//为登录按钮绑定事件
	button_.onclick=function(){
		//判断如果用户名和密码输入无误，才会跳转登录成功，如果有误反之则触发了两个
		// 的输入框输入有误事件，即弹出提示栏，此时成功输入正确格式才能登录成功
		if(input_user.onblur()&&input_psd.onblur()){
			var ajax_=new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
			ajax_.open('get','./数据.json',true);
			ajax_.send();
			ajax_.onreadystatechange=function(){
				if(ajax_.readyState==4){
					if(ajax_.status==200){
						var json_=ajax_.responseText;
						json_=JSON.parse(json_);
						var user_=document.getElementsByClassName('user')[0].value;
						var psd_=document.getElementsByClassName('psd')[0].value;
						if(user_===json_.user&&psd_===json_.psd){
							//只有登录成功之后，才会把成功的账户和密码储存在本地
							//根据记住密码框的选定状态来判断是否记住密码，如果选中了则为true，将数据
							//存入本地数据
							var isrember_=document.getElementsByClassName('check')[0].checked;
							if(isrember_){
								localStorage.setItem('用户名',document.getElementsByClassName('user')[0].value);
								localStorage.setItem('密码',document.getElementsByClassName('psd')[0].value);
								localStorage.setItem('是否记住密码',isrember_);
							}
							alert('登录成功')
						}else{
							alert('用户名或密码输入不正确')
						}
						console.log(user_);
						console.log(psd_);
						console.log(json_.user);
						console.log(json_.psd);
						
					}
			
				}
			}
		}
		
	}
	//将获取本地数据事件封装起来，方便调用
    function remember_psd(){
		document.getElementsByClassName('user')[0].value=localStorage.getItem('用户名');
		document.getElementsByClassName('psd')[0].value=localStorage.getItem('密码');
		document.getElementsByClassName('check')[0].checked=localStorage.getItem('是否记住密码');    
	}
	//页面初始化时，数据框调用一次本地数据，如果有就显示，如果没有则调用为空，显示为空
	remember_psd();
	//删除所有本地数据以及当前显示数据
	//为忘记密码框绑定事件
	document.getElementsByClassName('forget')[0].onclick=function(){
		//删除数据
		localStorage.removeItem('用户名');
		localStorage.removeItem('密码');
		localStorage.removeItem('是否记住密码');
		//删除当前数据框数据，因为此时本地数据已经被删除为空了，当前数据框显示本地数据
		//数据库显示为空，达到清空数据框的目的
		remember_psd();
	}
}
//执行阶段调用一次form函数，让账号登录表单显示一次，用于初始化页面
Account();
//QQ登录表单
function QQ(){
  New_form();
  var QQ_box=form();
  var img_QQ=document.createElement('img');
	img_QQ.setAttribute('src','./images/QQ登录.jpg');
	img_QQ.className='img_QQ';
	QQ_box.appendChild(img_QQ);
	var span_QQ=document.createElement('span');
	QQ_box.appendChild(span_QQ);
	span_QQ.className='span_QQ';
	span_QQ.innerHTML='您将跳转指定页面进行登录操作';
    button_QQ=document.createElement('input');
	QQ_box.appendChild(button_QQ);
	button_QQ.className='button_QQ';
	button_QQ.setAttribute('value','前去登录 QQ');
	var xieYi_span_QQ=document.createElement('span');
	QQ_box.appendChild(xieYi_span_QQ);
	xieYi_span_QQ.className='xieYi_span';
	xieYi_span_QQ.innerHTML='登录即代表同意《用户服务协议》和《隐私政策》'
}
//微信登录表单
function WeiXin(){
	New_form();
	var weiXin=form();
	var img_weiXin=document.createElement('img');
	weiXin.appendChild(img_weiXin);
	img_weiXin.className='img_weiXin';
	img_weiXin.setAttribute('src','./images/微信登录.jpg')
	var span_weiXin=document.createElement('span');
	weiXin.appendChild(span_weiXin);
	span_weiXin.className='span_weiXin';
	span_weiXin.innerHTML='使用微信扫一扫登录'+'<br>'+'"桌子阅读"'
	var xieYi_span_weiXin=document.createElement('span');
	weiXin.appendChild(xieYi_span_weiXin);
	xieYi_span_weiXin.className='xieYi_span';
	xieYi_span_weiXin.innerHTML='登录即代表同意《用户服务协议》和《隐私政策》'
}
//获取li
var li_=document.getElementsByTagName('li');
//循环为每一个li加上点击按钮
for(var i=0;i<li_.length;i++){
	//为每个li添加下标索引
	li_[i].setAttribute('index',i);
	//添加点击事件
	li_[i].onclick=function(){
		//每一次点击时，清空所有li的变化样式，即清空所有li的class类名
		for(var z=0;z<li_.length;z++){
			li_[z].className=''
		}
		//读取当前点击的li的下标
		var index_=this.getAttribute('index');
		//令此下标获取active的class类名
		li_[index_].className='active';
		//点击账号登录时触发的事件
		if(index_==0){
			//每一次点击账号登录时，删除原本的form表单
			form().parentNode.removeChild(form());
			//创建一个新的form标签
			New_form();
			//执行一次form函数，显示一次form表单
			Account();
	
		}
		//点击QQ登录时触发的函数
		else if(index_==1){
			//点击QQ登录时删除form表单
			form().parentNode.removeChild(form());
			//删除form表单后需要再创建一个form标签，
			//因为 1：
			//再次点击账号登录时需要删除一次原本的form表单，但是此时
			//form表单所在的form标签已经被删除了，此时点击账号登陆会
			//找不到form标签，所以需要添加form标签
			//2:
			//如果连续点击两次QQ登录，因为第一次已经把账户登录表单所在的form标签
			//删除了，第二次点击时会找不到form标签，会报错
			//所以需要再次创建一个form标签，因为没有再次执行Account()函数
			//所以不用担心会出现用户登录表单
			New_form();
			QQ();
		}
		else{
			form().parentNode.removeChild(form());
			New_form();
			WeiXin()
		}
	}
}
