import { Link } from 'react-router-dom';

function Dashboard() {
    // var img = document.createElement("img");

    // img.src = "C:\Users\OJAGTAP\Desktop\Module3\incentiveSystem\images.jpg";
    // var src = document.getElementById("x");

    // src.appendChild(img);
    return (
        <div>
            <div className="container spacer">

                <br></br>
                <h2 >Car Details</h2>
                <p></p>
                <p>
                    <Link to="/car/getAll">Fetch All Cars</Link>
                </p>

                <Link to="/car/save">Add new Car</Link>

            </div>

        </div>
    )
}
export default Dashboard;