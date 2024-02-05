//Simple closure + github push test
function newCounter(what, plural){
    let it = 0;
    function counter(){
        console.log(it++ + ' ' + what + (plural ? '(s)' : ''));
    }
    return counter;
}


const cats = newCounter('cat', true);


cats(); cats();