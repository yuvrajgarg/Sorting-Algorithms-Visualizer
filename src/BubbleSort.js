import {color_update, height_update, enableButtons} from './App.js';

const bar = document.getElementsByClassName("app__array__container__bar")
export function bubbleSort(a){
    var n = a.length
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < n-i-1 ; j++){
            color_update(bar[j],'yellow') //bar[i] is the div , a[i] is the height of that particular bar
            color_update(bar[j+1],'yellow')
            
            var h1 = a[j]
            var h2 = a[j+1]
            if(h1 > h2){
                color_update(bar[j],'red')
                color_update(bar[j+1],'red')
                var temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp

                height_update(bar[j],a[j])
                height_update(bar[j+1],a[j+1]);
            }
            color_update(bar[j],'aqua')
            color_update(bar[j+1],'aqua')
        }
        color_update(bar[n-1-i],'green')
    }
    // console.log(a);
    enableButtons();
}
export function bubbleSort_simple(a){
    var n = a.length
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < n-i-1 ; j++){
            
            var h1 = a[j]
            var h2 = a[j+1]
            if(h1 > h2){
                var temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp

            }
        }
    }
    return a;
}