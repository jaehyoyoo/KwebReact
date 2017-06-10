import React from 'react';
import ReactDOM from 'react-dom';
import Namecard from './namecard.js';
import Like from './Like.js';
class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		};
		// 함수선언 : this.함수이름 = this.함수.bind(this) 하고 아래에서 내용 선언
	}
	render(){
		return (
			<div>
				<Like />
			</div>
		);
	}
}

export default App;
