//Simple closure + github push test
function newCounter(what){
    let it = 0;
    function counter(){
        console.log(it++ + ' ' + what);
    }
    return counter;
}


const dogs = newCounter('dogs');


dogs(); dogs(); dogs();
