# Meetup Organizer App

This is a **React Native** app designed for organizing meetups, events, and gatherings in a community such as a campus, school, or local neighborhood. The app allows users to view upcoming meetups, request to join them, and view meetup locations on the map. It also includes a favorites screen where users can keep track of their favorite meetups.

## Tech Stack

- **Frontend**: React Native
- **Backend**: Express.js, Node.js
- **Database**: MongoDB (for storing events and user information)
- **Maps Integration**: Google Maps API
- **Authentication**: JWT-based authentication (using token-based sessions)

## Features

### 1. **Profile Management**
   - Users can create and manage their profiles.
   - View their events, and manage their attendance status.
   
### 2. **Event Listing and Joining**
   - Browse a list of upcoming meetups.
   - View detailed information for each event (e.g., name, description, date, location, etc.).
   - Request to join events, with the system tracking the user's attendance status.
   - Show a notification when a user has already joined an event.

### 3. **Meetup Locations on Google Maps**
   - Each event includes a location on the map, helping users easily find the venue.
   - Google Maps API integration to display the event location in real time.

### 4. **Favorites Screen**
   - Users can mark events as favorites.
   - A dedicated screen to view all the favorite meetups that the user has saved.

### 5. **Real-time Event Updates**
   - Users are notified about event status updates, such as changes in event time or status.

### 6. **Secure Authentication**
   - JWT-based user authentication to securely log in and register.
   - Authorization headers for making secure API requests to access event data.

## Screenshots
![Screenshot from 2024-11-19 10-24-42](https://github.com/user-attachments/assets/baa8f78e-4ecf-41ed-9174-87c5e1fa5208)


*Event details with location on the map.*

 ![Screenshot from 2024-11-19 10-23-50](https://github.com/user-attachments/assets/ae243015-045c-4617-9d56-156868d00793)

*Home Screen.*

![Screenshot from 2024-11-19 10-24-04](https://github.com/user-attachments/assets/e6ef4b60-d9ce-4210-8e85-2ddabdca0bde)

*Feed Screen*

![Screenshot from 2024-11-19 10-24-25](https://github.com/user-attachments/assets/78134cde-8e89-4e45-8c24-4c3283c87ca4)

*Details screen*

![Screenshot from 2024-11-19 10-24-55](https://github.com/user-attachments/assets/a9405d81-783f-4785-8bf6-061cea5ddbb3)

*Profile Screen*

##To-do
-Better UI
-Screen naming
-Push notifaction
-Filter events based on location
-Google Autocomplete

 
