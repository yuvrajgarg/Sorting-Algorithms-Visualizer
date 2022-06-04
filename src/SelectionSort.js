import {color_update, height_update, enableButtons} from './App.js';

const bar = document.getElementsByClassName("app__array__container__bar")
export function selectionSort(a){
    var n = a.length
    for(let i = 0 ; i < n ; i++){
        var mini = 1e10, min_idx = i

        for(let j = i ; j < n ; j++){
            if(mini > a[j]){
                color_update(bar[min_idx],'aqua')
                mini = a[j];
                min_idx = j;
                color_update(bar[min_idx],'yellow') //bar[i] is the div , a[i] is the height of that particular bar
                
            }
        }
        color_update(bar[i],'red')
        color_update(bar[min_idx],'red')
        var temp  = a[i]
        a[i] = a[min_idx]
        a[min_idx] = temp

        height_update(bar[i],a[i])
        height_update(bar[min_idx],a[i]);

        color_update(bar[i],'aqua')
        color_update(bar[min_idx],'aqua')
        color_update(bar[i],'green')
    }
    enableButtons();
}
export function selectionSort_simple(a){
    var n = a.length
    for(let i = 0 ; i < n ; i++){
        var mini = 1e10, min_idx = -1

        for(let j = i ; j < n ; j++){
            if(mini > a[j]){
                mini = a[j];
                min_idx = j;
            }
        } 
        var temp  = a[i]
        a[i] = a[min_idx]
        a[min_idx] = temp 
    }
}