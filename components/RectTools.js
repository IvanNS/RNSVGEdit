import React from 'react'
import PropTypes from 'prop-types'

import AttributesTools from './AttributesTools.js'

const RectTools = ({ selectedElement }) => (
  <AttributesTools
    selectedElement={selectedElement}
    handleChange={() => {}}
    attributes={{
      x: 'readOnly',
      y: 'readOnly',
      width: 'readOnly',
      height: 'readOnly',
      stroke: 'readOnly',
      'strokeWidth': 'readOnly',
    }}
  />
)

RectTools.propTypes = { selectedElement: PropTypes.object.isRequired }

export default RectTools
