import PropTypes from 'prop-types';

const restaurantPropTypes = PropTypes.shape({
  image: PropTypes.number,
  name: PropTypes.string,
  cuisine: PropTypes.string,
  vicinity: PropTypes.string,
});

export default restaurantPropTypes;
