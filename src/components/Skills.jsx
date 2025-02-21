import '../styles/skills.css';
import javascript from '../assets/javascript.svg';
import react from '../assets/react.svg';
import css from '../assets/css3.svg';
import html from '../assets/html5.svg';
import java from '../assets/java.svg';
import python from '../assets/python.svg';
import csharp from '../assets/csharp.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import jira from '../assets/jira.svg';
import docker from '../assets/docker.svg';
import vStudio from '../assets/vStudio.svg';
import angular from '../assets/angular.svg';
import typescript from '../assets/typescript.svg';
import tailwind from '../assets/tailwind.svg';
import sql from '../assets/sql.svg';

export function Skills() {
    return (
        <div className="cards-skills">
            <h2>Skills</h2>
            <div className="grid-skills">
                <div className='card-skills'>
                    <h3>Frontend</h3>
                    <div className="grid-technologies">
                        <div className="card-technology">
                            <img src={html} alt="HTML5" />
                            <p>HTML5</p>
                        </div>
                        <div className="card-technology">
                            <img src={css} alt="CSS3" />
                            <p>CSS3</p>
                        </div>
                        <div className="card-technology">
                            <img src={javascript} alt="JavaScript" />
                            <p>JavaScript</p>
                        </div>
                        <div className="card-technology">
                            <img src={react} alt="React" />
                            <p>React</p>
                        </div>
                    </div>
                </div>

                <div className="card-skills">
                    <h3>Backend</h3>
                    <div className="grid-technologies">
                        <div className="card-technology">
                            <img src={java} alt="JAVA" />
                            <p>Java</p>
                        </div>
                        <div className="card-technology">
                        <img src={javascript} alt="JavaScript" />
                        <p>JavaScript</p>
                        </div>
                        <div className="card-technology">
                            <img src={python} alt="Python" />
                            <p>Python</p>
                        </div>
                        <div className="card-technology">
                            <img src={csharp} alt="CSharp" />
                            <p>CSharp</p>
                        </div>
                    </div>
                </div>

                <div className="card-skills">
                    <h3>Tools</h3>
                    <div className="grid-technologies">
                        <div className="card-technology">
                            <img src={git} alt="Git" />
                            <p>Git</p>
                        </div>
                        <div className="card-technology">
                            <img src={github} alt="GitHub" />
                            <p>GitHub</p>
                        </div>
                        <div className="card-technology">
                            <img src={jira} alt="Jira" />
                            <p>Jira</p>
                        </div>
                        <div className="card-technology">
                            <img src={docker} alt="Docker" />
                            <p>Docker</p>
                        </div>
                        <div className="card-technology">
                            <img src={vStudio} alt="VStudio" />
                            <p>VSCode</p>
                        </div>
                        <div className="card-technology">
                            <img src={sql} alt="Sql Developer" />
                            <p>SQL Developer</p>
                        </div>
                    </div>
                </div>

                <div className="card-skills">
                    <h3>Learning</h3>
                    <div className="grid-technologies">
                        <div className="card-technology">
                            <img src={angular} alt="Angular" />
                            <p>Angular</p>
                        </div>
                        <div className="card-technology">
                            <img src={typescript} alt="TypeScript" />
                            <p>TypeScript</p>
                        </div>
                        <div className="card-technology">
                            <img src={tailwind} alt="Tailwind" />
                            <p>Tailwind</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}