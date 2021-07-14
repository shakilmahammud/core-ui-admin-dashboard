import CIcon from '@coreui/icons-react'
import { CCardGroup, CCol, CProgress, CRow, CWidgetProgressIcon, CWidgetSimple } from '@coreui/react'
import React from 'react'
import ChartBarSimple from '../charts/ChartBarSimple'
import ChartLineSimple from '../charts/ChartLineSimple'
import { ComonList } from '../ComonList/ComonList'
import CategoryList from '../Items/CategoryList'

export const PurchaseList = () => {
    return (
        <>
         
           <CCardGroup className="mb-4">
        <CWidgetProgressIcon
          header="87.500"
          text="Visitors"
          color="gradient-info"
          inverse
        >
          <CIcon name="cil-people" height="36"/>
        </CWidgetProgressIcon>
        <CWidgetProgressIcon
          header="385"
          text="New Clients"
          color="gradient-success"
          inverse
        >
          <CIcon name="cil-userFollow" height="36"/>
        </CWidgetProgressIcon>
        <CWidgetProgressIcon
          header="1238"
          text="Products sold"
          color="gradient-warning"
          inverse
        >
          <CIcon name="cil-basket" height="36"/>
        </CWidgetProgressIcon>
        <CWidgetProgressIcon
          header="28%"
          text="Returning Visitors"
          color="gradient-danger"
          inverse
        >
          <CIcon name="cil-chartPie" height="36"/>
        </CWidgetProgressIcon>
        
      </CCardGroup>
        <ComonList fieldName={["","Purchase Date","Purchase code","Refarence No","Supplier Name"
        ,"Total","Paid Payment","Due","Payment Status","Created by","Action"
        ]}/>
        </>
    )
}
