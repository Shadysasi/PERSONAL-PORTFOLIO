import {GrLinkedinOption} from 'react-icons/gr'
import {IoIosMail} from 'react-icons/io'
import ThemeContext from '../../context/ThemeContext'
import {
  SectionContainer,
  SectionHead,
  SectionPara,
  ContactContainer,
  ContactInfo,
  ContactLink,
  ContactText,
  Text,
} from './style'

const Contact = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <SectionContainer darkMode={isDarkTheme} id="contact">
          <SectionHead darkMode={isDarkTheme}>Contact Me</SectionHead>
          <SectionPara>Get in touch</SectionPara>
          <ContactContainer>
            <div>
              <ContactInfo>
                <IoIosMail size={35} color="#6e57e0" />
                <ContactText>
                  <Text darkMode={isDarkTheme}>Email</Text>
                  <ContactLink
                    href="mailto:sasieng5851@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    sasieng5851@gmail.com
                  </ContactLink>
                </ContactText>
              </ContactInfo>
              <ContactInfo>
                <GrLinkedinOption size={35} color="#6e57e0" />
                <ContactText>
                  <Text darkMode={isDarkTheme}>Linkedin</Text>
                  <ContactLink
                    href="https://www.linkedin.com/in/sasi5851/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @sasi5851
                  </ContactLink>
                </ContactText>
              </ContactInfo>
            </div>
          </ContactContainer>
        </SectionContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Contact
