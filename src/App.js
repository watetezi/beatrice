import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

export default class App extends Component {
  render() {
    return (
      <Fullpage>

        <div className='dot'>
          <FullpageNavigation style={{

        }}> </FullpageNavigation>
        </div>

        <FullPageSections>

          <FullpageSection style={{
            backgroundColor: 'white',
            height: '80vh',
            padding: '1em',
          }}>
            1
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'white',
            height: '80vh',
            padding: '1em',
          }}>
            2
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'white',
            height: '100vh',
            padding: '1em',
          }}>3
          </FullpageSection>

        </FullPageSections>

      </Fullpage>
    )
  }
}