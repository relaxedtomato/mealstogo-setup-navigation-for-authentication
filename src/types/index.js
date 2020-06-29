import PropTypes from 'prop-types';

export const restaurantPropTypes = PropTypes.shape({
  image: PropTypes.number,
  name: PropTypes.string,
  cuisine: PropTypes.string,
  vicinity: PropTypes.string,
});

export const navigationPropTypes = PropTypes.shape({
  addListener: PropTypes.func,
  navigate: PropTypes.func,
  goBack: PropTypes.func,
});
