
# Rock Paper Scissors - JavaScript Console Game 🎮

This is a simple Rock Paper Scissors game built using JavaScript. The game runs entirely in the console and is intended as a beginner-friendly project to learn programming fundamentals and problem-solving.

## 🧠 Problem Solving Approach

For each step in the project, the following approach was followed:

1. **Plan** or pseudocode the solution.
2. **Write** the code.
3. **Test** the code to ensure it works.
4. **Commit** early and often using Git.

---

## 📁 Project Setup

### Step 1: Project Structure

- A new Git repository was created for version control.
- A blank HTML file was initialized and linked to an external JavaScript file.
- JavaScript linkage tested with:

```js
console.log("Hello World");
````

✅ Output visible in the browser console confirms setup is correct.

---

## 🤖 Step 2: Computer Choice

A function named `getComputerChoice()` was created. It randomly returns:

* `"rock"`
* `"paper"`
* `"scissors"`

### Code:

```js
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
```

---

## 👤 Step 3: Human Choice

A function named `getHumanChoice()` prompts the player to input a valid move.

### Code:

```js
function getHumanChoice() {
  let choice = prompt("What is your choice? (rock, paper, scissors)");
  return choice.toLowerCase();
}
```

---

## 📊 Step 4: Scoring System

Global score variables were initialized:

```js
let humanScore = 0;
let computerScore = 0;
```

---

## ⚔️ Step 5: Play a Single Round

Function `playRound(humanChoice, computerChoice)` compares both choices, determines a winner, and updates the score.

### Sample Logic:

```js
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  
  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}
```

---

## 🔁 Step 6: Play the Full Game

The `playGame()` function runs 5 rounds, calls `playRound()` each time, and displays the final result.

### Code:

```js
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
      console.log("It's a draw!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  // Final result
  console.log(`Final Score — You: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (humanScore < computerScore) {
    console.log("💻 Computer won the game!");
  } else {
    console.log("🤝 It's a tie!");
  }
}
```

---

## 📝 Notes

* This project is purely console-based.
* GUI version will be developed in later lessons.
* Arrays were used for efficiency but are not required.

---

## ✅ Future Improvements

* Input validation for human choice.
* Replay option after 5 rounds.
* GUI implementation using DOM.

---

## 💾 Git Commit Best Practices

Remember to:

* Commit early and often.
* Use meaningful commit messages:

  * `feat: add computer choice logic`
  * `fix: correct winner logic`
  * `refactor: improve readability`

---

## 📦 How to Run

1. Open `index.html` in a browser.
2. Open the developer console (F12 or right-click > Inspect > Console).
3. Type `playGame()` and hit Enter to start playing.

---

Happy coding! 💻✌️

```

Let me know if you also want this as a downloadable `.md` file.
```
