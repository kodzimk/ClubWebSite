let center = [43.255259794005674,76.92942314672487];

function init()
{
    let map = new ymaps.Map('map-test',{
center: center,
zoom:10
    });


    let placemark = new ymaps.Placemark([43.31291691046508,76.9297045181921],{
        balloonContent:`
        
        <div style = "width:200px;height:200px;">
        <a style = "color: #04b;font-size:20px;">ТОО "Ассоциация тренеров Алматы"
        </a>
        <h4 style = "margin-top:-5px;color:rgba(14,0,0,.2);">Спорт комплекс «Тулпар»</h4>
        
        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
        
        <div style = "margin-top:10px;font-size:15px"> ул. Жансугурова, 262/2</div>
        <div class = "balloon_contacts">
        <a style = "margin-top:-20px; font-size:15px;">Секция по таеквандо</a>
        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
        
        <style>
        
        button:hover{
            cursor:pointer;
        }
        
        
        </style>
        
        <form action = "TaekvandoA.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>
        
        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
        
        
           </div>
        </div>
        
        `
        
            },{
        
        iconImageSize:[20,20],
        iconImageOffset:[-19,-44]
            });

    let placemark1 = new ymaps.Placemark([43.24664220653509,76.93564107735948],{
balloonContent:`

<div style = "width:200px;height:200px;">
<a style = "color: #04b;font-size:20px;">ТОО "Ассоциация тренеров Алматы"</a>
<h4 style = "margin-top:-5px;color:rgba(14,0,0,.2);">Стадион «Динамо»</h4>

<div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>

<div style = "margin-top:10px;font-size:15px">ул. Наурызбай батыра, 93/79</div>
<div class = "balloon_contacts">
<a style = "margin-top:-20px; font-size:15px;">Секция по таеквандо</a>
<div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>

<style>

button:hover{
    cursor:pointer;
}


</style>

<form action = "TaekvandoD.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>

<div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>


   </div>
</div>
`
    },{

    });

    let placemark2 = new ymaps.Placemark([43.202824598500094,76.92931602046781],{
        balloonContent:`
        
        <div style = "width:200px;height:250px;">
        <a style = "color: #04b;font-size:20px;">ТОО "B rent company"</a>
        <h4 style = "margin-top:-5px;color:rgba(14,0,0,.2);">Abb Arena</h4>
        
        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
        
        <div style = "margin-top:10px;font-size:15px">мкр. Ерменсай, 3-й переулок, дом. 53</div>
        <h4 style = "margin-top:0px;color:rgba(14,0,0,.2);">Секция по таеквандо</h4>
        <div class = "balloon_contacts">
        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
        
        <style>
        
        button:hover{
            cursor:pointer;
        }
        
        
        </style>
        
        <form action = "TaekvandoR.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>
        
        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
        
        
           </div>
        </div>
        `
            },{
        
            });

            let placemark3 = new ymaps.Placemark([43.265773988874436,76.82188188343233],{
                balloonContent:`
                
                <div style = "width:200px;height:200px;">
                <a style = "color: #04b;font-size:20px;">ТОО "Ассоциация тренеров Алматы"</a>
                
                <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                
                <div style = "margin-top:10px;font-size:15px">мкр. Акбулак, ул. Сергазина 66</div>
                <h4 style = "margin-top:0px;color:rgba(14,0,0,.2);">Секция по таеквандо</h4>
                <div class = "balloon_contacts">
                <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                
                <style>
                
                button:hover{
                    cursor:pointer;
                }
                
                
                </style>
                
                <form action = "TaekvandoK.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>
                
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
  map.geoObjects.add(placemark2);
  map.geoObjects.add(placemark3);
}

ymaps.ready(init);
