import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import HomePage from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Academics from "./pages/Academics";
import Admission from "./pages/Admission";
import Faculty from "./pages/Faculty";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Students from "./pages/students";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scrolltotop";
import WordSearch from "./pages/Games/WordSearch/WordSearch";
import CrosswordGame from "./pages/Games/CrossWord/CrossWord";
import PuzzleIntro from "./pages/Games/Puzzle/Intro";
import PuzzleGame from "./pages/Games/Puzzle/Game";
import SignUp from "./sign-up";
import Signin from "./signin";
import Games from "./pages/games";
import StudentCouncilPage from "./pages/studentCouncil";
function App() {
  return (
    <BrowserRouter>
      <main className="overflow-x-hidden">
        <Navbar2 />
        <main className="text-black bg-white dark:bg-gray-800 dark:text-white">
          <Routes className="text-black bg-white dark:bg-gray-800 dark:text-white">
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/academic" element={<Academics />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/student" element={<Students />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/word-search" element={<WordSearch />} />
            <Route path="/games/crossword" element={<CrosswordGame />} />
            <Route path="/games/puzzle" element={<PuzzleIntro />} />
            <Route path="/games/puzzle/:level" element={<PuzzleGame />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/apply" element={<StudentCouncilPage/>} />
          </Routes>
        </main>
        <ScrollToTop />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
