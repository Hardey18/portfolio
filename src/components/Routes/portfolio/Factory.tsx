import React from 'react'
import Application from '../../reusables/Application'
import product from "../../../images/product.png"

const Factory = () => {
    return (
        <div>
            <Application title="FACTORY LANDING PAGE" description="The static page of a product landing page" image={product} about="About Product" link="//hardeyproduct.netlify.app" />
        </div>
    )
}

export default Factory
