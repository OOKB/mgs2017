import { constant, partial } from 'lodash'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectAuthUser } from 'cape-redux-auth'
import { fieldValue, open } from 'redux-field'
import Component from './Fields'
import fields from './personFields'

// Load the entity we want to edit and the schema defining the fields.
export const getState = createStructuredSelector({
  entity: selectAuthUser,
  fields: constant(fields),
  editing: fieldValue('profile', 'id'),
})
export default connect(getState, { open: partial(open, 'profile') })(Component)