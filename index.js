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

/*
let n = prompt("gishguuriiin toog oruul"), k = prompt("bhgu bolsn gishguuriin too oruul"), k1=prompt("ali ali gishguur bhgu bolsn be"),k2=prompt("ali ali gishguur bhgu bolsn be"),k3=prompt("ali ali gishguur bhgu bolsn be"),i=1;
let a = [];

a[0] = 1;

a[1]=1;

a[2]=2;
for (i = 3; i <= n; i++) {

    if (i == k1) {
        a[i]=0;
    }
    else{
        a[i] = a[i - 1] + a[i - 2];
    }
}
console.log(a);

console.log(a[n]);
*/