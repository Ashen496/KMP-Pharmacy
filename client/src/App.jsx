import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Feedback from './pages/PromotionManagement/Feedback';
import AdminDashboard from './pages/AdminDashboard';
import PromotionManagement from './pages/PromotionManagement/PromotionManagement';
import PromotionCreateForm from './pages/PromotionManagement/PromotionCreateForm';
import PromotionUpdateForm from './pages/PromotionManagement/PromotionUpdateForm';
import PromotionPage from './pages/PromotionManagement/PromotionPage';
import SupplyManagement from './pages/SupplierManagement/SupplyManagement';
import SupplierCreateForm from './pages/SupplierManagement/SupplierCreateForm';
import Orders from './pages/SupplierManagement/Orders';
import SupplierUpdateForm from './pages/SupplierManagement/SupplierUpdateForm';
import InventoryCreateForm from './pages/InventoryManagement/InventoryItemCreateForm';
import InventoryUpdateForm from './pages/InventoryManagement/InventoryUpdateForm';
import SupplyRequestForm from './pages/InventoryManagement/SupplyRequest';
import InventoryManagement from './pages/InventoryManagement/InventoryManagement';
import PrescriptionCreateForm from './pages/PrescriptionManagement/PrescriptionCreateForm';
import PrescriptionAssign from './pages/PrescriptionManagement/PrescriptionAssignPage';
import PrescriptionNotification from './pages/PrescriptionManagement/PrescriptionNotifications';
import PrescriptionManagement from './pages/PrescriptionManagement/PrescriptionManagement';
import DriverCreateForm from './pages/DeliveryManagement/DriverCreateForm';
import DriverUpdateForm from './pages/DeliveryManagement/DriverUpdateForm';
import DeliveryTaskcreateForm from './pages/DeliveryManagement/DeliveryTaskcreateForm';
import DeliveryTaskUpdateForm from './pages/DeliveryManagement/DeliveryTaskUpdateForm';
import DeliveryTaskTable from './pages/DeliveryManagement/DeliveryTaskTable';
import DeliveryManagement from './pages/DeliveryManagement/DeliveryManagement';
import DriverManagement from './pages/DeliveryManagement/DriverManagement';
import DriverTable from './pages/DeliveryManagement/DriverTable';
import DriverSignIn from './pages/DeliveryManagement/DriverSignIn';


export default function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path='/promotion-management' element={<PromotionManagement />} />
      <Route path='/create-promotion' element={<PromotionCreateForm />} />
      <Route path='/update-promotion/:id' element={<PromotionUpdateForm />} />
      <Route path='/promotions' element={<PromotionPage />} />

      <Route path="/supplier-management" element={<SupplyManagement/>} />
      <Route path="/create-supplier" element={<SupplierCreateForm/>} />
      <Route path='/update-supplier/:id' element={<SupplierUpdateForm />} />     
      <Route path="/orders" element={<Orders/>} />
      
      <Route path="/create-prescription" element={<PrescriptionCreateForm/>} />
      <Route path="/prescription-management" element={<PrescriptionManagement/>} />
      <Route path="/prescription-assign" element={<PrescriptionAssign/>} />
      <Route path="/notifications" element={<PrescriptionNotification/>} />

      <Route path="/inventory-management" element={<InventoryManagement/>} />
      <Route path="/create-inventory" element={<InventoryCreateForm/>} />
      <Route path="/update-inventory/:id" element={<InventoryUpdateForm/>} />
      <Route path='/supply-request' element={<SupplyRequestForm/>}/>

      <Route path='/delivery-management' element={<DeliveryManagement />} />
      <Route path='/taskpage' element={<DeliveryTaskTable />} />
      <Route path='/create-task' element={<DeliveryTaskcreateForm />} />
      <Route path='/update-task' element={<DeliveryTaskUpdateForm />} />  
      <Route path='/driver-management' element={<DriverManagement />} />
      <Route path='/driver-create' element={<DriverCreateForm />} />
      <Route path='/driver-update/:id' element={<DriverUpdateForm />} />
      <Route path='/drivers' element={<DriverTable />} />
      <Route path='/driver-signin' element={<DriverSignIn />} />
    </Routes>
  </Router>
  )
}
