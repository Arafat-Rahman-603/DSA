// Merges two sorted sub-arrays into a single sorted array
function merge(arr,first,last,mid){
    // Create a temporary array to hold the sorted elements
    let tempArr = new Array(last-first+1);
    let i=first,j=mid+1,k=0;

    // Compare elements from both halves and place the smaller one into tempArr
    while (i<=mid && j <= last) {
        if(arr[i] < arr[j]){
            tempArr[k++] = arr[i++];
        }else{
            tempArr[k++] = arr[j++];
        }
    }

    // If there are remaining elements in the left half, copy them over
    while (i <= mid) {
        tempArr[k++] = arr[i++];
    }

    // If there are remaining elements in the right half, copy them over
    while (j <= last) {
        tempArr[k++] = arr[j++];
    }

    // Copy the sorted elements from tempArr back to the original array
    let a=0,b=tempArr.length;
    while (a < b) {
        // Offset by 'first' to overwrite the correct portion of the original array
        arr[first + a] = tempArr[a];
        a++
    }

    return arr
}

// Recursively divides the array into halves until they have 1 or 0 elements
function devider(arr,first,last){
  // Base case: if the sub-array has 1 or fewer elements, it's already sorted
  if(first >= last) return;

  // Find the midpoint to divide the array
  let mid = Math.floor((last+first)/2);

  // Recursively sort the left half
  devider(arr,first,mid);

  // Recursively sort the right half
  devider(arr,mid+1,last);

  // Merge the two sorted halves back together
  merge(arr,first,last,mid);
}

// Test the merge sort implementation
let arr = [3,4,5,2,1];
devider(arr,0,arr.length-1);
console.log(arr)