import '../styles/card.css';
import ticTacToe from '../assets/tic-tac-toe.png';
import followPointer from '../assets/follow-pointer.png';
import calculator from '../assets/calculator.png';
import todoList from '../assets/todoList.png';
import webGym from '../assets/webGym.png';
import javascript from '../assets/javascript.svg';
import react from '../assets/react.svg';
import css from '../assets/css3.svg';

export function Card() {
    return (
        <div className="grid-cards">
            <div className="card">
                <img src={ticTacToe} alt="Tic Tac Toe" />
                <h4>TIC TAC TOE</h4>
                <p>Classic two-player game played on a 3x3 grid. Players take turns marking a space with either X or O,
                    aiming to get three of their marks in a row horizontally, vertically, or diagonally.
                    It`s a simple yet strategic game of logic and anticipation.</p>
                <div className="technologies">
                    <img src={react} alt="React" />
                    <img src={css} alt="CSS" />
                    <img src={javascript} alt="JavaScript" />
                    <div>
                        <button onClick={() => window.open('https://tictactoe-ivan.netlify.app/')}>
                            Go to project
                        </button>
                    </div>
                </div>
            </div>
            <div className="card">
                <img src={followPointer} alt="Follow Pointer" />
                <h4>Following the mouse</h4>
                <p>This project consists of an interactive web application that tracks and visualizes the movement of the mouse cursor in real time.
                    Using REACT, CSS, and JavaScript, a dynamic interface is created where an element (such as a circle or a dot)
                    moves in sync with the mouse, responding to its coordinates on the screen.</p>
                <div className="technologies">
                    <img src={react} alt="React" />
                    <img src={css} alt="CSS" />
                    <img src={javascript} alt="JavaScript" />
                    <div>
                        <button onClick={() => window.open('https://follow-pointer-only.netlify.app/')}>
                            Go to project
                        </button>
                    </div>
                </div>
            </div>
            <div className="card">
                <img src={calculator} alt="Calculator" />
                <h4>Scientific Calculator</h4>
                <p>This project involves the development of a web-based scientific calculator capable of performing basic operations (addition, subtraction, multiplication, division).
                    Built with REACT, CSS, and JavaScript, it features an intuitive and responsive interface designed to be functional on any device.</p>
                <div className="technologies">
                    <img src={react} alt="React" />
                    <img src={css} alt="CSS" />
                    <img src={javascript} alt="JavaScript" />
                    <div>
                        <button onClick={() => window.open('https://calculator-tor.netlify.app/')}>
                            Go to project
                        </button>
                    </div>
                </div>
            </div>
            <div className="card">
                <img src={webGym} alt="Web Gym" />
                <h4>Landing Page Gym</h4>
                <p>This project involved creating a landing page for a fictional gym using React, CSS, and JavaScript. 
                    The main goal was to practice navigation between pages and menu options management, implementing dynamic routes and reusable components.</p>
                <div className="technologies">
                    <img src={react} alt="React" />
                    <img src={css} alt="CSS" />
                    <img src={javascript} alt="JavaScript" />
                    <div>
                        <button onClick={() => window.open('https://activelifewithivan.netlify.app/')}>
                            Go to project
                        </button>
                    </div>
                </div>
            </div>
            <div className="card">
                <img src={todoList} alt="TODO List" />
                <h4>TODO List</h4>
                <p>This was my first project, a basic Todo List application built with REACT, CSS, and JavaScript. 
                    It allows users to add tasks, mark them as completed, and delete them. However, as an initial project, it has some bugs, 
                    such as the limitation of only being able to delete the first entry in the list. Despite its imperfections, this project was a great learning experience in DOM manipulation, 
                    event handling, and basic programming logic. It represents my first step into web development and my motivation to keep improving.</p>
                <div className="technologies">
                    <img src={react} alt="React" />
                    <img src={css} alt="CSS" />
                    <img src={javascript} alt="JavaScript" />
                    <div>
                        <button onClick={() => window.open('https://todo-list-project-ivan.netlify.app/')}>
                            Go to project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}