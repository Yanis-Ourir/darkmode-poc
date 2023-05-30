import { useState } from "react"
import "./assets/styles.css"
import { Storage } from "@plasmohq/storage"
import darkMode from "~content";

function IndexPopup() {


  function handleSubmit() {
    // Activer la  fonction darkMode()
  }



  return (
    <div>
      <button type="submit" onSubmit={handleSubmit}>Dark mode</button>
    </div>
  )
}

export default IndexPopup
