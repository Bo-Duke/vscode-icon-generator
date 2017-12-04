import React from 'react'
import { SketchPicker } from 'react-color'
import COLORS from './material-colors.json'

class ControlsRenderer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayBackground: false,
      displayForeground: false,
      displayForeground2: false,
    }
  }

  displayBackground = () => {
    this.setState({ displayBackground: !this.state.displayBackground })
  }

  displayForeground = () => {
    this.setState({ displayForeground: !this.state.displayForeground })
  }

  displayForeground2 = () => {
    this.setState({ displayForeground2: !this.state.displayForeground2 })
  }

  handleClose = () => {
    this.setState({
      displayBackground: false,
      displayForeground: false,
      displayForeground2: false,
    })
  }

  renderColorPicker = (
    color,
    isForeground,
    colorHandler,
    clickHandler,
    displayed,
  ) => {
    return (
      <div>
        <div className="color-button" onClick={clickHandler}>
          <div
            className="color-button-inside"
            style={{
              background: `${color}`,
            }}
          />
        </div>
        {displayed ? (
          <div className="color-picker">
            <div className="color-picker-close" onClick={this.handleClose} />
            <SketchPicker
              presetColors={COLORS.map(
                color => color[isForeground ? 'foreground' : 'background'],
              )}
              color={color}
              onChange={colorHandler}
              disableAlpha
            />
          </div>
        ) : null}
      </div>
    )
  }

  render() {
    const {
      onForegroundChange,
      onForeground2Change,
      onBackgroundChange,
      onSizeChange,
      onSeparateForeground,
      onRandom,
      background,
      foreground,
      foreground2,
      separateForeground,
      size,
    } = this.props

    return (
      <div className="control-form">
        <div>
          <label htmlFor="separate">Separate foregrounds? </label>
          <input
            value={separateForeground}
            onChange={onSeparateForeground}
            type="checkbox"
            name="separate"
          />
        </div>
        <div className="color-picker-label">
          Foreground :
          {this.renderColorPicker(
            foreground,
            true,
            onForegroundChange,
            this.displayForeground,
            this.state.displayForeground,
          )}
        </div>
        {separateForeground ? (
          <div className="color-picker-label">
            Foreground 2 :
            {this.renderColorPicker(
              foreground2,
              true,
              onForeground2Change,
              this.displayForeground2,
              this.state.displayForeground2,
            )}
          </div>
        ) : (
          ''
        )}
        <div className="color-picker-label">
          Background :
          {this.renderColorPicker(
            background,
            false,
            onBackgroundChange,
            this.displayBackground,
            this.state.displayBackground,
          )}
        </div>
        Size:
        <input
          value={size}
          onChange={onSizeChange}
          type="range"
          min="80"
          max="500"
        />
        <div className="random-button">
          <button onClick={onRandom}>Random</button>
        </div>
      </div>
    )
  }
}

export default ControlsRenderer
