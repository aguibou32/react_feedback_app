import Card from "../shared/Card";
import {Link} from 'react-router-dom';

function AboutPage (){
  return (
   <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a react app to leave feedback for a product or a service !!</p>
        <p>
          <Link to="/">Go back !</Link>
        </p>
      </div>
   </Card>
  )
}

export default AboutPage;
