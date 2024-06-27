import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Navigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Private = () => {
	const { store, actions } = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            actions.verifyToken(); 
        }
        setLoading(false);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!store.auth) {
        return <Navigate to="/" />;
    }

	return (
		<div className="container d-flex flex-column justify-content-center align-items-center gap-3 p-4">
			<div className="form-container">
				<h2>Welcome {store.email}</h2>
	            <h6 className="title">This is your private area</h6>
	       		 <div className="container d-flex flex-column justify-content-center align-items-center">
					<br></br>
					<p className="signup pe-2">Do you want to exit?</p>
					<Link to="/">
						<button rel="noopener noreferrer" href="#" className="btn btn-danger m-2" onClick={() => actions.logout()}> Log Out</button>
					</Link>
	    		</div>	
        	</div>
		</div>
	);
};

Private.propTypes = {
	match: PropTypes.object
};
