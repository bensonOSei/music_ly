import { LordIcons } from "../../icons/LordIcons"
import PropTypes from 'prop-types'
export const SuccessPrompt = ({ message }) => {
  return (
    <div className="flex flex-col items-center">
      <LordIcons icon="lupuorrc" size={'250'} stroke={50} colors={{
        primary: '#3e4991',
        secondary: '#ced5fe'
      }} />

      <h1 className="text-3xl font-bold text-center">
        {message}
      </h1>
    </div>
  )
}

SuccessPrompt.propTypes = {
  message: PropTypes.string.isRequired
}
