import MeetupContext from '../../context/meetupContext'
import Header from '../Header'

import {
  BodyContainer,
  ResponsiveRegisterContainer,
  ResponsiveContainer,
  RegisterImage,
  FormContainer,
  RegisterLoginHeading,
  InputContainer,
  InputLabel,
  Input,
  Select,
  Option,
  RegisterNotButton,
  ErrorMsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <MeetupContext.Consumer>
    {value => {
      const {
        userName,
        selectedTopic,
        onChangeUsername,
        showError,
        errorMsg,
        onChangeSelectId,
        onChangeError,
        updateRegister,
      } = value

      const onChangeUserName = event => {
        onChangeUsername(event.target.value)
      }

      const onChangeSelect = event => {
        onChangeSelectId(event.target.value)
      }

      const onSubmitForm = event => {
        event.preventDefault()
        if (userName !== '' && selectedTopic !== '') {
          const {history} = props
          history.replace('/')
          updateRegister()
        } else {
          onChangeError()
        }
      }

      return (
        <BodyContainer>
          <Header />
          <ResponsiveContainer>
            <ResponsiveRegisterContainer>
              <RegisterImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <FormContainer onSubmit={onSubmitForm}>
                <RegisterLoginHeading>Let us join</RegisterLoginHeading>
                <InputContainer>
                  <InputLabel htmlFor="name">NAME</InputLabel>
                  <Input
                    placeholder="Your name"
                    type="text"
                    id="name"
                    value={userName}
                    onChange={onChangeUserName}
                  />
                </InputContainer>
                <InputContainer>
                  <InputLabel htmlFor="topic">TOPICS</InputLabel>
                  <Select
                    id="topic"
                    value={selectedTopic}
                    onChange={onChangeSelect}
                  >
                    {topicsList.map(each => (
                      <Option key={each.id} value={each.id}>
                        {each.displayText}
                      </Option>
                    ))}
                  </Select>
                </InputContainer>
                <RegisterNotButton type="submit">
                  Register Now
                </RegisterNotButton>
                {showError && <ErrorMsg>{errorMsg}</ErrorMsg>}
              </FormContainer>
            </ResponsiveRegisterContainer>
          </ResponsiveContainer>
        </BodyContainer>
      )
    }}
  </MeetupContext.Consumer>
)

export default Register
