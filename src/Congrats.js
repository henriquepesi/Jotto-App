import React from 'react';
import PropTypes from 'prop-types'

import {
  View,
  Text,
} from 'react-native';

/**
 * Functional react component for congratulation message
 * @param {object} propr - React props
 * @returns {JSX.Element} - Rendered component or null if success
 */

const Congrats = (props) => {
  if(props.success) {
    return(
      <View data-test="component-congrats">
        <Text data-test="congrats-message">Congratulations!</Text>
      </View>
    );
  } else {
    return(
      <View data-test="component-congrats" />
    )
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}

export default Congrats