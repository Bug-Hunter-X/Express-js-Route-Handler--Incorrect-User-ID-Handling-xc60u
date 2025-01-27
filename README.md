# Express.js Route Handler Bug: Incorrect User ID Handling

This repository demonstrates a common bug in Express.js route handlers: improper handling of user IDs. The bug occurs when a route attempts to use a non-numeric user ID (e.g., 'abc') in a database query, leading to errors.

## Bug Description
The `bug.js` file contains an Express.js route that fetches user data based on a provided ID.  If the ID is not a number, the application will encounter an error. 

## Solution
The `bugSolution.js` file provides a solution by adding input validation.  It checks if the ID is numeric before using it, thereby preventing errors and ensuring robust handling of requests.  This is a crucial aspect of building secure and reliable web applications.