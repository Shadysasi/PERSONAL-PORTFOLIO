import ThemeContext from '../../context/ThemeContext'
import {
  SectionContainer,
  SectionHead,
  SectionPara,
  SkillsContainer,
  SkillBtn,
} from './style'

const skillDetails = [
  {id: 1, skill: 'HTML'},
  {id: 2, skill: 'CSS'},
  {id: 3, skill: 'Javascript'},
  {id: 4, skill: 'FlexBox'},
  {id: 5, skill: 'Bootstrap'},
  {id: 6, skill: 'SQL'},
  {id: 7, skill: 'Python'},
  {id: 8, skill: 'Node JS'},
  {id: 9, skill: 'React JS'},
]

const Skills = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <SectionContainer darkMode={isDarkTheme} id="skills">
          <SectionHead darkMode={isDarkTheme}>Skills</SectionHead>
          <SectionPara>My Technical Skills</SectionPara>
          <SkillsContainer>
            {skillDetails.map(eachItem => (
              <SkillBtn type="button">{eachItem.skill}</SkillBtn>
            ))}
          </SkillsContainer>
        </SectionContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Skills
