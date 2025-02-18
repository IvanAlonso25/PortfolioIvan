import '../styles/experience.css';
import imgGetronics from '../assets/Getronics.webp';

export function Experience() {
    return (
        <div className='experience'>
            <h2>Experience</h2>
            <div className='card-experience'>
                <div>
                    <h4>Full Stack Developer in Getronics</h4>
                    <h5>March, 2023 - Currently</h5>
                    <p>Development of new functionalities for the web application and maintenance of the application.</p>
                </div>
                <div className='img-experience'>
                    <img src={imgGetronics} alt="Getronics" />
                </div>
            </div>
        </div>
    )
}