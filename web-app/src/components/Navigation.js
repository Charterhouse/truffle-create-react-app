import React from 'react'

export const Navigation = ({ location, children }) => {
  const filtered = React.Children.toArray(children).filter(
    child => child.props.to !== location.pathname
  )
  const updatedChildren = React.Children.map(filtered, (child, index) => {
    return index === 0
      ? child
      : React.cloneElement(child, {style: {marginLeft: '20px'}})
  })

  return (
    <div style={{marginTop: '20px'}}>
      { updatedChildren }
    </div>
  )
}
