import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Theme']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: 'cil-drop',
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: 'cil-pencil',
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Components']
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Sale',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'POS',
        icon: 'cil-puzzle',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'New Sale',
        icon: 'cil-puzzle',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sale List',
        icon: 'cil-puzzle',
        to: '/base/carousels',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'New Sale Return',
        icon: 'cil-puzzle',
        to: '/base/collapses',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sale Return List',
        icon: 'cil-puzzle',
        to: '/base/forms',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Customers',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'New Customer',
        icon: 'cil-puzzle',
        to: '/Customers/NewCustomer',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Customer List',
        icon: 'cil-puzzle',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Import Customers',
        icon: 'cil-puzzle',
        to: '/base/carousels',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Purchase',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'New Purchase',
        icon: 'cil-puzzle',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Purchase List',
        icon: 'cil-puzzle',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'New Purchase Return',
        icon: 'cil-puzzle',
        to: '/base/carousels',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Purchase Return List',
        icon: 'cil-puzzle',
        to: '/base/forms',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Suppliers',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'New Supplier',
        icon: 'cil-puzzle',
        to: '/Suppliers/NewSuppliers',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Suppliers List',
        icon: 'cil-puzzle',
        to: '/Suppliers/SuppliersList',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Import Suppliers',
        icon: 'cil-puzzle',
        to: '/Suppliers/ImportSuppliers',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Items',
    route: '/Items',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'New Item',
        icon: 'cil-puzzle',
        to: '/Items/NewItems',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Item List',
        icon: 'cil-puzzle',
        to: '/Items/ItemList',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'New Category',
        icon: 'cil-puzzle',
        to: '/Items/NewCategory',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Category List',
        icon: 'cil-puzzle',
        to: '/Items/CategoryList',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'New Brand',
        icon: 'cil-puzzle',
        to: '/Items/NewBand',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Brand List',
        icon: 'cil-puzzle',
        to: '/Items/BrandList',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Print Labels',
        icon: 'cil-puzzle',
        to: '/Items/PrintLabels',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Import Items',
        icon: 'cil-puzzle',
        to: '/Items/Import',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Expenses',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'New Expense',
        icon: 'cil-puzzle',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Expenses List',
        icon: 'cil-puzzle',
        to: '/Expenses/ExpensesList',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'New Category',
        icon: 'cil-puzzle',
        to: '/Expenses/ExpensesCategory',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Categories List',
        icon: 'cil-puzzle',
        to: '/Expenses/ExpensesCategoryList',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Places',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'New Country',
        icon: 'cil-puzzle',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Countries List',
        icon: 'cil-puzzle',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'New State',
        icon: 'cil-puzzle',
        to: '/base/carousels',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'State List',
        icon: 'cil-puzzle',
        to: '/base/collapses',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Reports',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Profit & Loss Report',
        icon: 'cil-puzzle',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Purchase  Report',
        icon: 'cil-puzzle',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Purchase Return Report',
        icon: 'cil-puzzle',
        to: '/base/carousels',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Purchase Payments Report',
        icon: 'cil-puzzle',
        to: '/base/collapses',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Item Sales Report',
        icon: 'cil-puzzle',
        to: '/base/forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sales Report',
        icon: 'cil-puzzle',
        to: '/base/forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sales Return Report',
        icon: 'cil-puzzle',
        to: '/base/forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Sales Payments Report',
        icon: 'cil-puzzle',
        to: '/base/forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Stock Report',
        icon: 'cil-puzzle',
        to: '/base/forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Expense Report',
        icon: 'cil-puzzle',
        to: '/base/forms',
      },
      
      {
        _tag: 'CSidebarNavItem',
        name: 'Expense Items Report',
        icon: 'cil-puzzle',
        to: '/base/forms',
      },
      
      
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Users',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'New User',
        icon: 'cil-puzzle',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'User List',
        icon: 'cil-puzzle',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Roles List',
        icon: 'cil-puzzle',
        to: '/base/carousels',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'SMS',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Send SMS',
        icon: 'cil-puzzle',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'SMS Templates',
        icon: 'cil-puzzle',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'SMS API',
        icon: 'cil-puzzle',
        to: '/base/carousels',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Settings',
    route: '/notifications',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Company Profile',
        to: '/notifications/alerts',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Site Settings',
        to: '/notifications/badges',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tax List',
        to: '/notifications/modals',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Units List',
        to: '/notifications/toaster'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Payment Types List',
        to: '/notifications/toaster'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Currency List',
        to: '/notifications/toaster'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Change Password',
        to: '/notifications/toaster'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Database Backup',
        to: '/notifications/toaster'
      }

    ]
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: 'cil-calculator',
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  {
    _tag: 'CSidebarNavDivider'
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Extras'],
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register',
        to: '/register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 404',
        to: '/404',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
