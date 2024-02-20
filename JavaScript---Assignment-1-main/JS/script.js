document.addEventListener("DOMContentLoaded", function() {
    const words = {
      button1: ["Once upon a", "In a galaxy far, far away", "Long ago, in a land filled with magic"],
      button2: ["princess", "knight", "dragon", "wizard"],
      button3: ["explore", "defeat", "befriend", "protect"],
      button4: ["day", "night", "week", "month"],
      button5: [".", "!", "?"]
    };
  
    const output = document.getElementById("output");
    const generateBtn = document.getElementById("generate");
    const resetBtn = document.getElementById("reset");
  
    const selections = {};
  
    function generateStory() {
      let story = "";
      for (let key in selections) {
        story += selections[key] + " ";
      }
      output.textContent = story;
    }
  
    for (let key in words) {
      const btn = document.getElementById(key);
      btn.addEventListener("click", function() {
        const choices = words[key];
        const randomIndex = Math.floor(Math.random() * choices.length);
        selections[key] = choices[randomIndex];
        generateStory();
      });
    }
  
    generateBtn.addEventListener("click", function() {
      generateStory();
    });
  
    resetBtn.addEventListener("click", function() {
      output.textContent = "";
      for (let key in selections) {
        selections[key] = "";
      }
    });
  });
  