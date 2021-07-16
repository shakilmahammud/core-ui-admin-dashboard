import React from 'react';
import CategoryList from './views/Items/CategoryList';
import ItemList from './views/Items/ItemList';
import { NewBand } from './views/Items/NewBand';
import NewCategory from './views/Items/NewCategory';
import { NewItems } from './views/Items/NewItems';
import BrandList from './views/Items/BrandList';
import { Import } from './views/Items/Import';
import { NewSuppliers } from './views/Suppliers/NewSuppliers';
import SuppliesList from './views/Suppliers/SuppliesList';
import { ImportSuppliers } from './views/Suppliers/ImportSuppliers';
import { ExpensesList } from './views/Expenses/ExpensesList';
import { ExpensesCategory } from './views/Expenses/ExpensesCategory';
import { ExpensesCategoryList } from './views/Expenses/ExpensesCategoryList';
import { NewCustomer } from './views/Customers/NewCustomer';
import { CustomersList } from './views/Customers/CustomersList';
import { ImportCustomers } from './views/Customers/ImportCustomers';
import { NewPurchase } from './views/Purchase/NewPurchase';
import { NewPurchaseReturn } from './views/Purchase/NewPurchaseReturn';
import { PurchaseList } from './views/Purchase/PurchaseList';
import { PurChaseReturnList } from './views/Purchase/PurChaseReturnList';
import { NewSalesReturn } from './views/Sales/NewSalesReturn';
import { SalesReturnList } from './views/Sales/SalesReturnList';
import { NewSales } from './views/Sales/NewSales';
import { SalesList } from './views/Sales/SalesList';
import { NewCountry } from './views/Places/NewCountry';
import { CountriesList } from './views/Places/CountriesList';
import { NewState } from './views/Places/NewState';
import { StateList } from './views/Places/StateList';
import { NewUser } from './views/users/NewUser';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // { path: '/theme', name: 'Theme', component: Colors, exact: true },
  // { path: '/theme/colors', name: 'Colors', component: Colors },
  // { path: '/theme/typography', name: 'Typography', component: Typography },
  // { path: '/base', name: 'Base', component: Cards, exact: true },
  // { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/Sales/NewSales', name:`Customers Add/Update Customer`, component: NewSales },
  { path: '/Sales/SalesList', name:`Customers Add/Update Customer`, component: SalesList },
  { path: '/Sales/NewSalesReturn', name:`Customers Add/Update Customer`, component: NewSalesReturn },
  { path: '/Sales/SalesReturnList', name:`Customers Add/Update Customer`, component: SalesReturnList },
  { path: '/Purchase/NewPurchase', name:`Customers Add/Update Customer`, component: NewPurchase },
  { path: '/Purchase/NewPurchase', name:`Customers Add/Update Customer`, component: NewPurchase },
  { path: '/Purchase/NewPurchaseReturn', name:`Customers Add/Update Customer`, component: NewPurchaseReturn },
  { path: '/Purchase/PurchaseList', name:`Customers Add/Update Customer`, component: PurchaseList },
  { path: '/Purchase/NewPurchaseReturn', name:`Customers Add/Update Customer`, component: NewPurchaseReturn },
  { path: '/Purchase/PurChaseReturnList', name:`Customers Add/Update Customer`, component: PurChaseReturnList },
  { path: '/Customers/NewCustomer', name:`Customers Add/Update Customer`, component: NewCustomer },
  { path: '/Customers/CustomersList', name:`Customers List View/Search Customers`, component: CustomersList },
  { path: '/Customers/ImportCustomers', name:`Import Customers Add/Update Brand`, component: ImportCustomers },
  { path: '/Suppliers/NewSuppliers', name:`Suppliers Add/Update Suppliers`, component: NewSuppliers },
  { path: '/Suppliers/SuppliersList', name:`Suppliers List View/Search Suppliers`, component: SuppliesList},
  { path: '/Suppliers/ImportSuppliers', name:`Import Suppliers Add/Update Brand`, component: ImportSuppliers},
  { path: '/Items/NewItems', name:`Items Add / Update Items`, component: NewItems },
  { path: '/Items/ItemList', name:`View/Search Items`, component: ItemList },
  { path: '/Items/NewCategory', name:`Category/Add`, component: NewCategory },
  { path: '/Items/CategoryList', name:`Category List/Search Items`, component: CategoryList },
  { path: '/Items/NewBand', name:`Category Band Add / Updates`, component: NewBand },
  { path: '/Items/BrandList', name:`Band View/ Search Items Band`, component: BrandList },
  { path: '/Items/Import', name:`Import Items Add/Update Brand`, component: Import },
  { path: '/Expenses/ExpensesList', name:`Expenses List View/Search Expenses`, component: ExpensesList },
  { path: '/Expenses/ExpensesCategory', name:`Expense Category Add/Update Expense Category`, component: ExpensesCategory },
  { path: '/Expenses/ExpensesCategoryList', name:`Expense Category List`, component: ExpensesCategoryList },
  { path: '/Places/NewCountry', name:`Country Add/Update Country`, component: NewCountry },
  { path: '/Places/CountriesList', name:`Countries List View/Search Countries`, component: CountriesList },
  { path: '/Places/NewState', name:`State Add/Update State`, component: NewState },
  { path: '/Places/StateList', name:`States List View/Search States`, component: StateList },
  { path: '/users/NewUser', name:`Create User Enter User Information`, component: NewUser },
  // { path: '/base/carousels', name: 'Carousel', component: Carousels },
  // { path: '/base/collapses', name: 'Collapse', component: Collapses },
  // { path: '/base/forms', name: 'Forms', component: BasicForms },
  // { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  // { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  // { path: '/base/navbars', name: 'Navbars', component: Navbars },
  // { path: '/base/navs', name: 'Navs', component: Navs },
  // { path: '/base/paginations', name: 'Paginations', component: Paginations },
  // { path: '/base/popovers', name: 'Popovers', component: Popovers },
  // { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  // { path: '/base/switches', name: 'Switches', component: Switches },
  // { path: '/base/tables', name: 'Tables', component: Tables },
  // { path: '/base/tabs', name: 'Tabs', component: Tabs },
  // { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  // { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  // { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  // { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  // { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  // { path: '/charts', name: 'Charts', component: Charts },
  // { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', component: Flags },
  // { path: '/icons/brands', name: 'Brands', component: Brands },
  // { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  // { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  // { path: '/notifications/badges', name: 'Badges', component: Badges },
  // { path: '/notifications/modals', name: 'Modals', component: Modals },
  // { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  // { path: '/widgets', name: 'Widgets', component: Widgets },
  // { path: '/users', exact: true,  name: 'Users', component: Users },
  // { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
