import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

export default function Post() {
    return (
        <div className="post">
            <div className="post__header">

            </div>
            <Avatar
                className="post__avatar"
                alt='Saeed'
                src="/static/images/avatar/1.jpg"
                />
            <h3>Username</h3>
            {/* header -> avatar -> username */}

            <img className="post__image" src ="https://miro.medium.com/max/1200/1*jnqXL4Q-iW0qxodFDTxyFQ.jpeg"></img>

            <h4 className="post__text"><strong>iamsaeed</strong> This is a instagram clone made with React! </h4>
        </div>
    )
}

