document.addEventListener("DOMContentLoaded", function() 
{
    const words = {
      button1: ["The Turkey", "Mom", "Dad","The dog","My teacher","The elephant","The cat"],
      button2: ["Sat on", "ate", "danced with", "saw","doesn't","kissed"],
      button3: ["a funny", "a scary", "a goofy", "a slimy","a barking","a fat"],
      button4: ["goat", "monkey", "fish", "cow","frog","bug","worm"],
      button5: ["on the moon","on the chair","in my spagehetti","in my soup","on the grass","in my shoes"]
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
  