import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

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
const fields = ['name','registered', 'role', 'status']

 const SuppliesList = () => {
    return (
        <>
          <CRow>
        
            <CCol>
              <CCard>
                <CCardHeader>
                Suppliers List
                </CCardHeader>
                <CCardBody>
                <CDataTable
                  items={usersData}
                  fields={fields}
               
                 tableFilter
                  hover
                  striped
                  bordered
                  size="sm"
                  itemsPerPageSelect
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
        </>
      )
}
export default SuppliesList;