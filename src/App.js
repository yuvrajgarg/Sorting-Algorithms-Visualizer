import './App.css';
import {useState, useEffect} from 'react'
import {mergeSort} from './MergeSort.js'
import { bubbleSort, bubbleSort_simple } from './BubbleSort.js';
import { insertionSort, insertionSort_simple } from './InsertionSort.js';
import { selectionSort, selectionSort_simple } from './SelectionSort.js'
import { quickSort , quickSort_simple } from './QuickSort'
import { heapSort , heapSort_simple} from './HeapSort'

var sum_delay = 0
var delay = 0.1
export function color_update(array__bar,new_color){
  setTimeout(() => {
      array__bar.style.backgroundColor = new_color;
    }, sum_delay+=delay)
}
export function height_update(array__bar,new_height){
    setTimeout(() => {
        array__bar.style.height = `${new_height}px`;
      }, sum_delay+=delay)
}

function App() {
  const [array,setArray] = useState([]); 
  const LENGTH_OF_ARRAY = 105;
  useEffect(()=>{
    generateNewArray()
  },[])
  const getRandom = (a,b) => {
    return Math.floor(a+(Math.random()*b))
  }
  const generateNewArray = () => {
    const a = []
    for(let i = 0 ; i < LENGTH_OF_ARRAY ; i++){
      a.push(getRandom(100,450));
    }
    setArray(a);
    updateArrayBarsColor();
    updateAlgoLogic("");
  }
  function updateAlgoLogic(s){
    document.getElementById("app__algo__logic").innerText = s;
  }
  function updateArrayBarsColor(){
    const Bars = document.getElementsByClassName("app__array__container__bar")
    for( let i = 0 ; i < array.length ; i++ ){ 
      Bars[i].style.backgroundColor = 'aqua'
    }
  }
  const testSortingAlgo = () => {
    // alert("Console kholkr dekho!")
    const a = []
    for(let i = 0 ; i < LENGTH_OF_ARRAY ; i++){
      // for(let j = 0 ; j < getRandom(5,80) ; j++){
        a.push(getRandom(100,450))
      // }
    }
      let inbuiltSorted = a.slice().sort((a,b)=>a-b);
      // bubbleSort_simple(a);
      // selectionSort_simple(a);
      insertionSort_simple(a);
      let myAlgoSorted = a;
      let flag = false;
      for(let i = 0 ; i < LENGTH_OF_ARRAY ; i++){
        if(inbuiltSorted[i]!==myAlgoSorted[i]){
          console.log(false);
          flag=true;
          break;
        }
      }
      if(!flag)console.log(true)
  }
  const BubbleSortClick = () => {
    sum_delay = 0
    bubbleSort(array);
    console.log("bubble sort")
    var s = "LOGIC:  The array will be divided into 2 parts, unsorted array and sorted array. Sorted array will be formed from right to left. Each time we will start from the left most point and compare 2 adjacent elements A(i) and A(i+1) for i = 0 to n-2 and swap them if A(i) > A(i+1). This way the largest element will reach the end and we will continue the process"
    updateAlgoLogic(s);
    // console.log(logic_div.innerText)
  }
  const InsertionSortClick = () => {
    sum_delay = 0
    insertionSort(array);
    console.log("insertion sort")
    var s = "LOGIC: The array will be divided into 2 parts, unsorted array and sorted array. Sorted array will be formed from left to right. Each time we will pick the left most element from the unsorted array and insert it at it's correct position in the unsorted array on it's left. This way the element will be inserted at it's correct position and the whole array will be sorted like this"
    updateAlgoLogic(s);
  }

  const SelectionSortClick = () => {
    sum_delay = 0
    selectionSort(array);
    console.log("selection sort")
    var s = "LOGIC: The array will be divided into 2 parts, unsorted array and sorted array. Sorted array will be formed from left to right. Each time we will find the minimum element of the unsorted array and swap it with the first element of the unsorted array. This way the element will be inserted at it's correct position and the whole array will be sorted like this"
    updateAlgoLogic(s);
  }

  const MergeSortClick = () => {
  //   sum_delay = 0
  //   mergeSort(array);
  //   var s = "LOGIC: The array will be divided into 2 parts, unsorted array and sorted array. Sorted array will be formed from left to right. Each time we will find the minimum element of the unsorted array and swap it with the first element of the unsorted array. This way the element will be inserted at it's correct position and the whole array will be sorted like this"
  //   updateAlgoLogic(s);
  }
  const HeapSortClick = () => {
  //   sum_delay = 0
  //   heapSort(array);
  //   var s = "LOGIC: The array will be divided into 2 parts, unsorted array and sorted array. Sorted array will be formed from left to right. Each time we will find the minimum element of the unsorted array and swap it with the first element of the unsorted array. This way the element will be inserted at it's correct position and the whole array will be sorted like this"
  //   updateAlgoLogic(s);
  }
  const QuickSortClick = () => {
  //   sum_delay = 0
  //   quickSort(array);
  //   var s = "LOGIC: "
  //   updateAlgoLogic(s);
  }
  return (
    <div className="app">
      <div className = "app__header">
          <button 
              className="app__header__button"
              onClick = {generateNewArray}
          >Generate new array!</button>
          <button 
            className="app__header__button"
            onClick = {MergeSortClick}
          >Merge Sort</button>
          <button 
            className="app__header__button"
            onClick = {BubbleSortClick }
          >Bubble Sort</button>
          <button 
            className="app__header__button"
            onClick = {InsertionSortClick}
          >Insertion Sort</button>
          <button 
            className="app__header__button"
            onClick = {SelectionSortClick}
          >Selection Sort</button>
          <button
          className='app__header__button'
          onClick = {QuickSortClick}
          >Quick Sort</button>
          <button
            className = "app__header__button"
            onClick = {HeapSortClick}
          >Heap Sort</button>
          <button 
            className="app__header__button"
            onClick = {testSortingAlgo}
          >Test Algo</button>
      </div>
      <div className="app__array__container">
          {array.map((val,idx)=>(
            <div 
              className="app__array__container__bar" 
              key={idx}
              style={{height:`${val}px`}}
            >
            </div>
          ))}
      </div>
      <div id="app__algo__logic">
      </div>
    </div>
    
  );
}

export default App;
