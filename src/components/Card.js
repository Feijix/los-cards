import "../style.scss";

export default function Card(props) {
  const post = getPostData(props.post);

  return (
    <div className="p-card">
      <h5 className="header p-muted-heading u-no-margin--bottom">
        {post.topic}
      </h5>
      <div className="p-card__content">
        <a href={post.link}>
          <img className="p-card__image" alt="background" src={post.image} />
        </a>
        <a href={post.link}>
          <h3 className="p-heading--4">{post.title}</h3>
        </a>
        <p>
          <em>
            By <a href={post.author.link}>{post.author.name}</a> on {post.date}
          </em>
        </p>
      </div>
      <div className="p-card__footer">{post.category}</div>
    </div>
  );
}

function getPostData(post) {
  return {
    link: post.link,
    image: post.featured_media,
    title: post.title.rendered,
    category: post._embedded["wp:term"][0][0].name,
    date: new Date(post.date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    topic: post._embedded["wp:term"][2][0]
      ? post._embedded["wp:term"][2][0].name.toUpperCase()
      : "OTHER",
    author: {
      name: post._embedded.author[0].name,
      link: post._embedded.author[0].link,
    },
  };
}
