//--------------Mesele-1--------------------
    
      let a = 0;
      let b = 0;
      for (let i = 10; i < 100; i++) {
          if (i%6==0 && i%3==0) {
              
              a++;
              if (i%9==0) {
                  b++
                  
              }
          }
      }
      document.getElementById('demo').innerHTML="Bütün iki rəqəmli ədədlərin " + a + " ədədi 3-ə və 6-ya bölünür, bunların " + b + " ədədi 9a bölünür"

      //---------------------------------------------------------------


//-------------Mesele-2-------
    var arr = [];
    var end = 100;
    while (end < 999){
        end++;
        arr.push(end);
    }

    var a = 2;
    var b = 2;
    while (a <= 999){
        a += b;
            arr.splice(arr.indexOf(a), 1);
    }

    a = 4;
    b = 3;
    while (a < 999){
        if (a % b ===0 && arr.indexOf(a) !== -1){
            arr.splice(arr.indexOf(a), 1);
        }else {
            a++;
        }
    }

    a = 6;
    b = 5;
    while (a < 999) {
        if (a % b === 0 && arr.indexOf(a) !== -1) {
            arr.splice(arr.indexOf(a), 1);
        } else {
            a++;
        }
    }

    a = 8;
    b = 7;
    while (a < 999) {
        if (a % b === 0 && arr.indexOf(a) !== -1) {
            arr.splice(arr.indexOf(a), 1);
        } else {
            a++;
        }
    }

    document.getElementById('demo').innerHTML=arr +'';
    print(arr);
//-------------------------------------------------------------


//----------------Mesele-3-----------------------

let num = 1, count = 0;
for (let i = 100; i < 1000; i += 2) {
    if(i%25===0){
      count++;
      num*=i;
    }
    
}
document.getElementById('demo').innerHTML='Onlar '+count+ '- ededdir' + ' ve onlarin hendesi ortasi :' + Math.pow(num, 1 / count) + '  beraberdir!';
