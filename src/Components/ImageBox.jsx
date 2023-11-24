import React from "react";
import { useState, useEffect } from "react";
import query from "../api.js";
import { PuffLoader } from "react-spinners";

import image1 from "../Images/im2.jpg";
const ImageBox = ({ placeholder, boxNumber }) => {
	const [inputs, setText] = useState("");
	const [image, setImage] = useState(null);
	const [btnId, setBtnId] = useState("btn");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
    
    const images = [image1];

	const imageUrl = `url(${images[0]})`;
	const style = {
		backgroundImage: imageUrl,
		 backgroundSize: "100% 100%",
        // width: "100%"
        // padding: 0,
	//	backgroundRepeat: "repeat",
	};
	const handleChange = (e) => {
		setText(e.target.value);
	};

	useEffect(() => {}, [image, error]);

	const handleClick = (e) => {
		if (btnId === "disabled") return;
		setBtnId("disabled");
		setError(false);
		setLoading(true);
		query({ inputs })
			.then((res) => {
				const imageObjectURL = URL.createObjectURL(res);
				setLoading(false);
				setImage(imageObjectURL);
				setBtnId("btn");
			})
			.catch((error) => {
				setError(true);
				setLoading(false);
				setBtnId("btn");
			});
	};

	return (
		<div className="box" style={style}>
			<div className="input">
				<input
					typeof="text"
					placeholder={placeholder}
					value={inputs}
					onChange={handleChange}
					id="text_box"
				></input>
			</div>
			<div className="submit">
				<input
					type="submit"
					id={btnId}
					value="Search"
					onClick={handleClick}
				></input>
				<div className="boxNum">
					<h2>Box {boxNumber}</h2>
				</div>
			</div>

			<div className="image" style={{ background: "transparent" }}>
				{loading ? (
					<>
						<PuffLoader
							color="#325469"
							size={130}
							speedMultiplier={1.2}
							className="loader"
						/>
						<p>Image is loading...</p>
					</>
				) : error ? (
					<h1>Error while loading</h1>
				) : (
					<img src={image} alt="click Search" className="img_load" />
				)}
			</div>
		</div>
	);
};

export default ImageBox;