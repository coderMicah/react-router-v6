import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers from "./pages/careers/Careers";
import CareersDetails from "./pages/careers/CareersDetails";
import CareersError from "./pages/careers/CareersError";

//layout
import RootLayout from "./Layout/RootLayout";
import HelpLayout from "./Layout/HelpLayout";
import CareersLayout from "./Layout/CareersLayout";

//loaders
import { careersLoader } from "./pages/careers/Careers";
import { careersDetailsLoader } from "./pages/careers/CareersDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareersDetails />}
          loader={careersDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

// older version of react-router approach
// function App() {
//   return (
//     <BrowserRouter>
//         <header>
//           <nav>
//             <h1>Jobs</h1>
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/about">About</NavLink>
//           </nav>
//         </header>
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="about" element={<About />} />
//         </Routes>
//       </main>
//     </BrowserRouter>
//   );
// }

export default App;
