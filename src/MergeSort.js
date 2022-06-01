export function mergeSort(array){
    const animations = []
    mergeSortHelper(0,array.length-1,array,animations)
    return animations;
}
function mergeSortHelper(low, high, array, animations){
    // console.log(low,high);
    if(low>=high){
        return;
    }
    let mid = Math.floor((low)+(high-low)/2);
    mergeSortHelper(low,mid,array,animations);
    mergeSortHelper(mid+1,high,array,animations);
    merge(low,mid,high,array,animations);
}
function merge(low,mid,high,array,animations){
    let i = low;
    let j = mid+1;
    let k = low;
    let mergedArray = []
    while(i<=mid && j<=high){
        const animation = {}
        animation.compareStart = [i,j]
        animation.compareEnd = [i, j]
        if(array[i]<=array[j]){
            mergedArray[k++] = array[i++]
            animation.override = [k,array[i]]
        }
        else{
            mergedArray[k++] = array[j++]
            animation.override = [k, array[j]];
        }
        animations.push(animation);
    }
    while(i<=mid){
        const animation = {}
        animation.compareStart = [i,i]
        animation.compareEnd = [i,i]
        animation.override = [i,array[i]]
        animations.push(animation);
        mergedArray[k++] = array[i++]
    }
    while(j<=high){
        const animation = {}
        animation.compareStart = [j, j]
        animation.compareEnd = [j, j]
        animation.override = [j, array[j]]
        animations.push(animation);
        mergedArray[k++] = array[j++]
    }
    for(let i = low ; i <= high ; i++){
        array[i] = mergedArray[i];
    }
    return;
}