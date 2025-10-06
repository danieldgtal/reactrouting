import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleProduct = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const handleBack = () => {
		// window.history.back(); // Navigate back to the previous page
		// navigate("/articles"); // Navigate to a specific route
		navigate(-1); // Navigate back to the previous page in history
	};
	return (
		<div>
			<h2>SingleProduct - {id}</h2>
			<button onClick={handleBack}>Go back</button>
		</div>
	);
};

export default SingleProduct;
