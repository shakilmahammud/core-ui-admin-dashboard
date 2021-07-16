import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormGroup, CInput, CInputGroup, CLabel, CSelect } from '@coreui/react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'

export const NewUser = () => {
    const [getValue,setGetValue]=useState([])
    console.log(getValue)
    const handleGetValue=(e)=>{
        const newValue={...getValue}
        newValue[e.target.name] = e.target.value;
        setGetValue(newValue)
    }
    const handleSubmit = e => {
        e.preventDefault();
        const userName=getValue.userName;
        const mobileNumber=getValue.mobileNumber;
        const email=getValue.email;
        const role=getValue.role;
        const password=getValue.password;
        const confirmPassword=getValue.confirmPassword;
        if(getValue.length>=0){
            Swal.fire({
                icon: 'error',
                title: 'sorry your are no filap input filed',
                text: 'Please Give the Input Value',
                
              })
              return false;
        }
        if(userName !==undefined && mobileNumber!==undefined && email!==undefined && 
            role!==undefined && password!==undefined && confirmPassword!==undefined ){
            if(password!==confirmPassword){
                  Swal.fire(
                    {
                    icon: "error",
                     text: "password && confirm password not match try again",
                      confirmButtonText: 'Cancel',
                      timer: 1500,
                    }
          
                  )
                  return false;
            }
            Swal.fire(
                {
                  icon: "success",
                 text: " User Create Success",
                  confirmButtonText: 'Save',
                  timer: 1500,
                }
      
              )
            return false;   
        }
       
      Swal.fire(
                    {
                      icon: "error",
                     text: "user Create Faild check all value given or not",
                      confirmButtonText: 'Cancel',
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
              <CCol xs="5" className="offset-1">
              <CCol xs="12" className=" mb-3">
                <CLabel>User Name*</CLabel>
                    <CInputGroup>
                   <CInput type="text" name="userName" onChange={handleGetValue} required/>                    
                    </CInputGroup>
                  
                </CCol>
                <CCol xs="12" className=" mb-3">
                <CLabel>Mobile*</CLabel>
                    <CInputGroup>
                   <CInput type="text" name="mobileNumber" onChange={handleGetValue} required/>                    
                    </CInputGroup>
                  
                </CCol>
                <CCol xs="12" className=" mb-3">
                <CLabel>Email*</CLabel>
                    <CInputGroup>
                   <CInput type="email" name="email" onChange={handleGetValue} required/>                    
                    </CInputGroup>
                  
                </CCol>

                <CCol xs="12" className=" mb-3">
                <CLabel htmlFor="ccmonth">Role*</CLabel>
                    <CInputGroup>
                    
                    <CSelect custom name="role" id="ccmonth"  onChange={handleGetValue} required>
                      <option value="">-select-</option>
                      <option value="Sales">Sales</option>
                    </CSelect>                    
                    </CInputGroup>
                  
                </CCol>
                <CCol xs="12" className=" mb-3">
                <CLabel>Password*</CLabel>
                    <CInputGroup>
                   <CInput type="password" name="password" onChange={handleGetValue} required/>                    
                    </CInputGroup>
                  
                </CCol>
                <CCol xs="12" className=" mb-3">
                <CLabel>Confirm Password*</CLabel>
                    <CInputGroup>
                   <CInput type="password" name="confirmPassword" onChange={handleGetValue} required/>                    
                    </CInputGroup>
                  
                </CCol>
             </CCol>

                <CCol xs="5" className="offset-1">
                <CCol xs="12" className=" mb-3">
                <CLabel for="file"> Profile Picture <CIcon name="cilImagePlus"></CIcon></CLabel>
                    <CInputGroup>
                   
                  <CInput id="file" name="file" placeholder="Enter your city" type="file" className="borderNone" onChange={handleGetValue}/> 
                                 
                    </CInputGroup>
                     
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTqxyedFvLTDyTtg2CYCFTPUsj-Bo5ARrFY2MWhVrbXMrIwDLDyhws2G4mpjcfij9ZnhQ&usqp=CAU" alt="profile-Pic"/>
                </CCol>
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
