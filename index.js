
// 1.  convert radain to degree
function radainToDegree(radain){

    if(typeof radain !== "number"){
        return "radain vlaue given must be a number";
    }
    const degree = radain * 180;
    return degree;
}

const result = radainToDegree(3);
console.log(result);
//ends

// 2. check wheter the given file name is a javascript file or not. if is javascript file than return ture else flase
function isJavaScriptFile(fileName){

    if(typeof fileName !== "string"){
        return "file name given must be a string"; 
    }

    return fileName.endsWith(".js")
    
}

const fileName = "index.js";
const result2 = isJavaScriptFile(fileName);
console.log(result2);
//ends

// 3. calculate the total oil price
/* 
 diesel ------> 114 (per kg)
 petrol  -------> 130 (per kg)
 octane ------> 135 (per kg)
 */
function oilPrice(diesel, petrol, octane){

    if(typeof diesel !== "number" || typeof petrol !== "number" || typeof octane !== "number"){
        return "All values must be numbers";
    }
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;

    const totalPriceOfDiesel = diesel * dieselPrice;
    const totalPriceOfPetrol = petrol * petrolPrice;
    const totalPriceOfOctane = octane * octanePrice;

    const totalOilPrice = totalPriceOfDiesel  + totalPriceOfPetrol + totalPriceOfOctane;
    
    return totalOilPrice;
}

const result3 = oilPrice(3, 5, 8);
console.log(result3);
//ends

// 4. calculate the public bus fare
/*
reserved bus ------> 50 (jon)
microbus------------> 11 (jon)
rest pepole will go by public bus
public bus fare -------> 250 (per pes)
 */

function publicBusFare(pepole){
     const reservedBus = 50;
     const microbus = 11;
     const publicBusFare = 250;

    if(typeof reservedBus !== "number" || typeof microbus !== "number" || typeof publicBusFare !== "number"){
        return "All values must be numbers";
    }

    const reservedBusRemaining = pepole - reservedBus;
    const restPepole = reservedBusRemaining  - microbus;

    const totalPublicBusFare = restPepole * publicBusFare;

    return totalPublicBusFare;
}

const result4 = publicBusFare(65);
console.log(result4);
//ends

// 5. if name proprety === friend proprety than return ture else flase
function isBestFriend(friend1, friend2){

    if(typeof friend1.name !== "string" || typeof friend1.friend !== "string" || typeof friend2.name !== "string" || typeof friend2.friend !== "string" ){
        return "object proprety value given must be a string"
    }
    else if(friend1.name === friend2.friend && friend2.name === friend1.friend){
        return true;
    }
    else{
        return false;
    }
}

const friend1 = {
    name: "Tom",
    friend: "Rock"
};

const friend2 ={
    name: "Rock",
    friend: "Tom"
}

const result5 = isBestFriend(friend1, friend2);
console.log(result5);
//ends

/* 
তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")



এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে
 */

function mindGame(num){
    const resulltOfMul = num * 3;
    const resultOfSum = resulltOfMul + 10;
    const resulltOfDiv = resultOfSum / 2;
    const output = resulltOfDiv - 5;

    return output;
}

const output = mindGame(5);
console.log(output);
//ends

/* 
তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 



এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input
 */

function evenOdd(str){
    const strLength = str.length;
    
    if(strLength % 2 === 0){
        return "even";
    }
    else{
        return "odd";
    }

}
const outputEvenOrOdd = evenOdd("Batch7");
console.log(outputEvenOrOdd);
//ends

/* 
তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  



এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।
 */
function isLGSeven(number){
 if(number < 7){
    const resultOfSub = number - 7;
    return resultOfSub;
 }

 else{
    const doubleInput = number * 2;
    return doubleInput;
 }

}

const outputIsLGSeven = isLGSeven(15);
console.log(outputIsLGSeven);
//ends

/* 
তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 

এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
 */
function findingBadData(arrayOfNumbers){
 const numberOfArray = []

 for(let i = 0; i < arrayOfNumbers.length; i++){
    if(arrayOfNumbers[i] < 0){
        numberOfArray.push(arrayOfNumbers[i])
    }
}

const arrayOfLenght = numberOfArray.length;
return arrayOfLenght;

}

const arrayOfNumbers = [ 33, -12, -32, 44, -10, -15, -20, 25, 30, -35];

const outputNumberOfArray = findingBadData(arrayOfNumbers);
console.log(outputNumberOfArray);
//ends


/* 
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 



১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21

২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32

৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43



[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
 */

function gemsToDiamond(gameNumber1, gameNumber2, gameNumber3){
    const gamePower1 = 21;
    const gamePower2 = 32;
    const gamePower3 = 43;

    const totalPower = (gameNumber1 * gamePower1) + (gameNumber2 * gamePower2) + (gameNumber3 * gamePower3);

    const totalDiamond = totalPower / 100; 

    if(totalDiamond > 1000){
        totalDiamond -= 2000;
    }
    return totalDiamond;
}

const outputGameToDiamond = gemsToDiamond(20, 200, 50);
console.log(outputGameToDiamond);
//ends


