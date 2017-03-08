/*
Practice with JavaScript OOP Concepts (20 points)
Within a new web page, create the following applications. Remember to comment out every application once you’ve finished with that step. Be sure to place all of your JavaScript code within an external script file:
1.	Create a namespace called Animal. Then, define two sub classes from the namespace, one called Cat and another called Dog. 
*/


//var Animal = {
//    Cat: function () {
//        "use strict";
//    },
//    Dog: function () {
//        "use strict";
//    }
//};


/*
2.	Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal notation and the Dog class should be created using constructor notation.
*/

//var Cat = {};

//function Dog() {
//    "use strict";
//}

/*
3.	Directly underneath, create a new instance of the Dog class.*/
//var dog1 = new Dog();

/*
4.	Start over and now create a new class using constructor notation called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window.*/

//function Animal() {
//    "use strict";
//    window.console.log("The Animal has been created");
//}
//var animal1 = new Animal();


/*
5.	Now, change the above code so that it accepts a parameter and that value is what should be displayed in the console window. The message should be passed as an argument into the constructor at the moment that the Animal class is instantiated.
*/

//function Animal(param1) {
//    "use strict";
//    window.console.log(param1);
//}
//var animal1 = new Animal("The Animal has been created");


/*
6.	Start over and now create a new class using constructor notation called Animal. Define five properties within your class including type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and then pass in the actual arguments during the object’s instantiation. 
*/

//function Animal(type, breed, color, height, length) {
//    "use strict";
//    this._type = type;
//    this._breed = breed;
//    this._color = color;
//    this._height = height;
//    this._length = length;
//    
//    /*7.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 //properties displayed in a list within the console window.*/
//    for (var p in this){
//        window.console.log(p + " : " + this[p]);
//    }
//
//    /*
//    8.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of //Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” //instead. Call that method after the Animal class has been instantiated.*/
//
//    this.speak = function(){
//        if (this._type == "dog"){
//            return "The " + this._color + " dog is barking!";
//        } else if (this._type == "cat"){
//            return "The " + this._color + " cat is meowing!";
//        } else
//            return "";
//    }
    
//}
//var lion = new Animal("lion", "Barbary Lion", "Gold", "3.5", "8");
//window.console.log(lion.speak());

//var cat = new Animal("cat", "TBD", "yellow", "0.5", "2");
//window.console.log(cat.speak());

//var dog = new Animal("dog", "TBD", "white", "2", "4.2");
//window.console.log(dog.speak());


/*
9.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
*/
//function Animal(type, breed, color, height, length) {
//    "use strict";
//    var _type = type;
//    var _breed = breed;
//    var _color = color;
//    var _height = height;
//    var _length = length;
//    
//    var checkType = function() {
//        if (_type == "dog")
//            return "dog";
//        else if (_type == "cat")
//            return "cat";
//        else 
//            return "N/A";
//    }
//   
//    this.speak = function(){
//        return window.console.log("The " + checkType() + " has made a noise!");
//    }
//    
//}
//var cat = new Animal("dogaa", "TBD", "yellow", "0.5", "2");
//cat.speak();


/*
10.	Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.
*/

function findWords(param1) {
    
    var wc = Array();
    var w = param1.replace(",","").replace(".","").split(" ").sort();
    var pw = "";
    var ipw = -1;
    
    for (var i in w){    
        // If the previous word equal current word 
        if (pw == w[i]){
            wc[ipw][1] += 1; 
        }else{
            wc.push([w[i], 1]);
            pw = w[i];
            ipw += 1;
        }
    }
    return wc;
}

findWords.prototype = String.prototype;
var words = new findWords("Whatever you have to do, do it with a lot of care and do it well."); 
window.alert(words.join("\n"));

