import React, {useContext} from 'react'
import IconButton from './IconButton.js'
import { canvasContext } from './CanvasContext.js'
import { View, StyleSheet } from 'react-native'
import colors from '../constants/colors.js'

const LeftBar = () => {
  const [canvasState, canvasStateDispatcher] = useContext(canvasContext)
  const { mode } = canvasState

  const setMode = (newMode) => canvasStateDispatcher({ type: 'mode', mode: newMode })

  return (
    <View className="left-bar" style={styles.container}>
      <IconButton
        icon="Select"
        className={mode === 'select' ? 'selected' : ''}
        onPress={() => setMode('select')}
      />
      <IconButton
        icon="Ellipse"
        className={mode === 'ellipse' ? 'selected' : ''}
        onPress={() => setMode('ellipse')}
      />
      <IconButton icon="Rect" className={mode === 'rect' ? 'selected' : ''} onPress={() => setMode('rect')} />
      <IconButton icon="Path" className={mode === 'path' ? 'selected' : ''} onPress={() => setMode('path')} />
      <IconButton icon="Line" className={mode === 'line' ? 'selected' : ''} onPress={() => setMode('line')} />
      <IconButton icon="Text" className={mode === 'text' ? 'selected' : ''} onPress={() => setMode('text')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 0,
    right: 0,
    paddingTop: 50,
    borderColor: '#808080',
    borderStyle: 'solid',
    borderWidth: 0,
    backgroundColor: colors.backgroundColor,
    width: 42,
    zIndex: 1
  },
  button: {
    margin: 1,
    padding: 2,
    borderRadius: 5,
    fontSize: 0.5,
    width: 40,
    height: 30,
    backgroundColor: colors.backgroundColor
  }
})

export default LeftBar
