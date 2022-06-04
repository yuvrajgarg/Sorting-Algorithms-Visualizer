import {color_update, height_update, enableButtons} from './App.js';

const bar = document.getElementsByClassName("app__array__container__bar")
export function countSort(a){
    let n = a.length;
    var freq = []
    var sorted_a = []
    var a_copy = []
    let mini = 1e6
    let maxi = -1
    for(let i = 0 ; i < n ; i++){
        mini = Math.min(mini,a[i])
        maxi = Math.max(maxi,a[i])
        a_copy[i] = a[i]
        sorted_a.push(0);
    }
    for(let i = 0 ; i <= (maxi-mini) ; i++){
        freq.push(0);
    }
    for(let i = 0 ; i < n ; i++){
        freq[a[i]-mini]+=1
    }
    for(let i = 1 ; i <= (maxi-mini) ; i++){
        freq[i] += freq[i-1];
    }
    for(let i = n-1 ; i>=0 ; i--){
        color_update(bar[i],'blue')
        let idx = freq[a_copy[i]-mini]-1;
        sorted_a[idx] = a_copy[i];
        color_update(bar[idx],'yellow')
        height_update(bar[idx],sorted_a[idx])        
        color_update(bar[idx],'green')
        if(i!=idx)color_update(bar[i],'aqua')
        freq[a_copy[i]-mini]-=1;
    }
    for(let i = 0 ; i <= (maxi-mini) ; i++){
        a[i] = sorted_a[i];
        color_update(bar[i],'green')
    }
    enableButtons()
}
export function countSort_simple(a){
    let n = a.length;
    var freq = []
    var sorted_a = []
    let mini = 1e6;
    let maxi = -1;
    for(let i = 0 ; i < n ; i++){
        mini = Math.min(mini,a[i])
        maxi = Math.max(maxi,a[i])
        sorted_a.push(0);
    }
    for(let i = 0 ; i <= (maxi-mini) ; i++){
        freq.push(0);
    }
    for(let i = 0 ; i < n ; i++){
        freq[a[i]-mini]+=1
    }
    for(let i = 1 ; i <= (maxi-mini) ; i++){
        freq[i] += freq[i-1];
    }
    for(let i = n-1 ; i>=0 ; i--){
        let idx = freq[a[i]-mini]-1;
        sorted_a[idx] = a[i];
        freq[a[i]-mini]-=1;
    }
    for(let i = 0 ; i <= (maxi-mini) ; i++){
        a[i] = sorted_a[i];
    }
}