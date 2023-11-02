import {Link} from "react-router-dom"


function Welcome() {
    const date = new Date()
    const today = new Intl.DateTimeFormat("en-US", {dateStyle:"full", timeStyle:"long"}).format(date)

  return (
    <section>
        <h1>Welcome</h1>
    </section>
  )
}

export default Welcome