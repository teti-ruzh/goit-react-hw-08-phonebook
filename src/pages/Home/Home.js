import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Wellcome to YourContact</h1>
      <h2 className={css.subtitle}>Please Login or Register to continue</h2>
    </div>
  );
}
