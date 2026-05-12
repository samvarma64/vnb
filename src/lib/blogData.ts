// Blog data storage and management
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
  status?: "draft" | "published";
}

// Sample blog posts
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Solar Energy in India",
    slug: "future-of-solar-energy-india",
    excerpt:
      "Exploring how solar energy is transforming India's renewable energy landscape and what the future holds for sustainable power generation.",
    content: `
      <p>India is rapidly emerging as a global leader in solar energy adoption. With ambitious targets and innovative policies, the country is paving the way for a sustainable energy future.</p>
      
      <h2>Current State of Solar Energy</h2>
      <p>As of 2024, India has installed over 70 GW of solar capacity, making it one of the top solar markets globally. The government's push for renewable energy has created unprecedented opportunities for businesses and homeowners alike.</p>
      
      <h2>Key Drivers of Growth</h2>
      <ul>
        <li>Decreasing solar panel costs</li>
        <li>Government incentives and subsidies</li>
        <li>Increasing awareness about climate change</li>
        <li>Technological advancements in solar efficiency</li>
      </ul>
      
      <h2>Future Outlook</h2>
      <p>With targets to achieve 500 GW of renewable energy capacity by 2030, solar energy will play a crucial role. VNB India is committed to being at the forefront of this transformation, providing cutting-edge solar solutions to businesses and communities across India.</p>
    `,
    author: "VNB Solar Team",
    category: "Solar Energy",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop&q=80",
    date: "2024-03-15",
    readTime: "5 min read",
    tags: ["Solar Energy", "Renewable Energy", "India", "Sustainability"],
    status: "published",
  },
  {
    id: "2",
    title: "Digital Transformation: A Complete Guide for Businesses",
    slug: "digital-transformation-guide",
    excerpt:
      "Learn how digital transformation can revolutionize your business operations and drive growth in the modern economy.",
    content: `
      <p>Digital transformation is no longer optional—it's essential for businesses to remain competitive in today's fast-paced market.</p>
      
      <h2>What is Digital Transformation?</h2>
      <p>Digital transformation involves integrating digital technology into all areas of business, fundamentally changing how you operate and deliver value to customers.</p>
      
      <h2>Key Benefits</h2>
      <ul>
        <li>Improved operational efficiency</li>
        <li>Enhanced customer experience</li>
        <li>Data-driven decision making</li>
        <li>Increased agility and innovation</li>
        <li>Cost reduction through automation</li>
      </ul>
      
      <h2>VNB's Approach</h2>
      <p>At VNB India, we provide end-to-end digital transformation services, from strategy development to implementation and support. Our CMMI Level 3 certified processes ensure quality and reliability at every step.</p>
    `,
    author: "VNB Tech Team",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&q=80",
    date: "2024-03-10",
    readTime: "7 min read",
    tags: ["Digital Transformation", "Technology", "Business", "IT Services"],
    status: "published",
  },
  {
    id: "3",
    title: "Interactive Learning: The Future of Education",
    slug: "interactive-learning-future-education",
    excerpt:
      "Discover how interactive technology is reshaping classrooms and creating engaging learning experiences for students.",
    content: `
      <p>The education sector is undergoing a massive transformation with the integration of interactive technology in classrooms.</p>
      
      <h2>The Rise of Interactive Panels</h2>
      <p>Interactive panels have become essential tools in modern classrooms, enabling teachers to create dynamic, engaging lessons that capture students' attention and improve learning outcomes.</p>
      
      <h2>Benefits for Students</h2>
      <ul>
        <li>Enhanced engagement and participation</li>
        <li>Visual and interactive learning experiences</li>
        <li>Collaborative learning opportunities</li>
        <li>Access to digital resources and multimedia content</li>
      </ul>
      
      <h2>VNB Interactive Solutions</h2>
      <p>We've successfully deployed interactive technology in over 50 educational institutions, reaching more than 10,000 students. Our solutions are designed to be intuitive, reliable, and pedagogically sound.</p>
    `,
    author: "VNB Interactive Team",
    category: "Education Technology",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop&q=80",
    date: "2024-03-05",
    readTime: "6 min read",
    tags: ["Education", "Interactive Technology", "EdTech", "Innovation"],
    status: "published",
  },
  {
    id: "4",
    title: "CMMI Level 3: What It Means for Your Business",
    slug: "cmmi-level-3-certification",
    excerpt:
      "Understanding the importance of CMMI Level 3 certification and how it ensures quality in IT services.",
    content: `
      <p>CMMI (Capability Maturity Model Integration) Level 3 certification is a mark of excellence in the IT industry, demonstrating a company's commitment to quality and process improvement.</p>
      
      <h2>What is CMMI Level 3?</h2>
      <p>CMMI Level 3 represents a "Defined" level of process maturity, where processes are well-characterized, understood, and described in standards, procedures, tools, and methods.</p>
      
      <h2>Benefits for Clients</h2>
      <ul>
        <li>Consistent, predictable project outcomes</li>
        <li>Reduced project risks</li>
        <li>Higher quality deliverables</li>
        <li>Better cost and schedule management</li>
        <li>Continuous process improvement</li>
      </ul>
      
      <h2>VNB's Commitment to Quality</h2>
      <p>Our CMMI Level 3 certification reflects our dedication to delivering world-class IT services. Every project follows rigorous quality standards, ensuring client satisfaction and project success.</p>
    `,
    author: "VNB Quality Team",
    category: "Quality Assurance",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop&q=80",
    date: "2024-02-28",
    readTime: "8 min read",
    tags: ["CMMI", "Quality", "IT Services", "Certification"],
    status: "published",
  },
  {
    id: "5",
    title: "Rooftop Solar: A Smart Investment for Homeowners",
    slug: "rooftop-solar-investment-guide",
    excerpt:
      "Everything you need to know about installing rooftop solar panels and the financial benefits they offer.",
    content: `
      <p>Rooftop solar installations have become increasingly popular among homeowners looking to reduce electricity bills and contribute to environmental sustainability.</p>
      
      <h2>Financial Benefits</h2>
      <p>Installing solar panels on your rooftop can lead to significant savings on electricity bills, with many homeowners seeing a return on investment within 3-5 years.</p>
      
      <h2>Key Advantages</h2>
      <ul>
        <li>Reduced electricity bills (up to 90% savings)</li>
        <li>Government subsidies and incentives</li>
        <li>Increased property value</li>
        <li>Low maintenance requirements</li>
        <li>Environmental benefits</li>
      </ul>
      
      <h2>VNB Solar Installation Process</h2>
      <p>We've installed rooftop solar systems in over 200 homes across Hyderabad. Our process includes site assessment, custom design, professional installation, and ongoing support to ensure optimal performance.</p>
    `,
    author: "VNB Solar Team",
    category: "Solar Energy",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=600&fit=crop&q=80",
    date: "2024-02-20",
    readTime: "6 min read",
    tags: ["Rooftop Solar", "Home Energy", "Investment", "Sustainability"],
    status: "published",
  },
  {
    id: "6",
    title: "Cloud Migration: Best Practices and Strategies",
    slug: "cloud-migration-best-practices",
    excerpt:
      "A comprehensive guide to successfully migrating your business infrastructure to the cloud.",
    content: `
      <p>Cloud migration is a critical step for businesses looking to modernize their IT infrastructure and improve scalability.</p>
      
      <h2>Planning Your Migration</h2>
      <p>Successful cloud migration requires careful planning, assessment of current infrastructure, and a clear understanding of business objectives.</p>
      
      <h2>Migration Strategies</h2>
      <ul>
        <li>Rehosting (Lift and Shift)</li>
        <li>Replatforming (Lift, Tinker, and Shift)</li>
        <li>Refactoring (Re-architecting)</li>
        <li>Repurchasing (Moving to SaaS)</li>
        <li>Retiring (Decommissioning)</li>
      </ul>
      
      <h2>VNB's Cloud Expertise</h2>
      <p>We've successfully migrated numerous enterprise clients to the cloud, achieving 99.9% uptime and significant cost savings. Our team of certified cloud architects ensures a smooth, secure transition.</p>
    `,
    author: "VNB Cloud Team",
    category: "Cloud Computing",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&q=80",
    date: "2024-02-15",
    readTime: "9 min read",
    tags: [
      "Cloud Migration",
      "Cloud Computing",
      "IT Infrastructure",
      "Digital Transformation",
    ],
    status: "published",
  },
];

// Get all blog posts
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

// Get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

// Get recent posts
export function getRecentPosts(limit: number = 3): BlogPost[] {
  return getAllPosts().slice(0, limit);
}

// Get all categories
export function getAllCategories(): string[] {
  const categories = blogPosts.map((post) => post.category);
  return Array.from(new Set(categories));
}
