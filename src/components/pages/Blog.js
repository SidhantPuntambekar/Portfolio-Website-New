import React from 'react'

const Blog = () => {
    const style = {
        alignItems: "center",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative", 
        marginTop: "-15%" 
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
        <div className = "container" style={style}>
            <h2>Blogs</h2> 
            <h3>Welcome to the blog section of my website</h3>
            <h3>Click the buttons if you are interested in my blogs on World War II or Chess</h3>
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