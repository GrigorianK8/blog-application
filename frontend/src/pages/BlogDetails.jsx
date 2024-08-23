import React from 'react'
import Markdown from 'react-markdown'
import { useLoaderData, useNavigate } from 'react-router-dom'

export default function BlogDetails() {
  const blog = useLoaderData()
  const navigate = useNavigate()
  console.log(blog)
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2>{blog.title}</h2>
            <h2>{blog.date}</h2>
            <button className='btn btn-warning mt-2 fs-6 text-center'
            onClick={()=>navigate(`/editBlog/${blog.id}`)}>
              Edit
            </button>
            <h6 className='mt-4 border p-3'>
              <Markdown>{blog.description}</Markdown>
            </h6>
          </div>
        </div>
      </div>
    </>
  )
}
