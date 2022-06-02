export function mergeSort(array){
    mergeSortHelper(0,array.length-1,array)
}
function mergeSortHelper(low, high, array, animations){
    if(low>=high){ // if we do low>high it will run forever
        return;
    }
    let mid = Math.floor((low)+(high-low)/2);
    mergeSortHelper(low,mid,array,animations);
    mergeSortHelper(mid+1,high,array,animations);
    merge(low,mid,high,array,animations);
}
function merge(low,mid,high,array){
    let i = low;
    let j = mid+1;
    let k = low;
    let mergedArray = []
    while(i<=mid && j<=high){
        if(array[i]<=array[j]){
            mergedArray[k++] = array[i++] 
        }
        else{
            mergedArray[k++] = array[j++]
        }
    }
    while(i<=mid){
        mergedArray[k++] = array[i++]
    }
    while(j<=high){
        mergedArray[k++] = array[j++]
    }
    for(let i = low ; i <= high ; i++){
        array[i] = mergedArray[i];
    }
    return;
}

export function mergeSort_simple(array){
    mergeSortHelper_simple(0,array.length-1,array)
}
function mergeSortHelper_simple(low, high, array, animations){
    if(low>=high){ // if we do low>high it will run forever
        return;
    }
    let mid = Math.floor((low)+(high-low)/2);
    mergeSortHelper_simple(low,mid,array,animations);
    mergeSortHelper_simple(mid+1,high,array,animations);
    merge_simple(low,mid,high,array,animations);
}
function merge_simple(low,mid,high,array){
    let i = low;
    let j = mid+1;
    let k = low;
    let mergedArray = []
    while(i<=mid && j<=high){
        if(array[i]<=array[j]){
            mergedArray[k++] = array[i++] 
        }
        else{
            mergedArray[k++] = array[j++]
        }
    }
    while(i<=mid){
        mergedArray[k++] = array[i++]
    }
    while(j<=high){
        mergedArray[k++] = array[j++]
    }
    for(let i = low ; i <= high ; i++){
        array[i] = mergedArray[i];
    }
    return;
}