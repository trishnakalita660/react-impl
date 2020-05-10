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

 const DishDetails= (props)=>{

    console.log("render got invoked");
    
    if (props.dish == null) {
        return (
            <div>

            </div>);
    }
    else {
        const dishList = <RenderDish dish = {props.dish}/>
        const dishComments = <RenderComments comments= {props.dish.comments}/>
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
