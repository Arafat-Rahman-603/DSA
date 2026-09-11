function partition(arr, first, last) {
    let pivot = arr[first];
    let i = first + 1;
    let j = last;

    while (i <= j) {
        while (i <= j && arr[i] <= pivot) i++;
        while (i <= j && arr[j] >= pivot) j--;
        
        if (i < j) {
            // Swap elements at i and j
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    // Swap the pivot element to its correct sorted position
    [arr[first], arr[j]] = [arr[j], arr[first]];
    return j;
}

function quicSort(arr, first, last) {
    if (first >= last) return;
    
    let mid = partition(arr, first, last);
    // Recursively sort the sub-arrays
    quicSort(arr, first, mid - 1);
    quicSort(arr, mid + 1, last);
}

let arr = [7, 8, 3, 5, 6, 2, 1];
quicSort(arr, 0, arr.length - 1);

console.log(arr);