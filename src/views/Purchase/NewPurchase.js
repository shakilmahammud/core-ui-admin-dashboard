import React, { useState } from 'react'
import { CBadge, CButton, CCard, CCardBody, CCardHeader, CCol, CDataTable, CFormGroup, CInput, CInputGroup, CInputGroupPrepend, CInvalidFeedback, CLabel, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CSelect, CTextarea, CValidFeedback } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import usersData from '../users/UsersData'
import { NavLink } from 'react-router-dom'

// const getBadge = status => {
//   switch (status) {
//     case 'Active': return 'success'
//     case 'Inactive': return 'secondary'
//     case 'Pending': return 'warning'
//     case 'Banned': return 'danger'
//     default: return 'primary'
//   }
// }
const fields = ['Item Name','Qty', 'Purchase Price(৳ )', 'Tax %','Tax Amount(৳ )','Discount(%),'
,'Unit Cost(৳ )	','Total(৳ )','IMIE	','Action',
]
export const NewPurchase = ({btnName}) => {
  const [modalShow,setModalShow]=useState(false)
  const [visible, setVisible] = useState(false)
    return (
        <>
     <CCard className="mainContainer">
     <CModal
            className={`${visible?"show postionset":""}`}
            backdrop={false}
            keyboard={false}
            portal={false}
            scrollable
            visible={visible}
            onDismiss={() => setVisible(false)}
          >
            <CModalHeader>
              <CModalTitle>Modal title</CModalTitle>
            </CModalHeader>
            <CModalBody>Modal body text goes here.</CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisible(false)}>Close</CButton>
              <CButton color="primary">Save changes</CButton>
            </CModalFooter>
          </CModal>
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
          
                      <CInputGroupPrepend onClick={() => setVisible(!visible)}>
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
        <table className="table table-bordered">
            <thead style={{background:"#3f1dfb",color:"#fff"}}>
              <tr>
                <th scope="col" style={{borderRight:"2px solid #ffff"}}>Item Name</th>
                <th scope="col" style={{borderRight:"2px solid #ffff"}}>Qty</th>
                <th scope="col" style={{borderRight:"2px solid #ffff"}}>Purchase Price(৳ )</th>
                <th scope="col" style={{borderRight:"2px solid #ffff"}}>Tax %</th>
                <th scope="col" style={{borderRight:"2px solid #ffff"}}>Tax Amount(৳ )</th>
                <th scope="col" style={{borderRight:"2px solid #ffff"}}>Discount(%)</th>
                <th scope="col" style={{borderRight:"2px solid #ffff"}}>Unit Cost(৳ )</th>
                <th scope="col" style={{borderRight:"2px solid #ffff"}}>Total(৳ )</th>
                <th scope="col" style={{borderRight:"2px solid #ffff"}}>IMIE</th>
                <th scope="col" style={{borderRight:"2px solid #ffff"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">demoItem</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                
              </tr>
              {/* <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr> */}
              {/* <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr> */}
            </tbody>
</table>
<CFormGroup row className="my-0 ">
              <CCol xs="4" className="offset-1 mb-3 mt-5">
                <h5>Total Quantities: <span>0</span></h5>
              </CCol>
              <CCol xs="4" className="offset-1 mb-3 mt-5">
                <CRow>
                  <CCol xs="6"><h6>Subtotal</h6></CCol>
                  <CCol xs="6"><h6>৳ 0.00</h6></CCol>
                </CRow>
              </CCol>
                <CCol xs="4" className="offset-1 ">
                <CLabel>Other Charges</CLabel>
                    <CInputGroup>
                      <CInput id="input1-group2" name="input1-group2" className="mr-2" type="text"/>
                    <CSelect custom size="md" name="selectLg" id="selectLg">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                    </CInputGroup>
                  
                </CCol>
                <CCol xs="4" className="offset-1 ">
                {/* <CLabel>Discount on All</CLabel>
                    <CInputGroup>
                    <CInputGroupPrepend>
                        <CButton type="button" color="primary"><CIcon name="cilCalendar" /></CButton>
                      </CInputGroupPrepend>
                      <CInput id="input1-group2" name="input1-group2" placeholder="Date" type="date"/>
                    
                    </CInputGroup> */}
                   
                <CRow>
                  <CCol xs="6"><h6>Other Charges	</h6></CCol>
                  <CCol xs="6"><h6>৳ 0.00</h6></CCol>
                  <CCol xs="6"><h6>Discount on All		</h6></CCol>
                  <CCol xs="6"><h6>৳ 0.00</h6></CCol>
                </CRow>
              
                  
                </CCol>
                <CCol xs="4" className="offset-1">
                <CLabel>Discount on All</CLabel>
                    <CInputGroup>
                    <CInput id="input1-group2" name="input1-group2"  type="text" className="mr-2"/>
                    <CSelect custom size="md" name="selectLg" id="selectLg">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                    </CInputGroup>
                  
                </CCol>
                 <CCol xs="4" className="offset-1">
                 <CRow>
                  <CCol xs="6"><h6>Round Off 	</h6></CCol>
                  <CCol xs="6"><h6>৳ 0.00</h6></CCol>
                  <CCol xs="6"><h6>Grand Total		</h6></CCol>
                  <CCol xs="6"><h6>৳ 0.00</h6></CCol>
                 
                </CRow>
                 </CCol>
                 <CCol xs="4" className="offset-1 mb-5">
                <CLabel>Note</CLabel>
                    <CInputGroup>
                    <CTextarea id="input1-group2" name="input1-group2"  type="text" className="mr-2"/>
                    </CInputGroup>
                  
                </CCol>
              </CFormGroup>
              <h6>Previous Payments Information :</h6>
              <table className="table table-bordered">
            <thead style={{background:"#3f1dfb",color:"#fff"}}>
           
              <tr>
                <th scope="col" style={{borderRight:"2px solid #ffff"}}>#</th>
                <th scope="col" style={{borderRight:"2px solid #ffff"}}>Date</th>
                <th scope="col" style={{borderRight:"2px solid #ffff"}}>Payment Type	</th>
                <th scope="col" style={{borderRight:"2px solid #ffff"}}>Payment Note	</th>
                <th scope="col" style={{borderRight:"2px solid #ffff"}}>Payment	</th>
                <th scope="col" style={{borderRight:"2px solid #ffff"}}>Action</th>
              </tr>
            </thead>
            
            <tbody >
           
              <tr >
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td>Payments Pending!!</td>
                <td></td>
                <td></td>
                

                
              </tr>
              {/* <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr> */}
              {/* <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr> */}
            </tbody>
</table>
  <h6 className="mt-5"> Make Payment :</h6>
 <CFormGroup row className="my-0 " style={{background:"#3f1dfb",color:"#fff",padding:"10px"}}>
          
          <CCol xs="6" className="mb-3">
                <CLabel>Amount</CLabel>
                    <CInputGroup>
                      <CInput id="input1-group2" name="input1-group2" type="text"/>
                    
                    </CInputGroup>
                  
                </CCol>
                <CCol xs="6" className=" mb-3">
                <CLabel>
                    Payment Type</CLabel>
                    <CInputGroup>

                    <CSelect custom size="md" name="selectLg" id="selectLg">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
          
                    
                    </CInputGroup>
                  
                </CCol>
               
                <CCol xs="12">
                <CLabel>Payment Note</CLabel>
                    <CInputGroup>
                      <CTextarea id="input1-group2" name="input1-group2" placeholder="Reference No." />
                    
                    </CInputGroup>
                  
                </CCol>
              </CFormGroup>
              <CCol xs="12"  className="text-center mt-5">
        <CButton color="primary" type="submit" className="mb-2 ml-3">
        {btnName?btnName:" Save"}
        </CButton>
        <NavLink to="/dashboard"><CButton type="submit" color="primary" className="mb-2 ml-3" >Close</CButton></NavLink>
         </CCol>
   </CCardBody>
          </CCard>
        </>
    )
}
