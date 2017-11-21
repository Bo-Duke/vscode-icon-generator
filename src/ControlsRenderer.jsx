import React from 'react'

const ControlsRenderer = props => {
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
  } = props

  return (
    <div className="control-form">
      <div>
        <label htmlFor="separate">Separate the two foregrounds? </label>
        <input
          value={separateForeground}
          onChange={onSeparateForeground}
          type="checkbox"
          name="separate"
        />
      </div>
      <div>
        Foreground :
        <input value={foreground} onChange={onForegroundChange} type="color" />
      </div>
      {separateForeground ? (
        <div>
          Foreground 2 :
          <input
            value={foreground2}
            onChange={onForeground2Change}
            type="color"
          />
        </div>
      ) : (
        ''
      )}
      <div>
        Background :
        <input value={background} onChange={onBackgroundChange} type="color" />
      </div>
      Size:
      <input
        value={size}
        onChange={onSizeChange}
        type="range"
        min="80"
        max="500"
      />
      <button onClick={onRandom}>Random</button>
    </div>
  )
}

export default ControlsRenderer
