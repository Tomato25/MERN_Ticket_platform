import {useNavigate, useLocation} from "react-router-dom"

import React from 'react'

function DashFooter() {
const navigate = useNavigate()
const {pathname} = useLocation()

const onGoHomeClicked = () => navigate("/dash")

let goHomeButton= null
if (pathname !== "/dash") {
    goHomeButton = (
        <button
            className=""
            title="Home"
            onClick={onGoHomeClicked}
            >
                Home
            </button>
    )
}

  return (
    <div>
        <footer>
            {goHomeButton}
            <p>Current user:</p>
            <p>Status:</p>
        </footer>
    </div>
  )
}

export default DashFooter