import Header from './Header'
import { EnvironmentOutlined,GithubOutlined,LinkedinOutlined,TwitterOutlined,MailOutlined} from '@ant-design/icons';
//import background from './background.png'

const Home = ({updateUser}) => {
  return (
    <>
        <Header updateUser={updateUser} />
        <div className="background">
        <br />
        
              <div className="outer-div">
                <div className="inner-div">
                  <div className="front">
                    <div className="front_bkg-photo"></div>
                    <div className="front_face-photo"></div>
                    <div className="front_text">
                      <h3 className="front_text-header">Gabriela Arnott</h3>
                      <p className="front_text-para">Full Stack Developer <br/><EnvironmentOutlined />New Jersey</p>
                      <p></p>
                      <span className="front_text-hover">More about this project</span>
                    </div>
                  </div>
                  <div className="back">
                    <div className="social-media-wrapper">
                      <a href="https://github.com/Spanglishgaby/FomoApp" className="social-icon"><GithubOutlined className="fab"/></a> 
                      <a href="https://www.linkedin.com/in/gabrielayuriko/" className="social-icon"><LinkedinOutlined className="fab"/></a>
                      <a href="https://twitter.com/spanglishgaby" className="social-icon"><TwitterOutlined className="fab"/></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text"><h1>Social Media Project developed on React js and Ruby on Rails </h1></div>
          </div>
        <div className="footer">
          <p className="textfooter">© 2023 Gabriela Arnott</p>
          <div className="social-media-wrapper">
            <a href="https://github.com/Spanglishgaby/FomoApp" className="iconFooter"><GithubOutlined className="fab"/></a> 
            <a href="https://www.linkedin.com/in/gabrielayuriko/" className="iconFooter"><LinkedinOutlined className="fab"/></a>
            <a href="https://twitter.com/spanglishgaby" className="iconFooter"><TwitterOutlined className="fab"/></a>
            <a href="mailto:ygabriela.arnott@gmail.com" className="iconFooter"><MailOutlined  className="fab"/></a>
            
          </div>
        </div>
    </>
  )
}

export default Home