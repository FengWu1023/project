var oTel = document.getElementById("login-tel");
var oKey = document.getElementById("login-key");
var oLbtn = document.getElementById("login-btn");
var warn = document.querySelector(".warn");


oLbtn.onclick = function() {
   //点击登陆时，增加正则去判断（3）
    
    //去判断这两个和库中是否相同 oTel.value  oKey.value;
    if (getCookie("bank")) { 
        var arrBank = getCookie("bank").split("&");
        var boo = false;
        for (var i = 0; i < arrBank.length; i++) {
            var obj = convertCartStrToObj(arrBank[i]);
            if (oTel.value == obj.tel) {//通过对象.属性的方法获取手机号，并与文本框输入对比（3）
                 if(oKey.value == obj.key){  //通过对象.属性的方法获取密码，并与文本框输入对比（4）
                    setCookie("logonoff",1);
                    alert("登陆成功")
                    window.location.href = "index.html";
                    return;
                 }else if (oKey.value==""){
                    warn.innerHTML = "&times; &nbsp密码为空请重新输入";
                 }else{
                    warn.innerHTML = "&times; &nbsp密码错误请重新输入";
                    oKey.innerHTMl = "";
                    return;
                 }
            boo=true;
            }
        }
        if(oTel.value==""){
            warn.innerHTML = "&times;&nbsp 用户为空请重新输入";
        }
        else if (!boo){
            warn.innerHTML = "&times;&nbsp 这个用户不存在";
        }
       
    }
}
function convertCartStrToObj(cartStr) {
var obj = {};
//将字符串name:17dian,key:123456,tel:18810701077 按“,”拆分成数组["name:17dian", "key:123456", "tel:18810701077"]
var arrVal = cartStr.split(",");
for (var i = 0; i < arrVal.length; i++) {
    data = arrVal[i].split(":"); // 在将每一项拆分 例如arrVal[0]时 data =["name", "17dian"]
    console.log(data)
    obj[data[0]] = data[1]; //给对象添加属性
}
return obj;
}