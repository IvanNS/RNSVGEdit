import PropTypes from 'prop-types'
import React from 'react'
import Icon from './Icon.js'
import {Button,StyleSheet} from 'react-native'

const IconButton = ({ onClick, className, icon }) => (
  <Button type="button" className={className} onClick={onClick}>
    <Icon name={icon} className="OIe-tools-icon" style={styles.OIeToolsIcon} />
    <br />
    {icon}
  </Button>
)

// Properties restrictions
IconButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
}
IconButton.defaultProps = { className: 'button' }

const styles = StyleSheet.create({
  OIeToolsIcon: {
    width: 12
  },
});

export default IconButton
