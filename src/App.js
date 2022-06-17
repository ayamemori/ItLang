import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
    const [jwt, setJwt] = useState("");

    useEffect(() => {
        console.log('Hello!');
        const reqBody = {
            username: 'rinakoo',
            password: 'izengard',
        }

        fetch("api/auth/login", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify(reqBody),
        })

            .then((response) => Promise.all([response.json(), response.headers]))
            .then(([body, headers]) => {
                setJwt(headers.get("authorization"));
            });
    }, []);

    useEffect(() => {
        console.log(`JWT is: ${jwt}`);
    }, [jwt]);
    
    const [input, setInput] = useState();
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
                <Route path="/admin/addcourse/addtheme" element={<AddTheme />} />
                <Route path="/admin/addblog" element={<AddBlog />} />

                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;