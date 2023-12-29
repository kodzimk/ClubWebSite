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

<div class = "balloon">
<div class = "ballon_address">Адрес: мкр. Аксай-1, дом. 10/3</div>
<div class = "balloon_contacts">
<a>Секция по каратэ</a>
<form action = "main.html"> <button style = "background-color:rgba(0,0,0,0.29);background:rgba(0,0,0,0.3);width:150px;height:30px;">Узнать больше</button></form>
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

  map.geoObjects.add(placemark);
  map.geoObjects.add(placemark1);

}

ymaps.ready(init);
