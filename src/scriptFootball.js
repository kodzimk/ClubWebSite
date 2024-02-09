let center = [43.255259794005674,76.92942314672487];

function init()
{
    let map = new ymaps.Map('map-test',{
center: center,
zoom:10
    });


    let placemark = new ymaps.Placemark([43.31291691046508,76.9297045181921],{
        balloonContent:`
        
        <div style = "width:200px;height:170px;">
        <a style = "color: #04b;font-size:20px;">ФК Тулпар
        </a>
        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
        
        <div style = "margin-top:10px;font-size:15px"> ул. Жансугурова, 262/2</div>
        <div class = "balloon_contacts">
        <a style = "margin-top:-20px; font-size:15px;">Секция по футболу</a>
        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
        
        <style>
        
        button:hover{
            cursor:pointer;
        }
        
        
        </style>
        
        <form action = "FootballT.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>
        
        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
        
        
           </div>
        </div>
        
        `
        
            },{
        
        iconImageSize:[20,20],
        iconImageOffset:[-19,-44]
            });

    let placemark1 = new ymaps.Placemark([43.267660715030786,76.97012155952454],{
balloonContent:`

<div style = "width:200px;height:200px;">
<a style = "color: #04b;font-size:20px;">ФК Меркурий</a>
<h4 style = "margin-top:-5px;color:rgba(14,0,0,.2);">ТОО "Ассоциация тренеров Алматы"</h4>

<div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>

<div style = "margin-top:10px;font-size:15px">ул.Коперника, 130</div>
<div class = "balloon_contacts">
<a style = "margin-top:-20px; font-size:15px;">Секция по футболу</a>
<div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>

<style>

button:hover{
    cursor:pointer;
}


</style>

<form action = "FootballM.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>

<div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>


   </div>
</div>
`
    },{

    });

    let placemark2 = new ymaps.Placemark([43.23930939087416,76.92390969798592],{
        balloonContent:`
        
        <div style = "width:200px;height:200px;">
        <a style = "color: #04b;font-size:20px;">ТОО "Ассоциация тренеров Алматы"</a>

        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
        
        <div style = "margin-top:10px;font-size:15px">Центральный стадион, ул. Сатпаева, 29/3</div>
        <h4 style = "margin-top:0px;color:rgba(14,0,0,.2);">Секция по футболу</h4>
        <div class = "balloon_contacts">
        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
        
        <style>
        
        button:hover{
            cursor:pointer;
        }
        
        
        </style>
        
        <form action = "FootballF.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>
        
        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
        
        
           </div>
        </div>
        `
            },{
        
            });

            let placemark3 = new ymaps.Placemark([43.24667943047602,76.93562087301623],{
                balloonContent:`
                
                <div style = "width:200px;height:240px;">
                <a style = "color: #04b;font-size:20px;">ФК Динамо</a>
                <h4 style = "margin-top:-5px;color:rgba(14,0,0,.2);">ТОО "Ассоциация тренеров Алматы"</h4>
                <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                
                <div style = "margin-top:10px;font-size:15px">ул.Наурызбай батыра, дом 93/ 79 </div>
                <h4 style = "margin-top:0px;color:rgba(14,0,0,.2);">Секция по футболу</h4>
                <div class = "balloon_contacts">
                <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                
                <style>
                
                button:hover{
                    cursor:pointer;
                }
                
                
                </style>
                
                <form action = "FootballD.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>
                
                <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                
                
                   </div>
                </div>
                `
                    },{
                
                    });

                    let placemark4 = new ymaps.Placemark([43.23709288866867,76.83329161147036],{
                        balloonContent:`
                        
                        <div style = "width:200px;height:240px;">
                        <a style = "color: #04b;font-size:20px;">FC Dos-stars </a>
                        <h4 style = "margin-top:-5px;color:rgba(14,0,0,.2);">ТОО "Ассоциация тренеров Алматы"</h4>
                        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                        
                        <div style = "margin-top:10px;font-size:15px">мкр. Аксай-2, дом. 33, Школа № 42</div>
                        <h4 style = "margin-top:0px;color:rgba(14,0,0,.2);">Секция по футболу</h4>
                        <div class = "balloon_contacts">
                        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                        
                        <style>
                        
                        button:hover{
                            cursor:pointer;
                        }
                        
                        
                        </style>
                        
                        <form action = "FootballDS.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>
                        
                        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                        
                        
                           </div>
                        </div>
                        `
                            },{
                        
                            });

                            let placemark5 = new ymaps.Placemark([43.24418414242152,76.8168594682617],{
                                balloonContent:`
                                
                                <div style = "width:200px;height:240px;">
                                <a style = "color: #04b;font-size:20px;">FC Akkent Football club  </a>
                                <h4 style = "margin-top:-5px;color:rgba(14,0,0,.2);">ТОО "Ассоциация тренеров Алматы"</h4>
                                <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                                
                                <div style = "margin-top:10px;font-size:15px"> мкр. Аккент дом. 33
                                Школа № 181</div>
                                <h4 style = "margin-top:0px;color:rgba(14,0,0,.2);">Секция по футболу</h4>
                                <div class = "balloon_contacts">
                                <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                                
                                <style>
                                
                                button:hover{
                                    cursor:pointer;
                                }
                                
                                
                                </style>
                                
                                <form action = "FootballAK.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>
                                
                                <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                                
                                
                                   </div>
                                </div>
                                `
                                    },{
                                
                                    });

                                    let placemark6 = new ymaps.Placemark([43.257022520234344,76.92075522222898],{
                                        balloonContent:`
                                        
                                        <div style = "width:200px;height:200px;">
                                        <a style = "color: #04b;font-size:20px;">ФК Байконур
                                        </a>
                                        <h4 style = "margin-top:-5px;color:rgba(14,0,0,.2);">ТОО "B rent company"</h4>
                                        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                                        
                                        <div style = "margin-top:10px;font-size:15px">  ул. Шагабутдинова, дом 53Б, Школа N95</div>
                                        <h4 style = "margin-top:0px;color:rgba(14,0,0,.2);">Секция по футболу</h4>
                                        <div class = "balloon_contacts">
                                        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                                        
                                        <style>
                                        
                                        button:hover{
                                            cursor:pointer;
                                        }
                                        
                                        
                                        </style>
                                        
                                        <form action = "FootballB.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>
                                        
                                        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                                        
                                        
                                           </div>
                                        </div>
                                        `
                                            },{
                                        
                                            });

                                            let placemark7 = new ymaps.Placemark([43.197359369244175,76.87542168717191],{
                                                balloonContent:`
                                                
                                                <div style = "width:200px;height:200px;">
                                                <a style = "color: #04b;font-size:20px;">ФК Женис
                                                </a>
                                                <h4 style = "margin-top:-5px;color:rgba(14,0,0,.2);">ТОО " JENIS" </h4>
                                                <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                                                
                                                <div style = "margin-top:10px;font-size:15px">  мкр. Орбита-4, дом. 33/1 </div>
                                                <h4 style = "margin-top:0px;color:rgba(14,0,0,.2);">Секция по футболу</h4>
                                                <div class = "balloon_contacts">
                                                <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                                                
                                                <style>
                                                
                                                button:hover{
                                                    cursor:pointer;
                                                }
                                                
                                                
                                                </style>
                                                
                                                <form action = "FootballZH.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>
                                                
                                                <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                                                
                                                
                                                   </div>
                                                </div>
                                                `
                                                    },{
                                                
                                                    });

                                                    let placemark14 = new ymaps.Placemark([43.19806507449617,76.87679800000001],{
                                                        balloonContent:`
                                                        
                                                        <div style = "width:200px;height:200px;">
                                                        <a style = "color: #04b;font-size:20px;">ФК Орбита
                                                        </a>
                                                        <h4 style = "margin-top:-5px;color:rgba(14,0,0,.2);">ТОО "rent company" </h4>
                                                        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                                                        
                                                        <div style = "margin-top:10px;font-size:15px">  мкр. Орбита-3, дом. 55а</div>
                                                        <h4 style = "margin-top:0px;color:rgba(14,0,0,.2);">Секция по футболу</h4>
                                                        <div class = "balloon_contacts">
                                                        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                                                        
                                                        <style>
                                                        
                                                        button:hover{
                                                            cursor:pointer;
                                                        }
                                                        
                                                        
                                                        </style>
                                                        
                                                        <form action = "FootballO.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>
                                                        
                                                        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                                                        
                                                        
                                                           </div>
                                                        </div>
                                                        `
                                                            },{
                                                        
                                                            });

                                                    let placemark8 = new ymaps.Placemark([43.19806507449617,76.87679800000001],{
                                                        balloonContent:`
                                                        
                                                        <div style = "width:200px;height:200px;">
                                                        <a style = "color: #04b;font-size:20px;">ФК Орбита
                                                        </a>
                                                        <h4 style = "margin-top:-5px;color:rgba(14,0,0,.2);">TOO “B rent company” </h4>
                                                        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                                                        
                                                        <div style = "margin-top:10px;font-size:15px">  мкр. Орбита-3, дом. 55а </div>
                                                        <h4 style = "margin-top:0px;color:rgba(14,0,0,.2);">Секция по футболу</h4>
                                                        <div class = "balloon_contacts">
                                                        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                                                        
                                                        <style>
                                                        
                                                        button:hover{
                                                            cursor:pointer;
                                                        }
                                                        
                                                        
                                                        </style>
                                                        
                                                        <form action = "FootballO.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>
                                                        
                                                        <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                                                        
                                                        
                                                           </div>
                                                        </div>
                                                        `
                                                            },{
                                                        
                                                            });

                                                let placemark9 = new ymaps.Placemark([43.198198569584676,76.8771598490202],{
                                                    
                                                                balloonContent:`
                                                                
                                                            <div style = "width:200px;height:200px;">
                                                                <a style = "color: #04b;font-size:20px;">ФК Almaty
                                                                </a>
                                                                <h4 style = "margin-top:-5px;color:rgba(14,0,0,.2);">TOO “B rent company” </h4>
                                                                <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                                                                
                                                                <div style = "margin-top:10px;font-size:15px">  мкр. Орбита-3, дом. 55а </div>
                                                                <h4 style = "margin-top:0px;color:rgba(14,0,0,.2);">Секция по футболу</h4>
                                                                <div class = "balloon_contacts">
                                                                <div style = "height:0.5px;width:200px;background-color:rgba(0,0,0,.2);margin-top:10px;"></div>
                                                                
                                                                <style>
                                                                
                                                                button:hover{
                                                                    cursor:pointer;
                                                                }
                                                                
                                                                
                                                                </style>
                                                                
                                                                <form action = "FootballA.html"> <button id = "btn"style = "background:rgba(0,0,0,.2);background-color:rgba(0,0,0,.2);width:200px;height:25px;margin-left:0px;margin-top:20px;">Узнать больше</button></form>
                                                                
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
  map.geoObjects.add(placemark4);
  map.geoObjects.add(placemark5);
  map.geoObjects.add(placemark6);
  map.geoObjects.add(placemark7);
  map.geoObjects.add(placemark8);
  map.geoObjects.add(placemark9);
  map.geoObjects.add(placemark14);
}

ymaps.ready(init);
