import { memo } from "react"
import './styles/Services.scss'

export const Services = memo(function Services() {
  return (
    <div className="services-section">
      {/* <div className="services-section__marquee">
        <span>Место для экспертизы и творчества <img src="/icons/arrow-right.svg" alt="" /></span>
        <span>Место для экспертизы и творчества</span>
        <span>Место для экспертизы и творчества</span>
        <span>Место для экспертизы и творчества</span>
        <span>Место для экспертизы и творчества</span>
        <span>Место для экспертизы и творчества</span>
      </div> */}

      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.27272 12H20.7273M20.7273 12L13.4076 4.90909M20.7273 12L13.4076 19.0909" stroke="#14161F" stroke-width="3"/>
</svg>

    </div>
  )
})