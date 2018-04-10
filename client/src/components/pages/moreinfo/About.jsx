import React from 'react';

const About = (props) => {
  console.log('from about: ', props);
  return (
  <div className={props.launch ? "page-wrapper nodash" : "page-wrapper"}>
    <div className="about-wrapper">
      <h1>WELCOME</h1>
      <p>Gecho is a free video browser platform to watch and listen to your favorite music! We worked hard to provide you an immersive experience for your viewing pleasure.</p>

      <div className="divider"></div>

      <div className="about-container">
        <h2>The App</h2>
        <p>This app was made with love and care from the <a href="https://github.com/chingu-voyage4/Geckos-Team-32" target="_blank" className="bold link"><strong>Geckos-32</strong></a> team in association with <a className="bold link" href="https://chingu.io/" target="_blank">Chingu Cohorts.</a></p>
      </div>

      <div className="divider"></div>

      <div className="about-container">
        <h2>Special Thanks to:</h2>
        <span>The API provided by: <a className="bold link" href="https://developers.google.com/youtube/" target="_blank">Youtube <i className="fab fa-youtube"></i></a></span>
      </div>

      <div className="divider"></div>

      <div className="about-container">
      
        <div className="team-grid">
          <h2 className="section-title">Our Team:</h2>
          <a href="https://github.com/marylicious" target="_blank" className="about-teammate">
            <div className="team-member">
              <div className="circle-icon">
                <img className="avatar" src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/profile-icon.png"/>
              </div>
              <p>Mary</p>
            </div>
          </a>

          <a href="https://github.com/Raymond-Cox" target="_blank" className="about-teammate">
            <div className="team-member">
              <div className="circle-icon">
                <img className="avatar" src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/profile-icon.png"/>
              </div>
              <p>Raymond</p>
            </div>
          </a>

          <a href="https://github.com/odelavia" target="_blank" className="about-teammate">
            <div className="team-member">
              <div className="circle-icon">
                <img className="avatar" src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/profile-icon.png"/>
              </div>
              <p>Oliver</p>
            </div>
          </a>

          <a href="https://github.com/ziggysauce" target="_blank" className="about-teammate">
            <div className="team-member">
              <div className="circle-icon">
                <img className="avatar" src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/profile-icon.png"/>
              </div>
              <p>Dan</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);
}

export default About;