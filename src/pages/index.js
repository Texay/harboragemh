import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `blue` }}>
      <Link to="/contact/">Contact</Link> 
      <Header headerText="Hello Harborage!" />
      <img src="https://i.pinimg.com/originals/ce/6d/c8/ce6dc84513d326d1d1bbe3b8eb854de7.png" alt="" />
      <p>Harborage Website Coming Soon</p>
    </div>
  )
}