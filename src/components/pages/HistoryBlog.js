import React, { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import data from '../../res/historyBlog.json'

const HistoryBlog = ({ setCurrentPage }) => {
  const [blogs, setBlogs] = useState([]);
  const [currentView, setCurrentView] = useState("list");
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    setBlogs(data);
  }, []);

  const buttonStyle = {
    backgroundColor: "#EEA47FFF",
    border: "none",
    color: "black",
    padding: "12px 24px",
    fontSize: "16px",
    margin: "24px 8px",
    cursor: "pointer",
    borderRadius: "8px",
    fontWeight: 800,
    textDecoration: "none"
  };

  const cardStyle = {
    borderRadius: "16px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
    backgroundColor: "#4E342E",
    textAlign: "left",
    margin: "16px",
    width: "350px",
    cursor: "pointer"
  };

  const imageStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover"
  };

  const contentStyle = {
    padding: "16px"
  };

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "5%"
  };
  
  return (
    <>
      {currentView === "list" && (
        <>
          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => {
                setCurrentPage("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={buttonStyle}
            >
              Back to Home
            </button>
          </div>

          <div style={gridStyle}>
            {blogs.map((blog) => (
              <div
                key={blog.id}
                style={cardStyle}
                onClick={() => {
                  setSelectedPost(blog);
                  setCurrentView("post");
                }}
              >
                <img src={blog.image} alt={blog.title} style={imageStyle} />
                <div style={contentStyle}>
                  <h2>{blog.title}</h2>
                  <h3>{blog.date}</h3>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {currentView === "post" && selectedPost && (
        <BlogPost
          title={selectedPost.title}
          date={selectedPost.date}
          content={selectedPost.content}
          imageUrls={selectedPost.imageUrls}
          setCurrentPage={() => setCurrentView("list")}
        />
      )}
    </>
  );
};

export default HistoryBlog;
