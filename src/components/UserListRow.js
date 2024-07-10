// import Axios from "axios";
// import { Link } from "react-router-dom";

// export default function UserListRow(props) {
//     const { _id, name, password, role } = props.obj;

//     const getToken = () => localStorage.getItem('token');

//     const handleDelete = () => {
//         const token = getToken();
//         Axios.delete("https://mern-project-backend-deploy.onrender.com/userRoute/delete-user/" + _id, {
//             headers: { Authorization: `Bearer ${token}` }
//         })
//             .then((res) => {
//                 if (res.status === 200) {
//                     alert("User deleted successfully");
//                     window.location.reload();
//                 } else {
//                     Promise.reject();
//                 }
//             })
//             .catch((err) => { 
//                 alert(err.message); 
//             });
//     };

//     return (
//         <tr style={{fontFamily: "Bodoni Moda SC"}} className="border-bottom border-secondary fs-4 text-capitalize">
//             <td className="py-3">{name}</td>
//             <td className="py-3">{password}</td>
//             <td className="py-3">{role}</td>
//             <td className="py-3 text-center">
//                 <Link className="btn btn-secondary mx-1 text-decoration-none text-dark fs-4" to={"/update-user/" + _id}>
//                     Edit
//                 </Link>
//                 <button onClick={handleDelete} className="btn btn-danger mx-1 fs-4">
//                     Delete
//                 </button>
//             </td>
//         </tr>
//     );
// }

export default function UserListRow(props) {
    const { name, password } = props.obj;

    return (
        <tr style={{fontFamily: "Bodoni Moda SC"}} className="border-bottom border-secondary fs-4 text-capitalize">
            <td className="py-3">{name}</td>
            <td className="py-3">{password}</td>
            <td className="py-3">Admin</td>
        </tr>
    );
}
