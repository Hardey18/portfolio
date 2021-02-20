import React from 'react'
import amazon from "../../../images/amazon.png"
import Application from '../../reusables/Application'
function Amazon() {
    return (
        <>    
            <div>
                <Application 
                    title="AMAZON" 
                    image={amazon} 
                    about="This is a clone of the Amazon website. This React project has multiple pages: Accounts and Login Page, Products Page, Cart and Checkout Page, Real Payments and Order History Page. It has a dummy data of products where registered users can add items to cart and checkout to make real payment." 
                    link="//clone-c128d.web.app/" 
                />
            </div>
            <ul className="technologies-list">
                <li>React</li>
                <li>JavaScript</li>
                <li>Stripe</li>
                <li>Firebase</li>
            </ul>
        </>
    )
}

export default Amazon
