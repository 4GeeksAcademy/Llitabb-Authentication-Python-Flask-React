import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import Login from "./login";
import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(true); 
    useEffect(() => {
        const verifyToken = async () => {
            await actions.verifyToken();
            if (mounted) {
                setLoading(false);
            }
        };
        if (loading) {
            verifyToken();
        }

        return () => {
            setMounted(false);
        };
    }, [loading, actions, mounted]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (store.auth) {
        return <Navigate to="/private" />;
    }

    return (
        <div className="text-center mt-5">
            <h1>Home</h1>
            <Login />
        </div>
    );
};