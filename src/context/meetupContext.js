import React from 'react'

const MeetupContext = React.createContext({
  userName: '',
  selectedTopic: 'Arts and Culture',
  onChangeUsername: () => {},
  onChangeSelectId: () => {},
  showError: false,
  errorMsg: 'Please enter your name',
  onChangeError: () => {},
  isRegistered: false,
  updateRegister: () => {},
})

export default MeetupContext
