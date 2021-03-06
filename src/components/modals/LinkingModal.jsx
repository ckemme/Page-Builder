import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import FormEntry from '../modal/FormEntry'
import Button from '../modal/parts/Button'

const SubHeader = styled.p`
  width: 100%;
  text-align: center;
`
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 13px;
`
const Directions = styled.p`
  width: 100%;
  padding: 5px;
  margin-bottom: 0;
  font-weight: bold;
`
const IdContainer = styled.div`
  width: 165px;
  margin: 10px;
  h4 {
    margin: 5px 0;
  }
`
const LinkingModal = props => {
  const { updateFormData, data, selectedTemplates, updateTemplateData } = props
  const [pTags, setPTags] = useState(data.groups ? Object.keys(data.groups[0]) : [0])
  const [links, setLinks] = useState([0])

useEffect(() => {
  let currentLinks = []
  if (data.groups && data.groups.length > 1) {
    data.groups.forEach((group, idx) => {
      if (data.groups.indexOf(group) > 0) {
        currentLinks.push(idx - 1)
        setLinks(currentLinks)
      }
    })
  }
}, [data.groups])

  const addRemovePTags = (addParagraph, idx) => {
    let createdParagraphs = [...pTags]
    if (addParagraph) {
      createdParagraphs.push(createdParagraphs.length)
    } else {
      createdParagraphs.pop()
      let incomingDataClone = { ...data }
      if (incomingDataClone.groups) {
        let remove = incomingDataClone.groups[0]
        let paragraph = 'paragraph' + idx
        delete remove[paragraph]
        updateTemplateData(incomingDataClone)
      }
    }
    setPTags(createdParagraphs)
  }

  const buildLinks = (addLink, idx) => {
    let createdLinks = [...links]
    if (addLink) {
      createdLinks.push(createdLinks.length)
    } else {
      createdLinks.pop()
      let incomingDataClone = { ...data }
      if (incomingDataClone.groups) {
        incomingDataClone.groups.splice(idx, 1)
        updateTemplateData(incomingDataClone)
      }
    }
    setLinks(createdLinks)
  }

  let groups = [
    { label: 'Id of template you wish the link to', name: 'link', type: 'input' },
    { label: 'Link Aria Label', name: 'ariaLabel', type: 'input' },
    { label: 'Anchor Link Title', name: 'anchorTitle', type: 'input' }
  ]

  const createLinks = idx => {
    return (
      <Fragment key={idx}>
        <SubHeader>Link {idx + 1}</SubHeader>
        {groups.map(link => {
          let valueExists = data.groups && data.groups[idx + 1] && data.groups[idx + 1][link.name]
          return (
            <Fragment key={link.name + idx}>
              <FormEntry
                type={link.name}
                label={link.label}
                name={link.name}
                group={idx + 2}
                error={valueExists ? data.groups[idx + 1][link.name].error : null}
                value={valueExists ? data.groups[idx + 1][link.name].value : ''}
                updateFormData={updateFormData}
                required
              />
            </Fragment>
          )
        })}
        {links.length > 1 && <Button handleClick={() => buildLinks(false, (idx + 1))} buttonText={'Remove'} />}
      </Fragment>
    )
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
        label={'Image'}
        name={'image'}
        error={data['image'] ? data['image'].error : null}
        value={data['image'] ? data['image'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'altText'}
        error={data['altText'] ? data['altText'].error : null}
        value={data['altText'] ? data['altText'].value : ''}
        updateFormData={updateFormData}
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
      {pTags.map((paragraph, idx) => {
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
            {pTags.length > 1 && <Button handleClick={() => addRemovePTags(false, idx)} buttonText={'Remove'} />}
          </Fragment>
        )
      })}
      <ButtonContainer>
        <Button handleClick={() => addRemovePTags(true)} buttonText={'Add Paragraph'} />
      </ButtonContainer>
      {/* MORE LINKS CAN BE ADDED */}
      <Options>
        <Directions>
          Copy and paste the id of the template you want to link to. The number at the end represents the order of the
          templates (first to last)
        </Directions>
        {selectedTemplates.map((template, idx) => {
          let id = template.id + '-' + (idx + 1)
          return (
            <IdContainer key={idx}>
              <h4>{template.tempName}</h4>
              <p>{'ID: #' + id}</p>
            </IdContainer>
          )
        })}
      </Options>
      {links.map((link, idx) => createLinks(idx))}
      {links.length < 6 && <ButtonContainer>
        <Button handleClick={() => buildLinks(true)} buttonText={'Add Link'} />
      </ButtonContainer>}
    </>
  )
}

LinkingModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func,
  selectedTemplates: PropTypes.array
}

export default LinkingModal
