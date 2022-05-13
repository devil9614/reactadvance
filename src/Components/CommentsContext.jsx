import React from 'react'
import { commentContext } from '../Context'
import Comment from './Comment'

export const CommentsRenderv2 = ({value}) => {
    console.log(value)
    return (
        <div>
            {value.map((comment) => (
                <Comment comment = {comment}/>
            ))}
        </div>
    )
}

const CommentsContext = () => {
  return (
    <commentContext.Consumer>
        {(context) => <CommentsRenderv2 value = {context} />}
    </commentContext.Consumer>
    )
}

export default CommentsContext