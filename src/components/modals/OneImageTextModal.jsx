import React from 'react'
import FormEntry from '../modal/FormEntry'
const OneImageTextModal = props => {
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
      <FormEntry type={'input'} label={'Image'} name={'image'} error={null} updateFormData={updateFormData} required />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'image-alt-text'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry type={'input'} label={'Title'} name={'title'} error={null} updateFormData={updateFormData} required />
      {/* MORE PARAGRAPHS TO BE ADDED */}
      <FormEntry
        type={'input'}
        label={'Paragraph'}
        name={'paragraph'}
        error={null}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}
export default OneImageTextModal