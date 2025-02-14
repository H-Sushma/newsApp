import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">NewsMonkey</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/about">About</a>
        <a className="nav-link" href="/business">Business</a>
        <a className="nav-link" href="/entertainment">Entertainment</a>
        <a className="nav-link" href="/general">General</a>
        <a className="nav-link" href="/health">Health</a>
        <a className="nav-link" href="/science">Science</a>
        <a className="nav-link" href="/sports">Sports</a>
        <a className="nav-link" href="/technology">Technology</a>
      </div>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
