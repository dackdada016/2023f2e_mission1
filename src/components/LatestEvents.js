import React from 'react'

function LatestEvents() {
  return (
    <section class="latest-events">
      <div class="latest-events-title">
        <span class="latest-events-label">letest events</span>
        <h1>最新活動</h1>
      </div>
      <article class="event-card">
        <img src="" alt=""/>
        <span>Timestamp</span>
        <h1>參與台北寵物論壇，爭取貓咪友善環境</h1>
        <p>炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。</p>
      </article>
      <section class="event-card-list">
        <div class="card">
          <p>timestamp</p>
          <h1></h1>
          <p></p>
        </div>
        <div class="card">
          <p>timestamp</p>
          <h1></h1>
          <p></p>
        </div>
        <div class="card">
          <p>timestamp</p>
          <h1></h1>
          <p></p>
        </div>
        <button><a href="http://more">查看更多</a></button>
      </section>
    </section>
  )
}

export default LatestEvents