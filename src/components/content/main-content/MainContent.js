import React from 'react';
import Slideshow from '../slide-show/Slideshow';

import './MainContent.scss';

const MainContent = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1015&q=80'
    },
    {
      url: 'https://images.pexels.com/photos/251603/pexels-photo-251603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
  ];
  return (
    <div className="main-conten">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movie-type">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>
      display grid component
    </div>
  );
};

export default MainContent;
