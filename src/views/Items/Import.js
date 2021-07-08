import React from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CForm,
  CInputFile,
  CLabel,
  CRow,
} from '@coreui/react'
import { NavLink } from 'react-router-dom';
import usersData from '../users/UsersData'
import { CSVLink, CSVDownload } from "react-csv"

export const Import = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log("data",data)
    console.log(e.target,"hi")
}
    return (
        <>
        <CRow>
        
        <CCol>
          <CCard>
            <CCardHeader>
            Please Enter Valid Data
           
            </CCardHeader>
            <CCardBody>
            <CForm
        className=" needs-validation"
        noValidate
        onSubmit={handleSubmit}
        >
                <div>
                 <CRow>
                   <CCol md="1" offset="1">
                    <CLabel CFormLabel htmlFor="formFileLg">Import Items</CLabel>
                   </CCol>
                   <CCol md="10">
                   <CInputFile type="file" size="lg" id="formFileLg" />
                 <span style={{color:"red"}}>Note: File must be in CSV format.</span>
                   </CCol>
                   <CCol xs="12"  className="text-center">
        <CButton color="primary" type="submit" className="mb-2 ml-3">
          Submit form
        </CButton>
        <NavLink to="/dashboard"><CButton type="submit" color="primary" className="mb-2 ml-3" >Close</CButton></NavLink>
         </CCol>
         
                 </CRow>
                
                </div>
          </CForm> 
            </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
            
            <CRow >
              <CCol md="12" className="d-flex">
              <h4>Import Instructions</h4>
                <CSVLink data={usersData} className="ml-auto"><CButton color="primary">Dwonload Example Formate</CButton></CSVLink>
              </CCol>
            </CRow>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
            
              // scopedSlots = {{
              //   'status':
              //     (item)=>(
              //       <td>
              //         <CBadge color={getBadge(item.status)}>
              //           {item.status}
              //         </CBadge>
              //       </td>
              //     )
              // }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
    )

}
