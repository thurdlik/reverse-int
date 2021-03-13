module.exports = function reverse (n) {
        str = String(n);
        ln = str.length;
        myArr = [];
        for (let i = ln - 1; i >= 0; i--) {
            myArr.push(str[i]);
        }
        result = myArr.join([]);
        return parseInt(result);
}