import { partial } from 'lodash'
import { pick } from 'lodash/fp'
import { connect } from 'react-redux'
import { mapDispatchToProps } from 'cape-redux'
import { clear, getState, onChange } from 'redux-field'
import Component from 'cape-mixer/lib/Editable/FieldEditEl'
import { getFieldId } from './utils'

export const pickFieldState = pick(['errorMessage', 'hasError', 'suggestion', 'value'])

export function mapStateToProps(state, props) {
  const fieldState = getState(state, props)
  return {
    ...pickFieldState(fieldState),
    id: getFieldId(props),
  }
}
const getActions = mapDispatchToProps(({ prefix }) => ({
  onChange: partial(onChange, prefix),
  onClose: partial(clear, prefix),
}))

export default connect(mapStateToProps, getActions)(Component)
