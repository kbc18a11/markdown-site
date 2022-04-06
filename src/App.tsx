import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from 'components/header/Header';
import { Index } from 'pages';
import { initMarkdownTextList } from 'stores/markdownTextListStore';

const App = () => {
  initMarkdownTextList();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
