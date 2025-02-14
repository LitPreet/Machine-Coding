import React from 'react'

const PropQues = (props:any) => {
    const {type, text} = props
    const Component = type
  return (
    <Component>
      {text}
    </Component>
  )
}

export default PropQues
