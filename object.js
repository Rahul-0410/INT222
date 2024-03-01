
// const k1=Symbol("Rahul");
// const k2=Symbol("Gupta");

// myobj={};
// console.log(myobj);

// myobj["k1"]="FirstName";
// myobj[k2]="LastName";
// console.log(myobj);
// console.log(myobj.FirstName);

var obj={
    firstname:"hello",
    lastName:"nrn"
};

// console.log(obj.firstname);

obj["age"]=23;
// console.log(obj.age);

//for in loop
for (const key in obj) {
        console.log(key+": "+obj[key]); 
}

// var obj2=new Object();
// obj2["fruit1"]="Mango";
// obj2["fruit2"]="Apple";
// obj2["fruit3"]="Grape";
// obj2["fruit4"]="Peaches";

// console.log(obj2.fruit2);
// for (const key in obj2) {
//     console.log(key+": "+obj2[key]); 
// }

function Person(first,last,age,eye){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
}

const obj3=new Person("Rahul","Gupta",20,"black");
console.log(obj3);

function car(model,color,brand){
    this.model=model;
    this.color=color;
    this.brand=brand;
}

const obj5=new car("Y24","Black","Ferrari");
console.log(obj5);

// class BookName{
//     constructor (bookName,publisher,numberOfCopies){
//         this.bookName=bookName;
//         this.publisher=publisher;
//         this.numberOfCopies=numberOfCopies;
//     }

// };
// const book=new BookName("Harry","Bloomsberry",100);
// console.log(book);