//Simple closure + github push test
function newCounter(what){
    let it = 0;
    function counter(){
        console.log(`${it++} ${what}`);
    }
    return counter;
}


const cats = newCounter('cats');


cats(); cats();