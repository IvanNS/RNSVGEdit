import React from 'react'
import ColorButton from './ColorButton.js'
import Icon from './Icon.js'

import { canvasContext } from './CanvasContext.js'
import { View } from 'react-native'

const zoomOptions = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const BottomBar = () => {
  const [canvasState, canvasStateDispatcher] = React.useContext(canvasContext)
  const { layerName, mode, zoom, selectedElement } = canvasState

  const onChangeFillColor = (color) => {
    canvasStateDispatcher({ type: 'color', colorType: 'fill', color })
  }

  const onChangeStrokeColor = (color) => {
    canvasStateDispatcher({ type: 'color', colorType: 'stroke', color })
  }

  const selectedFillColor = selectedElement?.getAttribute('fill')
  const selectedStrokeColor = selectedElement?.getAttribute('stroke')

  const handleZoom = (newZoom) => {
    canvasStateDispatcher({ type: 'zoom', zoom: Number(newZoom) })
  }

  let fullContext = ''
  if (canvasState.context) {
    let currentChild = canvasState.context
    do {
      fullContext = `${currentChild.id ?? ''} ${fullContext}`
      currentChild = currentChild.parentNode
    }
    while (currentChild?.id === 'svgcontent')
  }

  return (
    <View className="bottom-bar">
      <ColorButton onChange={onChangeFillColor} value={selectedFillColor} title="Fill" />
      <ColorButton onChange={onChangeStrokeColor} value={selectedStrokeColor} title="Stroke" />
      <label>
        <Icon name="Zoom" className="OIe-zoom" />
        <select
          value={zoom}
          onChange={(e) => handleZoom(e.target.value)}
        >
          {zoomOptions.map((o) => (
            <option key={o} value={o}>
              {`${o}%`}
            </option>
          ))}
        </select>
      </label>
      <View className="OIe-mode">{`Mode:${mode}`}</View>
      <View className="OIe-layer">{`Layer:${layerName}`}</View>
      <View className="OIe-context">{`Context:${fullContext}`}</View>
    </View>
  )
}

export default BottomBar
