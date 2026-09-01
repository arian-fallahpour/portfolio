import Header from "@/components/layout/Header/Header";
import classes from "./page.module.scss";

export default function Home() {
  return (
    <div className={classes.Page}>
      <Header />
    </div>
  );
}
