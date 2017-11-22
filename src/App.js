import React from 'react'
import IconRenderer from './IconRenderer'
import ControlsRenderer from './ControlsRenderer'
import COLORS from './material-colors.json'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    const background = this.randomColor().background
    const foreground = this.randomColor().foreground
    this.state = {
      background,
      foreground,
      foreground2: foreground,
      size: 200,
      separateForeground: false,
    }
  }

  randomColor = () => {
    const randomNum = Math.floor(Math.random() * COLORS.length)
    return COLORS[randomNum]
  }

  onRandom = () => {
    const background = this.randomColor().background
    const foreground = this.randomColor().foreground
    this.setState({
      background,
      foreground,
      foreground2: this.state.separateForeground
        ? this.randomColor().foreground
        : foreground,
    })
  }

  onSizeChange = size => {
    this.setState({
      size: size.target.value,
    })
  }

  onSeparateForeground = () => {
    this.setState({
      separateForeground: !this.state.separateForeground,
    })
  }

  onBackgroundChange = color => {
    this.setState({
      background: color.hex,
    })
  }

  onForegroundChange = color => {
    this.setState({
      foreground: color.hex,
    })

    if (!this.state.separateForeground) {
      this.setState({
        foreground2: color.hex,
      })
    }
  }

  onForeground2Change = color => {
    this.setState({
      foreground2: color.hex,
    })
  }

  render() {
    return (
      <div className="app-wrapper">
        <ControlsRenderer
          onForegroundChange={this.onForegroundChange}
          onBackgroundChange={this.onBackgroundChange}
          onForeground2Change={this.onForeground2Change}
          onSizeChange={this.onSizeChange}
          onSeparateForeground={this.onSeparateForeground}
          onRandom={this.onRandom}
          background={this.state.background}
          foreground={this.state.foreground}
          foreground2={this.state.foreground2}
          separateForeground={this.state.separateForeground}
          size={this.state.size}
        />
        <IconRenderer
          background={this.state.background}
          foreground={this.state.foreground}
          foreground2={this.state.foreground2}
          size={this.state.size}
        />
      </div>
    )
  }
}

export default App
