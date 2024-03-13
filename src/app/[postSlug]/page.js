import React from "react";

import styles from "./postSlug.module.css";

import BlogHero from "@/components/BlogHero";

import { loadBlogPost } from "@/helpers/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BLOG_TITLE } from "@/constants";
import CodeSnippet from "@/components/CodeSnippet";

export async function generateMetadata({ params }) {
  const { postSlug: slug } = params;
  const { frontmatter } = await loadBlogPost(slug);

  return {
    title: `${frontmatter.title} • ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const { postSlug: slug } = params;

  const { frontmatter, content } = await loadBlogPost(slug);
  console.log({ frontmatter });
  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />

      <div className={styles.page}>
        <MDXRemote source={content} components={{ pre: CodeSnippet }} />
      </div>
    </article>
  );
}

export default BlogPost;
