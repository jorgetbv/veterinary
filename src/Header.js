import React from 'react'
import ProtoTypes from 'prop-types';

const Header = ({title}) => (
    <header>
        <h1 className="text-center">{title}</h1>
    </header>
)

Header.protoTypes = {
    title: ProtoTypes.string.isRequired
}
 
export default Header;