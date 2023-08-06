import { createContext, useState } from "react";
import FeedbackData from "../data/feedbackData";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

  const [feedback, setFeedback] = useState(FeedbackData);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit: false
  })

  const deleteFeedbackItem = id => {
    if (window.confirm("Are you sure you want to delete ?")) {
      return setFeedback(prevFeedbackList => prevFeedbackList.filter(item => item.id !== id));
    }
  }

  const addFeedbackItem = (newFeedbackObj) => {
    newFeedbackObj.id = uuidv4();
    setFeedback((prevFeedbackList) => {
      return [newFeedbackObj, ...prevFeedbackList]
    })
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item, 
      edit: true
    })
  }

  // const updateFeedback = (id, updatedItem) => {
  //   setFeedback(prevFeedback => prevFeedback.map((item) => item.id === id ? {...item, ...updatedItem} : item));
  // };

  function updateFeedback(id, updatedItem){
    setFeedback(function(prevFeedback){
      return prevFeedback.map(item => id === id ? {...item, ...updatedItem}: item)
    })
  }
  
  return <FeedbackContext.Provider value = {{
    feedback: feedback,
    feedbackEdit: feedbackEdit,
    deleteFeedbackItem: deleteFeedbackItem,
    addFeedbackItem:  addFeedbackItem,
    editFeedback: editFeedback,
    updateFeedback: updateFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext;