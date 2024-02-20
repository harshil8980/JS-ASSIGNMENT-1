document.addEventListener("DOMContentLoaded", function() {
    const words = {
        button1: ["The Turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"],
        button2: ["Sat on", "ate", "danced with", "saw", "doesn't", "kissed"],
        button3: ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"],
        button4: ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"],
        button5: ["on the moon", "on the chair", "in my spagehetti", "in my soup", "on the grass", "in my shoes"]
    };

    const output1 = document.getElementById("output1");
    const output2 = document.getElementById("output2");
    const output3 = document.getElementById("output3");
    const output4 = document.getElementById("output4");
    const output5 = document.getElementById("output5");
    const output6 = document.getElementById("output6");
    const output = document.getElementById("mainoutput");

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
        const outputElement = document.getElementById("output" + key[key.length - 1]);
        btn.addEventListener("click", function() {
            const choices = words[key];
            const randomIndex = Math.floor(Math.random() * choices.length);
            selections[key] = choices[randomIndex];
            outputElement.textContent = selections[key];
        });
    }

    generateBtn.addEventListener("click", function() {
        generateStory();
    });

    resetBtn.addEventListener("click", function() {
        for (let key in selections) {
            selections[key] = "";
        }
        output.textContent = "";
        for (let i = 1; i <= 5; i++) {
            document.getElementById("output" + i).textContent = "";
        }
    });
});
