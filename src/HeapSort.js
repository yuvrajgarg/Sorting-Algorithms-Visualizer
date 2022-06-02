import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import {color_update, height_update} from './App.js';

const bar = document.getElementsByClassName("app__array__container__bar")
export function heapSort(){
    
}
export function heapSort_simple(a){
    var n = a.length
    for(let i = (n/2) ; i>=1 ; i--){
        let idx = i-1;
        heapify(idx,a);
    }
    let sorted_a = []
    for(let num = 1 ; num<=n ; num++){
        sorted_a.push(a[0]);
        deleteElem(a);
    }
    for(let i = 0 ; i < n ; i++){
        a.push(sorted_a[i])
    }
}
function deleteElem(a){
    let s_idx = 0;
    let n = a.length;
    let l_idx = n-1;
    swap(a,s_idx,l_idx);
    a.pop();
    heapify(s_idx,a);
}
function heapify(idx, a){
    let n = a.length
    let left_child_idx = (2*idx)+1;
    let right_child_idx = (2*idx)+2;
    let smaller_idx = idx
    // console.log("parent = ",a[idx]," ->comparing",a[left_child_idx]," and ",a[right_child_idx])
    if(left_child_idx<n && a[left_child_idx]<a[smaller_idx]){
        smaller_idx = left_child_idx;
    }
    if(right_child_idx<n && a[right_child_idx]<a[smaller_idx]){
        smaller_idx = right_child_idx
    }
    if(smaller_idx!==idx){
        // console.log("swapping ",a[idx]," and ",a[smaller_idx])
        swap(a,idx,smaller_idx)
        // console.log("after swapping ",a[idx]," and ",a[smaller_idx])
        // console.log("calling ",a[smaller_idx])
        heapify(smaller_idx,a)
    }
}
// export function heapSort_simple(a){
    
// }
function swap(a,low, high){
    let temp = a[low];
    a[low] = a[high];
    a[high] = temp;
}