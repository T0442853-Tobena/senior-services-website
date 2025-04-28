# Senior Services & Events Website

A professional website designed for older adults to book events and hire services. This application can be embedded into a Wix site using Wix's custom HTML/JavaScript capabilities.

## Features

- Event booking system
- Service hiring functionality
- Senior-friendly design with:
  - Large, readable text
  - High contrast colors
  - Clear navigation
  - Easy-to-use forms
  - Responsive design

## How to Embed in Wix

1. **Prepare Your Files**
   - Make sure you have all three files: `index.html`, `styles.css`, and `script.js`
   - Host these files on a reliable web server or CDN

2. **Add to Wix**
   1. Log in to your Wix account
   2. Go to your site's editor
   3. Click "Add" (+) in the left sidebar
   4. Select "More" and then "Custom Element"
   5. Choose "HTML iFrame" or "Custom Element"
   6. In the element settings, paste the following code:

   ```html
   <div id="senior-services-app"></div>
   <script>
     // Load the CSS
     const link = document.createElement('link');
     link.rel = 'stylesheet';
     link.href = 'YOUR_CSS_URL/styles.css';
     document.head.appendChild(link);

     // Load the JavaScript
     const script = document.createElement('script');
     script.src = 'YOUR_JS_URL/script.js';
     document.body.appendChild(script);

     // Load the main content
     fetch('YOUR_HTML_URL/index.html')
       .then(response => response.text())
       .then(html => {
         document.getElementById('senior-services-app').innerHTML = html;
       });
   </script>
   ```

3. **Customize**
   - Replace `YOUR_CSS_URL`, `YOUR_JS_URL`, and `YOUR_HTML_URL` with the actual URLs where your files are hosted
   - Adjust the iframe size in Wix to fit your content
   - Test the functionality to ensure everything works properly

## Customization Options

You can customize the following aspects of the application:

1. **Colors**: Edit the CSS variables in `styles.css`
2. **Content**: Modify the HTML in `index.html`
3. **Functionality**: Update the JavaScript in `script.js`

## Best Practices for Wix Integration

1. **Responsive Design**
   - The application is already responsive, but test it in different screen sizes within Wix
   - Adjust the iframe dimensions in Wix to ensure proper display

2. **Performance**
   - Host your files on a fast CDN
   - Consider minifying your CSS and JavaScript files
   - Use Wix's built-in caching options

3. **Security**
   - Use HTTPS for all file hosting
   - Implement proper form validation
   - Consider adding CAPTCHA to prevent spam

## Support

For any issues or questions about embedding this application into Wix, please contact your web developer or Wix support.

## License

This project is open source and available for use under the MIT License. 