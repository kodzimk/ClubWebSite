let center = [43.255259794005674,76.92942314672487];

function init()
{
    let map = new ymaps.Map('map-test',{
center: center,
zoom:10
    });


    let placemark = new ymaps.Placemark([43.22861730941943,76.92704604754407],{
        balloonContent:`
        
        <div style = "width:200px;height:200px;">
        <a style = "color: #04b;font-size:20px;">ТОО "B rent company"
        </a>
        <h4 style = "margin-top:-5px;color:rgba(14,0,0,.2);">Художественная гимнастика 
        </h4>
        
        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
        
        <div style = "margin-top:10px;font-size:15px">Мкр. Коктем-1, д.11
        </div>
        <div class = "balloon_contacts">
        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
        
        <style>
        
        button:hover{
            cursor:pointer;
        }
        
        
        </style>
        
        <form action = "GymnastyR.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>
        
        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
        
        
           </div>
        </div>
        
        `
        
            },{
        
        iconImageSize:[20,20],
        iconImageOffset:[-19,-44]
            });

    let placemark1 = new ymaps.Placemark([43.312916852276516,76.92976246993629],{
balloonContent:`

<div style = "width:200px;height:200px;">
<a style = "color: #04b;font-size:20px;">Спорт комплекс «Тулпар»</a>
<h4 style = "margin-top:-5px;color:rgba(14,0,0,.2);">Современные танцы</h4>

<div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>

<div style = "margin-top:10px;font-size:15px">ул. Жансугурова, 262/2, Жетысуйский район</div>
<div class = "balloon_contacts">
<div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>

<style>

button:hover{
    cursor:pointer;
}


</style>

<form action = "Gymnasty.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>

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
