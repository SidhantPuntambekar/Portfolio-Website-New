import React from "react";

const BlogPost = ({ title, date, content, imageUrls, setCurrentPage }) => {
  const containerStyle = {
    margin: "0 auto",
    padding: "5%",
    textAlign: "center",
  };

  const imageCardStyle = {
    width: "500px",
    borderRadius: "16px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
    backgroundColor: "#4E342E",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "350px",
    objectFit: "cover",
  };

  const imageGridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
    marginTop: "32px",
  };

  const contentStyle = {
    padding: "5px",
    fontSize: "18px",
    lineHeight: "1.6",
  };

  const buttonStyle = {
    backgroundColor: "#EEA47FFF",
    border: "none",
    color: "black",
    padding: "12px 24px",
    fontSize: "16px",
    marginTop: "32px",
    cursor: "pointer",
    borderRadius: "8px",
    fontWeight: 800,
  };

  return (
    <div style={containerStyle}>
      {/* Back button */}
      <button 
        onClick={() => {
                    setCurrentPage("blog");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }} 
        style={buttonStyle}>
        Back to Blog
      </button>

      <h2>{title}</h2>
      <h3>{date}</h3>

      {/* Text content */}
      {content.map((paragraph, index) => (
        <div key={index} style={contentStyle}>
          <h4>{paragraph}</h4>
        </div>
      ))}

      {/* Image cards */}
      <div style={imageGridStyle}>
        {imageUrls.map((item, index) => (
          <div key={index} style={imageCardStyle}>
            <img
              src={item.url}
              alt={`Image ${index}`}
              style={imageStyle}
            />
            <h3>
              {item.caption}
            </h3>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default BlogPost;