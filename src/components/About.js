import './About.css'; // Import the CSS file

const About = () => {
    return (
        <div className="container">
            <h1 className="header">About Me</h1>
            <div className="section">
                <h2 className="subHeader">Education</h2>
                <p className="text">
                    <strong>Course:</strong> Bachelor of Artificial Intelligence and Data Science
                </p>
                <p className="text">
                    <strong>CGPA:</strong> 8.5
                </p>
                <p className="text">
                    <strong>HSC Completion:</strong> Completed with 89% in 2021
                </p>
            </div>
        </div>
    );
};

export default About;