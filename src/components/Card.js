export default function Card(props) {
  return (
    <div class="p-card">
      <img
        class="p-card__image"
        alt="background"
        src="https://assets.ubuntu.com/v1/0f33d832-The-State-of-Robotics.jpg"
      />
      <div class="p-card__inner">
        <h3>The State of Robotics - August 2021</h3>
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
