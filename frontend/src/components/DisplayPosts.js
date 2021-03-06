import React from "react";
import SideBar from "./Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faCommentMedical } from '@fortawesome/free-solid-svg-icons';
import {displayQuestions} from "../action/index";
import { connect } from "react-redux";

class DisplayPosts extends React.Component {


    async componentDidMount() {

        let questions = await this.props.displayQuestions();

    }


    



    render() {

        // console.log(this.props.questions);

        return (
            <div>
                {/* <SideBar></SideBar> */}
                <div className="container">
                    <div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-xs-12">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-4  col-md-4 text-center">
                                        
                                            <FontAwesomeIcon  className="displayBtn" 
                                                              type="submit" 
                                                              icon={faThumbsUp} 
                                                              
                                                              style={{ fontSize: '1.75em',border:"none" }} />
                                    
                                        <br />
                                        5
                                        <br />
                                        Vote
                                    </div>
                                    <div className="col-lg-4 col-sm-4 col-md-4 text-center">
                                    
                                            <FontAwesomeIcon type="submit" 
                                                             className="displayBtn" 
                                                             icon={faCommentMedical} 
                                                             style={{ fontSize: '1.75em' }} />
                                       
                                        <br />
                                        5
                                        <br />
                                        Answers
                                    </div>
                                    <div className="col-lg-4 col-sm-4 col-md-4  text-center">
                                    
                                            <FontAwesomeIcon type="submit" 
                                                             className="displayBtn" 
                                                             icon={faThumbsDown} 
                                                             style={{ fontSize: '1.75em' }} />
                                  

                                        <br />
                                        5
                                        <br />
                                        Awful
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-9  col-md-8 col-xs-12">
                                title
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>

            </div>
        )
    }

}


// export default DisplayPosts;


const mapStateToProps = (state) => {

    console.log("display component");

    console.log(state.questions);

    return { questions : null };
};

export default connect(mapStateToProps, { displayQuestions })(DisplayPosts);