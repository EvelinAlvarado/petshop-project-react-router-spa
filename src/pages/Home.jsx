export const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet News</h2>
      </div>
      <section className="container flex flex--center">
        <article className="card post">
          <h2 className="post-card__title">Dog Wash</h2>
          <p className="post-card__text">
            Most dogs prefer to skip bath time, but bathing plays an important
            role in the health of your dog&apos;s fur and skin, as it helps to
            keep it clean and free from dirt and parasites. Having the right
            products can help them feel more comfortable.
          </p>
        </article>
      </section>
    </main>
  );
};
