# React + Vite - Custom Hooks 
This project demonstrates the use of custom hooks in a React application built with Vite. It includes two custom hooks: `useFlip` for managing a flip state and `useAxios` for fetching data from an API.

## Table of Contents
- [Project Overview](#project-overview)
- [Installation](#installation)
- [Built With](#built-with)
- [Usage](#usage)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Project Overview
This project showcases how to create and use custom hooks in a React application. The two custom hooks included are:
- `useAxios`: A hook that fetches data from a specified API endpoint using Axios. It manages the state of the fetched data and provides a function to add more data to the existing state.
- `useFlip`: A hook that manages a boolean state to represent a flip (e.g., for card flipping). It provides the current state and a function to toggle the state.

## Installation
To run this project locally, follow these steps:    
1. Clone the repository:
2. Navigate to the project directory:
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:????` (look in the terminal for the specifc port) to view the application.

## Built With
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - A build tool for building modern web applications
- [Deck of Cards API](https://deckofcardsapi.com/) - An API for a deck of cards
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language used
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Markup language used
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling language used  

## Usage
To use the custom hooks in your React components, you can import them as follows:
```javascript
import useFlip from './hooks/useFlip';
import useAxios from './hooks/useAxios';
```
You can then use these hooks within your functional components to manage state and fetch data as needed.

## Future Improvements
- Add error handling to the `useAxios` hook to manage API request failures.
- Implement loading states in the `useAxios` hook to indicate when data is being fetched.
- Expand the functionality of the `useFlip` hook to include additional features, such as flip animations.
- Develop `useLocalStorage` which works like `useState`, except it also syncs to local storage after every state change, and tries to read from local storage when the component renders `useLocalStorage` should accept two arguments. The first should be a key, corresponding to the key in local storage. The second should be an initial value to put into local storage (assuming no value already exists).
- Add two buttons to the page: one that will erase all of the playing cards in state, and one that will erase all of the pokemon cards.

## Author
- Github - [TechEdDan2](https://github.com/TechEdDan2)
- Frontend Mentor - [@TechEdDan2](https://www.frontendmentor.io/profile/TechEdDan2)

## Acknowledgments
The YouTubers and other educational resources I have been learning from include: Coder Coder (Jessica Chan), BringYourOwnLaptop (Daniel Walter Scott), Kevin Powell, Pedro Tech (Vitest tutorial), vairous Udemy courses, Geeks for Geeks, Stack Overflow, and Stony Brook University's Software Engineering Bootcamp (curriculum developed by Colt Steele). 

## License
This project is licensed under the ISC license