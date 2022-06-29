import './App.css';
import {useState, useEffect} from 'react'
import { mergeSort, mergeSort_simple } from './MergeSort.js'
import { bubbleSort, bubbleSort_simple } from './BubbleSort.js';
import { insertionSort, insertionSort_simple } from './InsertionSort.js';
import { selectionSort, selectionSort_simple } from './SelectionSort.js'
import { quickSort , quickSort_simple } from './QuickSort'
import { heapSort , heapSort_simple} from './HeapSort'
// import {countSort, countSort_simple} from './CountSort.js'
import Footer from './Footer.js';

var sum_delay = 0
var delay = 2.5;
var buttonsDisabled = false;
var size = 50;
export function color_update(array__bar,new_color){
  // console.log(array__bar)
  setTimeout(() => {
      if(array__bar!=undefined){
        array__bar.style.backgroundColor = new_color;
      }
    }, sum_delay+=delay)
}
export function height_update(array__bar,new_height){
    setTimeout(() => {
      if(array__bar!=undefined){
        array__bar.style.height = `${new_height}px`;
      }
    }, sum_delay+=delay)
}
export function enableButtons(){
  setTimeout(() => {
    document.getElementById('sizeSlider__slider').disabled = false;
    document.getElementById('speedSlider__slider').disabled = false;
    buttonsDisabled = false;
    var btns = document.getElementsByClassName("app__header__button");
    for(let i = 0 ; i < btns.length ; i++){
      btns[i].style.cursor = `pointer`;
    }
    document.getElementsByClassName("app__header__generate__button")[0].style.cursor = `pointer`;
  }, sum_delay+= delay)
}
function App() {
  const [array,setArray] = useState([]); 
  function changeSpeed (updatedSpeed) {
    let local_speed;
    let new_speed = updatedSpeed.target.value;
    if(new_speed==10){
      local_speed=500;
    }
    else if(new_speed==20){
      local_speed=200;
    }
    else if(new_speed==30){
      local_speed=50;
    }
    else if(new_speed==40){
      local_speed=10;
    }
    else if(new_speed==50){
      local_speed=2.5;
    }
    else if(new_speed==60){
      local_speed=1;
    }
    delay = local_speed;
    console.log("Delay = ",delay)
  };

  function changeSize (updatedSize) {
      let change = false;
      let newSize = updatedSize.target.value;
      if(newSize!=size){  
        change = true;
      }
      size = newSize;
      if(change==true){
        generateNewArray();
      }
  };
  useEffect(()=>{
    generateNewArray()
  },[])
  const getRandom = (a,b) => {
    return Math.floor(a+(Math.random()*b))
  }
  const generateNewArray = () => {
    if(buttonsDisabled==true){
      return;
    }
    const a = []
    // console.log("generating array of length = ", size)
    for(let i = 0 ; i < size ; i++){
      let r = getRandom(Math.floor(window.innerHeight/5),Math.floor(window.innerHeight/4))
      a.push(r);
    }
    setArray(a);
    enableButtons();
    updateArrayBarsColor();
    updateAlgoLogic("","","");
  }
  function updateAlgoLogic(s,time,space){
    document.getElementById("logic").innerHTML = s;
    document.getElementById("time").innerHTML = time;
    document.getElementById("space").innerHTML = space;
  }
  function updateArrayBarsColor(){
    const Bars = document.getElementsByClassName("app__array__container__bar")
    for( let i = 0 ; i < array.length ; i++ ){
        if(Bars[i]!=undefined)Bars[i].style.backgroundColor = 'aqua'
    }
  }
  const testSortingAlgo = () => {
    // alert("Console kholkr dekho!")
    const a = []
    for(let i = 0 ; i < size ; i++){
        a.push(getRandom(100,500))
    }
      let  inbuiltSorted = a.slice().sort((a,b)=>a-b);
      // bubbleSort_simple(a);
      // selectionSort_simple(a);
      // insertionSort_simple(a);
      // quickSort_simple(a);
      // mergeSort_simple(a);
      heapSort(a);
      console.log(a);
      // countSort_simple(a);
      let myAlgoSorted = a;
      let flag = false;
      for(let i = 0 ; i < size ; i++){
        if(inbuiltSorted[i]!==myAlgoSorted[i]){
          console.log(false);
          flag=true;
          break;
        }
      }
      if(!flag)console.log(true)
  }
  function disableButtons(){
    document.getElementById('sizeSlider__slider').disabled = true;
    document.getElementById('speedSlider__slider').disabled = true;
    buttonsDisabled = true;
    var btns = document.getElementsByClassName("app__header__button");
    for(let i = 0 ; i < btns.length ; i++){
      btns[i].style.cursor = `not-allowed`;
    }
    document.getElementsByClassName("app__header__generate__button")[0].style.cursor = `not-allowed`;
  }
  
  const BubbleSortClick = () => {
    if(buttonsDisabled === true){
      return;
    }
    console.log("bubblesort")
    sum_delay = 0
    disableButtons();
    bubbleSort(array);
    var s = "<span id='logic_heading'> LOGIC</span>:  The array will be divided into 2 parts, unsorted array and sorted array. Sorted array will be formed from right to left. Each time we will start from the left most point and compare 2 adjacent elements A(i) and A(i+1) for i = 0 to n-2 and swap them if A(i) > A(i+1). This way the largest element will reach the end and we will continue the process. <span id = 'yellow_text'> Yellow </span> denotes the elements which are being compared. <span id='red_text'> Red </span> denotes the elements to be swapped. <span id = 'green_text'> Green </span> denotes the element in it's correct sorted position. More can be read here <a className = 'hyperlink', href = 'https://en.wikipedia.org/wiki/Bubblesort', target = '_blank'> BUBBLE SORT </a>."
    var time = "<span id='logic_heading'> TIME COMPLEXITY</span>: <span id='time__heading'> Best Time</span>= Ω(N) | <span id='time__heading'> Average Time</span>= Θ(N^2) | <span id='time__heading'>Worst Time </span>= O(N^2)";
    var space = "<span id='logic_heading'> SPACE COMPLEXITY</span>: O(1)";
    updateAlgoLogic(s,time,space);
    
  }
  const InsertionSortClick = () => {
    if(buttonsDisabled === true){
      return;
    }
    console.log("insertionsort")
    sum_delay = 0
    disableButtons()
    insertionSort(array); 
    var s = "<span id='logic_heading'> LOGIC</span>: The array will be divided into 2 parts, unsorted array and sorted array. Sorted array will be formed from left to right. Each time we will pick the left most element from the unsorted array and insert it at it's correct position in the unsorted array on it's left by  comparing two adjacent elements A(i) and A(i-1) for i = current index to 0 and swap them if A(i) < A(i-1). This way the element will be inserted at it's correct position and the whole array will be sorted at the end. <span id = 'yellow_text'> Yellow </span> denotes the current element. <span id='red_text'> Red </span> denotes the incorrect position of two elements which are to be swapped. <span id = 'green_text'> Green </span> denotes the element in it's correct sorted position. More can be read here <a className = 'hyperlink', href = 'https://en.wikipedia.org/wiki/Insertionsort', target = '_blank'> INSERTION SORT </a> "
    var time = "<span id='logic_heading'> TIME COMPLEXITY</span>: <span id='time__heading'> Best Time</span>= Ω(N) | <span id='time__heading'> Average Time</span>= Θ(N^2) | <span id='time__heading'>Worst Time </span>= O(N^2)";
    var space = "<span id='logic_heading'> SPACE COMPLEXITY</span>: O(1)";
    updateAlgoLogic(s,time,space);
    
  }
  const SelectionSortClick = () => {
    if(buttonsDisabled === true){
      return;
    }
    console.log("selectionsort")
    sum_delay = 0
    disableButtons()
    selectionSort(array);
    var s = "<span id='logic_heading'> LOGIC</span>: The array will be divided into 2 parts, unsorted array and sorted array. Sorted array will be formed from left to right. Each time we will find the minimum element of the unsorted array and swap it with the first element of the unsorted array. This way the element will be inserted at it's correct position and the whole array will be sorted in a similar fashion. <span id='red_text'> Red </span> denotes the element to be swapped.  <span id = 'yellow_text'> Yellow </span> denotes the candidates for the minimum element. <span id = 'green_text'> Green </span> denotes the element in its correct sorted position. More can be read here <a className = 'hyperlink', href = 'https://en.wikipedia.org/wiki/Selectionsort', target = '_blank'> SELECTION SORT </a>."
    var time = "<span id='logic_heading'> TIME COMPLEXITY</span>: <span id='time__heading'> Best Time</span>= Ω(N^2) | <span id='time__heading'> Average Time</span>= Θ(N^2) | <span id='time__heading'>Worst Time </span>= O(N^2)";
    var space = "<span id='logic_heading'> SPACE COMPLEXITY</span>: O(1)";
    updateAlgoLogic(s,time,space);
    
  }
  const MergeSortClick = () => {
    if(buttonsDisabled === true){
      return;
    }
    console.log("mergesort")
    sum_delay = 0
    disableButtons()
    mergeSort(array);
    var s = "<span id='logic_heading'> LOGIC</span>: Merge Sort uses Divide and Conquer Strategy, the array is recursively divided into 2 parts until only 2 elements remain in the smaller array to be considered and those 2 parts are sorted and merged and used ahead to sort the bigger array. <span id = 'blue_text'> Blue</span> denotes the mid point. <span id = 'yellow_text'> Yellow </span> denotes the two elements being compared. <span id = 'green_text'> Green </span> denotes sorted order. More can be read here <a className = 'hyperlink', href = 'https://en.wikipedia.org/wiki/Mergesort', target = '_blank'> MERGE SORT </a>. "
    var time = "<span id='logic_heading'> TIME COMPLEXITY</span>: <span id='time__heading'> Best Time</span>= Ω(NlogN) | <span id='time__heading'> Average Time</span>= Θ(NlogN) | <span id='time__heading'>Worst Time </span>= O(NlogN)";
    var space = "<span id='logic_heading'> SPACE COMPLEXITY</span>: O(N)";
    updateAlgoLogic(s,time,space); 
  }
  const QuickSortClick = () => {
    if(buttonsDisabled === true){
      return;
    }
    console.log("quicksort")
    sum_delay = 0
    disableButtons();
    quickSort(array);
    var s = "<span id='logic_heading'> LOGIC</span>: Quick Sort uses Divide and Conquer Strategy, a pivot element is chosen and the array is partitioned such that all the elements less than or equal to the pivot element come before pivot's position and all the elements greater than it come after it. In a similar fashion, recursive calls are made to the left and right of the partitioned array. <span id = 'blue_text'> Blue</span> denotes the pivot element. <span id='red_text'> Red </span> denotes the two elements to be swapped. <span id = 'green_text'> Green </span> denotes the element in the correct sorted position. More can be read here <a className = 'hyperlink', href = 'https://en.wikipedia.org/wiki/Quicksort', target = '_blank'> QUICK SORT </a>."
    var time = "<span id='logic_heading'> TIME COMPLEXITY</span>: <span id='time__heading'> Best Time</span>= Ω(NlogN) | <span id='time__heading'> Average Time</span>= Θ(NlogN) | <span id='time__heading'>Worst Time </span>= O(N^2)";
    var space = "<span id='logic_heading'> SPACE COMPLEXITY</span>: O(logN)";
    updateAlgoLogic(s,time,space); 
  }

  const HeapSortClick = () => {
    if(buttonsDisabled === true){
      return;
    }
    console.log("heapsort")
    sum_delay = 0
    disableButtons()
    heapSort(array);
    var s = "<span id='logic_heading'> LOGIC</span>: Max Heap is created using array and elements are extracted one by one from top of the heap and pushed at their respective position from the last. <span id = 'yellow_text'> Yellow </span> denotes the element currently getting set at it's position in the heap. <span id='red_text'> Red </span> denotes the elements to be swapped. <span id = 'green_text'> Green </span> denotes the element at theor correct position in the sprted array. More can be read here <a className = 'hyperlink', href = 'https://en.wikipedia.org/wiki/Heapsort', target = '_blank'> HEAP SORT </a>."
    var time = "<span id='logic_heading'> TIME COMPLEXITY</span>: <span id='time__heading'> Best Time</span>= Ω(NlogN) | <span id='time__heading'> Average Time</span>= Θ(NlogN) | <span id='time__heading'>Worst Time </span>= O(NlogN)";
    var space = "<span id='logic_heading'> SPACE COMPLEXITY</span>: O(1)";
    updateAlgoLogic(s,time,space);
    
  }
  // const CountSortClick = () => {
  //   if(buttonsDisabled === true){
  //     return;
  //   }
  //   console.log("Count sort")
  //   sum_delay = 0
  //   disableButtons()
  //   countSort(array);
  //   var s = "<span id='logic_heading'> LOGIC</span>: Count Sort uses frequency array which stores the count of the elements of the array. This frequency array is used in such a way such that the order of the elements is presered. Therefore, count sort is stable sort. It can be used in cases where the variance of the array elements is low. <span id = 'blue_text'> Blue</span> denotes the current element to be positioned at it's correct sorted position. <span id = 'yellow_text'> Yellow </span> denotes the correct sorted position of the element under consideration. <span id = 'green_text'> Green </span> denotes the correct sorted order. More can be read here <a className = 'hyperlink', href = 'https://en.wikipedia.org/wiki/Counting_sort', target = '_blank'> COUNT SORT </a>. "
  //   var time = "<span id='logic_heading'> TIME COMPLEXITY</span>: <span id='time__heading'> Best Time</span>= Ω(N+K) | <span id='time__heading'> Average Time</span>= Θ(N+K) | <span id='time__heading'>Worst Time </span>= O(N+K),   where K is the difference between the maximum and minimum element present in the array";
  //   var space = "<span id='logic_heading'> SPACE COMPLEXITY</span>: O(K),    where K is the difference between the maximum and minimum element present in the array";
  //   updateAlgoLogic(s,time,space);
    
  // }

  return (
    <div className="app">
      <div className = "app__header">
          <div 
              className = 'app__header__heading'>SORTING ALGORITHMS VISUALIZER
          </div>
          
          <div className = 'app__header__options'>
              <div className = 'speedSlider'>
                  <div className = 'speedSlider__text'>SET SPEED</div>
                  <input
                    id = 'speedSlider__slider'
                    type="range"
                    style={{width:150, color:`red`}}
                    step={10}
                    min={10}
                    max={60}
                    onChange={changeSpeed}
                    // disabled = {false}
                  />
              </div>
              <div>  </div>
              <div className = 'sizeSlider'>
                  <div className = 'sizeSlider__text'>SET SIZE</div>
                  <input 
                    id = 'sizeSlider__slider'
                    type = "range"
                    style={{width:150, color:`blue`}}
                    step={10}
                    min={10}
                    max={100} 
                    onChange={changeSize}
                    // disabled = {true}
                  />
              </div>
              <div className='app__header__create__button'>
                <button 
                  className="app__header__generate__button"
                  onClick = {generateNewArray}
                  >Create a new array!</button>
              </div>
          </div>
      </div>
      <div className="app__header__sorting__button">
          <button 
                className="app__header__button"
                onClick = {MergeSortClick}
                disabled = {false}
          >Merge Sort</button>
          <button 
                className="app__header__button"
                onClick = {BubbleSortClick }
                disabled = {false}
          >Bubble Sort</button>
          <button 
                className="app__header__button"
                onClick = {InsertionSortClick}
                disabled = {false}
          >Insertion Sort</button>
          <button 
                className="app__header__button"
                onClick = {SelectionSortClick}
                disabled = {false}
          >Selection Sort</button>
          <button
              className='app__header__button'
              onClick = {QuickSortClick}
              disabled = {false}
          >Quick Sort</button>
          <button
                className = "app__header__button"
                onClick = {HeapSortClick}
                disabled = {false}
          >Heap Sort</button>
          {/* <button
                className = "app__header__button"
                onClick = {CountSortClick}
                disabled = {false}
          >Count Sort</button> */}
          {/* <button 
                className="app__header__button"
                onClick = {testSortingAlgo}
          >Test Algo</button> */}
      </div>
      <div className="app__array__container">
          {array.map((val,idx)=>(
            <div 
              className="app__array__container__bar" 
              key={idx}
              style={{height:`${val}px`, width:`${Math.floor(window.innerWidth/Math.floor(3*size))}px`, border: `${Math.floor(window.innerWidth/(10*size))}px solid rgb(255, 255, 255)`}}
            >
            </div>
          ))}
      </div>
      <div id="app__algo__logic">
        <div id="logic"></div>
        <div id="time"></div>
        <div id="space"></div>
      </div>
      
      <Footer/>
    </div>
    
  );
}

export default App;
