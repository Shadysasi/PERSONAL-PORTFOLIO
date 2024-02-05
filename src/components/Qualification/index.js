import {FaCalendarAlt} from 'react-icons/fa'
import ThemeContext from '../../context/ThemeContext'
import {
  SectionContainer,
  SectionHead,
  SectionPara,
  QualificationContainer,
  QualificationContent,
  Course,
  Institute,
  Year,
  Calender,
  QualificationChart,
  QualificationRound,
  QualificationLine,
} from './style'

const Qualification = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <SectionContainer darkMode={isDarkTheme} id="qualification">
          <SectionHead darkMode={isDarkTheme}>Qualification</SectionHead>
          <SectionPara>My Journey</SectionPara>
          <QualificationContainer>
            <QualificationChart>
              <QualificationContent>
                <div>
                  <Course darkMode={isDarkTheme}>
                    Full Stack Web Development
                  </Course>
                  <Institute>NxtWave CCBP 4.0</Institute>
                  <Calender>
                    <FaCalendarAlt color="#aeacb9" />
                    <Year>2023-2024</Year>
                  </Calender>
                </div>
              </QualificationContent>
              <div>
                <QualificationRound darkMode={isDarkTheme}>
                  .
                </QualificationRound>
                <QualificationLine darkMode={isDarkTheme}>.</QualificationLine>
              </div>
            </QualificationChart>
            <QualificationChart>
              <div>.</div>
              <div>
                <QualificationRound darkMode={isDarkTheme}>
                  .
                </QualificationRound>
                <QualificationLine darkMode={isDarkTheme}>.</QualificationLine>
              </div>
              <div>
                <Course darkMode={isDarkTheme}>
                  B.E(Electronics and Communication Engineering)
                </Course>
                <Institute>CMS College of Engineering</Institute>
                <Institute>CGPA: 7.9</Institute>
                <Calender>
                  <FaCalendarAlt color="#aeacb9" />
                  <Year>2012-2016</Year>
                </Calender>
              </div>
            </QualificationChart>
            <QualificationChart>
              <QualificationContent>
                <div>
                  <Course darkMode={isDarkTheme}>Intermediate Education</Course>
                  <Institute>Govt. Higher Secondary School</Institute>
                  <Institute>CGPA: 9.1</Institute>
                  <Calender>
                    <FaCalendarAlt color="#aeacb9" />
                    <Year>2010-2012</Year>
                  </Calender>
                </div>
              </QualificationContent>
              <div>
                <QualificationRound darkMode={isDarkTheme}>
                  .
                </QualificationRound>
                <QualificationLine darkMode={isDarkTheme}>.</QualificationLine>
              </div>
            </QualificationChart>
          </QualificationContainer>
        </SectionContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Qualification
