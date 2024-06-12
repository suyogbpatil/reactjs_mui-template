import fs from 'fs'
import { SitemapStream, streamToPromise } from 'sitemap';

// Import your routes using dynamic import()
(async () => {
  try {
    const { routes } = await import('../src/routes.js');

    // Now you can use routes as needed
    if (routes) {
      // Initialize the sitemap stream
      const stream = new SitemapStream({ hostname: 'https://zulatrading.in' }); // Update with your website URL

      // Add each route to the sitemap
      routes.forEach(route => {
        stream.write({ url: route.path, changefreq: 'daily', priority: 0.7 });
      });

      // End the stream
      stream.end();

      // Generate XML sitemap
      const sitemapXml = (await streamToPromise(stream)).toString();

      // Write sitemap to file
      fs.writeFileSync('public/sitemap.xml', sitemapXml);

      console.log('Sitemap generated successfully!');
    } else {
      console.error('Error: Routes not found');
    }
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
})();
