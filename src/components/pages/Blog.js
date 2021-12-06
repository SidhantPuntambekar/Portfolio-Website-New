import React from 'react'

const Blog = () => {
    const style = {
        alignItems: "center",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
      };
    
      const buttonStyle = {
        backgroundColor: "#EEA47FFF",
        border: "none",
        color: "black",
        padding: "10px",
        textAlign: "center",
        display: "inline-block",
        fontSize: "16px",
        margin: "8px 20px",
        cursor: "pointer",
        borderRadius: "8px",
        marginTop: "40px",
        marginBottom: "40px",
        fontWeight: 800
      };

    return (
        <div style={style}>
            <h2>Blogs</h2> 
            <h4>Click the buttons below if you are interested in reading more about my blogs on historical events or chess.</h4>
            <a href="https://sidhantpuntambekar.surge.sh/History" without rel="noopener noreferrer" target="_blank">
            <button
                trailingIcon="picture_as_pdf"
                label="Resume"
                style={buttonStyle}
            >
                View History Blog
            </button>
            </a>
            <a href="https://sidhantpuntambekar.surge.sh/Chess" without rel="noopener noreferrer" target="_blank">
            <button
                trailingIcon="picture_as_pdf"
                label="Resume"
                style={buttonStyle}
            >
                View Chess Blog
            </button>
            </a>
        </div>
        
    )
}

export default Blog