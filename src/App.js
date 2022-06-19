import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './assets/css/custom.css';
import './assets/css/fonts.css';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contacts from './pages/Contacts';
import Enter from './pages/Enter';

import Account from './pages/Account/Account';
import AccountCourses from './pages/Account/AccountCourses';
import CourseLesson from './pages/Account/CourseLesson';

import AdminPanel from './pages/AdminPanel';
import AddCourse from './pages/AddCourse/AddCourse';
import AddTheme from './pages/AddCourse/AddTheme';
import AddBlog from './pages/AddBlog/AddBlog';

import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blogpost" element={<BlogPost />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="enter" element={<Enter />} />

                <Route path="/account" element={<Account />} />
                <Route path="/account/courses" element={<AccountCourses />} />
                <Route path="/account/lesson" element={<CourseLesson />} />

                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/admin/addcourse" element={<AddCourse />} />
                <Route path="/admin/addcourse/addlesson" element={<AddTheme />} />
                <Route path="/admin/addblog" element={<AddBlog />} />

                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
