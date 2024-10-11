import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <>
      <div className="page-content">
  <div className="container-fluid">
    {/* start page title */}
    <div className="row">
      <div className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-sm-0 font-size-18">Blog</h4>
          <div className="page-title-right">
            <ol className="m-0 breadcrumb">
              <li className="breadcrumb-item">
                <a href="javascript: void(0);"> Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Blog</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    {/* end page title */}
    <div className="row">
      <div className="col-lg-8">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <div className="mb-3">
                    <label htmlFor="example-text-input" className="form-label">
                      Blog Title
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div>
                  <div className="mb-3">
                    <label htmlFor="example-text-input" className="form-label">
                      Upload Image
                    </label>
                    <input className="form-control" type="file" />
                    <div className="size">
                      Photo size: width:413px, height:175px
                    </div>
                    <div className="size">
                      Photo size detal page: width:1074px, height:450px
                    </div>
                    <div className="size">
                      Thumb size: width:70px, height:auto
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div>
                  <div className="mb-3">
                    <label htmlFor="example-text-input" className="form-label">
                      Descriprion
                    </label>
                    <textarea
                      className="form-control"
                      id="content"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div>
                  <div className="mb-3">
                    <label htmlFor="example-text-input" className="form-label">
                      Status
                    </label>
                    <div className="px-2 position-relative">
                      <select className="form-select">
                        <option>Active</option>
                        <option>Draft</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end card body */}
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-auto">
                <button type="submit" className="btn btn-primary btnfdf">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end col */}
      <div className="col-lg-4 ">
        <div className="row">
          {/* <div className="card">
            <div className="card-body">
              <div className="search-box">
               
                
              </div>
            </div>
          </div> */}
         
          {/* end card */}
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="table-responsive">
                {/* id="example2" */}
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th width={70}>S No.</th>
                      <th width={250}>Blog title</th>
                      <th width={150}>Blog Image</th>
                      <th>Review</th>
                      <th width={10}>Edit</th>
                      <th width={15}>Status</th>
                      <th width={50}>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        Student Safety in USA: A Guide for International
                        Students Settling In!
                      </td>
                      <td>
                        <Image src="assets/images/blog-1_detail.jpg" 
                         alt="image"
                         layout="fill"  
                       objectFit="cover"  
                       sizes="100vw"/>
                      </td>
                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Autem, ea? Vitae pariatur ab amet iusto tempore
                        neque a, deserunt eaque recusandae obcaecati eos atque
                        delectus. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Eligendi labore vel enim repellendus
                        excepturi autem. Eligendi cum laboriosam exercitationem
                        illum repudiandae quasi sint dicta consectetur porro
                        fuga ea, perspiciatis aut! Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Autem, ea? Vitae pariatur
                        ab amet iusto tempore neque a, deserunt eaque recusandae
                        obcaecati eos atque delectus. Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Eligendi labore vel
                        enim repellendus excepturi autem. Eligendi cum
                        laboriosam exercitationem illum repudiandae quasi sint
                        dicta consectetur porro fuga ea, perspiciatis aut! Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit.
                        Autem, ea? Vitae pariatur ab amet iusto tempore neque a,
                        deserunt eaque recusandae obcaecati eos atque delectus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Autem, ea? Vitae pariatur ab amet iusto tempore
                        neque a, deserunt eaque recusandae obcaecati eos atque
                        delectus. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Eligendi labore vel enim repellendus
                        excepturi autem. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Autem, ea? Vitae pariatur ab amet
                        iusto tempore neque a, deserunt eaque recusandae
                        obcaecati eos atque delectus. Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Eligendi labore vel
                        enim repellendus excepturi autem. Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Eligendi labore vel
                        enim repellendus excepturi autem. Eligendi cum
                        laboriosam exercitationem illum repudiandae quasi sint
                        dicta consectetur porro fuga ea, perspiciatis aut!
                      </td>
                      <td>
                        <a href="#">
                          <i className="fas fa-pencil-alt" />
                        </a>
                      </td>
                      <td>
                        <a href="#" className="active2">
                          Active
                        </a>
                      </td>
                      <td>
                        <a href="#">
                          <i className="far fa-trash-alt" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end col */}
    </div>
  </div>
  {/* container-fluid */}
</div>

    </>
  )
}

export default Blog
