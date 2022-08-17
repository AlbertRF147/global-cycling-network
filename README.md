# Frontend dev test for GCN

This is my submission for the dev test proposed by GCN. To run it:

- Clone the repo locally
- Run `npm install`
- Run `npm run start`

## Further development features

If given more time, these are the features I would consider building/deploying:

- Lazy-loading of the videos once the user reaches the bottom of the page.
- CSS improvements. E.g. Light css animations/transitions to make the site feel smoother.
- Video previews. Similar to what YouTube has at the moment, I would like to see a short preview of the video if I have the thumbnail for a given time in front of me (as a user).
- Top menu bar hidden on scrolling down to allow for more content to fit. When the user would scroll up, I would make it appear again.
- Consider carousels of videos grouped by theme to save some space and avoid over-scrolling.
- Implement AI recommendations/suggestions based on user's search/browsing history.
- Consider adding social proof for some video sections, to increment the exposure of popular and trending videos amongst users.
- Work on the footer in general.

## Before going to production

I would tackle the following points before moving the code to production:

- Create backups (repo and other).
- Minifying and optimizing all the media and files where possible.
- Run extensive peer code reviews.
- Update all the dependencies to the latest non-breaking versions.
- Adding tests for all the components and functions on the site.
- Test the security and look for any holes or/and exposed credentials.
- Run QA on a staging server before moving it to a dev production server.
- Run QA on the dev production server before moving it to the live server.

### Important notes

- The page should only be tested on iPhone 6 devices.
- Due to CORS issues with the server (https://www.globalcyclingnetwork.com/api/devtask), I could not fetch the data from my localhost app. Instead, the data is static in a file.
- The footer is a screengrab due to time constraints.
- The search bar displays a mock up (screengrab) of what in a future build would be suggestions and recommendations based on previous search history.

_Note: this code is not for production_
