import Image from 'next/image'
import React from 'react'

const StudentStay = () => {
  return (
    <>
      <div className="page-content">
  <div className="container-fluid">
    {/* start page title */}
    <div className="row">
      <div className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-sm-0 font-size-18">Students Say</h4>
          <div className="page-title-right">
            <ol className="m-0 breadcrumb">
              <li className="breadcrumb-item">
                <a href="javascript: void(0);"> Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Students Say</li>
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
                      Name
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
                      Photo size: width:350px, height:240px
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
                    <textarea className="form-control" defaultValue={""} />
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
          <div className="card">
            <div className="card-body">
              <div className="search-box">
                {/*   <h5 class="mb-3">Product organization</h5> */}
                <div className="mb-3 form-group">
                  <label>Review</label>
                  <div className="px-2 position-relative">
                    <select className="form-select">
                      <option>1 Star</option>
                      <option>2 Star</option>
                      <option>3 Star</option>
                      <option>4 Star</option>
                      <option>5 Star</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="card">
            <div class="card-body">
              <div class="search-box">
                <h5 class="mb-3">Status</h5>
                <div class="position-relative px-2">

                  <select class="form-select">
                    <option>Active</option>
                    <option>Draft</option>
                  </select>
                
                </div>
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
                      <th width={250}>Name</th>
                      <th width={200}>City</th>
                      <th width={150}>City Image</th>
                      <th>Review</th>
                      <th>Star Rating</th>
                      <th width={10}>Edit</th>
                      <th width={15}>Status</th>
                      <th width={50}>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Jhon Morris</td>
                      <td>Houston</td>
                      <td>
                        <Image src="assets/images/ts-2.jpg" 
                         alt="image"
                         layout="fill"  
                       objectFit="cover"  
                       sizes="100vw"
                       />
                      </td>
                      <td>
                        Lorem ipsum dolor sit amet, luctus posuere semper felis
                        consectetuer hendrerit, enim varius enim, tellus
                        tincidunt tellus est sed
                      </td>
                      <td>5star</td>
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

export default StudentStay
