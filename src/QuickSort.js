import {color_update, height_update} from './App.js';

const bar = document.getElementsByClassName("app__array__container__bar")
export function quickSort(a){
    let low = 0;
    let high = a.length-1;
    sortAndPartition(a,low,high) 
}
function sortAndPartition(a, low, high){
    if(low>=high){
        if(low==high){
            color_update(bar[low],'green')
        }
        return;
    }
    let pivot = a[low], pivot_idx = low
    color_update(bar[pivot_idx],'blue')
    let i = low;
    let j = high;
    while(i<j){
        while(a[i]<=pivot){
            i+=1;
        }
        while(a[j]>pivot){
            j-=1;
        }
        if(i>=j){
            color_update(bar[pivot_idx],'red');
            color_update(bar[j],'red');
            swap(a,pivot_idx,j);
            height_update(bar[pivot_idx],a[pivot_idx])
            height_update(bar[j],a[j])
            color_update(bar[pivot_idx],'aqua');
            color_update(bar[j],'green');
            
            sortAndPartition(a,low,j-1)
            sortAndPartition(a,j+1,high)
            break;
        }
        else{
            color_update(bar[i],'red')
            color_update(bar[j],'red')
            swap(a,i,j)
            height_update(bar[i],a[i])
            height_update(bar[j],a[j])
            color_update(bar[i],'aqua');
            color_update(bar[j],'aqua');
        }
    }
}
function swap(a,low, high){
    let temp = a[low];
    a[low] = a[high];
    a[high] = temp;
}

export function quickSort_simple(a){
    let low = 0;
    let high = a.length-1;
    sortAndPartition_simple(a,low,high) 
}
function sortAndPartition_simple(a, low, high){
    if(low>=high){
        return;
    }
    let pivot = a[low], pivot_idx = low
    let i = low;
    let j = high;
    while(i<j){
        while(a[i]<=pivot){
            i+=1;
        }
        while(a[j]>pivot){
            j-=1;
        }
        if(i>=j){
             swap(a,pivot_idx,j);
             sortAndPartition_simple(a,low,j-1)
             sortAndPartition_simple(a,j+1,high)
            break;
        }
        else{ 
            swap(a,i,j) 
        }
    }
}