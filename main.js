//반복문을 사용하려면 반복할 내용이 있어야 합니다
//따라서 반복문과 단짝을 이루는 자료향은
//배열과 객체입니다

//배열 = 같은 성격의 값들을 저장하는 형태의 자료
let abc = [1,2,3,4,5];
console.log(abc[3]);

//객체 = 서로 다른 성격의 값들을 한 곳에 저장
//형태의 자료형
let student = {
    name:"홍길동",
    age: 20,
    address: "부천시"
};

let lis = document.querySelectorAll("ul li")
console.log(lis);
console.log(lis.length); //6

lis[0].oneclick = function () {
    alert("click");
}
lis[3].oneclick =function () {
    lis[3].style.backgroundColor = "pink";

}
//5인덱스를 클릭하면 백그라운드 색을 노란색으로 
//바꾸고 그리고 경고창으로 노란색이라고 띄워보세요

lis[5].oneclick = function () {
    alert("click");
    lis[5].style.backgroundColor = "yellow";
}

//모든 li에 동일하게 console을 찍는 이벤트를
//걸어줄려고
//합니다 백그라운드 컬러를 핑크색으로 바꾸세요
lis[0].oneclick = function () {
    console.log("클릭");
}
lis[1].oneclick = function () {
    console.log("클릭");
}
lis[2].oneclick = function () {
    console.log("클릭");
}
lis[3].oneclick = function () {
    console.log("클릭");
}
lis[4].oneclick = function () {
    console.log("클릭");
}
lis[5].oneclick = function () {
    console.log("클릭");
}

for (let i = 0; i < lis.length; i++) {
    lis[i].oneclick = function () {
        console.log("클릭")
    }
}
//배열에 특화된 반복문입니다
//for of 반복문
//for( let 각요소 of 배열이름)
for (let el of lis) {
    el.oneclick = function () {
        console.log("클릭");
    }
}
//객체에 특화된 반복문
//for in반복문
//for (let 각요소 in 객체이름)
for (let el in student){
    el.oneclick = function () {
        console.log("클릭");
    }
}

/*
1.let i =0; 변수 i를 선언하고 초기값으로 0을 대입합니다
이과정은 딱 한번 맨처음에 작용합니다
2.i<=5;
i에 0이 대입되었습니다 따라서 0 <= 5를 연산하고 
참이므로 이 뒤에 있는
lis[i].oneclick = function () {console.log("클릭"); }
을 수행하도록 합니다
i에는 0이 있기 때문에 lis[i]이곳에 i자리에
0이 대입한 lis[0]으로 작업합니다.

3.i++;
작업을 마치고 혹은 참인것을 확인한 뒤에는
i를 후위연선하여 +1을 합니다.
4.for문안에서 반복하므로 i가 1인 상태에서 다시 
처음으로 돌아갑니다.단 1번은 동작하지 않고 2번 i<=5로 넘어갑니다
i에는 1으로 바뀌었기 때문에 1<=5로 연산합니다.
이후 같은 방식으로 동작한 뒤 i가 6이 되는 순간
i<=5;를 만족하지 못하므로 반복문이 종료됩니다


*/ 

/*
반복문이란?
같은 작업을 반복시킬 경우 사용합니다.
기본 for반복문은 특정값을 지정해서 단순반복 하는 경우
부터,,배열에 접근해서 배열의 길이만큼 반복하는 경우사용

*/ 