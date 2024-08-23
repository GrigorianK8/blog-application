import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddBlog() {
  const [blogData, setBlogData] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    setBlogData(pre=>({
      ...pre,[e.target.name]:e.target.value
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:8080/blog', blogData)
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
                >
              </textarea>
            </div>

            <div className="text-center">
            <button 
              onClick={onSubmit} 
              type="submit" 
              className="btn btn-success"
            >
              Add
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
