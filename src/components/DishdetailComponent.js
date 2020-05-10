import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'




function RenderComments({comments}) {
    if (comments == null) {
        return (
            <div></div>
        );
    }
    else {
        const allComments = comments.map(comments => {
            return (


                <div >
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


            );

        });
        return (<div>
            <h4>Comments</h4>
            {allComments}
        </div>);
    }

}
function RenderDish({dish}) {
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

 const DishDetails= (probs)=>{

    console.log("render got invoked");
    
    if (probs.dish == null) {
        return (
            <div>

            </div>);
    }
    else {
        const dishList = <RenderDish dish = {probs.dish}/>
        const dishComments = <RenderComments comments= {probs.dish.comments}/>
        return (

            <div className="container">
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



    // onDishSelect(dish) {
    //     this.setState({ selectedDish: dish });

    // }
    // renderDish(dish) {
        // if (dish != null) {
        //     return (
                // <div className="container">
                //     <div className="row">

                //         <div className="col-12 col-md-5 m-1">
                //             <Card>
                //                 <CardImg width="100%" src={dish.image} alt={dish.name} />
                //                 <CardBody>
                //                     < CardTitle >{dish.name}</ CardTitle>
                //                     <CardText>{dish.description}</CardText>
                //                 </CardBody>

                //             </Card>
                //         </div>
                    //     <div className="col-12 col-md-5">
                    //         <Card>
                    //             {/* map , filter, sort , foreach . for-of , for-in , every, some ,  */}
                    //             <CardBody>
                    //                 <CardTitle><h4><strong>Comments</strong></h4></CardTitle>
                    //                 {
                    //                     dish.comments.map((review, index) => (
                    //                         <div key={index}>
                    //                             <CardText>{review.comment}</CardText>
                    //                             <CardText>
                    //                                 {`--${review.author} ,${new Date(review.date).toDateString()}`}</CardText>
                    //                         </div>

                    //                     ))
                    //                 }

                    //             </CardBody>

                    //         </Card>
                    //     </div>

                    // </div>
        //         </div>
        //     );

        // }

        // else {
        //     return (<div>

        //     </div>);
        // }

    // }

    // render() {
    //     return (
    //         <div className="row">
                // {this.renderDish(this.state.selectedDish)
                // }
    //         </div>

    //     );
    // }
    // render() {
    //     const menu = this.props.dishes.map((dish) => {
    //         return (
    //             <div key={dish.id} className="col-12 col-md-5 m-1">
    //                 <Card onClick={() => this.onDishSelect(dish)}>
    //                     <CardImg width="100%" src={dish.image} alt={dish.name} />

    //                     <CardImgOverlay>
    //                         < CardTitle >{dish.name}</ CardTitle>

    //                     </CardImgOverlay>
    //                 </Card>
    //             </div>
    //         );
    //     });

    //     return (
    //         <div className="container">
    //             <div className="row">

    //                 {menu}


    //             </div>
    //             <div className="row">
                    // {this.renderDish(this.state.selectedDish)
                    // }
    //             </div>

    //         </div>


    //     );
    // }




// }

// export default DishDetail