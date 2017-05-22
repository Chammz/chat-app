import React from 'react'
import ListMessage from './ListMessage'

const Messages = ({mappedMessages}) => (
  <div>
    {
      mappedMessages.length > 0 ? <ListMessage messages={mappedMessages} /> : 'Loading messages…'
    }
  </div>
)

export default Messages
