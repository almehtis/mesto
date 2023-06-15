import { memo } from "react"
import { Navigation } from "./Navigation"
import "./styles/Header.scss"

export const Header = memo(function Header() {
  return (
    <div className="header">
      <Navigation />
      <div className="header__background">
        <div className="header__background__element">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#FEF159" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>
        </div>

        <div className="header__background__element">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#F7C1FE" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>
        </div>

        <div className="header__background__element">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#9C64FC" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>
        </div>

        <div className="header__background__element">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#BD98FD" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>
        </div>

        <div className="header__background__element">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#FEF159" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>F2BC1C
        </div>

        <div className="header__background__element">
          <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path59" fill="#FEED25" stroke="none" />
            <path d="M 205,5 L 795,5 L 595,295 L 5,295 L 205,5 z" id="path61" fill="none" stroke="none" stroke-linejoin="round" />
          </svg>
        </div>
      </div>

      <div className="header__title-and-logo-block">
        <h1 className="header__title-and-logo-block__title">Агентство территориального брендинга</h1>

        <div className="header__title-and-logo-block__logo">
          <svg width="100%" height="342" viewBox="0 0 1510 342" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M734.331 105.422C718.584 122.886 710.711 144.807 710.711 171.185C710.431 183.376 712.381 195.502 716.444 206.827C720.507 218.152 726.597 228.438 734.344 237.06C742.09 245.681 751.331 252.458 761.505 256.977C771.678 261.496 782.571 263.664 793.52 263.348C807.901 263.483 822.125 260.013 835.138 253.194C848.19 246.289 857.614 239.317 863.41 232.277L872.074 222.123L917.522 277.428C916.427 279.222 914.847 281.591 912.779 284.502C908.256 290.041 903.391 295.22 898.218 300.003C881.276 316.993 860.814 329.041 838.664 335.068C823.971 339.642 808.777 341.92 793.52 341.837C748.548 341.837 710.417 325.094 679.125 291.609C647.833 258.124 632.177 217.983 632.157 171.185C632.157 124.567 647.803 84.516 679.095 51.0308C710.386 17.5457 748.528 0.791882 793.52 0.769318C808.477 0.695437 823.368 2.97436 837.752 7.53855C849.894 11.176 861.541 16.6177 872.378 23.717C880.698 29.4151 888.661 35.7363 896.211 42.637C901.644 47.3768 906.562 52.8063 910.864 58.8155L915.485 65.3139L867.818 120.585C866.997 119.4 865.933 117.877 864.565 115.982C861.681 112.455 858.584 109.152 855.293 106.099C850.518 101.481 845.437 97.2726 840.093 93.5078C825.911 84.4188 809.882 79.5032 793.52 79.2247C769.828 79.2247 750.109 87.957 734.362 105.422" fill="#14161F"/>
            <path d="M938.68 9.97559H1178.57V88.4648H1097.79V332.394H1019.24V88.4648H938.68V9.97559Z" fill="#14161F"/>
            <path d="M1462.32 51.0308C1493.63 84.4934 1509.29 124.545 1509.29 171.185C1509.29 217.825 1493.63 257.887 1462.32 291.372C1431.05 324.835 1392.96 341.577 1348.05 341.6C1303.14 341.623 1265.03 324.88 1233.74 291.372C1202.33 257.842 1186.63 217.78 1186.65 171.185C1186.67 124.59 1202.32 84.5385 1233.59 51.0308C1264.9 17.5231 1303 0.769287 1347.89 0.769287C1392.79 0.769287 1430.93 17.5231 1462.32 51.0308ZM1290.44 105.422C1274.97 122.886 1267.23 144.807 1267.21 171.185C1267.19 197.562 1274.93 219.517 1290.44 237.049C1305.75 253.897 1326.41 263.345 1347.94 263.345C1369.47 263.345 1390.13 253.897 1405.44 237.049C1420.84 219.517 1428.55 197.562 1428.55 171.185C1428.55 144.807 1420.84 122.886 1405.44 105.422C1390.09 88.6469 1369.45 79.2488 1347.94 79.2488C1326.43 79.2488 1305.79 88.6469 1290.44 105.422Z" fill="#14161F"/>
            <path d="M459.12 258.643H607.958V332.394H380.566V9.97559H603.915V83.7264H459.12V134.326H570.81V203.576H459.12V258.643Z" fill="#14161F"/>
            <path d="M159.194 254.142L78.6337 141.299V332.394H0.0800781V9.97559H70.3649L159.194 136.797L248.266 9.97559H318.52V332.394H239.967V141.299L159.194 254.142Z" fill="#14161F"/>
          </svg>
        </div>
      </div>

      <div className="header__description-block">
        <p>
          Мы создаем
          {' '}
          <svg className="header__description__icon" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26" cy="26" r="24.5" stroke="#D8E6F1" stroke-width="3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 26.1429C6 26.1429 17.9401 14.7144 26 14.7144C34.0599 14.7144 46 26.1429 46 26.1429C46 26.1429 34.0599 37.5715 26 37.5715C17.9401 37.5715 6 26.1429 6 26.1429ZM25.9714 33.3431C29.9321 33.3431 33.1428 30.1323 33.1428 26.1717C33.1428 22.211 29.9321 19.0002 25.9714 19.0002C22.0107 19.0002 18.8 22.211 18.8 26.1717C18.8 30.1323 22.0107 33.3431 25.9714 33.3431Z" fill="#D8E6F1"/>
          </svg>
          {' '}
          уникальные бренды основываясь на глубоком понимании потребителей
        </p>
      </div>
    </div>
  )
})