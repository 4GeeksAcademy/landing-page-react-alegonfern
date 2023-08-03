import React from "react";
import MyCard from "./cards";
import NavBar from "./navbar";
import Jumbo from "./jumbo";
import Footer from "./footer";



//include images into your bundle

//create your first component

//Create 
const Home = (props) => {



	return (
		<>  <NavBar navTitulo="Start Bootstrap"/>
			<div className="container">


				<Jumbo 
				titulo="A Warm Welcome" 
				parrafo1="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
				parrafo2="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
				/>
				<MyCard />
				{/* El "Props" del componente "MyCard" lo implementé en el componente carta, que consta de dos componentes a su vez. */}
			</div>
			<Footer textFooter="Copyright © Your Website 2023" />
		</>

	);
};

export default Home;
