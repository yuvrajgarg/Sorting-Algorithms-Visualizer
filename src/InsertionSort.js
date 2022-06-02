import {color_update, height_update} from './App.js';

const bar = document.getElementsByClassName("app__array__container__bar")
export function insertionSort(a){
    var n = a.length
    color_update(bar[0],'green');
    for(let j = 1 ; j < n ; j++){
        let i = j;
        color_update(bar[i],'yellow')
        while(i>0 && a[i-1]>a[i]){
            color_update(bar[i],'red') //bar[i] is the div , a[i] is the height of that particular bar
            color_update(bar[i-1],'red')

            var temp = a[i]
            a[i] = a[i-1]
            a[i-1] = temp

            height_update(bar[i],a[i])
            height_update(bar[i-1],a[i-1]);

            color_update(bar[i],'aqua') 
            color_update(bar[i-1],'aqua')

            i-=1;
        }
    }
    for(let i = 0 ; i <n ; i++){
        color_update(bar[i],'green')
    }
}
export function insertionSort_simple(a){
    var n = a.length
    for(let j = 1 ; j < n ; j++){
        let i = j;
        while(i>0 && a[i-1]>a[i]){
            var temp = a[i]
            a[i] = a[i-1]
            a[i-1] = temp
            i-=1;
        }
    }

}