import React from 'react';

class Header extends React.Component {
  scrollToSection = self => {
    // get the target href
    var href = $(self).attr('href');
    // get the target position
    var targetPos =
      typeof $(href).offset() !== 'undefined' ? $(href).offset().top : 0;

    // scroll to target
    $('html, body').animate(
      {
        scrollTop: targetPos
      },
      400
    );
  };

  scrollWindow = event => {
    this.scrollToSection(event.target);
    event.preventDefault();
  };

  //Close Navbar Button on mobile devices
  closeNavbarButton = e => {
    $('.navbar-collapse').collapse('hide');
  };

  render() {
    return (
      <nav
        id='navbar'
        className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
        <div className='container'>
          <a
            href='#aboutMe'
            className='navbar-brand'
            onClick={this.scrollWindow}>
            <span>
              <i className='fa fa-user-o' aria-hidden='true' />
            </span>{' '}
            Vishal Singh Rathore
          </a>
          <button
            id='collapseButton'
            className='navbar-toggler'
            data-toggle='collapse'
            data-target='#navbarNavbar'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNavbar'>
            <ul className='navbar-nav ml-auto' onClick={this.scrollWindow}>
              <li className='nav-item' id='Home'>
                <a
                  href='#aboutMe'
                  className='nav-link active'
                  onClick={this.closeNavbarButton}>
                  Home
                </a>
              </li>
              <li className='nav-item' id='Education'>
                <a
                  href='#edu'
                  className='nav-link'
                  onClick={this.closeNavbarButton}>
                  Education
                </a>
              </li>
              <li className='nav-item' id='Work'>
                <a
                  href='#myWork'
                  className='nav-link'
                  onClick={this.closeNavbarButton}>
                  Work
                </a>
              </li>
              <li className='nav-item' id='Projects'>
                <a
                  href='#myProjects'
                  className='nav-link'
                  onClick={this.closeNavbarButton}>
                  Projects
                </a>
              </li>
              <li className='nav-item' id='Contact'>
                <a
                  href='#myContact'
                  className='nav-link'
                  onClick={this.closeNavbarButton}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
