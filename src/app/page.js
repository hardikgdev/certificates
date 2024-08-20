
import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import NavBar from "@/components/blocks/NavBar"
import Hero from "@/components/blocks/Hero"
import Footer from "@/components/blocks/Footer"

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Footer />
    </>
  )
}
