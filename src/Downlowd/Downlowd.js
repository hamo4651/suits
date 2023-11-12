import React, { Component } from 'react'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import Blog from '../HomePage/Blog'
import Project from '../HomePage/Project'
import Stuff from '../HomePage/Stuff'
import Team from '../HomePage/Team'
import Work from '../HomePage/Work'

export class Downlowd extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Blog/>
        <Project/>
        <Stuff/>
        <Team/>
        <Work/>
        <Footer/>
      </div>
    )
  }
}

export default Downlowd