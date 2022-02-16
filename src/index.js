var wordsNumbers = {
    a: ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    b: ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
}

module.exports = function toReadable(number) {
    if (number === 0) return 'zero'
    if ((number = number.toString()).length > 3) return 'overflow';
    n = ('000' + number).substr(-3).match(/^(\d{1})(\d{2})$/);
    if (!n) return;
    var str = (n[1] != 0) ? (wordsNumbers.a[Number(n[1])] || wordsNumbers.b[n[1][0]] +
        addSecond(wordsNumbers.a, n[1][1])) + ' hundred ' : '';
    var add = wordsNumbers.a[Number(n[2])] || wordsNumbers.b[n[2][0]] + addSecond(wordsNumbers.a, n[2][1]);
    if (add) {
        str += add;
    } else {
        str = str.slice(0, -1)
    }

    return str;
}

function addSecond(arr, n) {
    if (n !== '0')
        return ' ' + arr[n]
    return '';
}
