import {Link} from 'react-router-dom'

import MeetupContext from '../../context/meetupContext'
import Header from '../Header'

import {
  AppContainer,
  RegisterContainer,
  RegisterHeading,
  RegisterContent,
  RegisterButton,
  NameHeading,
  TopicHeading,
  Image,
  ResponsiveContainer,
} from './styledComponents'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.push('/register')
  }

  return (
    <MeetupContext.Consumer>
      {value => {
        const {userName, selectedTopic, isRegistered} = value
        const getRegisterHome = () => (
          <RegisterContainer>
            <RegisterHeading>Welcome to Meetup</RegisterHeading>
            <RegisterContent>Please register for the topic</RegisterContent>
            <Link textDecoration="none" to="/register">
              <RegisterButton type="button" onClick={onRegister}>
                Register
              </RegisterButton>
            </Link>
          </RegisterContainer>
        )

        const getHomeRoute = () => (
          <RegisterContainer>
            <NameHeading>Hello {userName}</NameHeading>
            <TopicHeading>Welcome to {selectedTopic}</TopicHeading>
          </RegisterContainer>
        )

        return (
          <AppContainer>
            <Header />
            <ResponsiveContainer>
              {isRegistered === true ? getHomeRoute() : getRegisterHome()}
              <Image
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </ResponsiveContainer>
          </AppContainer>
        )
      }}
    </MeetupContext.Consumer>
  )
}

export default Home
