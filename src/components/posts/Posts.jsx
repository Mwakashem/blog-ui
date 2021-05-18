import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="01.jpg" />
      <Post img="02.jpg" />
      <Post img="03.jpg"/>
      <Post img="04.jpg"/>
      <Post img="01.jpg"/>
    </div>
  );
}
