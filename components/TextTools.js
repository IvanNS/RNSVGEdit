import React from 'react'
import PropTypes from 'prop-types'

import AttributesTools from './AttributesTools.js'

const TextTools = ({ selectedElement, handleChange }) => (
  <AttributesTools
    selectedElement={selectedElement}
    handleChange={handleChange}
    attributes={{
      x: 'readOnly',
      y: 'readOnly',
      'fontFamily': ['arial', 'newroman', 'serif', 'sans-serif', 'fantasy', 'monospace'],
      'fontSize': 'number',
    }}
  />
)

TextTools.propTypes = {
  handleChange: PropTypes.func.isRequired,
  selectedElement: PropTypes.object.isRequired,
}

export default TextTools
