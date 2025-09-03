import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface BlogPost {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  thumbnail: string;
  categories: string[];
}

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        // Using RSS to JSON converter to get Medium posts
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tiwariankit5597`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
          const formattedPosts = data.items.map((item: any) => ({
            title: item.title,
            pubDate: new Date(item.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
            link: item.link,
            description: item.description,
            // Extract the first image from the content
            thumbnail: item.thumbnail || extractFirstImage(item.content) || '/placeholder-blog.jpg',
            categories: item.categories || []
          }));
          
          setPosts(formattedPosts);
        }
      } catch (err) {
        console.error('Error fetching Medium posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  // Helper function to extract first image from content
  const extractFirstImage = (content: string): string => {
    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
    return imgMatch ? imgMatch[1] : '';
  };

  // Get the latest post
  const latestPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            My Blog
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development and technology
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"></div>
            <p className="mt-4 text-muted-foreground">Loading articles...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500">{error}</p>
            <p className="mt-2 text-muted-foreground">
              You can still read my articles on{' '}
              <a 
                href="https://medium.com/@tiwariankit5597" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Medium <ExternalLink className="inline h-4 w-4" />
              </a>
            </p>
          </div>
        ) : (
          <>
            {/* Featured/Latest Post */}
            {latestPost && (
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Latest Article
                </h3>
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0 md:w-1/3">
                      <img 
                        className="h-48 w-full object-cover md:h-full" 
                        src={latestPost.thumbnail} 
                        alt={latestPost.title} 
                      />
                    </div>
                    <div className="p-8 md:w-2/3">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {latestPost.categories.slice(0, 3).map((category, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                      <h4 className="text-xl font-bold mb-2">{latestPost.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Published on {latestPost.pubDate}
                      </p>
                      <div 
                        className="prose prose-sm dark:prose-invert mb-6 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: latestPost.description }}
                      />
                      <Button 
                        asChild 
                        variant="outline"
                        className="group"
                      >
                        <a 
                          href={latestPost.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center"
                        >
                          Read article
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Other Posts */}
            {otherPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  More Articles
                </h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {otherPosts.map((post, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                        <div className="h-48 overflow-hidden">
                          <img 
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" 
                            src={post.thumbnail} 
                            alt={post.title} 
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.categories.slice(0, 2).map((category, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {category}
                              </Badge>
                            ))}
                          </div>
                          <h4 className="font-bold mb-2 line-clamp-2">{post.title}</h4>
                          <p className="text-muted-foreground text-xs mb-4">
                            {post.pubDate}
                          </p>
                          <Button 
                            asChild 
                            variant="ghost" 
                            size="sm"
                            className="p-0 h-auto text-primary hover:bg-transparent hover:underline"
                          >
                            <a 
                              href={post.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center"
                            >
                              Read more
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* View All Button */}
            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://medium.com/@tiwariankit5597" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  View all articles on Medium
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
