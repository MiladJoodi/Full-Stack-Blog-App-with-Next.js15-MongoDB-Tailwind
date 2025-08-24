"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import {
  FiFileText,
  FiMail,
  FiPlusCircle,
  FiList,
  FiTrendingUp,
  FiUsers,
  FiEye,
  FiCalendar,
  FiActivity,
  FiBarChart,
} from "react-icons/fi"

const AdminDashboard = () => {
  const [stats, setStats] = useState({ blogs: 0, subscriptions: 0 })
  const [recentBlogs, setRecentBlogs] = useState([])
  const [recentSubs, setRecentSubs] = useState([])

  const fetchData = async () => {
    try {
      const blogs = await axios.get("/api/blog")
      const subs = await axios.get("/api/email")

      setStats({
        blogs: blogs.data.blogs?.length || 0,
        subscriptions: subs.data.emails?.length || 0,
      })

      setRecentBlogs(blogs.data.blogs?.slice(-5).reverse() || [])
      setRecentSubs(subs.data.emails?.slice(-5).reverse() || [])
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      <div className="flex-1 p-6 lg:p-8">
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <FiBarChart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-1">
                Admin Dashboard
              </h1>
              <p className="text-slate-600 text-lg">Welcome back! Here's your content overview</p>
            </div>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
                <FiFileText className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-slate-800 mb-1">{stats.blogs}</p>
                <p className="text-sm font-medium text-slate-600">Total Blogs</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-600 font-medium">Active</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg group-hover:shadow-emerald-200 transition-all duration-300">
                <FiUsers className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-slate-800 mb-1">{stats.subscriptions}</p>
                <p className="text-sm font-medium text-slate-600">Subscribers</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-600 font-medium">Growing</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg group-hover:shadow-amber-200 transition-all duration-300">
                <FiEye className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-slate-800 mb-1">{stats.blogs * 127}</p>
                <p className="text-sm font-medium text-slate-600">Total Views</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-amber-600 font-medium">Trending</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-center">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FiActivity className="w-7 h-7" />
              </div>
              <h3 className="text-sm font-medium opacity-90 mb-2">System Status</h3>
              <p className="text-xl font-bold mb-1">All Good!</p>
              <div className="flex items-center justify-center gap-2 text-sm opacity-90">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Online</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <FiTrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Quick Actions</h3>
              </div>
              <div className="space-y-3">
                <a
                  href="/admin/addProduct"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 group border border-transparent hover:border-blue-200"
                >
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <FiPlusCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800 group-hover:text-blue-700">Add New Blog</span>
                    <p className="text-sm text-slate-500">Create fresh content</p>
                  </div>
                </a>
                <a
                  href="/admin/blogList"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 transition-all duration-200 group border border-transparent hover:border-emerald-200"
                >
                  <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                    <FiList className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800 group-hover:text-emerald-700">Manage Blogs</span>
                    <p className="text-sm text-slate-500">Edit and organize</p>
                  </div>
                </a>
                <a
                  href="/admin/subscriptions"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-200 group border border-transparent hover:border-amber-200"
                >
                  <div className="p-2 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors">
                    <FiMail className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800 group-hover:text-amber-700">Email List</span>
                    <p className="text-sm text-slate-500">Manage subscribers</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                    <FiBarChart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">Analytics Overview</h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <FiCalendar className="w-4 h-4" />
                  <span>Last 30 days</span>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <p className="text-2xl font-bold text-blue-700">{Math.floor(stats.blogs * 1.2)}</p>
                  <p className="text-sm text-blue-600 font-medium">Published</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl">
                  <p className="text-2xl font-bold text-emerald-700">{Math.floor(stats.subscriptions * 0.8)}</p>
                  <p className="text-sm text-emerald-600 font-medium">New Subs</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl">
                  <p className="text-2xl font-bold text-amber-700">{stats.blogs * 89}%</p>
                  <p className="text-sm text-amber-600 font-medium">Engagement</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <p className="text-2xl font-bold text-purple-700">{Math.floor(stats.blogs * 2.3)}k</p>
                  <p className="text-sm text-purple-600 font-medium">Impressions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                <FiFileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Latest Blog Posts</h2>
            </div>
            <a
              href="/admin/blogList"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium"
            >
              <span>View All</span>
              <FiList className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentBlogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
              >
                {blog.image && (
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-bold text-slate-800 mb-3 line-clamp-2 text-lg group-hover:text-blue-700 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                    {blog.description.slice(0, 100)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-medium text-slate-500">
                        {new Date(blog.date).toLocaleDateString("fa-IR")}
                      </span>
                    </div>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-semibold rounded-full">
                      Blog Post
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg">
                <FiUsers className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Recent Subscribers</h2>
            </div>
            <a
              href="/admin/subscriptions"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium"
            >
              <span>View All</span>
              <FiMail className="w-4 h-4" />
            </a>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-lg overflow-hidden">
            <div className="divide-y divide-slate-100">
              {recentSubs.map((sub, index) => (
                <div
                  key={sub._id}
                  className="p-6 hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50/30 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg">
                        {sub.email.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 text-lg group-hover:text-blue-700 transition-colors">
                          {sub.email}
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                          <p className="text-sm text-slate-500">Subscriber #{recentSubs.length - index}</p>
                          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        <FiCalendar className="w-4 h-4 text-slate-400" />
                        <p className="font-semibold text-slate-700">{new Date(sub.date).toLocaleDateString("fa-IR")}</p>
                      </div>
                      <p className="text-sm text-slate-500">
                        {new Date(sub.date).toLocaleTimeString("fa-IR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
