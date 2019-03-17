import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"

class StreamCreate extends Component {

    renderError = ({error, touched}) => {
        if (touched && error) {
            return(
                <div>
                {error}
                </div>
            )    
    }
    }
    renderInput = ({input, label, meta}) => {
        return (
            <div className="field">
            <label>{label}</label>
            <input {...input}/>
            {/* {this.renderError(meta)} this is another way of doing validation */} 
            <div>{meta.touched && meta.error ? <span>{meta.error}</span>: null}</div>
            </div>
        )
    }

    onSubmit = formValues => {
        console.log(formValues)
    }

    render() {
        return(
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" label="Enter title" component={this.renderInput}/>
                <Field name="description" label="Enter description" component={this.renderInput}/>
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {}
    if (!formValues.title) {
        errors.title = "You must enter a title"
    }
    if (!formValues.description) {
        errors.description = "You must enter a description"
    }
    return errors
}

export default reduxForm({
    form: "streamCreate",
    validate: validate
})(StreamCreate)