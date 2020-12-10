import React from 'react'

interface FormState {
    name: string;
    email: string;
    message: string;
    disabled: boolean;
    emailSent: any;
}
class Contact extends React.Component<{}, FormState> {

    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }

    handleChange = (event: any) => {
        console.log(this.state.name);
        const target = event.target
        const value: any = target.type === 'checkbox' ? target.checked : target.value
        const name: any = target.name

        this.setState({
            name: value
        })
    }

    handleSubmit = (event: any) => {
        event.preventDefault()

        this.setState({
            disabled: true
        })
    }
    render() {
        return (
            <div>
                <h2 className="top-title">CONTACT ME</h2>
    
                <div className="contact-container">
                    <div className="contact">  
                        <p>Have a question or want to work together</p>
    
                        <form action="" onSubmit={this.handleSubmit}>
                            <label htmlFor="full-name">Full Name</label>
                            <input type="text" id="full-name" name="name" value={this.state.name} onChange={this.handleChange} /> <br/>
                            <label htmlFor="">Email</label>
                            <input type="email" id="email" name="email" value={this.state.email} /> <br/>
                            <label htmlFor="">Message</label>
                            <textarea name="message" id="message" rows={5} value={this.state.message}/>
                            <button type="submit" disabled={this.state.disabled}>Send Message</button>
                            {this.state.emailSent === true && <p className="d-line success-msg">Email Sent</p>}
                            {this.state.emailSent === false && <p className="d-line err-msg">Email Not Sent</p>}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
