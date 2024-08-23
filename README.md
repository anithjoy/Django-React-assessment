# Simple Website Project

## Overview

This project is a simple website built with a React.js frontend and a Django backend. The website displays basic information, including user details and project descriptions, fetched from API endpoints. Implemented for assessment purposes.

## Project Structure

- **Frontend:** React.js

  - A React app that presents the data fetched from the backend.
  - The user can click a button to retrieve project details from the API.

- **Backend:** Django
  - A Django application that provides two API endpoints:
    - `/api/user/` - Returns user profile information.
    - `/api/project/` - Returns project details.

## Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/anithjoy/Django-React-assessment.git
```

### 2. setup backend

Make sure you have django installed

```bash
cd mysite
python manage.py runserver
```

For cross origin setup

```bash
pip install django-cors-headers
```

### 3. setup Frontend

Make sure react is in your system

```bash
#from root folder
cd my-frontend
npm start

```

![Project Image](https://github.com/anithjoy/Django-React-assessment/blob/main/roulettech%20Assessment%20Aws%203%20tier%20architecture%20diagram%20.drawio.png)
