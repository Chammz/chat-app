import moment from 'moment';
import React, { PropTypes } from 'react';

const ListMessage = ({messages}) => {
    return (
        <ul className="ListMessage">
          {
            messages.map((message, index) =>
              <li className="message" key={index}>
                <div className="message-body">
                  <b className="message-name">{message.username}:</b>
                  <em className="message-time">{message.sentAt}</em>
                  <div className="message-text">{message.content}</div>
                </div>
              </li>
            )
          }
        </ul>
    );
};

export default ListMessage;
