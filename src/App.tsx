import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from 'components/header/Header';
import { Index } from 'pages/Index';
import { initMarkdownTextList } from 'stores/MarkdownTextListStore';
import { DisplayMarkdown } from 'pages/DisplayMarkdown';

const App = () => {
  initMarkdownTextList();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="markdown/:id"
            element={<DisplayMarkdown />}
          />
          <Route
            index
            element={<Index />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
