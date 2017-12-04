import React from 'react'
import ReactDOMServer from 'react-dom/server'
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
        <div className="header">VSCode icon generator</div>
        <div>
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
          <a
            className="download-button"
            href-lang="image/svg+xml"
            href={`data:image/svg+xml;base64,${new Buffer(
              ReactDOMServer.renderToStaticMarkup(
                <IconRenderer
                  background={this.state.background}
                  foreground={this.state.foreground}
                  foreground2={this.state.foreground2}
                  size={this.state.size}
                />,
              ),
            ).toString('base64')}`}
            download="icon.svg"
            title="icon.svg"
          >
            <span>Download SVG icon</span>
          </a>
        </div>
        <div className="icon-renderer">
          <IconRenderer
            background={this.state.background}
            foreground={this.state.foreground}
            foreground2={this.state.foreground2}
            size={this.state.size}
          />
        </div>
      </div>
    )
  }
}

export default App
