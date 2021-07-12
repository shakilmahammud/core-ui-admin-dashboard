import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CForm, CFormGroup, CInput, CLabel, CRow } from '@coreui/react'
import React, { useState } from 'react'

export const NewCustomer = () => {
    const [validated, setValidated] = useState(false)
    const [inpuValue,setInpuValue] = useState([])
    console.log(inpuValue)
    const handleValue=e=>{
            const newValue={...inpuValue}
            newValue[e.target.name] = e.target.value;
            setInpuValue(newValue)
    }
    const handleSubmit = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log("data",data)
        console.log(e.target,"hi")
    }
    return (
        <>
         <CRow>
         <CCol xs="12" sm="6" md="12">
         <CForm
        className=" needs-validation"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        >
          <CCard>
            <CCardHeader>
              Company
              <small> Form</small>
            </CCardHeader>
            <CCardBody>
            <CFormGroup row className="my-0">
            <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >Customer Name*</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="items name" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >Opening Balance</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="items name" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >Mobile</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="Alert Quantity" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >Country</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="Alert Quantity" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >Email</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="Alert Quantity" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >State</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="Alert Quantity" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >Phone</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="Alert Quantity" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >City</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="Alert Quantity" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >Brand</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="Alert Quantity" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >Postcode</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="Alert Quantity" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >Model</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="Alert Quantity" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >Address</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="Alert Quantity" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >Plate No</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="Alert Quantity" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
            <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >VIN No</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="items name" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                </CFormGroup>
            </CCardBody>
          </CCard>
          <CCol xs="12">
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
         </CCol>
          </CForm>  
        </CCol>
         </CRow> 
  </>
    )
}
