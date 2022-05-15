import React from 'react';

const Blog = () => {
    return (
        <div className='text-center container w-50 fs-3'>
            <h2>Q.1.Difference between authorization and authentication</h2>
            <p>Ans: Authentication verifies who the user is and Authorization determines what resources a user can access.
            Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authorization works through settings that are implemented and maintained by the organization.Authentication is visible to and partially changeable by the user.Authorization isn’t visible to or changeable by the user.
            </p>
            <h2>Q.2.Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>Ans: Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if you want to use a pre-built authentication UI, you have it at your disposal as well.The other options to implement authentication are 1.Parse,2. Back4App,3. AWS Amplify and moree </p>
            <h2>Q.3.What other services does firebase provide other than authentication</h2>
            <p>Ans: Cloud Firestore.
                    Cloud Functions.
                    Authentication.
                    Hosting.
                    Cloud Storage.
                    Google Analytics.
                    Predictions.
                    Cloud Messaging.</p>
        </div>
    );
};

export default Blog;