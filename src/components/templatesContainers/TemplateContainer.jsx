import React, { useState } from 'react'
import styled from 'styled-components'

import ControlPanel from '../controlPanel/ControlPanel'
import Modal from '../modal/Modal'
import CMSModal from '../modal/CMSModal'
import { buildJSON } from '../../utils/utils'

const TemplateContain = styled.div`
  position: relative;
  :hover {
    .control-panel {
      opacity: 1;
    }
  }
  .up-container {
    display: ${props => (props.idx === 0 ? 'none' : 'default')};
  }
  .down-container {
    display: ${props => (props.selectedTemplateLength === props.idx ? 'none' : 'default')};
  }
`
const TemplateContainer = props => {
  const { idx, screen, selectedTemplateLength, template, updateSelectedTemplates, giveSelectedTemplateData } = props
  const Component = template.component
  const [displayForm, setDisplayForm] = useState(false)
  const [data, setData] = useState(template.data)
  const [galleryFormRender, setGalleryFormRender] = useState({ firstRender: true, galleries: [] })

  const buildAllGalleryFields = numberOfGalleries => {
    let createdGalleries = []
    for (let i = 0; i < numberOfGalleries; i++) {
      createdGalleries.push({})
    }
    setGalleryFormRender({ firstRender: false, galleries: createdGalleries })
  }

  const updateFormData = updatedData => {
    let newFormData = { ...data }
    newFormData[updatedData.name] = { value: updatedData.value, error: updatedData.error }
    setData(newFormData)
  }
  // modal functions
  const toggleDisplayForm = () => {
    setDisplayForm(!displayForm)
  }
  const handleClick = () => {
    toggleDisplayForm()
  }
  const closeModal = (e, value) => {
    e.stopPropagation()
    if (value === 'close') {
      toggleDisplayForm()
      updateTemplateData(data)
    }
  }
  // end modal functions

  const updateTemplateData = data => {
    giveSelectedTemplateData(idx, data)
  }
  let templateData = template.tempName === 'Gallery Template' ? buildJSON(template.data) : template.data
  const CmsModal = () => {
    return (
      <CMSModal
        closeModal={closeModal}
        tempName={template.tempName}
        formData={data}
        formProps={template.modal}
        updateFormData={updateFormData}
        updateTemplateData={updateTemplateData}
        buildAllGalleryFields={buildAllGalleryFields}
        galleryFormRender={galleryFormRender}

      />
    )
  }
  return (
    <TemplateContain className={'template-container'} selectedTemplateLength={selectedTemplateLength} idx={idx}>
      <Component
        templateData={templateData}
      />
      <ControlPanel
        updateSelectedTemplates={updateSelectedTemplates}
        handleClick={handleClick}
        idx={idx}
        modal={template.modal}
      />
      {displayForm && <Modal displayModal={displayForm} modal={CmsModal} closeModal={closeModal} screen={screen} />}
    </TemplateContain>
  )
}

export default TemplateContainer
