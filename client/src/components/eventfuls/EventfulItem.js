import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import {
  deleteEventful,
  addLike,
  removeLike
} from "../../actions/eventfulActions";
import RBCarousel from "react-bootstrap-carousel";
import "../css/Eventful.css";

class EventfulItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files:[],
      autoplay: true
    };
  }
  componentDidMount(){
    
  }
  onDeleteClick(id) {
    this.props.deleteEventful(id);
  }

  convert(){
    let newArr = []
    console.log(this.state.eventful);
    if (this.state.eventful) {
      for (var i = 0; i < this.state.eventful.pictures.length; i++) {
        console.log(this.state.eventful.pictures[i]);
        var base64 = btoa(new Uint8Array(this.state.eventful.pictures[i].image.data).reduce((data, byte) => data + String.fromCharCode(byte), ""));

        newArr.push(base64)
        console.log(newArr);
      }
      this.setState({ file: newArr })}
    
  }

  // onUnlikeClick(id) {
  //   this.props.removeLike(id);
  // }

  // findUserLike(likes) {
  //   const { auth } = this.props;
  //   if (likes.filter(like => like.user === auth.user.id).length > 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  //   Toggle Previous Events
  onSelect = (active, direction) => {
    // console.log(`active=${active} && direction=${direction}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    if (leftIcon && rightIcon) {
      this.setState({
        leftIcon: undefined,
        rightIcon: undefined
      });
    } else {
      this.setState({
        leftIcon: <span className="fa fa-glass" />,
        rightIcon: <span className="fa fa-music" />
      });
    }
  };

  render() {

             let { leftIcon, rightIcon , files } = this.state;
             const { eventful, auth, showActions } = this.props;
             

    eventful.pictures.map((image, index) => {
      
      files.push(image)
      

    }


    )           
    

             return <div className="card card-body mb-3">
                 <div className="row">
                   <div className="col-md-2">
                     <br />
                     <p className="text-center">
                       Event Creator: {eventful.name}
                     </p>
                   </div>
                   <div className="col-md-10">
                     <p className="lead">
                       Event Name:
                       {eventful.title}
                     </p>
                     <p className="lead">
                       {eventful.description}
                     </p>
                     
                       <div className="col-md-12" style={{ marginTop: 40, marginBottom: 40 }}>
                         <RBCarousel animation={true} autoplay={this.state.autoplay} slideshowSpeed={7000} leftIcon={leftIcon} rightIcon={rightIcon} onSelect={this.onSelect} ref={r => (this.slider = r)} version={4}>
                           {eventful.pictures.map((image, index)=>{
                          
                           return (
                             <div
                               className="text-center"
                               key={index}
                             >
                               <img
                                 className="eventfulImg"
                                 src=
                                 {"data:image/png;base64," + image.image.data}
                                 alt=""
                               />
                             </div>
                           );

                           }
                             
                            
                           )
                           }
                         </RBCarousel>
                       </div>
                     
                     {showActions ? <span>
                         <Link to={`/eventful/${eventful._id}`} className="btn btn-info mr-1">
                           {eventful.comments.length} Comments
                         </Link>
                         { auth.user.admin ? <button onClick={this.onDeleteClick.bind(this, eventful._id)} type="button" className="btn btn-danger mr-1">
                             <i className="fas fa-times" />
                           </button> : null}
                       </span> : null}
                   </div>
                 </div>
               </div>;
           }
}

EventfulItem.defaultProps = {
  showActions: true
};

EventfulItem.propTypes = {
  deleteEventful: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  eventful: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteEventful, addLike, removeLike}
)(EventfulItem);
