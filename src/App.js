import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'

export default class App extends Component {
  render() {
    return (
      <Fullpage>

        <FullPageSections>


          <FullpageSection style={{
            backgroundColor: 'lime',
            height: '80vh',
            padding: '1em',
          }}>1
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'coral',
            padding: '1em',
          }}>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'firebrick',
            padding: '1em',
          }}>
          </FullpageSection>

        </FullPageSections>

      </Fullpage>
    )
  }
}