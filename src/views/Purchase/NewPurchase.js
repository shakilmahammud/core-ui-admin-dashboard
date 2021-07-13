import React from 'react'
import { CBadge, CButton, CCard, CCardBody, CCardHeader, CCol, CDataTable, CFormGroup, CInput, CInputGroup, CInputGroupPrepend, CInvalidFeedback, CLabel, CRow, CSelect, CValidFeedback } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import usersData from '../users/UsersData'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['Item Name','Qty', 'Purchase Price(৳ )', 'Tax %','Tax Amount(৳ )','Discount(%),'
,'Unit Cost(৳ )	','Total(৳ )','IMIE	','Action',
]
export const NewPurchase = () => {
    return (
        <>
     <CCard>
            {/* <CCardHeader>
              Form
              <small> validation feedback</small>
            </CCardHeader> */}
            <CCardBody>
        <CFormGroup row className="my-0 ">
                <CCol xs="4" className="offset-1 mb-3">
                <CLabel>Supplier Name*</CLabel>
                    <CInputGroup>

                    <CSelect custom size="md" name="selectLg" id="selectLg">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
          
                      <CInputGroupPrepend>
                        <CButton type="button" color="primary"><CIcon name="cilUserFollow" /></CButton>
                      </CInputGroupPrepend>
                    </CInputGroup>
                  
                </CCol>
                <CCol xs="4" className="offset-1 mb-3">
                <CLabel>Purchase Date *</CLabel>
                    <CInputGroup>
                    <CInputGroupPrepend>
                        <CButton type="button" color="primary"><CIcon name="cilCalendar" /></CButton>
                      </CInputGroupPrepend>
                      <CInput id="input1-group2" name="input1-group2" placeholder="Date" type="date"/>
                    
                    </CInputGroup>
                  
                </CCol>
                <CCol xs="4" className="offset-1 mb-3">
                <CLabel>Status *</CLabel>
                    <CInputGroup>

                    <CSelect custom size="md" name="selectLg" id="selectLg">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                    </CInputGroup>
                  
                </CCol>
                <CCol xs="4" className="offset-1 mb-3">
                <CLabel>Reference No.</CLabel>
                    <CInputGroup>
                      <CInput id="input1-group2" name="input1-group2" placeholder="Reference No." />
                    
                    </CInputGroup>
                  
                </CCol>
              </CFormGroup>
              <CRow >
             <CCol xs="10" md="9" className="offset-1">
         
              <CFormGroup>
              <CInputGroup>
                    <CInputGroupPrepend>
                        <CButton type="button" color="primary"><CIcon name="cilBarcode" /></CButton>
                      </CInputGroupPrepend>
                      <CInput id="input1-group2" name="input1-group2" placeholder="Item name/Barcode/Itemcode" type="search"/>
                    
                    </CInputGroup>
              </CFormGroup>
              
         
        </CCol>
             </CRow>
              <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Combined All Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
            
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
   </CCardBody>
          </CCard>
        </>
    )
}
