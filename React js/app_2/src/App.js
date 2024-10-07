import './App.css';
import './game.css';

function App() {
  return (
    <>
    <h1>TIC TAC TOE</h1>
    <div class ="container" >
      <div class= "row-1">
        <div class="button-container"><button class = "button" value = "x"></button></div>
        <div class="button-container"><button class = "button" value = "x"></button></div>
        <div class="button-container"><button class = "button" value = "x"></button></div>
      </div>
      <div class= "row-2">
        <div class="button-container"><button class = "button"value = "x"></button></div>
        <div class="button-container"><button class = "button"value = "x"></button></div>
        <div class="button-container"><button class = "button"value = "x"></button></div>
      </div>
      <div class= "row-3">
        <div class="button-container"><button class = "button" value = "x"></button></div>
        <div class="button-container"><button class = "button" value = "x"></button></div>
        <div class="button-container"><button class = "button" value = "x"></button></div>
      </div>
    </div>
    <h3>Score</h3>
    <div class = "score-div" >
    <div class = "red-score">0</div>
    <div class = "blue-score">0</div>
    </div>
    </>
  );
}

export default App;
