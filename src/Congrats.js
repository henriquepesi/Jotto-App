import React from 'react';
import {
  View,
  Text,
} from 'react-native';

/**
 * Functional react component for congratulation message
 * @param {object} propr - React props
 * @returns {JSX.Element} - Rendered component or null if success
 */

export default(props) => {
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