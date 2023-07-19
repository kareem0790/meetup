import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import MeetupContext from './context/meetupContext'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    userName: '',
    selectedTopic: 'Arts and Culture',
    showError: false,
    errorMsg: 'Please enter your name',
    isRegistered: false,
  }

  onChangeUsername = value => {
    this.setState({userName: value})
  }

  onChangeSelectId = value => {
    this.setState({selectedTopic: value})
  }

  onChangeError = () => {
    this.setState({showError: true})
  }

  updateRegister = () => {
    this.setState({isRegistered: true})
  }

  render() {
    const {
      userName,
      selectedTopic,
      isRegistered,
      showError,
      errorMsg,
    } = this.state

    return (
      <MeetupContext.Provider
        value={{
          userName,
          selectedTopic,
          errorMsg,
          showError,
          onChangeUsername: this.onChangeUsername,
          isRegistered,
          updateRegister: this.updateRegister,
          onChangeSelectId: this.onChangeSelectId,
          onChangeError: this.onChangeError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/random" component={NotFound} />
          <Redirect to="/random" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
