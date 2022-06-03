import './App.css';
import {useState, useEffect} from 'react'
import { mergeSort, mergeSort_simple } from './MergeSort.js'
import { bubbleSort, bubbleSort_simple } from './BubbleSort.js';
import { insertionSort, insertionSort_simple } from './InsertionSort.js';
import { selectionSort, selectionSort_simple } from './SelectionSort.js'
import { quickSort , quickSort_simple } from './QuickSort'
import { heapSort , heapSort_simple} from './HeapSort'
import Footer from './Footer.js';

var sum_delay = 0
var delay = 0.1
const LENGTH_OF_ARRAY = 69;
export function color_update(array__bar,new_color){
  // console.log(array__bar)
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
  useEffect(()=>{
    generateNewArray()
  },[])
  const getRandom = (a,b) => {
    return Math.floor(a+(Math.random()*b))
  }
  const generateNewArray = () => {
    const a = []
    for(let i = 0 ; i < LENGTH_OF_ARRAY ; i++){
      a.push(getRandom(60,300));
    }
    setArray(a);
    updateArrayBarsColor();
    updateAlgoLogic("");
  }
  function updateAlgoLogic(s){
    document.getElementById("logic").innerHTML = s;
  }
  function updateArrayBarsColor(){
    const Bars = document.getElementsByClassName("app__array__container__bar")
    for( let i = 0 ; i < array.length ; i++ ){ 
      Bars[i].style.backgroundColor = 'aqua'
    }
  }
  const testSortingAlgo = () => {
    alert("Console kholkr dekho!")
    const a = []
    for(let i = 0 ; i < LENGTH_OF_ARRAY ; i++){
      // for(let j = 0 ; j < getRandom(5,80) ; j++){
        a.push(getRandom(100,450))
      // }
    }
      let inbuiltSorted = a.slice().sort((a,b)=>a-b);
      // bubbleSort_simple(a);
      // selectionSort_simple(a);
      // insertionSort_simple(a);
      // quickSort_simple(a)
      // mergeSort_simple(a)
      heapSort_simple(a);
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
    var s = "<span id='logic_heading'> LOGIC</span>:  The array will be divided into 2 parts, unsorted array and sorted array. Sorted array will be formed from right to left. Each time we will start from the left most point and compare 2 adjacent elements A(i) and A(i+1) for i = 0 to n-2 and swap them if A(i) > A(i+1). This way the largest element will reach the end and we will continue the process. <span id = 'yellow_text'> Yellow </span> denotes the elements which are being compared. <span id='red_text'> Red </span> denotes the elements to be swapped. <span id = 'green_text'> Green </span> denotes the element in it's correct sorted position. More can be read here <a className = 'hyperlink', href = 'https://en.wikipedia.org/wiki/Bubblesort', target = '_blank'> BUBBLE SORT </a>."
    updateAlgoLogic(s);
    // console.log(logic_div.innerText)
  }
  const InsertionSortClick = () => {
    sum_delay = 0
    insertionSort(array);
    console.log("insertion sort")
    var s = "<span id='logic_heading'> LOGIC</span>: The array will be divided into 2 parts, unsorted array and sorted array. Sorted array will be formed from left to right. Each time we will pick the left most element from the unsorted array and insert it at it's correct position in the unsorted array on it's left by  comparing two adjacent elements A(i) and A(i-1) for i = current index to 0 and swap them if A(i) < A(i-1). This way the element will be inserted at it's correct position and the whole array will be sorted at the end. <span id = 'yellow_text'> Yellow </span> denotes the current element. <span id='red_text'> Red </span> denotes the incorrect position of two elements which are to be swapped. <span id = 'green_text'> Green </span> denotes the element in it's correct sorted position. More can be read here <a className = 'hyperlink', href = 'https://en.wikipedia.org/wiki/Insertionsort', target = '_blank'> INSERTION SORT </a> "
    updateAlgoLogic(s);
  }
  const SelectionSortClick = () => {
    sum_delay = 0
    selectionSort(array);
    console.log("selection sort")
    var s = "<span id='logic_heading'> LOGIC</span>: The array will be divided into 2 parts, unsorted array and sorted array. Sorted array will be formed from left to right. Each time we will find the minimum element of the unsorted array and swap it with the first element of the unsorted array. This way the element will be inserted at it's correct position and the whole array will be sorted in a similar fashion. <span id='red_text'> Red </span> denotes the element to be swapped.  <span id = 'yellow_text'> Yellow </span> denotes the candidates for the minimum element. <span id = 'green_text'> Green </span> denotes the element in its correct sorted position. More can be read here <a className = 'hyperlink', href = 'https://en.wikipedia.org/wiki/Selectionsort', target = '_blank'> SELECTION SORT </a>."
    updateAlgoLogic(s);
  }
  const MergeSortClick = () => {
    sum_delay = 0
    mergeSort(array);
    var s = "<span id='logic_heading'> LOGIC</span>: Merge Sort uses Divide and Conquer Strategy, the array is recursively divided into 2 parts until only 2 elements remain in the smaller array to be considered and those 2 parts are sorted and merged and used ahead to sort the bigger array. <span id = 'blue_text'> Blue</span> denotes the mid point. <span id = 'yellow_text'> Yellow </span> denotes the two elements being compared. <span id = 'green_text'> Green </span> denotes sorted order. More can be read here <a className = 'hyperlink', href = 'https://en.wikipedia.org/wiki/Mergesort', target = '_blank'> MERGE SORT </a>. "
    updateAlgoLogic(s);
  }
  const HeapSortClick = () => {
    sum_delay = 0
    heapSort(array);
    var s = "<span id='logic_heading'> LOGIC</span>: Max Heap is made suing array and elements are extracted one by one from top of the heap and pushed at their respective position from the last. <span id = 'yellow_text'> Yellow </span> denotes the element currently getting set at it's position in the heap. <span id='red_text'> Red </span> denotes the elements to be swapped. <span id = 'green_text'> Green </span> denotes the element at theor correct position in the sprted array. More can be read here <a className = 'hyperlink', href = 'https://en.wikipedia.org/wiki/Heapsort', target = '_blank'> HEAP SORT </a>."
    updateAlgoLogic(s);
  }
  const QuickSortClick = () => {
    sum_delay = 0
    quickSort(array);
    var s = "<span id='logic_heading'> LOGIC</span>: Quick Sort uses Divide and Conquer Strategy, a pivot element is chosen and the array is partitioned such that all the elements less than or equal to the pivot element come before pivot's position and all the elements greater than it come after it. In a similar fashion, recursive calls are made to the left and right of the partitioned array. <span id = 'blue_text'> Blue</span> denotes the pivot element. <span id='red_text'> Red </span> denotes the two elements to be swapped. <span id = 'green_text'> Green </span> denotes the element in the correct sorted position. More can be read here <a className = 'hyperlink', href = 'https://en.wikipedia.org/wiki/Quicksort', target = '_blank'> QUICK SORT </a>."
    updateAlgoLogic(s);
  }
  return (
    <div className="app">
      <div className = "app__header">
          <div 
              className = 'app__header__heading'>SORTING ALGORITHMS VISUALIZER
          </div>
          <div className = 'app__header__all__buttons'>
            <div className='app__header__create__button'>
              <button 
                className="app__header__generate__button"
                onClick = {generateNewArray}
                >Create a new array!</button>
            </div>
            <div className="app__header__sorting__button">
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
                  {/* <button 
                    className="app__header__button"
                    onClick = {testSortingAlgo}
                  >Test Algo</button> */}
                </div>
          </div>
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
        <span id="logic"></span>
      </div>
      
      <Footer/>
    </div>
    
  );
}

export default App;
