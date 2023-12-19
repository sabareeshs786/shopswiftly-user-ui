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

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {

  return (
    <Routes>
      {/* Protected routes */}
      <Route path="/" element={<Layout />} >
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
            <Route path="editor" element={<Editor />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
            <Route path="lounge" element={<Lounge />} />
          </Route>
        </Route>
      </Route>

      <Route path="/" element={<LayoutNav />}>
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="mobiles" >
              <Route path="" element={<Item />} />
              <Route path="pr" element={<Mobiles />} />
            </Route>
          </Route>
        </Route>
      </Route>

      {/* These are publicly accessible routes */}
      <Route path="/" element={<LayoutAuth />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>

      {/* catch all */}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;