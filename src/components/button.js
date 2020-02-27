import React from "react"

const Button = (props) => {
  const handler = (e, blah) => {
    e.preventDefault()
    console.log(blah)
  }
  return (
    <div>
      <button onClick={event => handler(event, "is clicked")} className="govuk-button" data-module="govuk-button">
        {props.text}
      </button>
    </div>
  )
}

export default Button