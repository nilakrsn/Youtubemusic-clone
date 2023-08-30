import { BrowserRouter, Route, Routes } from "react-router-dom/dist"
import Nav from "./header/Nav"
import RelaxPage from "./pages/ExplorePages"
import Content from "./pages/Content"
import LibraryPages from "./pages/LibraryPages"
import SignIn from "./pages/SignIn"


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/signUp" element={<SignIn />} />
      </Routes>
      <Nav data={
        <Routes>
          <Route path="/" exact element={<Content />}></Route>
          <Route path="/explore" element={<RelaxPage />}></Route>
          <Route path="/library" element={<LibraryPages />}></Route>
        </Routes>
      } />

    </BrowserRouter>



  )
}

export default App