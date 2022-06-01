import './App.css';
import {useState, useEffect} from 'react'
import {mergeSort} from './MergeSort.js'
import { bubbleSort } from './BubbleSort';
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
  const LENGTH_OF_ARRAY = 75;
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
    arrayColorUpdate();
  }
  function arrayColorUpdate(){
    const Bars = document.getElementsByClassName("array__bar")
    for( let i = 0 ; i < array.length ; i++ ){ 
      Bars[i].style.backgroundColor = 'aqua'
    }
  }
  const testSortingAlgo = () => {
    // alert("Console kholkr dekho!")
    const a = []
    for(let i = 0 ; i < LENGTH_OF_ARRAY ; i++){
      for(let j = 0 ; j < getRandom(5,80) ; j++){
        a.push(getRandom(100,450))
      }
    }
      let inbuiltSorted = a.slice().sort((a,b)=>a-b);
      bubbleSort(a);
      let myAlgoSorted = a;
      for(let i = 0 ; i < LENGTH_OF_ARRAY ; i++){
        if(inbuiltSorted[i]!==myAlgoSorted[i]){
          console.log(false);
          break;
        }
      }
      console.log(true)
  }
  const BubbleSortClick = () => {
    const sorted_a = bubbleSort(array);
  }
  const MergeSortClick = () => {
    const animations = mergeSort(array)
    // compareStart
    // compareEnd
    // override
    const arrayBars = document.getElementsByClassName("array__bar")
    for( let i = 0 ; i < animations.length ; i++ ){ // yaha pr if I was using a for each loop the it was giving 'undefined' somehow
      const animation = animations[i]
      const [compareIdx1, compareIdx2] = animation.compareStart
      const [idx, newHeight] = animation.override;
      const barOneStyle = arrayBars[compareIdx1].style
      const barTwoStyle = arrayBars[compareIdx2].style;
      for(let j = 0 ; j < 3 ; j++){
        if(j===0){
          setTimeout(() => {
            barOneStyle.backgroundColor = 'red';
            barTwoStyle.backgroundColor = 'red';
          }, i*10)
        }
        else if(j===1){
          setTimeout(() => {
            barOneStyle.backgroundColor = 'white';
            barTwoStyle.backgroundColor = 'white';
          }, i*10)
        }
        else {
          setTimeout(() => {
            const bar = arrayBars[idx].style
            bar.height = `${newHeight}px`;
            bar.backgroundColor = 'yellow';
          }, i*5)
          
        }
      }
      
    }
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
          onClick = {BubbleSortClick}
        >Bubble Sort</button>
        <button 
          className="app__header__button"
          onClick = {testSortingAlgo}
        >Test Algo</button>
      </div>
      <div className="array__container">
        {array.map((val,idx)=>(
          <div 
            className="array__bar" 
            key={idx}
            style={{height:`${val}px`}}
          >
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default App;
