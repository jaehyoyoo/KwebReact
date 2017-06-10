import React from 'react';
import ReactDOM from 'react-dom';
import Namecard from './namecard.js';
import Like from './Like.js';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			search : "",
			users : [ // 0 : 사진, 1 : 좋아요 한 사람들, 2 : 이름, 3 : 학번, 4 : 생일,
					  // 5 : 정스, 6 : 휴학여부 및 준정여부, 7 : 직위, 8 : false면 display:none,
					  // 9 : Like 갯수, 10: 아웃카운트
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노", student_num : "2015410019", birthday : "960323",
<<<<<<< HEAD
				study : "React.js", state : "준회원", status : "", display : true,
				like : 3, out : 10},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노2", student_num : "2045410019", birthday : "960123",
				study : "d3.js", state : "휴회원", status : "", display : true,
=======
				study : "React.js", state : "준회원", status : "준회원", display : true,
				like : 3, out : 10},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노2", student_num : "2045410019", birthday : "960123",
				study : "d3.js", state : "휴회원", status : "정회원", display : true,
>>>>>>> 8e8a0c5837ceddd985f6138925c0e57a844daf30
				like : 2, out : 14},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노3", student_num : "2013410019", birthday : "961123",
				study : "kweb.js", state : "정회원", status : "회장", display : true,
<<<<<<< HEAD
				like : 4, out : 2},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노4", student_num : "2013410019", birthday : "961123",
				study : "kweb.js", state : "정회원", status : "", display : true,
				like : 4, out : 2},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노5", student_num : "2013410019", birthday : "961123",
				study : "kweb.js", state : "정회원", status : "부회장", display : true,
				like : 4, out : 2},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노6", student_num : "2013410019", birthday : "961123",
				study : "kweb.js", state : "정회원", status : "", display : true,
				like : 4, out : 2},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노7", student_num : "2013410019", birthday : "961123",
				study : "kweb.js", state : "정회원", status : "회장", display : true,
				like : 4, out : 2},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노8", student_num : "2013410019", birthday : "961123",
				study : "kweb.js", state : "정회원", status : "총무부장", display : true,
				like : 4, out : 2},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노9", student_num : "2013410019", birthday : "961123",
				study : "kweb.js", state : "정회원", status : "홍보부장", display : true,
				like : 4, out : 2},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노10", student_num : "2013410019", birthday : "961123",
				study : "kweb.js", state : "정회원", status : "", display : true,
				like : 4, out : 2},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노11", student_num : "2015410019", birthday : "960323",
				study : "React.js", state : "준회원", status : "", display : true,
				like : 3, out : 10},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노12", student_num : "2045410019", birthday : "960123",
				study : "d3.js", state : "휴회원", status : "", display : true,
				like : 2, out : 14},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노13", student_num : "2013410019", birthday : "961123",
				study : "kweb.js", state : "정회원", status : "회장", display : true,
				like : 4, out : 2},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노14", student_num : "2013410019", birthday : "961123",
				study : "kweb.js", state : "정회원", status : "", display : true,
				like : 4, out : 2},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노15", student_num : "2013410019", birthday : "961123",
				study : "kweb.js", state : "정회원", status : "부회장", display : true,
				like : 4, out : 2},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노16", student_num : "2013410019", birthday : "961123",
				study : "kweb.js", state : "정회원", status : "", display : true,
				like : 4, out : 2},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노17", student_num : "2013410019", birthday : "961123",
				study : "kweb.js", state : "정회원", status : "회장", display : true,
				like : 4, out : 2},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노18", student_num : "2013410019", birthday : "961123",
				study : "kweb.js", state : "정회원", status : "총무부장", display : true,
				like : 4, out : 2},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노19", student_num : "2013410019", birthday : "961123",
				study : "kweb.js", state : "정회원", status : "홍보부장", display : true,
				like : 4, out : 2},
				{image : "/image/bonobono.jpg", like_people : "윤현식, 유재효, 강명훈, 이소라 님",
				name : "보노보노20", student_num : "2013410019", birthday : "961123",
				study : "kweb.js", state : "정회원", status : "", display : true,
=======
>>>>>>> 8e8a0c5837ceddd985f6138925c0e57a844daf30
				like : 4, out : 2}
			],
			page : 1
		};
		// 함수선언 : this.함수이름 = this.함수.bind(this) 하고 아래에서 내용 선언
		this.searchClicked = this.searchClicked.bind(this);
		this.user_sort = this.user_sort.bind(this);
		this.pagebuttonClicked = this.pagebuttonClicked.bind(this);
	}
	searchClicked(){
		var str = $('#namecard_search').val();
		var re = new RegExp(str);

		var test_users = this.state.users;
		for(var i = 0; i < test_users.length; i++){
			var test = false;
			for(var j = 0; j < 8; ++j){
				test = re.test(test_users[i][j]);
				if(test){
					break;
				}
			}
			test_users[i][8] = test;
		}
		this.setState({
			search : str,
			users : test_users,
			page : 1
		});
	}

	user_sort(num){
		var test_user = this.state.users;
		switch (num){
			case 1 :
				break;
			case 2 :
				console.log("out count selected");
				test_user.sort(function(a,b) {
				    return b.out - a.out;
				});
				//상위 10명만 띄우도록 한다.
				var count = 0;
				for (var i = 0; i < test_user.length; ++i){
					if(test_user[8]){
						count = count + 1;
					}
					if(count > 10){
						test_user[8] = false;
					}
				}
				this.setState({
					users : test_user,
					page : 1
				});
				break;
				break;
			case 3 :
				console.log("like top10 selected");
				test_user.sort(function(a,b) {
				    return b.like - a.like;
				});
				//상위 10명만 띄우도록 한다.
				var count = 0;
				for (var i = 0; i < test_user.length; ++i){
					if(test_user[8]){
						count = count + 1;
					}
					if(count > 10){
						test_user[8] = false;
					}
				}
				this.setState({
					users : test_user,
					page : 1
				});
				break;

		}
	}
	pagebuttonClicked(prevornext){
		if(prevornext == -1){
			this.setState({
				page: this.state.page - 1
			});
		} else if(prevornext == 1){
			this.setState({
				page: this.state.page + 1
			});
		}
	}
	render(){
		return (
			<div className="yjh_center_div">
				<Like />
				<div>
					<input id="namecard_search" type="text" placeholder="검색어를 입력하세요." />
					<input onClick={this.searchClicked} type="button" id="namecard_search_btn" value="검색" />
				</div>
				<div className="namecard_sort_box">
					<input onClick={this.user_sort.bind(this,1)} type="button" value="생일 임박순" />
					<input onClick={this.user_sort.bind(this,2)} type="button" value="아웃카운트순" />
					<input onClick={this.user_sort.bind(this,3)} type="button" value="좋아요 Top10" />
					<input onClick={this.user_sort.bind(this,4)} type="button" value="역대 회장" />
					<input onClick={this.user_sort.bind(this,5)} type="button" value="현 임원진" />
				</div>
				{
					this.state.users.map((user, i) => {
							if(((this.state.page-1)*10<=i) && (i<(this.state.page*10))){
								return (
									<Namecard search={this.state.search} info={user} key={i} />
								);
							}
					})
				}
				<div className="namecard_pagebutton_box">
					<input onClick={this.pagebuttonClicked.bind(this,-1)} type="button" value="prev"/>
					<input onClick={this.pagebuttonClicked.bind(this,1)} type="button" value="next"/>
				</div>
			</div>
		);
	}
}

export default App;
