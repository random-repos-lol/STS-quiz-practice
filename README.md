# Advanced Competitive Coding - MCQ Practice

A quiz website for practicing competitive coding concepts through multiple-choice questions.

## Features

- Different question bank options:
  - Rapids: 10 questions
  - FAT Level: 30 questions
  - Bulk: 50 questions
  - Marathon: All questions
- Light and dark theme modes
- Theme preference is saved between sessions
- System theme preference detection
- Randomized questions every time
- Instant feedback after quiz submission
- Visual indicators for correct and incorrect answers
- Score calculation
- Responsive design for all devices

## How to Use

1. Open the website
2. Toggle between light and dark mode using the button in the top-right corner
3. Select your preferred question bank
4. Click "Start Quiz"
5. Answer the questions by clicking on the options
6. Click "Submit Quiz" when finished
7. Review your results
8. Click "Try Another Quiz" to start over

## Adding Questions

To add your own questions, edit the quizQuestions array in the script.js file. Each question should follow this format:

```javascript
{
    question: "Your question text?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0  // Index of the correct answer (0-based)
}
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

## License

This project is open source and available for anyone to use and modify. 
