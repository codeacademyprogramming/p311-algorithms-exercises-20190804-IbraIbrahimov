
//---------Mesele-1----------//

let a=prompt('A ədədidini daxil edin');

if(a%3 == 0 && a%5 == 0){
    alert('A-ədədi həm 3-ə həmdə 5-ə bölünür!');
}

else{
    alert('A ədədi 3-ə və 5-ə bölünmür');
}


let b=prompt('B ədədini daxil edin');

if(b%3 == 0 && b%5 == 0){
    alert('B-ədədi həm 3-ə həmdə 5-ə bölünür!');
}

else{
    alert('B ədədi 3-ə və 5-ə bölünmür');
}


let c=prompt('C ədədini daxil edin');

if(c%3 == 0 && c%5 == 0){
    alert('C-ədədi həm 3-ə həmdə 5-ə bölünür!');
}

else{
    alert('C ədədi 3-ə və 5-ə bölünmür');
}

//------------------Məsəslə-2------

let a=prompt('A ededini daxil edin');
let b=prompt('B ededini daxil edin');
let c=prompt('C ededini daxil edin');


if (a<=0 || b<=0 || c<=0){
    alert('0');
}
else if(a == b && a==c){
    alert('ucbucag beraber tereflidir')
}
else if(a!=b && a!=c){
    alert('ucbucag muxtelif tereflidir')
}
else if(a==b && a!=c){
    alert('ucbucag beraberyanlidir')
}

//----------Mesele-3--------


let a=prompt('A-ededini daxil edin')

if(a%2==0 && a%4==0 && a%8==0){
    alert('A ededi 2, 4,ve  8e bolunur')
}
else{
    alert('A reqemi 2 , 4, ve 8e bolunmur')
}
let b=prompt('B ededini daxil')

if(b%2==0 && b%4==0 && b%8==0){
    alert('B ededi 2, 4,ve  8e bolunur')
}
else{
    alert('B reqemi 2 , 4, ve 8e bolunmur')
}

