/** @param target After the first and before the last entry. */
function binarySearch(values, valuesLength, target, step) {
    var low = 0,
        high = valuesLength / step - 2;

    if(high === 0) return step;

    var current = high >> 1;
    while(true) {
        if(values[(current + 1) * step] <= target)
            low = current + 1;
        else
            high = current;

        if(low == high) return (low + 1) * step;
        current = (low + high) >> 1;
    }
    return 0;
};

module.exports = {
    binarySearch
};
