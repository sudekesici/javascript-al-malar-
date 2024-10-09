// console.log("sude kesici");

// const a = "Sercan ";
// const b = "Furunci";

// console.log("Sevgilimin Adı:" + (a+b))

//  function yasHesapla(a) {
//     if( a>35){
//         console.log("sgklısınız.")
//     }
// }

// const yas = Number ( prompt("Yaşınızı girin"));
// console.log(typeof yas + " Yaşınız:" + yas);

// const butce = prompt("Butcenizi girin");
// console.log(typeof butce + "Bütçeniz:" + butce)

// if (yas > 25 && butce<200) {
//     console.log("sen yaşlısın ve fakirsin")
// }
// else if(butce === 0 || butce <0 || yas<0 || yas===0 ) {
//     console.log("bütçe sıfırdan küçük veya eşit olamaz.")
// }
// else {
//     console.log("yaslı degilsin")
//     yasHesapla(yas)
// }

// let c = 9;



// const ehliyetHesapla = (c) => {
//     if(c>=18) {
//       console.log("ehliyet alabilirsiniz")
//     }
//     else{
//         console.log("ehliyet alamazsınız.")
//     }
// }

// ehliyetHesapla(c);


// const returnsude = (sude) => {
//    let username = `${sude} kesici`
//    return username;
// }

// let a = returnsude("sude")

// let donenDeger = cube(3);
// console.log(donenDeger);

// function cube(sayi) {
//   let sonuc = sayi*sayi*sayi;
//   return sonuc;
// }

// let a = returnsude("sude")
// let b = withserco(a);
// console.log(b)

// function returnsude(sude) {
//   let username = `${sude} Kesici`
//   return username;
// }

// function withserco(sude) {
//   let sercoandsude = `${sude} ve Sercan Furunci`
//   return sercoandsude;
// }

// const sude = lastname => 

//   console.log("sude",lastname)



// sude(" Kesici");

// const kupal = (x) => {
//  return x*x*x;
// }

// let a = kupal(3);
// console.log(a)

// const hesapmakinesi = (a,b) => {
//     let toplama, cikarma, carpma, bolme;
//     toplama = a+b;
//     cikarma = a-b;
//     carpma = a*b;
//     bolme= a/b;

//     const sonuclar= [toplama, cikarma,carpma, bolme];
//     return sonuclar;
// }

// let [toplamaislemi, cikarmaislemi, carpmaislemi, bölmeislemi] = hesapmakinesi(10,5)
// let toplamaa = hesapmakinesi(10,5);
// let cikarmaa = hesapmakinesi(10,5);
// let carpmaa= hesapmakinesi(10,5);
// let bolmee = hesapmakinesi(10,5);
// console.log("bakalım bu ikisi aynı mı??")
// console.log(toplamaislemi,cikarmaislemi,carpmaislemi,bölmeislemi);
// console.log(toplamaa,cikarmaa,carpmaa,bolmee);

// const degiskenler = {
//     name: "sude",
//     surname: "kesici", 
//     aa: 4
// }
// const {name:isim, surname:soyisim, aa:bb} = degiskenler;
// console.log(isim,soyisim,bb)

// const haftaningünleri = ["pazartesi", "sali", "carsamba", "persembe", "cuma", "cumartesi", "pazar"]

// const gunler = (gun1,gun2,gun3,gun4) => {

//     console.log(gun1 + gun2 + gun3 + gun4)
// }

// gunler(...haftaningünleri)
// console.log("sude")

// setTimeout( () => {
//     console.log("bu yazı iki saniye gecikmeli gelmeli, öyle olacak mı ?")
// },2000)

// console.log("kesici")

// const getName = (callback) => {
//     setTimeout ( () =>{
//         let name = "Sude";
//         callback(name);
//     }, 1000)
// }

// const getSurname = (name) => {
//     setTimeout( () => {
//         let surname = "Kesici"
//        console.log(name,surname)
//     },500)
// }
// getName(getSurname);

//Bir fonksiyon tanımla, bu fonksiyon bir sayı alsın ve 1 saniye sonra bu sayıyı 2 ile çarparak geri dönsün. Sonucu başka bir callback fonksiyon ile ekrana yazdır.
// const getNumber = (number,callback) => {
//  setTimeout(()=>{
//     let carpimislemi = number*2;
//     callback(carpimislemi);
//  },1000)
// }

// const setNumber = (carpimislemi) => {

//     console.log(carpimislemi)
 
// }
// getNumber(5,setNumber);

//İki asenkron işlemi sırayla yapmak istiyoruz. İlk olarak bir kişinin yaşını getAge fonksiyonu ile al, ardından yaşını 2 artır ve showNewAge fonksiyonu ile ekrana yazdır. Her iki işlem de gecikmeli olacak.

// const getAge = (age, callback) => {
//    setTimeout(()=>{
//     let newage = age+2;
//     callback(newage);
//    },1000);

// }

// const showAge = (newage) => {
//     setTimeout(()=>{
//         console.log("Yaşınız:", newage);
//     },500)
// }

// getAge(20,showAge);

// Bir kişiye ait hem isim hem de soyisim asenkron olarak alınıp ekrana yazdırılacak.
// İlk olarak getFirstName fonksiyonu ile isim alacağız, ardından getLastName ile soyadını alıp birlikte yazdıracağız.




// const getName = (callback) => {
//  setTimeout(() => {
//     let name = "Enes";
//     callback(name);
//  },100)
// }

// const getSurname = ( name, callback) => {
//  setTimeout(() => {
//     let surname = "Bayram";
//     callback(surname);
//  },500)
// }

// const getAge = (name, surname, callback) => {
//     setTimeout(() => {
//         let age = 23;
//         callback(age);
//     })
// }

// getName((name) => {
//     getSurname(name, (surname) => {
//        getAge(name, surname, (age) => {
//         console.log(name, surname, age);
//        })
//     })
    
// })



// const users = [
//     {
//         userId: 13,
//         post: "Sude post",
//     },
//     {
//         userId: 26,
//         post: "Momi post",
//     },
//     {
//         userId: 28,
//         post: "Esra post",
//     },
//     {
//         userId: 9,
//         post: "Sercan post",
//     }
// ]
 
// const getUserById = (callback) => {
    
//     setTimeout(() => {
//         let userId = 13;
//         callback(userId);
//     },5000)

// }

// const findUserId = (userId) => {
    
//     setTimeout(() => {
//         users.forEach((user) => {
//             if (user.userId === userId){
//               console.log(`id'si ${user.userId} olan kullanıcının post'u ${user.post}`)
//             }
//         },5000)
//     })
// }

// getUserById(findUserId);

// const sude = new XMLHttpRequest();
// console.log(sude);

// const idyegore = (url, id) => {
//     if ( id === null){
//         return url;
//     }
//     return `${url}/${id}`
// }


// const getPosts = (url,id) => {
//     let newUrl = idyegore(url,id);
//   const xhr = new XMLHttpRequest;
//   xhr.addEventListener("readystatechange", ()=> {
//     if(xhr.status === 200 && xhr.readyState === 4) {
//         console.log(xhr.response)
//     }
//   })

//   xhr.open("GET", newUrl);
//   xhr.send();
// }

// getPosts("https://jsonplaceholder.typicode.com/posts",2)

// let check = false;
// const promise = new Promise((resolve, reject) => {
//   if ( check === true){
//     resolve("Promise başarılı")
//   }else{
//     reject("Promise başarısız.")
//   }
// })

// console.log(promise)

// promise örnek
// let check = true;
// const newPromise = () => {
//     return new Promise ((resolve, reject) => {
//         if (check) {
//             resolve("Promise başarılı çalışıyor.")
//         }else {
//             reject("Promise başarısız")
//         }
//     })
// }

// newPromise()
// .then((response) => {
//     console.log(response)

// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     console.log("Her zaman çalışır.")
// })

// promise ve xmlhttprequest

const readStudents=(url) => {
 return new Promise((resolve,reject) => {

    const xhr = new XMLHttpRequest();
    try{
        xhr.addEventListener("readystatechange", ()=> {
            if(xhr.readyState === 4 && xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText))
            }
        })
    } catch (error) {
        reject(error);
    }

    xhr.open("GET", url);
    xhr.send();
 })
}

readStudents("students.json")
.then((data) => console.log(data))
.catch((err)=>console.log(err))

