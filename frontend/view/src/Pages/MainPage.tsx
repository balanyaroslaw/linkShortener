import React from 'react'
import HeaderComponent from '../Components/HeaderComponent'
import MainComponent from '../Components/MainComponent'
const MainPage = () => 
{
  return (
    <div className="wrapper">
        <HeaderComponent/>
        <MainComponent/>
        <footer className="footer">
            <div className="github__container">
              <span className='github__link'>https://github.com/balanyaroslaw</span>
            </div>
        </footer>
    </div>
  )
}

export default MainPage