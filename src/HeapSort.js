import {color_update, height_update, enableButtons} from './App.js';

const bar = document.getElementsByClassName("app__array__container__bar")
export function heapSort_simple(a){
    var n = a.length
    for(let i = Math.floor(n/2) ; i>=1 ; i--){
        let idx = i-1;
        heapify_simple(idx,a);
    }
    let sorted_a = []
    for(let num = 1 ; num<=n ; num++){
        sorted_a.push(a[0]);
        deleteElem_simple(a);
    }
    for(let i = 0 ; i < n ; i++){
        a.push(sorted_a[i])
    }
}
function deleteElem_simple(a){
    let s_idx = 0;
    let n = a.length;
    let l_idx = n-1;
    swap_simple(a,s_idx,l_idx);
    a.pop();
    heapify_simple(s_idx,a);
}
function heapify_simple(idx, a){
     
    let n = a.length
    let left_child_idx = (2*idx)+1;
    let right_child_idx = (2*idx)+2;
    let smaller_idx = idx
    if(left_child_idx<n && a[left_child_idx]<a[smaller_idx]){
        smaller_idx = left_child_idx;
    }
    if(right_child_idx<n && a[right_child_idx]<a[smaller_idx]){
        smaller_idx = right_child_idx
    }
    if(smaller_idx!=idx){
        swap_simple(a,idx,smaller_idx)
        heapify_simple(smaller_idx,a)
    }
}
function swap_simple(a,low, high){
     let temp = a[low];
    a[low] = a[high];
    a[high] = temp;
}
export function heapSort(a){
    var n = a.length
    let a_copy = []
    for(let i = 0 ; i < n ; i++){
        a_copy.push(a[i]);
    }
    for(let i = Math.floor(n/2) ; i>=1 ; i--){
        let idx = i-1;
        heapify(idx,a_copy);
    }
    let sorted_a = []
    for(let num = 1 ; num<=n ; num++){
        sorted_a.push(a_copy[0]);
        deleteElem(a_copy);
        color_update(document.getElementsByClassName("app__array__container__bar")[n-num],'green')
    }
    for(let i = 0 ; i < n ; i++){
        a[i] = (sorted_a[n-i-1])
    }
    enableButtons();
}
function deleteElem(a){
    let s_idx = 0;
    let n = a.length;
    let l_idx = n-1;
    swap(a,s_idx,l_idx);
    a.pop();
    // if(a.length>1){
        heapify(s_idx,a);
    // }
}
function heapify(idx, a){
    color_update(bar[idx],'yellow');
    let n = a.length
    let left_child_idx = (2*idx)+1;
    let right_child_idx = (2*idx)+2;
    let larger_idx = idx
    if(left_child_idx<n && a[left_child_idx]>a[larger_idx]){
        larger_idx = left_child_idx;
    }
    if(right_child_idx<n && a[right_child_idx]>a[larger_idx]){
        larger_idx = right_child_idx
    }
    if(larger_idx!=idx){
        swap(a,larger_idx,idx)
        heapify(larger_idx,a)
    }
    else{
        color_update(bar[idx],'aqua')
    }
}
function swap(a,low, high){
    color_update(bar[low],'red')
    color_update(bar[high],'red')
    let temp = a[low];
    a[low] = a[high];
    a[high] = temp;
    
    height_update(bar[low],a[low])
    height_update(bar[high],a[high]);

    color_update(bar[low],'aqua')
    color_update(bar[high],'aqua')
}