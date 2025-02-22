import '../styles/presentation.css';
import imgProfile from '../assets/imgProfile.jpg';
import linkedIn from '../assets/linkedin.png';
import github from '../assets/github.png';
import mail from '../assets/email.png';

export function Presentation() {
    return (
        <div className="presentation">
            <div className='text-presentation'>
                <h2>Software Developer</h2>
                <h1>Iván Alonso</h1>
                <p>Web developer with 1+ year of experience</p>
                <div className='buttons-presentation'>
                    <button onClick={() => window.open('https://www.linkedin.com/in/ivan-alonso-1a1b3a1b0/')}>
                        <img src={linkedIn} alt="Logo LinkedIn" />
                        <p>LinkedIn</p>
                    </button>
                    <button onClick={() => window.open('https://github.com/IvanAlonso25')}>
                        <img src={github} alt="Logo GitHub" />
                        <p>GitHub</p>
                    </button>
                    <button onClick={() => window.open('mailto: ialonso479@gmail.com')}>
                        <img src={mail} alt="Logo Mail" color='white'/>
                        <p>Email</p>
                    </button>
                </div>
            </div>

            <div className='img-presentation'>
                <img src={imgProfile} alt="Profile" />
            </div>
        </div>
    )
}