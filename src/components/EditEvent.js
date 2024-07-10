import { useParams } from "react-router-dom";
import EventForm from "./EventForm";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function EditEvent() {
    const { id } = useParams();
    // const [initialValue, setInitialValue] = useState({ name: "", description: "", ticketsAvailable: "", eventDate: "" });
    const [initialValue, setInitialValue] = useState({ name: "", description: "", ticketsAvailable: ""});
    const [newData,setNewData]=useState([]);

    useEffect(() => {
        Axios.get("https://mern-project-backend-deploy.onrender.com/eventRoute/update-event/" + id)
        .then((res) => {
            if (res.status === 200) {
                const { name, description, ticketsAvailable } = res.data;
                setInitialValue({ name, description, ticketsAvailable});
            } else {
                Promise.reject();
            }
        })
        .catch((err) => {
            alert(err);
        });
    }, [id]);

    const getState=(childData)=>{
        setNewData(childData);
    }


    const handleSubmit =()=>{
        const data={name: newData[0], description: newData[1], ticketsAvailable: newData[2]}
        Axios.put("https://mern-project-backend-deploy.onrender.com/eventRoute/update-event/"+id,data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record updated")
            else
                Promise.reject()
        })
        .catch((err)=> alert(err));
    }


    return (
        <form onSubmit={handleSubmit}>
            <EventForm 
                getState={getState}
                nameValue={initialValue.name} 
                descriptionValue={initialValue.description} 
                ticketsAvailableValue={initialValue.ticketsAvailable}
            > Update Event Details
            </EventForm>
        </form>
    );
}
