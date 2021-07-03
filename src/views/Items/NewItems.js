import React, { useState } from 'react'
import { 
    CButton,
    CCard,
    CCardBody, 
    CCardHeader, 
    CCol, 
    CForm, 
    CFormGroup, 
    CInput, 
    CLabel, 
    CRow, 
    CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cifAU,cilImagePlus } from '@coreui/icons';


export const NewItems = () => {
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
            <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >Items Name</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="items name" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="ccmonth">Band</CLabel>
                    <CSelect custom name="band" id="ccmonth"  onChange={handleValue}>
                      <option value="1">Band</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="ccmonth"> Category </CLabel>
                    <CSelect custom name="category" id="ccmonth" required onChange={handleValue}>
                      <option value="1">-Seclect-</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
            <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >Items Name</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="items name" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="ccmonth">Band</CLabel>
                    <CSelect custom name="band" id="ccmonth"  onChange={handleValue}>
                      <option value="1">Band</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="ccmonth"> Category </CLabel>
                    <CSelect custom name="category" id="ccmonth" required onChange={handleValue}>
                      <option value="1">-Seclect-</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
            <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >Items Name</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="items name" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="ccmonth">Band</CLabel>
                    <CSelect custom name="band" id="ccmonth"  onChange={handleValue}>
                      <option value="1">Band</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="ccmonth"> Category </CLabel>
                    <CSelect custom name="category" id="ccmonth" required onChange={handleValue}>
                      <option value="1">-Seclect-</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="city">City</CLabel>
                    <CInput id="city" placeholder="Enter your city" />
                   
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                <CFormGroup>
                <CLabel for="file">  <CIcon name="cilImagePlus"></CIcon></CLabel>
                <CInput id="file" placeholder="Enter your city" type="file" style={{display:"none"}}/>
              
                </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="vat">VAT</CLabel>
                <CInput id="vat" placeholder="DE1234567890" />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="street">Street</CLabel>
                <CInput id="street" placeholder="Enter street name" />
              </CFormGroup>
              
              <CFormGroup>
                <CLabel htmlFor="country">Country</CLabel>
                <CInput id="country" placeholder="Country name" />
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
