import "./App.css";
import Header from "./Components/Header";
import ImageBox from "./Components/ImageBox";



function App() {


	return (
		<>
			<Header />
			<div className="body">
				<ImageBox placeholder="type\\a rat and cat" boxNumber="1" />
				<ImageBox
					placeholder="type\\tony stark in multiverse"
					boxNumber="2"
				/>
				<ImageBox placeholder="type\\groot and yoda" boxNumber="3" />
				<ImageBox placeholder="type\\Nightwing" boxNumber="4" />
				<ImageBox placeholder="type\\The Nice House On The Lake" boxNumber="5" />
				<ImageBox placeholder="type\\first day of universe" boxNumber="6" />
				<ImageBox placeholder="type\\big bang real picture" boxNumber="7" />
				<ImageBox placeholder="type\\image of multiverse" boxNumber="8" />
				<ImageBox placeholder="type\\Eternals" boxNumber="9" />
				<ImageBox placeholder="type\\ironman and groot" boxNumber="10" />
			</div>
		</>
	);
}

export default App;
