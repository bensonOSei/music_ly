import PropTypes from 'prop-types'

export const ConfirmPrompt = ({ message, onAccept, onDecline}) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="text-lg font-semibold">{message}</div>

      <div className="flex gap-1 items-center justify-center">
        <button className="p-2 px-5 bg-primary-500 rounded-md hover:bg-primary-400 text-white" onClick={onAccept}>Yes</button>
        <button className="p-2 px-5 bg-primary-500 rounded-md hover:bg-primary-400 text-white" onClick={onDecline}>No</button>
      </div>
    </div>
  )
}

ConfirmPrompt.propTypes = {
  message: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
}
