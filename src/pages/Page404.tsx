import { FC } from 'react'
import { Link } from 'react-router-dom'

const Page404: FC = () => {
  return (
    <div className="page-404">
      <h1>
        These are not the pages you&apos;re looking <b>404</b>
      </h1>
      <Link to="/">Go home</Link>
    </div>
  )
}

export default Page404
