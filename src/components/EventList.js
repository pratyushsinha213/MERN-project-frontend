import { useEffect, useState } from "react";
import EventListRow from "./EventListRow";
import Axios from "axios";

export default function EventList() {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        Axios.get("https://mern-project-backend-deploy.onrender.com/eventRoute/")
        .then((res) => {
            if (res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err) => alert(err))
    }, []);

    const ListItems = () => {
        return arr.map((val, index) => {
            return <EventListRow key={index} obj={val} />
        });
    };

    return(
        <table className="table table-bordered table-light table-striped" style={{maxWidth: "80%", margin: "50px auto", fontFamily: "Nosifer"}}>
            <thead className="thead-dark fs-3">
                <tr>
                    <th className="text-center bg-dark text-light">Type</th>
                    <th className="text-center bg-dark-subtle">Name</th>
                    <th className="text-center bg-dark text-light">Description</th>
                    <th className="text-center bg-dark-subtle">Event Date</th>
                    <th className="text-center bg-dark text-light">Tickets Available</th>
                    <th className="text-center bg-dark-subtle">Action</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {ListItems()}
            </tbody>
        </table>
    );
}
