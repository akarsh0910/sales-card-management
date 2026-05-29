# Sales Card Management System

A modern web application for managing business card and lead information collected by sales representatives. The system allows salespersons to submit business card details, while managers can view, search, filter, and export all collected contacts into Excel format.

---

##  Features

### Authentication

* Firebase Email/Password Authentication
* Separate Admin and Salesperson login
* Secure logout functionality

### Salesperson Dashboard

* Add new business card details
* Store lead information in Firebase Firestore
* Clean and responsive form interface

### Admin Dashboard

* View all submitted business card records
* Search contacts by:

  * Company Name
  * Person Name
  * Address
  * Salesperson
* Download records as Excel (.xlsx) file
* Responsive data table

### Database

* Firebase Firestore integration
* Real-time cloud storage for contact records

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM

### Backend & Database

* Firebase Authentication
* Firebase Firestore

### Additional Libraries

* XLSX (Excel Export)
* React Icons

---

##  Project Structure

```text
src/
│
├── pages/
│   ├── Login.jsx
│   ├── SalesDashboard.jsx
│   └── AdminDashboard.jsx
│
├── services/
│   ├── authService.js
│   └── cardService.js
│
├── firebase/
│   └── firebaseConfig.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

##  Workflow

### Salesperson

1. Login to the system
2. Enter business card details:

   * Company Name
   * Person Name
   * Contact Number
   * Address
   * Place Received
3. Submit the form
4. Data is stored in Firebase Firestore

### Manager/Admin

1. Login to the Admin Dashboard
2. View all submitted business card records
3. Search and filter records
4. Export all records to Excel

---

##  Firebase Services Used

* Firebase Authentication
* Cloud Firestore
* Firebase Hosting (for deployment)

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/sales-card-management.git
```

Navigate to project directory:

```bash
cd sales-card-management
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

##  Future Enhancements

* Business card image upload
* OCR-based card scanning
* Protected routes
* Role-based access control
* Dashboard analytics
* Toast notifications
* Advanced filtering
* Mobile-first improvements
* Activity tracking

---

##  Use Case

This application is designed for organizations where sales teams collect business cards and lead information during meetings, exhibitions, conferences, and client visits. It helps managers maintain a centralized contact database and easily export collected leads for follow-up and reporting purposes.

---

## Author

Akarsh Singh Sisoudia

* Email: [akarshsisoudia@gmail.com](mailto:akarshsisoudia@gmail.com)
* Location: Lucknow, Uttar Pradesh, India

---

##  License

This project is created for educational, portfolio, and demonstration purposes.
