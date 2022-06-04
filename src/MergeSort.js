import {color_update, height_update, enableButtons} from './App.js';

const bar = document.getElementsByClassName("app__array__container__bar")
export function mergeSort(array){
    mergeSortHelper(0,array.length-1,array);
    enableButtons();
}
function mergeSortHelper(low, high, array){
    if(low>=high){ // if we do low>high it will run forever
        return;
    }
    let mid = Math.floor((low)+(high-low)/2);
    color_update(bar[mid],'blue')
    mergeSortHelper(low,mid,array,);
    mergeSortHelper(mid+1,high,array);
    merge(low,mid,high,array );
}
function merge(low,mid,high,array){
    let i = low;
    let j = mid+1;
    let k = low;
    let mergedArray = []
    while(i<=mid && j<=high){
        color_update(bar[i],'yellow')
        color_update(bar[j],'yellow')
        if(array[i]<=array[j]){   
            height_update(bar[k],array[i])
            mergedArray[k++] = array[i++] 
            // color_update(bar[k],'green')
        }
        else{
            height_update(bar[k],array[j])
            mergedArray[k++] = array[j++]
            // color_update(bar[k],'green')         
        }
    }
    while(i<=mid){
        color_update(bar[k],'yellow')
        height_update(bar[k],array[i])
        // color_update(bar[k],'green')
        mergedArray[k++] = array[i++]
    }
    while(j<=high){
        color_update(bar[k],'yellow')
        height_update(bar[k],array[j])
        // color_update(bar[k],'green')
        mergedArray[k++] = array[j++]
    }
    for(let i = low ; i <= high ; i++){
        color_update(bar[i],'green')
        array[i] = mergedArray[i];
    }
    return;
}

export function mergeSort_simple(array){
    mergeSortHelper_simple(0,array.length-1,array)
}
function mergeSortHelper_simple(low, high, array){
    if(low>=high){ // if we do low>high it will run forever
        return;
    }
    let mid = Math.floor((low)+(high-low)/2);
    mergeSortHelper_simple(low,mid,array);
    mergeSortHelper_simple(mid+1,high,array);
    merge_simple(low,mid,high,array);
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