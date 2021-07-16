import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormGroup, CInput, CInputGroup, CLabel, CSelect } from '@coreui/react'
import { get } from 'enzyme/build/configuration'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'

export const NewState = () => {
    const [getValue,setGetValue]=useState([])
    console.log(getValue)
    const handleGetValue=(e)=>{
        const newValue={...getValue}
        newValue[e.target.name] = e.target.value;
        setGetValue(newValue)
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(getValue.length>=0){
            Swal.fire({
                icon: 'error',
                title: 'sorry your are no filap input filed',
                text: 'Please Give the Input Value',
                
              })
              return false;
        }
        if(getValue.state==""||getValue.country==""){
            Swal.fire({
                icon: 'error',
                title: 'sorry  country or state Value empty',
                text: 'Please Give the Input Value',
              })
              return false;
        }
       
        Swal.fire(
          {
            icon: "success",
            html: `your State:${getValue.state}<br/> & <br/> Country: ${getValue.country}`,
            confirmButtonText: 'Save',
            timer: 1500,
          }

        )
    }
    return (
        <>
           <CCard>
           <CCardHeader>
           Please Enter Valid Data
            </CCardHeader>
               <CCardBody>
               <CForm
               onSubmit={handleSubmit}
               >
               <CFormGroup row className="my-0 ">
               <CCol xs="6" className="offset-1 mb-3">
                <CLabel>State Name*</CLabel>
                    <CInputGroup>
                   <CInput teype="text" name="state" onChange={handleGetValue}/>                    
                    </CInputGroup>
                  
                </CCol>
                <CCol xs="6" className="offset-1 mb-3">
                <CLabel htmlFor="ccmonth">country</CLabel>
                    <CInputGroup>
                    
                    <CSelect custom name="country" id="ccmonth"  onChange={handleGetValue}>
                      <option value="">-select-</option>
                      <option value="bangladesh">Bangladesh</option>
                      <option value="Us">Us</option>
                    </CSelect>                    
                    </CInputGroup>
                  
                </CCol>
                <CCol xs="12"  className="text-center mt-5">
                        <CButton color="primary" type="submit" className="mb-2 ml-3">
                        Save
                        </CButton>
                        <NavLink to="/dashboard"><CButton type="submit" color="primary" className="mb-2 ml-3" >Close</CButton></NavLink>
                </CCol>
                </CFormGroup>
                </CForm>
               </CCardBody>
           </CCard> 
        </>
    )
}
