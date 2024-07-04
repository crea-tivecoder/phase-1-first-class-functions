//Receives A Function and calls it
function receivesAFunction (callback) {
   callback();
   return function NamedFunction(){
   };
}

//Returns A Named Function
function returnsANamedFunction (){
    function NamedFunction() {
        console.log ("named function");
    }
    return NamedFunction;
}

//returns An Anonymous Function
function returnsAnAnonymousFunction() {
    return function() {
        console.log('This is an anonymous function')
    };
}
