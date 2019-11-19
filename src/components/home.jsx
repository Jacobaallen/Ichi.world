import React, { Component } from 'react';
import '../styles/Home.css';





class Home extends Component {
  render () {
    return(
      <div className="master">
        <div className="hero-image">
        </div>
        <div className="about" id="about">
          <div className="about-master">
            <div className="about-text">
              <div className="aboutPic">
                <img src="/images/travel-image-1.png" alt="aboutPic" width="400"  />
              </div>
              <div className="about-title">
                <h2>About</h2>
              </div>
                <div className="about-information">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Non blandit massa enim nec dui nunc. Aliquam sem et tortor consequat id. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque.
                    Odio morbi quis commodo odio aenean sed. Morbi tincidunt augue interdum velit euismod in. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus.
                    Libero justo laoreet sit amet cursus. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Laoreet sit amet cursus sit amet.
                    Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Egestas quis ipsum suspendisse ultrices.
                  </p>
                </div>
              </div>
            </div>
          </div>




      </div>
    )
  }
}
export default Home;
