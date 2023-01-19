import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./new.css";

export default function AddTodo(){
    const [title, setTitle] = React.useState("");

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        if(title !== ""){
            await addDoc(collection(db, "todos"), {
                title,
                completed: false,
            });
            setTitle("");
        }
    };
    return(
        <form onSubmit = {handleSubmit}>
            <div className = "User">
                <p>Type Your To-Do-List Here!</p> 
            </div>
            <div className="input_container">
                <input 
                type = "text"
                placeholder="Enter todo..."
                value={title}
                onChange = {(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="btn_container">
                <button>Add</button>
            </div>
        </form>
    )
}