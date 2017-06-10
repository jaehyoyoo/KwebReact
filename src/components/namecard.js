import React from 'react';
import ReactDOM from 'react-dom';

class Namecard extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		};
		// 함수선언 : this.함수이름 = this.함수.bind(this) 하고 아래에서 내용 선언
	}
	// this.props.info.info Indexing
	// 0 : 사진, 1 : 좋아요 한 사람들, 2 : 이름, 3 : 학번, 4 : 생일, 
	// 5: 정스, 6 : 휴학여부 및 준정여부, 7 : 직위, 8 : display none의 여부
	render(){
		return (
			<div style={{display: this.props.info.display ? 'block' : 'none', backgroundColor : this.props.info.birth_state}} className= "namecard_outer_box">
				<table>
					<tbody>
						<tr>
						<th>
							<div>
								<img className="namecard_image" src={this.props.info.image} />
							</div>
							<div>
								<a href="javascript:void(0);">+좋아요</a>
							</div>
						</th>
						<td className="namecard_td">
							<div className="namecard_name">{this.props.info.name}</div>
							<div className="namecard_content">
								<table>
									<tbody>
										<tr>
											<th>
											학번 : 
											</th>
											<td>
											{this.props.info.student_num}
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
											{this.props.info.birthday}
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
											{this.props.info.study}
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
											{this.props.info.state}
											</td>
										</tr>
									</tbody>
								</table>
								<div style={{visibility: (this.props.info.status.length != 0) ? 'visible' : 'hidden' }}>
									<table>
										<tbody>
											<tr>
												<th>
												직위 : 
												</th>
												<td>
												{this.props.info.status}
												</td>
											</tr>
										</tbody>
									</table>
								</div>
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