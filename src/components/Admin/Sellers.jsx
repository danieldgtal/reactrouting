import React, { useEffect, useState } from "react";

const Sellers = () => {
	const [name, setName] = useState("");

	useEffect(() => {
		console.log("Component Mount!");

		return () => {
			console.log("Component Unmount!");
		};
	}, [name]);

	// clean function is use to clean up side effects

	return (
		<>
			<h3>Admin Sellers Page</h3>
			<input type="text" onChange={(e) => setName(e.target.value)} />
		</>
	);
};

export default Sellers;
