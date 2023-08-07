import spinner from "../assets/loading.gif";

function Spinner() {
  return <img src={spinner} alt="loading" style={{
    width: '30px', margin: 'auto', display: 'block'
  }} />
}

export default Spinner;