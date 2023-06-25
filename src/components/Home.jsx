import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/home.css";
import Card from "./Card";
const Home = () => {
  const navigate = useNavigate();
  async function getallPosts() {
    var res = await fetch(
      "https://kevalprideserver.vinit07.repl.co/feed/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    var data = await res.json();
    console.log("data = ", data);
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/auth");
    } else {
      getallPosts();
    }
  }, []);

  return (
    <div className="feed-container">
      <div className="navbar">
        <ul>
          <li>
            <div className="icon i1">
              <i className="fa-solid fa-house"></i>
            </div>
            <div className="title t1">
              <span>Home</span>
            </div>
          </li>
          <li>
            <div className="icon i2">
              <i className="fa-solid fa-circle-plus"></i>
            </div>
            <div className="title t2">
              <span>Create feed</span>
            </div>
          </li>
          <li>
            <div className="icon i3">
              <i className="fa-solid fa-comments"></i>
            </div>
            <div className="title t3">
              <span>Chat</span>
            </div>
          </li>
          <li>
            <div className="icon i4">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="title t4">
              <span>Profile</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="posts">
        <div className="p-title">Feed</div>
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
