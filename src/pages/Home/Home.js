import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Wellcome to YourContact Site</h1>
      <h2 className={css.title}>Please Sign In to continue</h2>
      <h3 className={css.title}>If you do not have accout please Sigh Up</h3>
    </div>
  );
}
