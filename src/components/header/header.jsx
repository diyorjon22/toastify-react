import React from "react";
import './header.css'
import {RiDeleteBack2Line} from 'react-icons/ri'
import axios from 'axios'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';








const Header = () => {
    
    const [users,setUSers] = React.useState([])
    
    React.useEffect(() => {
        axios.get("https://reqres.in/api/users?page=1").then((response) => {
            setUSers(response.data.data);
        }) 
        
    },[])


    const delTodo = (id) => {
        axios.delete('https://reqres.in/api/users?page=1').then((response) => {
                setUSers((el) => {
                    return el.filter((el) => el.id !== id)
                })
                toast.success('Muvaqiyatli ocirildi')
        })  

        
    }


    return (
        <div className="container">
            <ul>
            {users.map((el) => {
                return <li key={el.id}>
                    <div className="wrapper">
                    <button onClick={() => delTodo(el.id)}><RiDeleteBack2Line/></button>
                    <div className="flexli">
                    <div className="title">
                    <h1>{el.first_name}</h1>
                    <p>{el.last_name}</p>
                    </div>
                    <img src={el.avatar} alt="img" />
                    </div>
                    </div>
                </li>
            })}
        </ul>
        </div>
    )
}



export default Header