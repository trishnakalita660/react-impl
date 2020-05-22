import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Label, Button, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Loading } from './LoadingComponent';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);

    }
    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }
    render() {
        return (
            <div>
                <Button onClick={this.toggleModal} outline color="secondary">
                    <span className="fa fa-pencil fa-ld"> Submit Comments</span>
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={(values)=>this.toggleModal(values)}>
                    <ModalHeader toggle={this.toggleModal}><strong> Submit Comments</strong></ModalHeader>
                    <ModalBody>
                        <div className="col-12 ">
                            <LocalForm onSubmit={ this.handleSubmit}>
                                <Row className="form-group">
                                    <Label htmlFor="rating" md={12} >Rating</Label>
                                    <Col col-sm={12}>
                                        <Control.select model=".rating" id="rating" name="rating"

                                            className="form-control"
                                            >
                                            <option >1</option>
                                            <option>2</option>
                                            <option >3</option>
                                            <option>4</option>
                                            <option >5</option>

                                        </Control.select>
                                       
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="author" md={12} >Your Name</Label>
                                    <Col col-sm={12}>
                                        <Control.text model=".author" id="author" name="author"

                                            className="form-control"
                                            placeholder="Your Name"
                                            validators={{
                                                required,maxLength:maxLength(15),minLength:minLength(2)
                                            }}

                                        />
                                        <Errors
                                        className="text-danger"
                                        model=".yourName"
                                        show="touched"
                                        messages={{
                                        required: 'Required!',
                                       maxLength:'Must be 15 characters or less',
                                        minLength:' Must be atleast 2 characters long'
                                       }}
                                        />
                                       
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor=".comment" md={12}>Comment</Label>
                                    <Col md={12}>
                                        <Control.textarea model=".comment" id="comment" name="comment"
                                        className="form-control"
                                        rows={12}/>
                                    </Col>
                                </Row>
                                <Button color="primary"type="submit" value="submit">Submit</Button>


                            </LocalForm>
                        </div>
                    </ModalBody>

                </Modal>





            </div>);
    }

}



function RenderComments({comments, addComment, dishId}) {
    if (comments == null) {
        return (
            <div></div>
        );
    }
    else {
        const allComments = comments.map(comments => {
            return (
                <div>
                    <div  >
                        <p>{comments.comment} </p>

                        <p>-- {comments.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comments.date))}
                        </p>
                    </div>

                </div>
            );

        });
        return (


            <div>
                <h4>Comments</h4>
                {allComments}
                <CommentForm dishId={dishId} addComment={addComment} />

            </div>
        );
    }

}
function RenderDish({ dish }) {
    
    if (dish != null) {
        return (

            <div>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        < CardTitle >{dish.name}</ CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>

                </Card>
            </div>

        )
    }
    else {
        return (<div></div>)
    }
}

const DishDetails = (props) => {



    console.log("render got invoked");
    if(props.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
        );
    }
    else if(props.errmess){
        return(
            <div className="container">
                <div className="row">
                    <h4>props.errmess</h4>
                </div>
            </div>
        );
    }

   else if (props.dish == null) {
        return (
            <div>

            </div>);
    }
    else {
        const dishList = <RenderDish dish={props.dish} />
         const dishComments=
        <RenderComments comments={props.comments}
        addComment={props.addComment}
        dishId={props.dish.id}
      />
        return (

            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active> {props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h2>{props.dish.name}</h2>
                        <hr />
                    </div>
                </div>


                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {dishList}

                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {dishComments}

                    </div>
                </div>
            </div>




        );
    }
}


export default DishDetails;
