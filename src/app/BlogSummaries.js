import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";
import { getBlogPostList } from "@/helpers/file-helpers";

async function BlogSummaries() {
  const blogs = await getBlogPostList();
  return blogs.map(({ slug, title, publishedOn, abstract }) => (
    <BlogSummaryCard
      key={slug}
      slug={slug}
      title={title}
      abstract={abstract}
      publishedOn={publishedOn}
    />
  ));
}

export default BlogSummaries;
