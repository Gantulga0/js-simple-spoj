function CubepPerimetre(tal) {
    let p = (tal * tal) * 6;
    return p;
}

function CubeTalbai(tal) {
    let s = tal * tal * tal;
    return s;
}

function talbai(urt, urgun) {
    let s = urt * urgun;
    return s;
}

function perimetre(urt, urgin) {
    p = (urt + urgun) * 2;
    return p;
}

function funkts1(x) {
    let y = 3 * x - 5;
    return y;
}

function funkts2(x) {
    y = 4 * (x * x) - 3 * x + 5;
    return y;
}

function LastDigit(x) {
    let y = x % 10
    return y;
}

function MiddleDigit(x) {
    y = x % 100;
    y = y / 10;
    return parseInt(y)
}

function DigitSum(num) {
    sum = 0;
    while (num !== 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

function SecToMinut(x) {
    const minut = Math.floor(x / 60);
    const remainingSec = x % 60;
    return `${minut} ${remainingSec}`
}

function findNumber(numb) {
    for (let i = 0; i < arr.length; i++) {
        if (a[i] == numb) {
            console.log("yes");
            break;
        }
    }
}

function factorial(n) {
    let s = 1;
    for (let i = 1; i <= n; i++) {
        s = s * i
        console.log("!" + i + "=" + s)
    }
}

function summation(n) {
    let s = 0
    for (let i = 1; i <= n; i++) {
        s = s + i * (i + 1);
    }
    return s;
}

function TooniiUrjver(n) {
    let s = 1
    if (n % 2 == 0) {
        for (i = 1; i <= n; i++) {
            if (i % 2 == 0) {
                s = s * i;
            }
        }

    }
    else {
        for (i = 1; i <= n; i++) {
            if (i % 2 == 1) {
                s = s * i
            }
        }
    }
    return s;
}


function superSum(n) {
    let s = 0; sum = 1;
    for (let i = 1; i <= n; i++) {
        s = 1 + (1 / (i * i))
        sum = sum * s;
    }
    return sum
}

function sum(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i
    }
    return s
}


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


function GetEven(Array) {
    let even = Array.filter(Element => Element % 2 == 0);
    return even;
}

function gcd(a, b) {
    while (b !== 0) {
        let temp = b
        b = a % b;
        a = temp;
    }
    return a
}

function isPrime(n) {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            return "NO"
        }
    }
    return "YES"
}

// //Container With Most Water First Idea
// let a = [];
// let v = [];
// let n = prompt("heden shirheg bagana baih ve");
// for (let i = 0; i < n; i++) {
//     a.push(prompt("baganiin undriig oruul"))
// }
// console.log(a)
// for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//         if (a[i] < a[j]) {
//             v.push(a[i] * (j - i))
//         }
//         else {
//             v.push(a[j] * (j - i))
//         }
//     }
// }

// console.log(v)

// let maxValue = v[0]
// for (let i = 1; i < v.length; i++) {
//     if (maxValue < v[i]) {
//         maxValue = v[i]
//     }
// }
// console.log(maxValue);
// var maxArea = function (height) {
//     const a = height;
//     let v = [];
//     let n = a.length;

//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (a[i] < a[j]) {
//                 v.push(a[i] * (j - i))
//             }
//             else {
//                 v.push(a[j] * (j - i))
//             }
//         }
//     }

//     let maxValue = v[0]
//     for (let i = 1; i < v.length; i++) {
//         if (maxValue < v[i]) {
//             maxValue = v[i]
//         }
//     }

//     return maxValue;
// };

////Container With Most Water second Idea
// let a = [];
// let n = prompt("heden shirheg bagana baih ve");
// for (let i = 0; i < n; i++) {
//     a.push(prompt("baganiin undriig oruul"));
// }
// console.log(a)
// let max = 0;
// let left = 0;
// let right = n - 1;
// let height, area;
// while (right > left) {
//     if (a[right] < a[left]) {
//         height = a[right]
//     }
//     else {
//         height = a[left]
//     }

//     area = height * (right - left);

//     if (area > max) {
//         max = area;
//     }

//     if (a[right] > a[left]) {
//         left++
//     } else {
//         right--
//     }
// }
// console.log(max)

//let email = "bat.kh@gmail.com"

function emailName(name) {
    let username = name.split("@")[0]
    let namepart = username.split(".")
    let firstname = namepart[1].slice(0, 2).toLowerCase()
    let lastname = namepart[0].slice(0, 1).toUpperCase() + namepart[0].slice(1);

    if (firstname=== "kh" || firstname === "sh" || firstname ==="ch" || firstname === "ts") {
        firstname = namepart[1].slice(0,1).toUpperCase()+namepart[1].slice(1,2);
    }else{
        firstname = namepart[1].slice(0,1).toUpperCase()
    }

return firstname+"."+lastname


}

console.log(emailName("bat.altai@gmail.com"));
