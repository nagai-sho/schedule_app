// ルート定義
import { Routes, Route } from 'react-router-dom';
import Top from '../pages/Top';
import Assets from '../pages/Assets';
import Vehicles from '../pages/VehiclesPage';
import Calender from '../pages/Calender';
import NotFound from '../pages/NotFound';
import Mypage from '../pages/Mypage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/assets/:id" element={<Assets />} />
      <Route path="/vehicles/:id" element={<Vehicles />} />
      <Route path="/calender/:id" element={<Calender />} />
      <Route path="/mypage/:id" element={<Mypage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
