// 1.How to compare 2 JSON have the same properties without order?
// var obj1={name:"Person 1",age:5};
// var obj2={age:5,name:"Person 1",};





// 2. Use the rest countries 'API'URL-->"https://restcountries.com/v3.1/all" and display the all the country flag in the console?

// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send()
//  request.onload=function(){
//     var data = request.response
//     var taskresult = JSON.parse(data)

//     for(var obj of taskresult){
//         console.log(obj.name.common , obj.flags.png);
//     }
//     }

//     OutPut:
//     Mauritania https://flagcdn.com/w320/mr.png
//  Aruba https://flagcdn.com/w320/aw.png
//  Argentina https://flagcdn.com/w320/ar.png
//  Sweden https://flagcdn.com/w320/se.png
//  Maldives https://flagcdn.com/w320/mv.png
//  Mexico https://flagcdn.com/w320/mx.png
//  New Zealand https://flagcdn.com/w320/nz.png
//  Ecuador https://flagcdn.com/w320/ec.png
//  Wallis and Futuna https://flagcdn.com/w320/wf.png
//  Åland Islands https://flagcdn.com/w320/ax.png
//  Montenegro https://flagcdn.com/w320/me.png
//  Pakistan https://flagcdn.com/w320/pk.png
//  Pitcairn Islands https://flagcdn.com/w320/pn.png

//  etc..,

// 3. Use the same rest countries and print all countries names, regions, sub-region and populations:

// var request= new XMLHttpRequest();
// request.open ("get","https://restcountries.com/v3.1/all")
// request.send();
// request.onload=function() {
//     var data = request.response;
//     var taskresult = JSON.parse(data);
//     for(var obj of taskresult){
//         console.log(obj.name.common, obj.region, obj.subregion,obj.population);
//     }
// }

// OUTPUT:
// Mauritania Africa Western Africa 4649660
// Aruba Americas Caribbean 106766
// Argentina Americas South America 45376763
// Sweden Europe Northern Europe 10353442
// Maldives Asia Southern Asia 540542
// Mexico Americas North America 128932753
// New Zealand Oceania Australia and New Zealand 5084300

// etc..,