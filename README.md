# portofolioReact
 React-vitejs-tailwindcss
Run your build process with 'npm run dev'

## Connecting Form with Go to app.getform.io

To connect your form with app.getform.io, follow these steps:

1. Go to [app.getform.io/forms](https://app.getform.io/forms) in your web browser.
2. Access the **Settings** menu and select **Setup**.
3. Copy the **Form endpoint** (form action) provided in the Setup section.
4. Open the `Contact.jsx` file in your project.
5. Locate the `<form>` tag with the attributes `action="" method="POST" encType="multipart/form-data"`.
6. Replace the empty `action` attribute with the Form endpoint you copied in Step 3.

After completing these steps, your form will be connected to app.getform.io and submissions will be sent to the specified endpoint.

Remember to save your changes to the `Contact.jsx` file.
