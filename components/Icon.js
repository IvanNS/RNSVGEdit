// General imports
import React from 'react'
import PropTypes from 'prop-types'
import {Image} from 'react-native'

import group from 'svgedit/src/editor/images/group_elements.png'
import ungroup from 'svgedit/src/editor/images/shape_ungroup.png'
import undo from 'svgedit/src/editor/images/undo.png'
import redo from 'svgedit/src/editor/images/redo.png'
import select from 'svgedit/src/editor/images/select.png'
import line from 'svgedit/src/editor/images/line.png'
import circle from 'svgedit/src/editor/images/circle.png'
import ellipse from 'svgedit/src/editor/images/ellipse.png'
import square from 'svgedit/src/editor/images/square.png'
import rect from 'svgedit/src/editor/images/rect.png'
import save from 'svgedit/src/editor/images/save.png'
import text from 'svgedit/src/editor/images/text.png'
import del from 'svgedit/src/editor/images/delete.png'
import clone from 'svgedit/src/editor/images/clone.png'
import path from 'svgedit/src/editor/images/path.png'
import alignBottom from 'svgedit/src/editor/images/align-bottom.png'
import alignCenter from 'svgedit/src/editor/images/align-center.png'
import alignTop from 'svgedit/src/editor/images/align-top.png'
import alignLeft from 'svgedit/src/editor/images/align-left.png'
import alignRight from 'svgedit/src/editor/images/align-right.png'
import alignMiddle from 'svgedit/src/editor/images/align-middle.png'
import align from 'svgedit/src/editor/images/align.png'
import moveBottom from 'svgedit/src/editor/images/move_bottom.png'
import moveTop from 'svgedit/src/editor/images/move_top.png'
import bold from 'svgedit/src/editor/images/bold.png'
import italic from 'svgedit/src/editor/images/italic.png'
import fill from 'svgedit/src/editor/images/fill.png'
import stroke from 'svgedit/src/editor/images/stroke.png'
import fontSize from 'svgedit/src/editor/images/fontsize.png'
import noColor from 'svgedit/src/editor/images/no_color.png'
import zoom from 'svgedit/src/editor/images/zoom.png'

import close from './close.png'

const Icon = ({ name, ...otherProps }) => {
  switch (name) {
    case 'Select':
      return <Image source={select} alt="select" {...otherProps} />
    case 'Line':
      return <Image source={line} alt="line" {...otherProps} />
    case 'Circle':
      return <Image source={circle} alt="circle" {...otherProps} />
    case 'Ellipse':
      return <Image source={ellipse} alt="ellipse" {...otherProps} />
    case 'Text':
      return <Image source={text} alt="text" {...otherProps} />
    case 'Delete':
      return <Image source={del} alt="delete" {...otherProps} />
    case 'Clone':
      return <Image source={clone} alt="clone" {...otherProps} />
    case 'Path':
      return <Image source={path} alt="path" {...otherProps} />
    case 'Square':
      return <Image source={square} alt="square" {...otherProps} />
    case 'Rect':
      return <Image source={rect} alt="rect" {...otherProps} />
    case 'Close':
      return <Image source={close} alt="close" {...otherProps} />
    case 'Save':
      return <Image source={save} alt="save" {...otherProps} />
    case 'Undo':
      return <Image source={undo} alt="undo" {...otherProps} />
    case 'Redo':
      return <Image source={redo} alt="redo" {...otherProps} />
    case 'Group':
      return <Image source={group} alt="group" {...otherProps} />
    case 'Ungroup':
      return <Image source={ungroup} alt="group" {...otherProps} />
    case 'AlignBottom':
      return <Image source={alignBottom} alt="group" {...otherProps} />
    case 'AlignCenter':
      return <Image source={alignCenter} alt="group" {...otherProps} />
    case 'AlignTop':
      return <Image source={alignTop} alt="group" {...otherProps} />
    case 'AlignLeft':
      return <Image source={alignLeft} alt="group" {...otherProps} />
    case 'AlignRight':
      return <Image source={alignRight} alt="group" {...otherProps} />
    case 'AlignMiddle':
      return <Image source={alignMiddle} alt="group" {...otherProps} />
    case 'Align':
      return <Image source={align} alt="group" {...otherProps} />
    case 'MoveBottom':
      return <Image source={moveBottom} alt="group" {...otherProps} />
    case 'MoveTop':
      return <Image source={moveTop} alt="group" {...otherProps} />
    case 'Bold':
      return <Image source={bold} alt="group" {...otherProps} />
    case 'Italic':
      return <Image source={italic} alt="group" {...otherProps} />
    case 'Fill':
      return <Image source={fill} alt="group" {...otherProps} />
    case 'Stroke':
      return <Image source={stroke} alt="group" {...otherProps} />
    case 'FontSize':
      return <Image source={fontSize} alt="group" {...otherProps} />
    case 'NoColor':
      return <Image source={noColor} alt="group" {...otherProps} />
    case 'Zoom':
      return <Image source={zoom} alt="group" {...otherProps} />
    default:
      return <Image source={group} alt="group" {...otherProps} />
  }
}

// Properties restriction
Icon.propTypes = { name: PropTypes.string.isRequired }

export default Icon
