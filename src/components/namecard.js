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
								<img className="namecard_image" src={this.props.info.image}></img>
							</div>
			          		<div>
					            <img src = "/image/like.png" height = "30" width="30"></img> 
					            <span style={{color:"green"}}>({this.props.info.like})</span>
			        		</div>
						</th>
						<td className="namecard_td">
							<div className="namecard_name">{this.props.info.name}</div>
							<div className="namecard_content">
								<table>
									<tbody>
										<tr>
											<th>
											학번 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
											생일 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
											정회원 스터디 &nbsp;&nbsp;
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
											회원상태 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											</th>
											<td style={{paddingLeft : "2.5px"}}>
											{this.props.info.state}
											<span style={{color:"white"}}>(Out:{this.props.info.out})</span>
											</td>
										</tr>
									</tbody>
								</table>
								<div style={{visibility: (this.props.info.status.length != 0) ? 'visible' : 'hidden' }}>
									<table>
										<tbody>
											<tr>
												<th>
												직위 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
