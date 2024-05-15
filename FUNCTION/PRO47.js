weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

//create output object
object={}
//access each item from the weatherdata array
for(data of weatherData ){
    district=data.district//key in object
    weather=data.weather//value
    //check district is there in output array
    if(district in object){//thri//kott//palakk//erna//thr//kott//pala//erna
        oldtemp=object[district]//oldtemp=32//old=29//old=34//old=33
        if(oldtemp>weather){//32>29//29>30//34>32//33>31
            object[district]=oldtemp//thr:32//palakk:34//ern:33
        }
        else{
            object[district]=weather//kott:30
        }
    }
    else{
        object[district]=weather//thr:32//kott:29(updated)//palakk:34//erna:33
    }


}
console.log(object);


