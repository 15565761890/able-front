import React,{ Component } from 'react';
import '../css/index.css';
// import { ApiServices,HTTP_TYPE,ErrorHandle } from "../api";


export default class Fwb extends Component {
	constructor(props) {
		super(props);
	}
	//加粗
	blodOperate = () => {
		document.execCommand("bold", false, null) ? console.log(`true:blod`) : alert('粗体设置失败，请从新设置！')
	}
	//斜体
	italicOperate = () => {
		document.execCommand('italic',false,null) ? console.log(`true:Italic`) : alert('斜体设置失败，请从新设置！')
	}
	render = () => {
// 		//下划线
// 		document.getElementById('underLineStyle').addEventListener('click',() => {
// 			document.execCommand('underline',false,null) ? console.log(`true:Italic`) : alert('下滑线设置失败，请从新设置！')
// 		})
// 		//字体颜色
// 		document.getElementById('fontColorStyle').addEventListener('click',() => {
// 			document.execCommand('foreColor',false,'red') ? console.log(`true:标题`) : alert('字体颜色设置失败，请从新设置！')
// 		})
// 		//背景颜色
// 		document.getElementById('backgroundColorStyle').addEventListener('click', () => {
// 			document.execCommand('backColor',false,'red') ? console.log(`true:标题`) : alert('背景色设置失败，请从新设置！')
// 		})
// 		//水平线
// 		document.getElementById('hrStyle').addEventListener('click', () => {
// 			document.execCommand('insertHorizontalRule',false,'') ? console.log(`true:标题`) : alert('水平线设置失败，请从新设置！')
// 		})
// 		//标题
// 		document.getElementById('titleStyle').addEventListener('click',() => {
// 			document.execCommand('formatBlock',false,'<H3>') ? console.log(`true:标题`) : alert('标题设置失败，请从新设置！')
// 		})
// 		document.getElementById('clearStyle').addEventListener('click',(e) => {
// 			console.log(e)
// //				console.log(document.clear())
// 			document.execCommand('removeFormat',true,null) ? console.log(`true:标题`) : alert('清除格式失败，请从新设置！')
// //				document.execCommand('undo',false,null) ? console.log(`true:标题`) : alert('清除格式失败，请从新设置！')
// //				document.execCommand('redo',false,null) ? console.log(`true:标题`) : alert('清除格式失败，请从新设置！')
// 		})
		return (
			<div id="edit">
				<div id="menu">
					<a href="javascript:void(0)" id="blodStyle" onClick={this.blodOperate}>加粗</a><nbsp></nbsp>
					<a href="javascript:void(0)" id="italicStyle" onClick={this.italicOperate}>斜体</a><nbsp></nbsp>
					{/*<a href="javascript:void(0)" id="underLineStyle">下划线</a><nbsp></nbsp>*/}
					{/*<a href="javascript:void(0)" id="fontColorStyle">字体颜色</a><nbsp></nbsp>*/}
					{/*<a href="javascript:void(0)" id="backgroundColorStyle">背景色</a><nbsp></nbsp>*/}
					{/*<a href="javascript:void(0)" id="titleStyle">标题</a><nbsp></nbsp>*/}
					{/*<a href="javascript:void(0)" id="hrStyle">水平线</a><nbsp></nbsp>*/}
					{/*<a href="javascript:void(0)" onClick="changeStyleItalic()">引用快</a><nbsp></nbsp>*/}
					{/*<a href="javascript:void(0)" onClick="changeStyleItalic()">代码块</a><nbsp></nbsp>*/}
					{/*<a href="javascript:void(0)" onClick="changeStyleItalic()">有序列表</a><nbsp></nbsp>*/}
					{/*<a href="javascript:void(0)" onClick="changeStyleItalic()">无序列表</a><nbsp></nbsp>*/}
					{/*<a href="javascript:void(0)" onClick="changeStyleItalic()">插入图片</a><nbsp></nbsp>*/}
					{/*<a href="javascript:void(0)" onClick="changeStyleItalic()">插入视频</a><nbsp></nbsp>*/}
					{/*<a href="javascript:void(0)" onClick="changeStyleItalic()">插入公式</a><nbsp></nbsp>*/}
					{/*<a href="javascript:void(0)" id="clearStyle">清楚格式</a><nbsp></nbsp>*/}
				</div>
				<div id="content" contentEditable="true">
					<p>这是粗体文字。</p>
					<p>这是斜体文字。</p>
					<p>这是文字。</p>
					<pre>这是一个pre</pre>
				</div>
			</div>
		)
	}
}