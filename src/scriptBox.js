let center = [43.255259794005674,76.92942314672487];

function init()
{
    let map = new ymaps.Map('map-test',{
center: center,
zoom:10
    });


    let placemark = new ymaps.Placemark([43.24355606027454,76.83527713425445],{
        balloonContent:`
        
        <div style = "width:200px;height:200px;">
        <a style = "color: #04b;font-size:20px;">ТОО "B rent company"
        </a>
        <h4 style = "margin-top:-5px;color:rgba(14,0,0,.2);">Секция по боксу</h4>
        
        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
        
        <div style = "margin-top:10px;font-size:15px">мкр. Аксай-1, дом. 10/3</div>
        <div class = "balloon_contacts">
        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
        
        <style>
        
        button:hover{
            cursor:pointer;
        }
        
        
        </style>
        
        <form action = "BoxR.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>
        
        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
        
        
           </div>
        </div>
        
        `
        
            },{
        
        iconImageSize:[20,20],
        iconImageOffset:[-19,-44]
            });

    let placemark1 = new ymaps.Placemark([43.265754923495976,76.82191675214953],{
balloonContent:`

<div style = "width:200px;height:200px;">
<a style = "color: #04b;font-size:20px;">ТОО "Ассоциация тренеров Алматы"</a>
<h4 style = "margin-top:-5px;color:rgba(14,0,0,.2);">Секция по боксу</h4>

<div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>

<div style = "margin-top:10px;font-size:15px">Мкр. Акбулак, ул. Сергазина 66</div>
<div class = "balloon_contacts">
<div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>

<style>

button:hover{
    cursor:pointer;
}


</style>

<form action = "BoxSimple.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>

<div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>


   </div>
</div>
`
    },{

    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('rulerControl'); // удаляем контрол правил

  map.geoObjects.add(placemark1);
  map.geoObjects.add(placemark);


}

ymaps.ready(init);
