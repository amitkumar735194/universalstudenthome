import React from 'react'
import RecentViewItem from '../../recentViewItem'

const RecentViewSection = () => {
  return (
    <section className="bg-white recently portfolio homepage-9">
  <div className="container-fluid">
    <div className="sec-title">
      <h2>
        <span>Recently viewed</span> by you
      </h2>
      <p>Find your dream home from our Rent added properties.</p>
    </div>
    <div className="row"> 
        <RecentViewItem />
        <RecentViewItem />
        <RecentViewItem />
        <RecentViewItem />
    </div>
  </div>
</section>

  )
}

export default RecentViewSection
