import './View_work.css';
const Viewwork = () => {
    return (
        <>
         <h1 className="header">View_work</h1>
        <div className="container_v">
            <div className="section">
                <h2 className="subHeader">FLAMES Calculator</h2>
                <p className="text">
                    <strong>Language:</strong> python-Tkinter
                </p>
                <img src={require('D://personal//projects//New_portfolio//my_portfolio//src//components//flames.png')} alt="Description" width={250} height={150} />
            </div>
               
            <div className="section">
                <h2 className="subHeader">Obstacles Avoidance Robot</h2>
                <p className="text">
                    <strong>Micro controller:</strong> Arduino-UNO
                </p>
                <img src={require('D://personal//projects//New_portfolio//my_portfolio//src//components//robot.jpg')} alt="Description" width={250} height={150}/>
            </div>
            <div className="section">
                <h2 className="subHeader">Bus Reservation System</h2>
                <p className="text">
                    <strong>Language:</strong> Python-Django
                </p>
                <img src={require('D://personal//projects//New_portfolio//my_portfolio//src//components//bus reservation.png')} alt="Description" width={250} height={150}/>
            </div>
         </div>
         </>
        
    );
};

export default Viewwork;