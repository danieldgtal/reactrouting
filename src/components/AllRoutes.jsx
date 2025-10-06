import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import SingleProduct from "./components/Products/SingleProduct";
import Articles from "./components/Articles/Articles";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Sales from "./components/Admin/Sales";
import Sellers from "./components/Admin/Sellers";

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/products" element={<Products />} />
			<Route path="/products/:id" element={<SingleProduct />} />
			<Route path="/articles" element={<Articles />} />
			<Route path="/admin" element={<Admin />}>
				<Route path="sales" element={<Sales />} />
				<Route path="sellers" element={<Sellers />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AllRoutes;
