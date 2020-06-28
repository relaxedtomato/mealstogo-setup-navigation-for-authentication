import PropTypes from 'prop-types';

export const restaurantPropTypes = PropTypes.shape({
  image: PropTypes.number,
  name: PropTypes.string,
  cuisine: PropTypes.string,
  vicinity: PropTypes.string,
});

export const navigationPropTypes = PropTypes.shape({
  navigate: PropTypes.func,
  goBack: PropTypes.func,
});
