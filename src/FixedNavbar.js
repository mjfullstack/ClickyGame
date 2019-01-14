import React from "react";
import './FixedNavbar.css';

function FixedNavbar() {
  return (
    <nav className="navbar fixed-top tc" role="navigation">
      <div className="container-fluid">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li><h1>Robo Click ME!</h1></li>
          </ul>
        </div>

        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="pull-left"><a href="#">Dashboard</a></li>
            <li className="active"><a href="#">Stories</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">Photos</a></li>
            <li className="social pull-right"><a href="#">Social Links</a></li>
          </ul>
        </div> {/* <!-- /.navbar-collapse --> */}
      </div> {/* <!-- /.container-fluid --> */}
    </nav>
  );
{/**********

// Removed from Centered

          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Brand </a>


  // Mine
    <div>
      <nav className="navbar fixed-top navbar-light bg-light">
        <a className="navbar-brand" target="_blank" rel="noopener noreferrer" href="#"></a>
        <ul className="nav navbar-nav">
          <li><h1>Robo Click ME!</h1></li>
        </ul>
      </nav>
    </div>
    );
     */}
  }

  export default FixedNavbar;

