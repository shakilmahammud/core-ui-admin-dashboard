
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import { NavLink } from 'react-router-dom'

export const NewBand = () => {
    return (
        <>
          <CRow>
        
            <CCol>
              <CCard>
                <CCardHeader>
                Please Enter Valid Data
                </CCardHeader>
                <CCardBody>
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Category Name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" required/>
                    </div>
                   
                   
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="col-md-12 text-center">
                        <button type="submit" class="btn btn-primary mb-2">Submit</button>
                        <NavLink to="/dashboard"><button type="submit" class="btn btn-primary mb-2 ml-3">Close</button></NavLink>
                    </div>
                    </form>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </>
      )
}
