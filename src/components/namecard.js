import React from 'react';
import ReactDOM from 'react-dom';

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
								<img className="namecard_image" src="/image/bonobono.jpg" />
							</div>
							<div>
								<a href="javascript:void(0);">+좋아요</a>
							</div>
						</th>
						<td className="namecard_td">
							<div className="namecard_name">보노보노</div>
							<div className="namecard_content">
								<table>
									<tbody>
										<tr>
											<th>
											학번 : 
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
											생일 : 
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
											정회원 스터디 : 
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
											회원상태 :
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
											직위 : 
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