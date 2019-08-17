
insert = (val) => {
    let ansVal = document.getElementsByClassName('answer')[0].value;
    if(val) {
        ansVal = ansVal + val;
    }
    document.getElementsByClassName('answer')[0].value = ansVal;
}

calculate = () => {
    let ansVal = document.getElementsByClassName('answer')[0].value;
    if(ansVal) {
        document.getElementsByClassName('answer')[0].value = eval(ansVal);
    }
}

clearVal = () => {
    document.getElementsByClassName('answer')[0].value = '';
}

deletion = () => {
    let ansVal = document.getElementsByClassName('answer')[0].value;
    if(ansVal.length > 0) {
        document.getElementsByClassName('answer')[0].value = ansVal.substring(0, ansVal.length - 1);
    }
}