import React from 'react'

const AddCampus = () => {
  return (
    <>
      <div className="page-content">
  <div className="container-fluid">
    {/* start page title */}
    <div className="row">
      <div className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-sm-0 font-size-18">Add Campus</h4>
          <div className="page-title-right">
            <ol className="m-0 breadcrumb">
              <li className="breadcrumb-item">
                <a href="javascript: void(0);"> Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Add Campus</li>
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
                      Select property type
                    </label>
                    <select className="form-select">
                      <option>Student Housing</option>
                      <option>Private Apartment</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div>
                  <div className="mb-3">
                    <label htmlFor="example-text-input" className="form-label">
                      Add Campus
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Denmark Hill Campus"
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
              <div className="search-box"></div>
            </div>
          </div> */}
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
                      <th width={450}>Property type</th>
                      <th>Campus</th>
                      <th width={10}>Edit</th>
                      <th width={15}>Status</th>
                      <th width={50}>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Student Housing</td>
                      <td>Denmark Hill Campus</td>
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

export default AddCampus
