'use strict';
let mainArr = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
mainArr.getUnique = function () {
    let o = {}, uniqArr = [], mainArrItem;
    for (let i = 0; mainArrItem = this[i]; i++) {
        o[mainArrItem] = 1
    };
    for (mainArrItem in o) {
        uniqArr.push(mainArrItem)
    };
    return uniqArr;
}
console.log(mainArr.getUnique());
