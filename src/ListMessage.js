import moment from 'moment';
import React, { PropTypes } from 'react';

const ListMessage = ({messages}) => {
    return (
        <div>
          {
            messages.map((message, index) =>
              <div className="message" key={index}>
                <div className="message-body">
                  <b className="message-name">{message.username}</b>
                  <em className="message-time">{message.sentAt}</em>
                  <div className="message-text">{message.content}</div>
                </div>
              </div>
            )
          }
        </div>
    );
};

export default ListMessage;
