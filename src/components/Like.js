import React from 'react';
import ReactDom from 'react-dom';
import Popup from 'react-popup';

class Like extends React.Component{
constructor(props){
  super(props);
  this.state =
    {
      name:'',
      number: 0
    }
}

click(personname)
{

  this.setState({
    name: personname,
    number: number+1
  });


}



render(){
  return(
  <button onClick= {this.click(this.props.personname)} value= "좋아요"/>
)
}




}
Popup.registerPlugin('like', function (content, target) {
    this.create({
        content: content,
        className: 'like',
        noOverlay: true,
        position: function (box) {
            let bodyRect      = document.body.getBoundingClientRect();
            let btnRect       = target.getBoundingClientRect();
            let btnOffsetTop  = btnRect.top - bodyRect.top;
            let btnOffsetLeft = btnRect.left - bodyRect.left;
            let scroll        = document.documentElement.scrollTop || document.body.scrollTop;

            box.style.top  = (btnOffsetTop - box.offsetHeight - 10) - scroll + 'px';
            box.style.left = (btnOffsetLeft + (target.offsetWidth / 2) - (box.offsetWidth / 2)) + 'px';
            box.style.margin = 0;
            box.style.opacity = 1;
        }
    });
});/*팝업 css*/
Popup.plugins().like(this.state.name+'님 외'+this.state.number+'명이 좋아합니다.');


export default Like;
