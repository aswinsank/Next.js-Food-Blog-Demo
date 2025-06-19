import classes from './loading.module.css';
export default function MealsLoadingPage() {
  return (
    <section className={classes.loading}>
      <h1>Loading Meals...</h1>
      <p>Please wait while we fetch the meals.</p>
    </section>
  );
}