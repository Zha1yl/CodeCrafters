import React, { useState } from 'react'
import useNode from './components/hooks/UseNode';
import Comments from './components/comments/Comments';
import "./components/comments/comments.css"

export const comments = {
    id: 1,
    items: [],
}

const Comment = () => {
    const [commentsData, setCommentsData] = useState(comments);

    const { insertNode, editNode, deleteNode } = useNode();
  
    const handleInsertNode = (folderId, item) => {
      const finalStructure = insertNode(commentsData, folderId, item);
      setCommentsData(finalStructure);
    };
  
    const handleEditNode = (folderId, value) => {
      const finalStructure = editNode(commentsData, folderId, value);
      setCommentsData(finalStructure);
    };
  
    const handleDeleteNode = (folderId) => {
      const finalStructure = deleteNode(commentsData, folderId);
      const temp = { ...finalStructure };
      setCommentsData(temp);
    };
  
    return (
      <div>
        <Comments comment={commentsData} handleInsertNode={handleInsertNode} handleEditNode={handleEditNode} handleDeleteNode={handleDeleteNode} />
      </div>
    );
}

export default Comment

