import React, {useContext} from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
	return (
		
		<nav className="navbar navbar-expand-lg bg-info">
			<div className="container-fluid">
    			<a className="navbar-brand" href="#">Navbar</a>
				<div className="ml-auto">	
				{store.auth == true ? <button onClick={() => actions.logout()} className="btn btn-danger">Log Out</button> : null}
				</div>
    		</div>		
		</nav>
	);
};
