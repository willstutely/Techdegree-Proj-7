# Techdegree-Proj-7
 React Gallery App

The React Gallery App allows a user to search the Flickr API, and will display their results in a nice photo gallery grid.  The app is written with functional components, and uses hooks to manage state and initialize data fetching.

A Navigation bar is automatically loaded with three set search topics.  The data for each of those is fetched upon page load using a useEffect hook to make for a faster user experience cycling between them.

If there are no results for a user's search they are informed thusly.

If a URL is entered that doesn't match any predetermined routes a "Page Not Found" message is displayed.

The search feature fetches the relevant images, and updates the URL to match the search term.

