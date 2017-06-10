import React from 'react'
import ReactDOM from 'react-dom'
import ReactCSS from 'reactcss'




class Namecard extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		};
		// 함수선언 : this.함수이름 = this.함수.bind(this) 하고 아래에서 내용 선언
	}
	render(){
		return (
			<div className= "namecard_outer_box">
				<table>
					<tbody>
						<tr>
						<th>
							<div>
								<img className="namecard_image" src="/image/profile.jpg"></img>
							</div>
			          		<div>
					            <img src = "/image/like.png" height = "30" width="30"></img> 
			        		</div>
						</th>
						<td className="namecard_td">
							<div className="namecard_name">보노보노</div>
							<div className="namecard_content">
								<table>
									<tbody>
										<tr>
											<th>
											학번 &nbsp;&nbsp;&nbsp;&nbsp;	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											</th>
											<td>
											2015410019
											</td>
										</tr>
									</tbody>
								</table>
								<table>
									<tbody>
										<tr>
											<th>
											생일 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											</th>
											<td>
											12월 23일	
											</td>
										</tr>
									</tbody>
								</table>
								<table>
									<tbody>
										<tr>
											<th>
											정회원 스터디 &nbsp;&nbsp;
											</th>
											<td>
											React.js
											</td>
										</tr>
									</tbody>
								</table>
								<table>
									<tbody>
										<tr>
											<th>
											회원상태 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											</th>
											<td>
											휴회원
											</td>
										</tr>
									</tbody>
								</table>
								<table>
									<tbody>
										<tr>
											<th>
											직위 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											</th>
											<td>
											일개 정회원
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Namecard;