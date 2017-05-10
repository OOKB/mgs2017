import React, { PropTypes } from 'react'

// import Slideshow from './Slideshow'
import NoImages from './NoImages'
import ProgramList from './ProgramList'

function Main({ collection, user }) {
  const { statement } = user
  return (
    <div className="student-main">
      {/* { collection && collection.length ?
          <Slideshow
            user={user}
            collection={collection}
          />
        :
      } */}
      <NoImages />
      <div className="container">
        <div className="group">
          <ProgramList {...user} />
          { statement &&
            <div
              className="statement six columns"
              dangerouslySetInnerHTML={{
                __html: statement,
              }}
            />
          }
        </div>
      </div>
    </div>
  )
}

// TODO: look at the data and set these correctly
Main.propTypes = {
  collection: PropTypes.array,
  user: PropTypes.object,
}
Main.defaultProps = {
  user: {
    statement: 'Beans coffee, cortado body arabica barista americano. Medium fair trade aroma bar, turkish, instant grounds frappuccino irish aged whipped. Et grinder frappuccino variety, aged, cream acerbic mug grinder brewed. Percolator brewed body, cultivar medium milk fair trade froth french press.',
  },
}


export default Main
