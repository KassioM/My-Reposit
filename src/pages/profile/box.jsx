import React from 'react';

const Box = (props) => {

    return (
        <a href={props.url} target="_blank" >
            <div className="box-repositorios" >

                <div className="title-box">
                        <h1 className="name-box">{props.name}</h1>

                        <p className="description-box">{props.description}</p>
                        
                        <p className="commit-box">{props.branch}</p>
                </div>

                <div className="about-reposit-box">
                    <i class="fas fa-chevron-right" ></i>
                </div>

            </div>
        </a>
    )
}

export default Box;
