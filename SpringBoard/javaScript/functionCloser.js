//closer
// A closure means the inner function "remembers" the variables of its outer function — even after the outer function is done executing.

function outer(){
    let cnt= 0; //just once intialized
    return function inner(){ //counter() directly call inner()
        cnt++;
        console.log(cnt);
    }
}

const counter = outer(); //here int counter inner() is stored adn always is directly call to inner its called closer
counter();
counter();
counter();
counter();
counter();