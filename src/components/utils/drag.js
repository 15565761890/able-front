import React,{ Component } from 'react';


export default class Drag extends Component {
	constructor(props) {
		super(props);
	}
	allowDrop = event => {
		event.preventDefault();
	}
	drop = event => {
		event.preventDefault();
		console.log(event.dataTransfer.getData("Text"))
		var data = event.dataTransfer.getData("Text");
		let domData = document.getElementById(data);
		console.log(domData.parentNode.id)
		console.log(domData.parentElement)
		if(domData.parentNode.id === "div1") return;
		domData.style.float = "left"
		event.target.appendChild(domData);
	}
	drag = event => {
		event.dataTransfer.setData("Text", event.target.id);
	}
	render = () => {
		return (
			<div className="dragContain">
				<div id="div1" onDrop={(event) => {this.drop(event)}} onDragOver={(event) => {this.allowDrop(event)}}></div>
				<br />
				<div id="drag1" draggable="true" onDragStart={(event) => {this.drag(event)}}></div>
				<div id="drag2" draggable="true" onDragStart={(event) => {this.drag(event)}}></div>
				<div id="drag3" draggable="true" onDragStart={(event) => {this.drag(event)}}></div>
				<div id="drag4" draggable="true" onDragStart={(event) => {this.drag(event)}}></div>
			</div>

		)
	}
}