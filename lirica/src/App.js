import './App.css';
// import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import { Error404 } from './Components/Error404/Error404';
// import { feedBlog } from './components/feed/postBlog';
import { FeedBlog } from './components/feed/postBlog';
import { Error404 } from './components/error404/error404';
import { SingleArticle } from './components/feed/singleArticle';

const App = () => {

 
  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Navigate to="/lirica" />} />
          <Route path='/lirica' element={< FeedBlog />} />
          <Route path='/lirica/:id' element={<SingleArticle/>}/>
          <Route path='*' element={<Error404 />} />
        </Routes>

      </BrowserRouter>

    </>
  );
};

export default App;
