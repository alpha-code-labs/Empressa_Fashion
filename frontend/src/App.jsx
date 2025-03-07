
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './customer/Routers/CustomerRouters';
import AdminRouters from './customer/Routers/AdminRouters';
import { MOBILE } from './constant';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import ScrollToTop from './customer/components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div>
    <ScrollToTop/>

{/* <FloatingWhatsApp
        accountName="Empressa"
        buttonClassName="whatsappButton"
        avatar="https://res.cloudinary.com/du5p1rnil/image/upload/v1713256699/empressa/ul5agvxpmsozwrahu5z0.png"
        phoneNumber={`${MOBILE}`}
        statusMessage="Typically replies within 1 hour"
        chatMessage={`Hello there! 🤝 How can we help?`}
        darkMode={false}
        buttonStyle={{position:"fixed",bottom:"60px"}}
        allowEsc
        allowClickAway
        notification
        notificationSound
      /> */}

      <Routes>
        <Route path='/*' element={<CustomerRouters />}></Route>
        <Route path='/admin/*' element={<AdminRouters />}></Route>
      </Routes>

    </div>

  );
}

export default App;