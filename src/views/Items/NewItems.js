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
    CSelect,
    CTextarea
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
                    <CLabel htmlFor="ccmonth">Unit*</CLabel>
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
                    <CLabel htmlFor="postal-code" >SKU</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="items name" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >Alert Quantity</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="Alert Quantity" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
            <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >Lot Number</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="Lot Number" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="ccmonth">Date</CLabel>
                    <CInput id="date-input" type="date"/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="ccmonth"> Barcode </CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="Barcode" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="textarea-input">Description</CLabel>
                    <CTextarea id="textarea-input" placeholder="Enter your city" row="6" />
              
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                <CLabel for="file"> Select Image <CIcon name="cilImagePlus"></CIcon></CLabel>
                <CInput id="file" placeholder="Enter your city" type="file" className="borderNone"/>
              
                </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="vat">IMEI</CLabel>
                <CInput id="vat" placeholder="DE1234567890" />
              </CFormGroup>
              <CFormGroup row className="my-0">
               
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code" >Price*</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="items name" onChange={handleValue} defaultValue=""/>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                    <CLabel htmlFor="ccmonth">Tax</CLabel>
                    <CSelect custom name="band" id="ccmonth"  onChange={handleValue}>
                      <option value="1">-select-</option>
                      <option value="2">vat(0.00%)</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="disabled-input" >Purchase Price</CLabel>
                    <CInput class="form-control" name="itemsName" id="disabled-input" placeholder="Total Price with Tax Amount" disabled />
                  </CFormGroup>
                </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
            
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
                    <CLabel htmlFor="postal-code" >Items Name</CLabel>
                    <CInput name="itemsName" id="postal-code" placeholder="items name" onChange={handleValue} defaultValue=""/>
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
                    <CLabel htmlFor="city">Current Opening Stock</CLabel>
                    <CInput id="city" placeholder="Current Opening Stock" value="0" />
                   
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                <CFormGroup>
                <CLabel for="file"> New Opening Stock <CIcon name="cilPlus"></CIcon></CLabel>
                <CInput id="file" placeholder="+/-" type="text" />
              
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
