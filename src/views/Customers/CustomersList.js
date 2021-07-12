import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React, { useState } from 'react'
import { ExpensesList } from '../Expenses/ExpensesList'
import SuppliesList from '../Suppliers/SuppliesList'

export const CustomersList = () => {
     const [visibles, setVisible] = useState(false)
    return (
        <>
        <SuppliesList/>
         <CButton onClick={() => setVisible(!visibles)} color="primary">
        Launch demo modal
      </CButton>
            <CModal
  className={`${visibles?"show d-block position-static postionsize":"d-block position-static"}`}
  backdrop={false}
  keyboard={false}
  portal={false}
  scrollable
  visible={visibles}
  onDismiss={() => setVisible(false)}
>
  <CModalHeader>
    <CModalTitle>Modal title</CModalTitle>
  </CModalHeader>
  <CModalBody>Modal body text goes here.</CModalBody>
  <CModalFooter>
    <CButton color="secondary">Close</CButton>
    <CButton color="primary">Save changes</CButton>
  </CModalFooter>
</CModal>
       
        </>
    )
}
