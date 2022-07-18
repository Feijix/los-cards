export default function Card(props) {
  const post = props.post;

  const postCategory = post.categories[0];

  return (
    <div class="p-card">
      <h5>Cloud and server</h5>
      <hr className="u-sv1" />
      <img class="p-card__image" alt="background" src={post.featured_media} />
      <div class="p-card__inner">
        <h3>{post.title.rendered}</h3>
        <p>
          From robots learning to encourage social participation to detect
          serious environmental problems, it was a learning month.
        </p>
      </div>
      <hr class="u-no-margin--bottom" />
      <div class="p-card__inner">
        by <a href="/">Bartek Szopka</a> on 21st August 2021
      </div>
    </div>
  );
}
