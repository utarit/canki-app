# OCİT Canki App

This is a first aid app created for our school club, which includes CPR steps, a metronome, an introduction to our club, and blog posts. The app is built using Next.js and Tailwind CSS, and is also available as a mobile app on the Google Play Store, thanks to CapacitorJS.

## Features

- CPR steps with a metronome to help users perform CPR correctly and at the right pace
- Introduction to our school club, including our mission, goals, and how to get involved
- Blog posts on various first aid topics, written by our club members
- Responsive design that works well on both desktop and mobile devices
- Available as a mobile app on the Google Play Store

## Getting Started

To run the app locally on your machine, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/utarit/ocit-canki.git
   ```

2. Install the dependencies:

   ```
   cd first-aid-app
   npm install
   ```

3. Run the development server:

   ```
   npm run dev
   ```

4. Open the app in your browser at http://localhost:3000.

## Deploying to the Google Play Store

To deploy the app to the Google Play Store, follow these steps:

1. Create a Google Play Developer account and set up a new app.

2. Build the app using CapacitorJS:

   ```
   npm run build
   npx cap add android
   npx cap copy
   ```

3. Open the Android project in Android Studio:

   ```
   npx cap open android
   ```

## Contributing

We welcome contributions to this project! To contribute, follow these steps:

1. Fork the repository.

2. Create a new branch for your changes:

   ```
   git checkout -b my-feature-branch
   ```

3. Make your changes and commit them:

   ```
   git commit -m "Add new feature"
   ```

4. Push your changes to your fork:

   ```
   git push origin my-feature-branch
   ```

5. Create a pull request on GitHub and describe your changes.

## License

This app is licensed under the MIT License. See the LICENSE file for more details.

## Credits

This app was created by Mert Akca for "ODTÜ Can Kurtarma ve İlk Yardım Topluluğu".
