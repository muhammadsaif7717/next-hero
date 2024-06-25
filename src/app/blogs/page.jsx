import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  const blogs = [
    {
      slug: "the-ultimate-guide-to-web-development",
      title: "The Ultimate Guide to Web Development",
      description:
        "An in-depth guide covering the fundamentals and advanced topics in web development, including HTML, CSS, JavaScript, and popular frameworks.",
    },
    {
      slug: "exploring-the-world-of-ai",
      title: "Exploring the World of AI",
      description:
        "A comprehensive overview of artificial intelligence, its applications, and the impact it has on various industries. Discover the latest trends and innovations in AI.",
    },
    {
      slug: "mastering-data-science",
      title: "Mastering Data Science",
      description:
        "Learn the essential concepts and techniques in data science, from data analysis and visualization to machine learning and big data. Perfect for beginners and professionals alike.",
    },
    {
      slug: "digital-marketing-strategies",
      title: "Digital Marketing Strategies",
      description:
        "Discover effective digital marketing strategies to grow your online presence, engage with your audience, and boost your business. Topics include SEO, social media marketing, and content marketing.",
    },
    {
      slug: "healthy-living-tips",
      title: "Healthy Living Tips",
      description:
        "A blog dedicated to providing practical tips and advice for living a healthier lifestyle. Topics include nutrition, fitness, mental health, and wellness.",
    },
  ];

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.title} className="border-2 p-12">
          <h1>{blog.title}</h1>
          <h1>{blog.description}</h1>
          <button className="bg-red-400 p-3">
            <Link href={`/blogs/${blog.slug}`}>View Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
