import React from 'react';

const Card = (props) => {
    return (
        <>
        <div className="container">
            
            <div className="profile"></div>
            
            <div className="text">
                <p id="name"><span>{props.firstname}</span><span>{props.lastname}</span></p>
                <p className="content">{props.designation}</p>
                <p className="content">{props.content}</p>
                <div className="links">
                    <a href={props.links} target="blank"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                    <a href={props.links} target="blank"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                    <a href={props.links} target="blank"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;