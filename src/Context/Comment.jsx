import { useState } from "react";
import { commentContext } from ".";

const CommentProvider = ({children}) => {
    const [comments] = useState(["test","test2"])
    return(
        <commentContext.Provider value = {comments}>
        {children}
        </commentContext.Provider>
    )
}

export default CommentProvider