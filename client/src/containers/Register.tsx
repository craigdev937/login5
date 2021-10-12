import React from "react";
import { Redirect } from "react-router-dom";

export const Register = (): JSX.Element => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [redirect, setRedirect] = React.useState(false);

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        const URL = "http://localhost:9000/api/register";
        await fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ name, email, password })
        });
        setRedirect(true);
    };

    if (redirect) return <Redirect to="/login" />

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <h3>Please Register</h3>
                <aside>
                    <input 
                        required
                        type="text" 
                        placeholder="Name"
                        onChange={(event) => setName(event.target.value)}
                    />
                </aside>
                <aside>
                    <input 
                        required
                        type="email" 
                        placeholder="E-mail"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </aside>
                <aside>
                    <input 
                        required
                        type="password" 
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </aside>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    );
};





