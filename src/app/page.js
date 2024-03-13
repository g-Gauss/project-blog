import React from "react";

import styles from "./homepage.module.css";
import Spinner from "@/components/Spinner";
import BlogSummaries from "./BlogSummaries";

async function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      <React.Suspense fallback={<Spinner />}>
        <BlogSummaries />
      </React.Suspense>
    </div>
  );
}

export default Home;
