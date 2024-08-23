import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

export default function EditBlog() {
  const blog = useLoaderData()
  const [blogData, setBlogData] = useState({
    title: blog.title || '',
    description: blog.description || ''
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setBlogData(pre=>({
      ...pre,[e.target.name]:e.target.value
    }))
  }

  useEffect(() => {
    setBlogData({
      title: blog.title || '',
      description: blog.description || '',
    })
  }, [blog])

  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:8080/blog/${blog.id}`, blogData)
    navigate('/')
  }

  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form>
            <div className="mb-3">
              <label for="title" className="form-label">
                Title
              </label>
              <input 
                type="text" 
                name='title' 
                className="form-control"
                onChange={handleChange}
                value={blogData.title}
              />
            </div>
              <div className="mb-3">
              <label for="description" className="form-label">
                Description
              </label>
              <textarea 
                type="text" 
                name="description" 
                rows="10"
                className="form-control"
                onChange={handleChange}
                value={blogData.description}
                >
              </textarea>
            </div>

            <div className="text-center">
            <button 
              onClick={onSubmit} 
              type="submit" 
              className="btn btn-success"
            >
              Edit
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
