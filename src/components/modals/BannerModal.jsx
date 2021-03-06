import React from 'react'
import { PropTypes } from 'prop-types'
import FormEntry from '../modal/FormEntry'

const BannerModal = props => {
  const { data, updateFormData } = props
  return (
    <>
      <FormEntry
        type={'checkbox'}
        label={'gray background'}
        name={'backgroundDark'}
        error={data['backgroundDark'] ? data['backgroundDark'].error : null}
        updateFormData={updateFormData}
        value={data['backgroundDark'] ? data['backgroundDark'].value : false}
      />
      <FormEntry
        type={'checkbox'}
        label={'Additional Padding Top & Bottom'}
        name={'addPadding'}
        error={data['addPadding'] ? data['addPadding'].error : null}
        updateFormData={updateFormData}
        value={data['addPadding'] ? data['addPadding'].value : false}
      />
      <FormEntry
        type={'input'}
        label={'Image'}
        name={'image'}
        error={data['image'] ? data['image'].error : null}
        updateFormData={updateFormData}
        value={data['image'] ? data['image'].value : ''}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'altText'}
        error={data['altText'] ? data['altText'].error : null}
        updateFormData={updateFormData}
        value={data['altText'] ? data['altText'].value : ''}
        required
      />
      <FormEntry
        type={'input'}
        label={'Title'}
        name={'title'}
        error={data['title'] ? data['title'].error : null}
        updateFormData={updateFormData}
        value={data['title'] ? data['title'].value : ''}
        required
      />
      <FormEntry
        type={'input'}
        label={'Subtitle'}
        name={'subheader'}
        error={data['subheader'] ? data['subheader'].error : null}
        updateFormData={updateFormData}
        value={data['subheader'] ? data['subheader'].value : ''}
        required
      />
    </>
  )
}

BannerModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func
}

export default BannerModal
