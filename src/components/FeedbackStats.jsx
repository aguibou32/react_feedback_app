import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackStats() {

  const { feedback } = useContext(FeedbackContext);


  const averageRating = (feedback) => {

    if (feedback.length === 0) {
      return 0
    }

    let totalRating = 0;
  
    feedback.forEach(element => {
      totalRating += element.rating;
    });
    const finalNumber = totalRating / feedback.length 
    // toFixed(1) is to make sure the there is only one decimal place. anything in the decimal part is removed
    return finalNumber.toFixed(1);
  };

  // console.log(averageRating(feedback))

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} reviews</h4>
      <h4>Average rating: {averageRating(feedback)}</h4>
    </div>
  )
  
}


export default FeedbackStats;