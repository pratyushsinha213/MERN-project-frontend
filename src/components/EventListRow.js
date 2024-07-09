import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import EventPhoto from '../assets/event-picture.png'

export default function EventListRow(props) {
    const { _id, name, description, ticketsAvailable, eventDate } = props.obj;

    const getToken = () => localStorage.getItem('token');

    const handleClick = () => {
        const token = getToken();
        Axios.delete("https://mern-project-backend-deploy.onrender.com/eventRoute/delete-event/" + _id, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((res) => {
                if (res.status === 200) {
                    alert("Record is deleted");
                    window.location.reload();
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => { 
                alert(err.message); 
            });
    };

    const handlePurchase = () => {
        if (ticketsAvailable > 0) {
            const updatedTickets = ticketsAvailable - 1;
            const token = getToken();
            Axios.put("https://mern-project-backend-deploy.onrender.com/eventRoute/update-event/" + _id, { ticketsAvailable: updatedTickets }, {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then((res) => {
                    if (res.status === 200) {
                        alert("Ticket purchased SUCCESSFULLY!!");
                        window.location.reload();
                    } else {
                        Promise.reject();
                    }
                })
                .catch((err) => {
                    alert(err.message);
                });
        } else {
            alert("NO MORE TICKETS AVAILABLE!!");
        }
    };

    return (
        <tr style={{fontFamily: "Bodoni Moda SC"}} className="border-bottom border-secondary fs-4 text-capitalize">
            <td ><img className="photo" src={EventPhoto} alt="event-picture"/></td>
            <td className="py-3">{name}</td>
            <td className="py-3">{description}</td>
            <td className="py-3">{new Date(eventDate).toLocaleDateString()}</td>
            <td className="py-3">{ticketsAvailable}</td>
            <td className="py-3 text-center">
                <button onClick={handlePurchase} className="btn btn-success mx-2 fs-4">
                    Purchase Ticket
                </button>
                <Link className="btn btn-secondary mx-1 text-decoration-none text-dark fs-4" to={"/update-event/" + _id}>
                    Edit
                </Link>
                <button onClick={handleClick} className="btn btn-danger mx-1 fs-4">
                    Delete
                </button>
            </td>
        </tr>
    );
}
