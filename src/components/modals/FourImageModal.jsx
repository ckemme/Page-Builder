import React from 'react'
import FormEntry from '../modal/FormEntry'
const FourImageModal = props => {
  const { updateFormData } = props
  return (
    <>
      <div>
        <input type={'checkbox'} name={'background'} />
        <label htmlFor={'background'}>Check for grey background</label>
      </div>
      <div>
        <input type={'checkbox'} name={'padding'} />
        <label htmlFor={'padding'}>Check for added padding</label>
      </div>
      <FormEntry
        type={'input'}
        label={'Section Title'}
        name={'section-title'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      {/* First Img Temp */}
      <FormEntry
        type={'input'}
        label={'Image 1'}
        name={'image'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'image-alt-text'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Subheader'}
        name={'subheader-text'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Body Text'}
        name={'body-text'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      {/* Second Img Temp */}
      <FormEntry
        type={'input'}
        label={'Image 2'}
        name={'image'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'image-alt-text'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Subheader'}
        name={'subheader-text'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Body Text'}
        name={'body-text'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      {/* Third Img Temp */}
      <FormEntry
        type={'input'}
        label={'Image 3'}
        name={'image'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'image-alt-text'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Subheader'}
        name={'subheader-text'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Body Text'}
        name={'body-text'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      {/* Fourth Img Temp */}
      <FormEntry
        type={'input'}
        label={'Image 4'}
        name={'image'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'image-alt-text'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Subheader'}
        name={'subheader-text'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Body Text'}
        name={'body-text'}
        error={null}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}
export default FourImageModal
