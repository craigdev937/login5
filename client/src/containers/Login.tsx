import React from "react";
import { Redirect } from "react-router-dom";

export const Login = (): JSX.Element => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [redirect, setRedirect] = React.useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const URL = "http://localhost:9000/api/login";
        const res = await fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ email, password }),
        });
        const content = await res.json();
        setRedirect(true);
    };

    if (redirect) return <Redirect to="/" />;

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <h3>Please Log in</h3>
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
                <button type="submit">Log in</button>
            </form>
        </React.Fragment>
    );
};





