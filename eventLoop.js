/*
مراحل ال event loop
1 - call stack  = لو الكود مش async  مش بيكمل ف الخطوات بيطلع ال  output علطول
انما بقا لو async  بيعدي ع  node api  وبتحولو علي ال call kqueue بتاخد دور وبعد كدا  الي عليه الدور بيطلع مش ع حسب الكود الاول من التاني
2 -node api
3- call kqueue
4 - event loop

Async = غير متزامن مش بيمشي سطر سطر
sync =  متزامن  بيمشي سطر سطر
 ال Js هل هيا single thread or multi thread
هيا single thread

Event Loop هيا مكتبة للتنقيل بين المهام الأصلية والمهام الفرعيه

call back
promise
async await func
*/


let a = 1
let b = 1
console.log(a + b); // sync



// asynchronous func
setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}



