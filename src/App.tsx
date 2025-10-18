import React from 'react'
import { Provider } from "react-redux"
import { store } from "@/app/store";

import { BackgroundBanner } from "@/widgets/background-banner";

import './App.css'

function App() {

  return (
    <Provider store={store}>
      <div className="app">
        <BackgroundBanner />
      </div>
    </Provider>
  );
}

export default App
