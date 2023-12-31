import PropTypes from 'prop-types';

function Card(props) {
  const { children, reverse } = props;

  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
}

Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool.isRequired
}

export default Card;