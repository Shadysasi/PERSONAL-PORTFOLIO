import Slider from 'react-slick'
import {FaArrowRight} from 'react-icons/fa'
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from 'react-icons/io'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import ThemeContext from '../../context/ThemeContext'

import {
  SliderContainer,
  ProjectContainer,
  ProjectImg,
  ProjectDetails,
  Title,
  Description,
  ProjectButton,
  ProjectLink,
  Para,
} from './style'

const ReactSlick = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowDropleftCircle color="#6e57e0" />,
    nextArrow: <IoIosArrowDroprightCircle color="#6e57e0" />,
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <SliderContainer>
            <Slider {...settings}>
              <div>
                <ProjectContainer>
                  <ProjectImg
                    src="https://i.im.ge/2024/02/05/cMKs4J.nxtwatch.png"
                    alt="project image"
                  />
                  <ProjectDetails>
                    <Title darkMode={isDarkTheme}>NxtWatch Website</Title>
                    <Description>Youtube Clone Website</Description>
                    <ProjectButton>
                      <ProjectLink
                        href="https://github.com/Shadysasi/NXT-WATCH-APP"
                        target="_blank"
                      >
                        <Para>Project Link</Para>
                        <FaArrowRight color="#ffffff" size={20} />
                      </ProjectLink>
                    </ProjectButton>
                  </ProjectDetails>
                </ProjectContainer>
              </div>
              <div>
                <ProjectContainer>
                  <ProjectImg
                    src="https://i.im.ge/2024/02/05/cMZsN4.jobby.png"
                    alt="project image"
                  />
                  <ProjectDetails>
                    <Title darkMode={isDarkTheme}>Job Search Website</Title>
                    <Description>
                      Dynamic business sites that reflects your brand and engage
                      customers effectively.
                    </Description>
                    <ProjectButton>
                      <ProjectLink
                        href="https://github.com/Shadysasi/REACTJS-ASSIGNMENT-5-JOBBY-APPP"
                        target="_blank"
                      >
                        <Para>Project Link</Para>
                        <FaArrowRight color="#ffffff" size={20} />
                      </ProjectLink>
                    </ProjectButton>
                  </ProjectDetails>
                </ProjectContainer>
              </div>
              <div>
                <ProjectContainer>
                  <ProjectImg
                    src="https://i.im.ge/2024/02/05/cMKjY8.nxttrend.png"
                    alt="project image"
                  />
                  <ProjectDetails>
                    <Title darkMode={isDarkTheme}>Nxt Trendz Website</Title>
                    <Description>
                      Dynamic business sites that reflects your brand and engage
                      customers effectively.
                    </Description>
                    <ProjectButton>
                      <ProjectLink
                        href="https://github.com/Shadysasi/REACTJS-CP-35-NXT-TRENDZ-SPECIFIC-PRODUCT-DETAILS"
                        target="_blank"
                      >
                        <Para>Project Link</Para>
                        <FaArrowRight color="#ffffff" size={20} />
                      </ProjectLink>
                    </ProjectButton>
                  </ProjectDetails>
                </ProjectContainer>
              </div>
            </Slider>
          </SliderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default ReactSlick
