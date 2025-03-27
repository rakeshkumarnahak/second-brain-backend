import axios from 'axios';
import cheerio from 'cheerio';

/**
 * Extracts the meaningful content of a webpage given its URL.
 * @param {string} url - The URL of the webpage to scrape.
 * @returns {Promise<string>} - The meaningful content of the webpage.
 */
export async function extractWebContent(url) {
    try {
        // Fetch the HTML of the webpage
        const { data: html } = await axios.get(url);

        // Load the HTML into Cheerio
        const $ = cheerio.load(html);

        // Remove unwanted tags like <script>, <style>, etc.
        $('script, style, noscript').remove();

        // Extract the text content of the body
        const content = $('body').text();

        // Return the cleaned content
        return content.trim();
    } catch (error) {
        console.error('Error fetching the webpage:', error.message);
        throw new Error('Failed to extract content from the webpage.');
    }
}

// Example usage
(async () => {
    const url = 'https://example.com'; // Replace with the desired URL
    try {
        const content = await extractWebContent(url);
        console.log('Webpage Content:', content);
    } catch (error) {
        console.error(error.message);
    }
})();