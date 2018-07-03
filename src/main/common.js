var x=document.getElementById("textedit");

function getLocation()
{
    window.alert('error')
    console.log('getLocation enter')
    if (navigator.geolocation)
    {
        window.alert('error111')
        navigator.geolocation.getCurrentPosition(showPosition,errorCallBack);
    }
    else
    {
        window.alert('error22')
        x.value="该浏览器不支持获取地理位置。";
    }
}

function errorCallBack(params) {
    window.alert('get position error')  
}

function showPosition(position)
{
    window.alert('get position success') 
    value="纬度: " + position.coords.latitude + 
    "<br>经度: " + position.coords.longitude; 
    window.alert(value)   
}

function getName() {
document.getElementById('textedit').value= 'hello world'

}