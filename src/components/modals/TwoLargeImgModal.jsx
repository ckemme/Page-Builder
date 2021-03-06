import React, { useState, Fragment, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import FormEntry from '../modal/FormEntry'
import Button from '../modal/parts/Button'

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
const Section = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
`
const TwoLargeImgModal = props => {
  const { updateFormData, data, updateTemplateData } = props
  const [pTags, setPTags] = useState([[0], [0]])

  useEffect(
    () => {
      let clonedPtags = [...pTags]
      if (data.groups && data.groups.length > 0) {
        data.groups.forEach((group, idx) => {
          let groupPosition = idx
          let groupsArray = Object.keys(group)
          if (Object.keys(group).length > 0) {
            groupsArray.forEach((input, idx) => {
              let groupArray = clonedPtags[groupPosition]
              groupArray[idx] = idx
            })
          }
        })
        setPTags(clonedPtags)
      }
    },
    [data.groups, pTags]
  )

  const addRemovePTags = (addParagraph, index, idx) => {
    let createdParagraphs = [...pTags]
    if (addParagraph) {
      createdParagraphs[index].push(createdParagraphs[index].length)
    } else {
      createdParagraphs[index].splice(idx, 1)
      let incomingDataClone = { ...data }
      if (incomingDataClone.groups) {
        let remove = incomingDataClone.groups[index]
        let paragraph = 'paragraph' + idx
        delete remove[paragraph]
        updateTemplateData(incomingDataClone)
      }
    }
    setPTags(createdParagraphs)
  }

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
        label={'Title'}
        name={'title'}
        error={data['title'] ? data['title'].error : null}
        value={data['title'] ? data['title'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <Section>First Image Form</Section>
      {/* First Img Temp */}
      <FormEntry
        type={'input'}
        label={'Image 1'}
        name={'image1'}
        error={data['image1'] ? data['image1'].error : null}
        value={data['image1'] ? data['image1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'altText1'}
        error={data['altText1'] ? data['altText1'].error : null}
        value={data['altText1'] ? data['altText1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Sub Header'}
        name={'subheader1'}
        error={data['subheader1'] ? data['subheader1'].error : null}
        value={data['subheader1'] ? data['subheader1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      {pTags[0].map(idx => {
        let valueExists = data.groups && data.groups[0] && data.groups[0]['paragraph' + idx]
        return (
          <Fragment key={idx}>
            <FormEntry
              textArea
              type={'text'}
              label={'Paragraph ' + (idx + 1)}
              name={'paragraph' + idx}
              group={1}
              error={valueExists ? data.groups[0]['paragraph' + idx].error : null}
              value={valueExists ? data.groups[0]['paragraph' + idx].value : ''}
              updateFormData={updateFormData}
              required
            />
            {pTags[0].length > 1 && <Button handleClick={() => addRemovePTags(false, 0, idx)} buttonText={'Remove'} />}
          </Fragment>
        )
      })}
      <ButtonContainer>
        <Button handleClick={() => addRemovePTags(true, 0)} buttonText={'Add Paragraph'} />
      </ButtonContainer>
      <Section>Second Image Form</Section>
      {/* Second Img Temp */}
      <FormEntry
        type={'input'}
        label={'Image 2'}
        name={'image2'}
        error={data['image2'] ? data['image2'].error : null}
        value={data['image2'] ? data['image2'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'altText2'}
        error={data['altText2'] ? data['altText2'].error : null}
        value={data['altText2'] ? data['altText2'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Sub Header'}
        name={'subheader2'}
        error={data['subheader2'] ? data['subheader2'].error : null}
        value={data['subheader2'] ? data['subheader2'].value : ''}
        updateFormData={updateFormData}
        required
      />
      {pTags[1].map(idx => {
        let valueExists = data.groups && data.groups[1] && data.groups[1]['paragraph' + idx]
        return (
          <Fragment key={idx}>
            <FormEntry
              textArea
              type={'text'}
              label={'Paragraph ' + (idx + 1)}
              name={'paragraph' + idx}
              group={2}
              error={valueExists ? data.groups[1]['paragraph' + idx].error : null}
              value={valueExists ? data.groups[1]['paragraph' + idx].value : ''}
              updateFormData={updateFormData}
              required
            />
            {pTags[1].length > 1 && <Button handleClick={() => addRemovePTags(false, 1, idx)} buttonText={'Remove'} />}
          </Fragment>
        )
      })}
      <ButtonContainer>
        <Button handleClick={() => addRemovePTags(true, 1)} buttonText={'Add Paragraph'} />
      </ButtonContainer>
    </>
  )
}

TwoLargeImgModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func
}

export default TwoLargeImgModal
