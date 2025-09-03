# 📝 Blogly  

A modern blog platform to share your thoughts, stories, and knowledge with style.  
With *Blogly*, you can write beautiful blogs with images, format them with rich text styles, and engage with readers through comments.  

---

## ✨ Features  

- 🖊 *Write Blogs with Images* – Upload and manage blog images seamlessly with Cloudinary  
- 🎨 *Rich Blog Styling* – Format your blogs with *bold, italic, underline, links, and more* using React Quill  
- 📂 *Filter Blogs by Categories* – Browse blogs easily based on interests  
- 🌙 *Dark & Light Mode* – Enjoy reading and writing in your preferred theme  
- 💬 *Comments System* – Authenticated users can add comments on blogs  
- 🔐 *Google Authentication* – Secure login with Google  

---

## 🛠 Tech Stack  

- ⚛ *Next.js* – Frontend framework for building Blogly  
- 🗄 *MongoDB* – Database for storing blogs, users, and comments  
- 📐 *Prisma ORM* – Schema definition and database interactions  
- ☁ *Cloudinary* – Image storage and management  
- ✍ *React Quill (react-quill-new)* – Rich text editor for styling blogs  
- 🔄 *SWR* – Client-side data fetching for comments  
- 🎨 *Modular CSS* – Clean and structured UI design  

---

## 🚀 Getting Started  

Follow these steps to run Blogly locally:  

### 1. Clone the repository  
```
git clone https://github.com/tayyab-004/blogly.git
```

### 2. Install dependencies
```
npm i
```

### 3. Set up environment variables

Create a .env file in the root folder and add:
```
GOOGLE_ID=
GOOGLE_SECRET=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
DATABASE_URL=
NEXT_PUBLIC_BACKEND_URL=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET_KEY=
```

### 4. Generate Prisma
```
npx prisma generate
```

### 5. Run the project locally
```
npm run dev
```

---


🌟 If you like Blogly, give it a star ⭐ on GitHub!

Thank you for using Blogly! If you have any questions or feedback, feel free to reach out. Happy Coding! 🚀