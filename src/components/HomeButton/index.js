import React from 'react'

import {
    HomeLinkWrapper,
    HomeLink
} from './HomeButtonElements'

const HomeButton = () => {
    return (
        <HomeLinkWrapper>
            <HomeLink to='/'>Return to Co-Labs</HomeLink>
        </HomeLinkWrapper>
    )
}

export default HomeButton
