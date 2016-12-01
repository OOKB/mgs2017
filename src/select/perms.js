import { eq, filter, get, isMatch, map, partialRight } from 'lodash'
import { omit } from 'lodash/fp'
import { createSelector, createStructuredSelector } from 'reselect'
import { isAnonymous, isAuthenticated, selectUid } from 'cape-redux-auth'
import { selectGraph } from 'redux-graph'

export function validate(perms) {
  return ({ validator }) => !validator || isMatch(perms, validator)
}

export function filterItems(items, perms) {
  return map(filter(items, validate(perms)), omit('validator'))
}
export function hasMicaEmail(state) {
  const userEmail = get(selectGraph(state), ['GoogleUser', selectUid(state), 'email'])
  const emailDomain = userEmail && userEmail.split('@')[1].toLowerCase()
  return eq(emailDomain, 'mica.edu')
}
export const isStudent = hasMicaEmail

export const permissions = createStructuredSelector({
  isAnonymous,
  isAuthenticated,
  isStudent,
})
export const filterPerms = partialRight(createSelector, permissions, filterItems)
