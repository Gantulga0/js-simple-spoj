const input = document.getElementById('input');
/* problem 3

let a=5, p,s;
s=a*a*a;
p=(a*a)*6;
console.log(s);
console.log(p);
*/

/* problem 4
let a=4,b=6,s,p;

s=a*b;
p=(a+b)*2;

console.log(s);
console.log(p);

*/

/*

let x,y;
x=1;
y=3*x-5;


console.log(y);
*/

/*
let x,y;

x=-2;
y=4*(x*x)-3*x+5;

console.log(y);
*/

/*
let n=879;
n=n%10;

console.log(n);
*/

/*
let n=452;
n=n%100;
n=n/10;
console.log(parseInt(n))
*/

/*
let n=43,a,b;
a=n%10;
b=n/10;

console.log(parseInt(a+b));
*/

/*
let n=123,a,b,c;

a=n%10;
n=n/10;
b=n%10;
c=n/10;

console.log(parseInt(a+b+c))
*/
/*
let n = 200, a, b;

a = n / 60;
b = n % 60;

console.log(parseInt(a));
console.log(parseInt(b));
*/

/*
const a=[1,6,3,4,5];
for (let i=1;i<=5;i++){
    if(a[i]==5){
        console.log("yes");
        break;
    }
}
*/

/*

let n=4,s=1;
let i=1;j=1;

for (i=1; i<=n; i++ ){
    s=s*i
    console.log("!"+i+"="+s)
}
*/

/*

let n=6,s=0,i=1;
for(i=1 ; i<=n ; i++){
    s=s+i*(i+1);
}
console.log(s)

*/

/*
let n=7,i=1,s=1;
if(n%2==0){
    for(i=1 ; i<=n ; i++){
        if(i%2==0){
            s=s*i;
        }
    }

}
else{
    for(i=1 ; i<=n ;i++){
        if(i%2==1){
            s=s*i
        }
    }

}
console.log(s);
*/

/*
let n=3, i=1,s=0,sum=1;
for(i=1 ; i<=n; i++){
    s=1+(1/(i*i))
    sum=sum*s;
}
console.log(sum)
*/

//shataar alhah
/*
let n = prompt("gishguuriiin toog oruul"), k = prompt("bhgu bolsn gishguuriin dugaaariig oruul"), i=1;
let a = [];

a[0] = 1;

a[1]=1;

for (i = 2; i <= n; i++) {

    if (i == k) {
        a[i]=0;
    }
    else{
        a[i] = a[i - 1] + a[i - 2];
    }
}
console.log(a);

console.log(a[n]);
*/

//super jaal
/*
let n = prompt("gishguuriiin toog oruul"), k = prompt("bhgu bolsn gishguuriin too oruul"), i,j;
let a = [];

a[0] = 1;

a[1] = 1;

a[2] = 2;

let evdersen = [];

for (j = 0; j < k; j++) {
    evdersen.push(prompt("hed heddeh gishguur ewdersen be?"))
}

for (i = 3; i < n; i++) {
    for (j = 0; j < k; j++) {
        if (evdersen[j]==i){
            a[i]=0;
            break;
        }
        else {
            a[i] = a[i - 1] + a[i - 2] + a[i - 3];
        }

    }

}
console.log(a);
console.log(a[n]);
*/

// calculator
/*
let x = prompt("x toog oruul"), i, count = 0,tracker=1;


while (tracker != x) {
    if (tracker * 3 <= x) {
        tracker = tracker * 3;
    }
    else if (tracker * 2 <= x) {
        tracker = tracker * 2;
    }
    else {
        tracker++;
    }
    count ++;
}

console.log(count);
*/

/* davhriin too

let davhar=prompt("davhriin toog oruul"),ail=prompt("heden ail baigaag oruul"),toot=prompt("heddeh toot be");
let davhriin_too=(toot-1)/ail+1;
let dugaariin_too=(toot-1)%ail+1;

console.log(davhriin_too);
console.log(dugaariin_too);

*/
////Super shiljilt
// let n = parseInt(prompt("n toog oruul"));
// let a = [];
// for (let i = 0; i < n; i++) {
//     a.push(parseInt(prompt("massiviin elementiig oruul")));
// }

// let k = parseInt(prompt("shiljuuleh toog oruul"));

// k = k % n;

// if(k<0){
//     k+=n;
// }

// for (let i = 0; i < k; i++) {
//     temp = a[i];
//     a[i] = a[i + 1]
//     a[i + 1] = temp
// }
// console.log(a);

//// orts dawhar ailiinh too
// let a=parseInt(prompt("heden dawhartai ve?")),b=parseInt(prompt("heden ortstoi?")),c=parseInt(prompt("heden ailtai we?")), d=parseInt(prompt("heden tootiig haij baina?"));
// let orts,davhar,toot;

// orts= parseInt(d/(a*c)+1);

// if(d>(a*c)){
//     d=d%(a*c)
// }

// davhar=parseInt((d-1)/c+1);
// toot=parseInt((d-1)%c+1);

// console.log(orts);
// console.log(davhar);
// console.log(toot);


////eysh
// let dun = [];
// let ind = [];
// let inx, i, j, k;
// let n = prompt("heden suragc baigaa we")

// for (i = 0; i < n; i++) {
//     dun.push(parseInt(prompt("dung oruul")));
// }

// for (i = 0; i < n; i++) {
//     ind.push(i + 1);
// }

// for (i = 0; i < n - 1; i++) {
//     for (j = 0; j < n - 1 - i; j++) {
//         if (dun[j] < dun[j + 1]) {
//             let temp = dun[j];
//             dun[j] = dun[j + 1];
//             dun[j + 1] = temp;

//             let tempInd = ind[j];
//             ind[j] = ind[j + 1];
//             ind[j + 1] = tempInd;
//         }

//     }
// }

// for(i=0 ; i<n ; i++){
//     console.log(ind[i]);
    
// }


////gcd
// let a=Number(prompt("ehnii toog oruul"));
// let b=Number(prompt("daraagiin toog oruul"));
// let remainder;

// while(b!==0){
//     remainder=a%b;
//     a=b;
//     b=remainder;
// }
// console.log(a);

////orgil ba yrool