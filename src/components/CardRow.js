import Card from "./Card";

export default function CardRow(props) {
  const posts = props.posts;

  return (
    <div class="row">
      {posts.map((post) => (
        <a href={post.link} class="col-4">
          <Card id={post.id} post={post} />
        </a>
      ))}
    </div>
  );
}
