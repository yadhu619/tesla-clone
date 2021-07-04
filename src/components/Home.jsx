import React from 'react'
import Section from './Section'
import styled from 'styled-components'

const Home = () => {
    return (
        <div>
            <Section

                title = 'Model S'
                description = 'Order Online for Touchless Delivery'
                backgroundImg = 'model-s.jpg'
                leftButton = 'customer order'
                rightButton = ' existing inventory'
            />
            <Section

                title = 'Model Y'
                description = 'Order Online for Touchless Delivery'
                backgroundImg = 'model-y.jpg'
                leftButton = 'customer order'
                rightButton = ' existing inventory'
            />
            <Section

                title = 'Model 3'
                description = 'Order Online for Touchless Delivery'
                backgroundImg = 'model-3.jpg'
                leftButton = 'customer order'
                rightButton = ' existing inventory'
            />
            <Section

                title = 'Model X'
                description = 'Order Online for Touchless Delivery'
                backgroundImg = 'model-x.jpg'
                leftButton = 'customer order'
                rightButton = ' existing inventory'
            />
        </div>
    )
}

export default Home


