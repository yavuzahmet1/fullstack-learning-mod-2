//basic tips: string, number, boolean,undefined,null,object

// let firtname:string="Ahmet"
// let age:number=22;
// let result:boolean=false
// let x:undefined=undefined
// let y:null=null;

// let a:any=true


// //union types

// let ages:string|number=25;//bir değişkene sadece bir tip değil biden fazlada tipde tanımlanabilir.

// //literal types
// let statusResult:"pending"|"approved"|"rejected";

// statusResult="pending"
// statusResult="approved"

// console.log(statusResult)

// //arrays
// let names:string[]=["Hakan","Ahmet","Hasan"];//string expressions

// names.forEach((name)=>console.log(name))

// let numbers:number[]=[1,3,5,7,8];
// console.log(numbers)

// let numbers2:Array<number>=[2,5,7,9,7];
// console.log(numbers2)
// numbers2[3]
// console.log(numbers2[3])

// //mutiType expressions
// let myList:(number|string|boolean)[]=[3,5,"f",7,"j","k",3,false];

//ınterface and Types=>It allows us to create our own type

// type User={
//     name:string,
//     age:number
// }

// const object1:User={
//     name:"Ahmet",
//     age:38
// }

// //interfaceleri implement edilirse içindeki kullanımları da kullanmak durumundayız aksi taktirde hata alırız
// //illa kullnmak istemiyorsanız bunu optional type i kullnaarak hata almayı engelleyebilriz "?"
// interface MyUser{
//     name:string,
//     age?:number//illa kullandırmak durumuda kaldırmak istiyorsak bunu "?" işareti ile opsiyonel duruma getirebilriz
// }

// const object2:MyUser={
// name:"hakan",
// age:41
// }
// const object3:MyUser={
// name:"hakan"

// }

// console.log(object1)
// console.log(object2)
// console.log(object3)


///FUNCTIOS--deli önemli

// function sums(a:number,b:number):number|string{
// console.log("inside",a+b)

// return a+b
// }
// console.log(sums(4,5))
// Ancak, tip tanımlamaları yapmak, özellikle büyük projelerde ve ekip 
// çalışmalarında, kodun daha anlaşılır ve hata ayıklaması daha kolay hale gelmesini sağlar. Ayrıca, 
// tip tanımlamaları sayesinde derleme zamanında 
// (compile-time) hataları yakalayabilirsiniz, bu da runtime hatalarını önler.
//console.log(sums("4", 5)); olarak gönderseydik Eğer tip tanımlamaları yapmasaydınız, 
// TypeScript "4" ve 5 gibi farklı tiplerde argümanların toplanmasına izin verebilirdi, bu da beklenmeyen sonuçlara yol açabilirdi.
// Sonuç olarak, tip tanımlamaları yapmak zorunlu değildir, ancak kodunuzun daha güvenli ve anlaşılır olmasını sağlar. 
// TypeScript, tip çıkarımı yaparak çalışır, ancak açık tip tanımlamaları yapmak genellikle daha iyi bir uygulamadır.

// function writeBoard(myArray:Array<String>):void{
//     myArray.forEach((value)=>console.log(value))
// }

// let myList:Array<String>=["Ahmet","Mehmet","Hasan","Kaya"];

// writeBoard(myList)

// void, TypeScript'te (ve diğer birçok programlama dilinde) bir fonksiyonun hiçbir değer döndürmediğini 
// belirtmek için kullanılan özel bir tiptir. 
// Yani, bu fonksiyonun çağrıldığı yerde herhangi bir değer beklenmemesi gerektiğini ifade eder.

// void kullanarak, fonksiyonun bir değer döndürmediğini açıkça belirtmiş olursunuz. 
// Bu, kodunuzu okuyan diğer geliştiriciler için daha anlaşılır hale getirir.

// void, undefined ile karıştırılmamalıdır. 
// void, bir değer döndürülmeyeceğini belirtirken, undefined açıkça undefined değerinin döndürüleceğini belirtir.

// function noReturn(): void {
//     // Bu fonksiyon hiçbir şey döndürmez.
// }

// function returnsUndefined(): undefined {
//     return undefined; // Bu fonksiyon açıkça `undefined` döndürür.
// }

///-------------------GENERIC TYPES----------------------///

// generic yapılar, kodunuzu daha esnek ve yeniden kullanılabilir hale getirmek için kullanılan güçlü bir araçtır. 
// Generic'ler, fonksiyonların, sınıfların veya interfacelerin farklı tiplerle çalışabilmesini sağlar. 
// Böylece, aynı kodu farklı tipler için tekrar tekrar yazmak zorunda kalmazsınız.

// function writePaper<T>(myArray:T[]):void{
//     console.log(myArray)
// }

// writePaper(["Ali","Veli","Sadık"])
// writePaper([true,false]);
// writePaper([1,4,6,8,8])

// interface GenericType<T>{
//     name:string,
//     age:number,
//     salary:T[]
// }

// const obj1:GenericType<string>={
//     name:"Ahmet",
//     age:34,
//     salary:["5000","10000","15000"]
// }
// const obj2:GenericType<number>={
//     name:"Ahmet",
//     age:34,
//     salary:[5000,10000,15000]
// }


// function writeGeneric<T>(myList:GenericType<T>[]):void{
//     myList.forEach((value)=>console.log(value))
// }

// let myArray:GenericType<string|number>[]=[obj1,obj2]
// writeGeneric(myArray)

// tip güvenliğini korurken kodunuzu daha genel hale getirir. 
// Örneğin, bir dizi işlemi yapan bir fonksiyon yazdığınızı düşünün. 
// Bu fonksiyonun hem number hem de string dizileriyle çalışabilmesini istiyorsanız, generic'ler tam da bu işe yarar.
// Generic'lerin Avantajları

//     Tip Güvenliği:
//         Generic'ler, kodunuzun tip güvenliğini korurken esneklik sağlar.
//     Yeniden Kullanılabilirlik:
//         Aynı kodu farklı tiplerle kullanabilirsiniz.
//     Okunabilirlik:
//         Generic'ler, kodunuzun daha anlaşılır olmasını sağlar.

//Extends structures 

interface Customer{
    id:string,
    createdDate:string,
    createdUser:string,
    customerNo:string
}

interface Individual{
    id:string,
    createdDate:string,
    createdUser:string,
    individualNo:string
}

//şimdi yukarıda ortak olarak tanımlananlar var bunları ortak bir yere yazılır ve oradan extends edilir.

interface CommonArea{
        id:string,
    createdDate:string,
    createdUser:string,
}

interface CustomerEx extends CommonArea{
    customerNo:string
}

interface IndividualEx extends Individual{
    individualNo:string
}

const agency:IndividualEx={
    id:"1",
    createdDate:"09.03.2025",
    createdUser:"Ahmet Zamans",
    individualNo:"34455"
}

// 1. Partial<T> bunun anlamı ? nin yaptığı işlemi hepsine uygular tek tiple aynı işi hepsine uygular.

// Partial, bir tipin tüm özelliklerini opsiyonel (isteğe bağlı) hale getirir. Yani, tipin tüm özelliklerini belirtmek zorunda kalmazsınız.

// Örnek: Partial Kullanımı

// interface User {
//     id: number;
//     name: string;
//     age: number;
// }

// Partial ile tüm özellikler opsiyonel hale gelir
// type PartialUser = Partial<User>;

// // Kullanım
// let user: PartialUser = {
//     name: "Ahmet" // id ve age belirtmek zorunda değiliz
// };

// console.log(user); // Çıktı: { name: "Ahmet" }

// 2. Required<T>

// Required, Partial'ın tam tersidir. Bir tipin tüm özelliklerini zorunlu (required) hale getirir.
// Örnek: Required Kullanımı

// interface User {
//     id?: number;
//     name?: string;
//     age?: number;
// }

// // Required ile tüm özellikler zorunlu hale gelir
// type RequiredUser = Required<User>;

// // Kullanım
// let user: RequiredUser = {
//     id: 1,
//     name: "Ahmet",
//     age: 25
// };

// let user2: RequiredUser = { name: "Mehmet" }; // HATA: id ve age eksik

// 3. Readonly<T>  Readonly<User>, User interface'indeki tüm özellikleri değiştirilemez yapar.

// Readonly, bir tipin tüm özelliklerini salt okunur (read-only) hale getirir. Yani, bu özellikler artık değiştirilemez.

// Örnek: Readonly Kullanımı

// interface User {
//     id: number;
//     name: string;
// }

// // Readonly ile tüm özellikler salt okunur hale gelir
// type ReadonlyUser = Readonly<User>;

// // Kullanım
// let user: ReadonlyUser = {
//     id: 1,
//     name: "Ahmet"
// };

// user.name = "Mehmet"; // HATA: Salt okunur özellik değiştirilemez

// 4. Pick<T, K>

// Pick, bir tipin belirli özelliklerini seçerek yeni bir tip oluşturur. K, seçilecek özelliklerin anahtarlarını (key'lerini) belirtir.

// Örnek: Pick Kullanımı

// interface User {
//     id: number;
//     name: string;
//     age: number;
//     email: string;
// }

// // Pick ile sadece belirli özellikler seçilir
// type UserNameAndAge = Pick<User, "name" | "age">;

// // Kullanım
// let user: UserNameAndAge = {
//     name: "Ahmet",
//     age: 25
// };

// console.log(user); // Çıktı: { name: "Ahmet", age: 25 }

// Pick<User, "name" | "age">, User interface'inden sadece name ve age özelliklerini seçer.

// 5. Omit<T, K>

// Omit, Pick'in tam tersidir. Bir tipin belirli özelliklerini çıkararak yeni bir tip oluşturur. 
// K, çıkarılacak özelliklerin anahtarlarını (key'lerini) belirtir.

// Örnek: Omit Kullanımı

// interface User {
//     id: number;
//     name: string;
//     age: number;
//     email: string;
// }

// // Omit ile belirli özellikler çıkarılır
// type UserWithoutEmail = Omit<User, "email">;

// // Kullanım
// let user: UserWithoutEmail = {
//     id: 1,
//     name: "Ahmet",
//     age: 25
// };

// console.log(user); // Çıktı: { id: 1, name: "Ahmet", age: 25 }

// Omit<User, "email">, User interface'inden email özelliğini çıkarır.

    // Partial<T>: Bir tipin tüm özelliklerini opsiyonel yapar.

    // Required<T>: Bir tipin tüm özelliklerini zorunlu yapar.

    // Readonly<T>: Bir tipin tüm özelliklerini salt okunur yapar.

    // Pick<T, K>: Bir tipin belirli özelliklerini seçer.

    // Omit<T, K>: Bir tipin belirli özelliklerini çıkarır.

// Bu utility tipleri, TypeScript'te tip tanımlamalarını daha esnek ve güçlü hale getirir. 
// Özellikle büyük projelerde ve karmaşık tip yapılarında işinizi çok kolaylaştırır.