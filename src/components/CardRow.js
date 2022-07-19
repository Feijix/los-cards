import Card from "./Card";
import "../style.scss";

export default function CardRow(props) {
  const posts = props.posts;

  return (
    <div class="row u-equal-height u-clearfix">
      {posts.map((post) => (
        <div class="col-4">
          <Card id={post.id} post={post} />
        </div>
      ))}
    </div>
  );
}
