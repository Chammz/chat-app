import React from 'react'
import ListMessage from './ListMessage'

const Messages = ({mappedMessages}) => (
  <div className="Message">
    <div className="listed-messages">
      {
        mappedMessages.length > 0 ? <ListMessage messages={mappedMessages} /> : 'Loading messages…'
      }
    </div>
  </div>
)

export default Messages
