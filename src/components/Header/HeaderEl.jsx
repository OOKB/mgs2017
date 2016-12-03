import React, { PropTypes } from 'react'
import mgsBlock from '../../mgs2017LogoBlock.svg'
import mgsInline from '../../mgs2017LogoInline.svg'
import css from '../../style'
import './Header.css'
import Menu from './Menu'

const imgBySizeId = {
  skinny: mgsBlock,
  wide: mgsInline,
}

function HeaderEl({ siteName, sizeId }) {
  return (
    <header id="siteHeader" className="bg-yellow" style={css('p2 mb2')} >
      <nav className="clearfix">
        <img src={imgBySizeId[sizeId]} alt={siteName} title={siteName} style={css('mw8 m1 mlrauto block')} />
        <Menu />
      </nav>
    </header>
  )
}
HeaderEl.propTypes = {
  siteName: PropTypes.string,
  sizeId: PropTypes.string,
}
HeaderEl.defaultProps = {
  siteName: 'MICA Grad Show 2017',
  sizeId: 'wide',
}
export default HeaderEl
