import { Routes, Route } from 'react-router-dom';

import Signup from './components/authentication/Signup';
import Login from './components/authentication/Login';
import Home from './components/Home';
import Layout from './components/Layout';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Missing from './components/generic/Missing';
import Unauthorized from './components/authentication/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
import RequireAuth from './components/authentication/RequireAuth';
import PersistLogin from './components/authentication/PersistLogin';
import Mobiles from './components/Mobiles';
import LayoutAuth from './components/LayoutAuth';
import LayoutNav from './components/LayoutNav';
import Item from './components/generic/Item';
import ViewItem from './components/ViewItem';
import MyCart from './components/MyCart';
import Checkout from './components/Checkout';

const ROLES = {
  "Admin": 51507865,
  "Editor": 1984078,
  "User": 2001345
}

function App() {

  return (
    <Routes>
      {/* Protected routes */}

      {/* These are publicly accessible routes */}
      <Route path="/" element={<Layout />} >
        <Route path="" element={<Home />} />
      </Route>

      <Route path="/" element={<LayoutNav />}>
        <Route path="cart" element={<MyCart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="mobiles">
          <Route path="" element={<Item />} />
          <Route path="pr" element={<Mobiles />} />
          <Route path="view" element={<ViewItem />} />
        </Route>

      </Route>

      {/* These are authentication & authorization routes */}
      <Route path="/" element={<LayoutAuth />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>

          <Route path="/" element={<Layout />} >
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="pay" element={<Home />} />
          </Route>
        </Route>
      </Route>

      {/* catch all */}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;