import React from 'react';
import {Text, ViewPropTypes} from 'react-native';
import {Overlay} from 'react-native-elements';
//import PropTypes from 'prop-types';
const createReactClass = require('create-react-class');

const ModalView = createReactClass({
  propTypes: {
    txStyle: Text.propTypes.style,
    imgStyle: ViewPropTypes.style,
  },
  render() {
    return (
      <Overlay>
        <Text>123</Text>
      </Overlay>
    );
  },
});

export default ModalView;
