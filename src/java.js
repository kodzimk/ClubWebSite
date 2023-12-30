let center = [43.255259794005674,76.92942314672487];

function init()
{
    let map = new ymaps.Map('map-test',{
center: center,
zoom:19
    });

    let placemark = new ymaps.Placemark(center,{
        balloonContentHeader:'Хедер балуна',
        balloonContentBody:'Боди балуна',
        balloonContentFooter:'Подвал',

    },{

iconImageSize:[20,20],
iconImageOffset:[0,0]
    });


    let placemark1 = new ymaps.Placemark(center,{
balloonContent:`

<div style = "width:200px;height:200px;">
<a style = "color: #04b;font-size:20px;">Хан-Темир</a>
<h4 style = "margin-top:-5px;color:rgba(14,0,0,.2);">Спортивные секций</h4>

<div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>

<div style = "margin-top:10px;font-size:15px;">Мкр. Аксай-1, дом. 10/3</div>
<div class = "balloon_contacts">
<a style = "margin-top:-20px; font-size:15px;">Секция по каратэ</a>
<div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>

<style>

button:hover{
    cursor:pointer;
}


</style>

<form action = "SectionKarate.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>

<div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>


   </div>
</div>

`

    },{

iconImageSize:[20,20],
iconImageOffset:[-19,-44]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); 


  map.geoObjects.add(placemark1);

}

ymaps.ready(init);
