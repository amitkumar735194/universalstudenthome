import React from 'react'

const ViewBooking = () => {
  return (
    <>
      <div className="page-content">
  <div className="container-fluid">
    {/* start page title */}
    <div className="row">
      <div className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-sm-0 font-size-18">Booking</h4>
          <div className="page-title-right">
            <ol className="m-0 breadcrumb">
              <li className="breadcrumb-item">
                <a href="javascript: void(0);"> Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Booking</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    {/* end page title */}
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
                      <th width={200}>First Name</th>
                      <th width={200}>Last Name</th>
                      <th width={150}>Phone Number</th>
                      <th>Nationality</th>
                      <th>Date of birth</th>
                      <th>Select University</th>
                      <th>Platform to reach</th>
                      <th>Room type</th>
                      <th>Price</th>
                      <th>Duration</th>
                      <th>Check in</th>
                      <th>Check in</th>
                      <th width={10}>Edit</th>
                      <th width={15}>Status</th>
                      <th width={50}>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Jhon Morris</td>
                      <td>Morris</td>
                       
                      <td>00000000000000</td>
                      <td>Indian</td>
                      <td>20/9/2024</td>
                      <td>University name</td>
                      <td>WeChat</td>
                      <td>Standard Studio</td>
                      <td>£8,415</td>
                      <td>5 weeks</td>
                      <td>31 August 2024</td>
                      <td>5 september 2024</td>
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

export default ViewBooking
