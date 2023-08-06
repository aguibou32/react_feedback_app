import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

import FeedbackContext from '../context/FeedbackContext';

import { useState, useEffect, useContext } from 'react';

function FeedbackForm() {

  const { addFeedbackItem, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState('');


  useEffect(() => {
    if (feedbackEdit.edit === true) { 
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
      setBtnDisabled(false)
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    const inputValue = e.target.value;
    setText(inputValue);

    if (inputValue.length >= 10) {
      setBtnDisabled(false);
      setMessage(null);
    } else if (inputValue.length < 10) {
      setBtnDisabled(true);
      setMessage('Must be at least 10 characters !');
    }

  };

  const select = (rating) => {
    setRating(rating)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text == null) {
      return 0;
    }

    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating
      }
      
      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }else{
        addFeedbackItem(newFeedback);
      }


      setText('');
      setRating(10);
      setBtnDisabled(true);
    }

  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your experience with us ?</h2>
        <RatingSelect select={(rating) => select(rating)} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            value={text}
            placeholder='Write a review here...'
          />
          <Button version='primary' type='submit' isDisabled={btnDisabled}>
            <p>Send</p>
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm;