import React from 'react'
import { PropTypes } from 'prop-types'
import FormEntry from '../modal/FormEntry'
const ButtonTextModal = props => {
  const { updateFormData, data } = props
  return (
    <>
      <FormEntry
        type={'checkbox'}
        label={'gray background'}
        name={'backgroundDark'}
        error={null}
        updateFormData={updateFormData}
        value={data['backgroundDark'] ? data['backgroundDark'].value : false}
      />
      <FormEntry
        type={'checkbox'}
        label={'Additional Padding Top & Bottom'}
        name={'addPadding'}
        error={null}
        updateFormData={updateFormData}
        value={data['addPadding'] ? data['addPadding'].value : false}
      />
      <FormEntry
        type={'input'}
        label={'Call To Action Text'}
        name={'callToAction'}
        value={data['callToAction'] ? data['callToAction'].value : ''}
        error={data['callToAction'] ? data['callToAction'].error : null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Button Text'}
        name={'buttonText'}
        value={data['buttonText'] ? data['buttonText'].value : ''}
        error={data['buttonText'] ? data['buttonText'].error : null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'URL for Button'}
        name={'href'}
        value={data['href'] ? data['href'].value : ''}
        error={data['href'] ? data['href'].error : null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Button Aria Label'}
        name={'ariaLabel'}
        value={data['ariaLabel'] ? data['ariaLabel'].value : ''}
        error={data['ariaLabel'] ? data['ariaLabel'].error : null}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}

ButtonTextModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func
}

export default ButtonTextModal
