import React, { PropTypes } from 'react'
import { map } from 'lodash'
import css from '../../style'
import './StudentList.css'
import Page from '../Page'
import Search from '../Search/Search'
import Student from './Student'

function StudentListEl({ students }) {
  return (
    <Page>
      <article id="studentList" className="text-left" style={css('p0 pl1 pr1')}>
        <header>
          <h1 style={css('m0 p0')}>Students</h1>
          <Search collectionId="Student" />
        </header>
        <section>
          <ul className="student-list" style={css('mt2 bt')}>
            {map(students, item => <Student key={item.id} {...item} />)}
          </ul>
        </section>
      </article>
    </Page>
  )
}

StudentListEl.propTypes = {
  students: PropTypes.objectOf(PropTypes.object),
}
StudentListEl.defaultProps = {
}
export default StudentListEl
