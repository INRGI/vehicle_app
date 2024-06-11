Camper Rental Application
Overview
This application is developed for a company providing camper rental services in Ukraine. The application consists of three main pages:

Home Page: Contains a general description of the services provided by the company.
Camper Catalog: Displays a catalog of campers with different configurations, filterable by location, equipment, and type.
Favorite Listings: Shows listings that have been added to favorites by the user.
The application's UI includes a navigation menu and viewing area, styled according to the design.

Technical Specifications
Listing Card: Implements a card displaying a camper rental listing.
Camper Catalog: Initially renders 4 listings, with more loaded upon clicking "Load more".
Favorite Listings: Allows adding and removing listings from favorites. The color of the "heart" button changes accordingly.
Persistence: Upon page refresh, maintains the state of favorite listings.
Modal Window: Opens when clicking "Show more" button, displaying detailed information about the camper. Closes on clicking the close button, backdrop, or pressing Esc key.
Booking Form: Includes fields for name, email, booking date, and comment. Name, email, and booking date fields are mandatory and undergo validation. Upon submitting valid data, the page refreshes.
Filtering: Adds filtering capability based on location, equipment, and type.
Used Libraries
@emotion/react
@emotion/styled
@reduxjs/toolkit
axios
formik
nanoid
npm
react
react-dom
react-loader-spinner
react-modal
react-redux
react-router-dom
react-toastify
redux
redux-persist
yup
Routing
"/" - Home page with a general description of services.
"/catalog" - Page displaying the camper catalog.
"/favorites" - Page displaying favorite listings.
If a user navigates to a non-existent route, they will be redirected to the home page.