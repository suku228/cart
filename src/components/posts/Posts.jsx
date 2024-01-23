import React, { useCallback, useEffect, useRef, useState } from "react";
import { Post } from "./Post";
import "./post.css";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const listRef = useRef(null);
  const progressRef = useRef(false);
  const [offset, setOffset] = useState(0);

  const fetchPosts = () => {
    console.log(progressRef.current);
    progressRef.current = true;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        const result = posts.concat(res);
        console.log("result", result, posts, res);
        setPosts(result);
        progressRef.current = false;
      });
  };
  useEffect(() => {
    fetchPosts();
  }, [offset]);

  const handleScroll = (e) => {
    if (
      e.target.scrollHeight - (e.target.scrollTop + e.target.clientHeight) <
      10
    ) {
      setOffset(offset + 1);
    }
  };

  useEffect(() => {
    const listRefElement = listRef.current;
    if (listRefElement) {
      listRefElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (listRefElement) {
        listRefElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [offset]);
  const clickHandler = () => {

  };

  return (
    <>
      <div className="records-banner">
        total records: {posts?.length}
        <button onClick={clickHandler}>click</button>
      </div>
      <div ref={listRef} className="card-section">
        <div className="card-container">
          {posts.map((post, index) => {
            return (
              <div key={`${post.id}-${index}`}>
                <Post post={post} />
              </div>
            );
          })}
        </div>
        {<div className="loader">Loading...</div>}
      </div>
    </>
  );
};
