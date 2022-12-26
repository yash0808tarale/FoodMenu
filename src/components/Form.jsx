import React from 'react'

const Form = () => {
    return (
        <form action="" id="search-form">
            <input type="search" placeholder="search here..." name="" id="search-box" />
            <label htmlFor="search-box" className="fas fa-search"></label>
            <i className="fas fa-times" id="close"></i>
        </form>
    )
}

export default Form
