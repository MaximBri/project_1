import React from 'react'

const CatImage: React.FC<{ color: string | null; shadow: boolean }> = ({
  color,
  shadow,
}) => {
  const [colors, setColors] = React.useState<string>('')
  React.useEffect(() => {
    if (!color || color.toLowerCase() === 'шоколадный') {
      setColors('#967A4A #826A40 #65513C #AD8D56 #FFFFFF #333E48 #1E252B')
    } else if (color.toLowerCase() === 'черный') {
      setColors('#2C2C2C #000000 #3D3D3D #2F2F2F #FFFFFF #333E48 #A2A2A2')
    } else if (color.toLowerCase() === 'серый') {
      setColors('#545454 #2C2C2C #000000 #878686 #FFFFFF #333E48 #1E252B')
    } else if (color.toLowerCase() === 'рыжий') {
      setColors('#EC7B1E #9A6100 #B85F00 #DC9C2E #FFFFFF #333E48 #1E252B')
    } else if (color.toLowerCase() === 'белый') {
      setColors('#ECEAE5 #C4C4C4 #C1BFBE #FFFFFF #585858 #333E48 #1E252B')
    }
  }, [color])
  return (
    <svg
      className={shadow ? 'cats_shadow' : ''}
      height='198px'
      width='198px'
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='-51.2 -51.2 614.40 614.40'
      xmlSpace='preserve'
      stroke='#fff'
      strokeWidth='0.00512'
      transform='rotate(0)matrix(1, 0, 0, 1, 0, 0)'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0' />
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <g id='SVGRepo_iconCarrier'>
        <path
          style={{ fill: colors.split(' ')[0] }}
          d='M430.18,315.786c-8.056,0-14.59-6.532-14.59-14.59c0-8.058,6.533-14.59,14.59-14.59 c24.452,0,44.345-19.895,44.345-44.347s-19.893-44.347-44.345-44.347c-40.543,0-73.527-32.984-73.527-73.527 s32.983-73.527,73.527-73.527c8.057,0,14.59,6.532,14.59,14.59c0,8.057-6.532,14.59-14.59,14.59 c-24.454,0-44.347,19.895-44.347,44.347s19.892,44.347,44.347,44.347c40.541,0,73.526,32.984,73.526,73.526 C503.706,282.802,470.721,315.786,430.18,315.786z'
        />
        <path
          style={{ fill: colors.split(' ')[1] }}
          d='M91.229,320.104c-17.66,0-31.973,14.314-31.973,31.972v66.439H29.655 c-11.769,0-21.312,9.541-21.312,21.313v11.693c0,5.313,4.306,9.62,9.622,9.62h83.923c11.771,0,21.312-9.541,21.312-21.313v-87.753 C123.199,334.418,108.885,320.104,91.229,320.104z'
        />
        <path
          style={{ fill: colors.split(' ')[0] }}
          d='M354.795,218.255H78.74v140.537c0,52.864,42.854,95.718,95.717,95.718h180.338v-0.681 c65.054,0,117.788-52.735,117.788-117.787C472.583,270.989,419.848,218.255,354.795,218.255z'
        />
        <g>
          <path
            style={{ fill: colors.split(' ')[2] }}
            d='M230.484,218.255v69.26c0,13.109,10.627,23.736,23.736,23.736c13.109,0,23.738-10.627,23.738-23.736 v-69.26H230.484z'
          />
          <path
            style={{ fill: colors.split(' ')[2] }}
            d='M313.063,218.255v69.26c0,13.109,10.627,23.736,23.735,23.736c13.111,0,23.738-10.627,23.738-23.736 v-69.26H313.063z'
          />
        </g>
        <g>
          <path
            style={{ fill: colors.split(' ')[3] }}
            d='M366.465,297.835c-45.094,0-81.654,36.558-81.654,81.653c0,14.136,3.594,27.432,9.916,39.027h-8.609 c-11.77,0-21.313,9.541-21.313,21.313v11.693c0,5.313,4.306,9.62,9.622,9.62h92.039c45.095,0,81.654-36.557,81.654-81.654 C448.119,334.393,411.56,297.835,366.465,297.835z'
          />
          <path
            style={{ fill: colors.split(' ')[3] }}
            d='M198.833,320.104c-17.66,0-31.972,14.314-31.972,31.972v66.439H137.26 c-11.771,0-21.313,9.541-21.313,21.313v11.693c0,5.313,4.306,9.62,9.621,9.62h83.923c11.771,0,21.312-9.541,21.312-21.313v-87.753 C230.803,334.418,216.489,320.104,198.833,320.104z'
          />
        </g>
        <path
          style={{ fill: colors.split(' ')[0] }}
          d='M241.654,122.493V69.102c0-6.15-4.982-11.133-11.132-11.133c-2.931,0-5.598,1.131-7.585,2.984 l-42.402,42.401c-15.901-10.62-35.004-16.82-55.561-16.82s-39.661,6.201-55.562,16.821L27.01,60.953 c-1.988-1.851-4.653-2.984-7.584-2.984c-6.149,0-11.132,4.983-11.132,11.133v134.352C8.294,267.895,60.533,328,124.975,328 c64.44,0,116.682-60.105,116.682-124.546v-80.96L241.654,122.493L241.654,122.493z'
        />
        <path
          style={{ fill: colors.split(' ')[4] }}
          d='M148.066,200.953H101.88c-14.041,0-25.424,11.384-25.424,25.426 c0,14.042,11.383,25.425,25.424,25.425c10.258,0,19.073-6.086,23.094-14.832c4.021,8.746,12.836,14.832,23.093,14.832 c14.041,0,25.426-11.383,25.426-25.425C173.493,212.337,162.108,200.953,148.066,200.953z'
        />
        <path
          style={{ fill: colors.split(' ')[5] }}
          d='M139.384,217.892c-7.303,7.572-19.467,7.788-27.032,0.482l-8.439-8.149 c-7.567-7.306-5.153-13.284,5.366-13.284h31.185c10.517,0,13.149,6.195,5.848,13.767L139.384,217.892z'
        />
        <path
          style={{ fill: colors.split(' ')[2] }}
          d='M124.974,86.534c-8.181,0-16.125,1.004-23.737,2.854v32.761c0,13.109,10.627,23.736,23.737,23.736 c13.11,0,23.736-10.627,23.736-23.736V89.388C141.097,87.538,133.155,86.534,124.974,86.534z'
        />
        <path
          style={{ fill: colors.split(' ')[6] }}
          d='M57.801,190.255c6.428,0,11.641-5.212,11.641-11.64c0-6.429-5.213-11.64-11.641-11.64 s-11.641,5.211-11.641,11.64C46.159,185.043,51.372,190.255,57.801,190.255z M154.847,221.258c0.168,4.47,3.845,7.98,8.282,7.98 c0.106,0,0.212-0.002,0.32-0.006l41.024-1.553c4.577-0.174,8.147-4.024,7.973-8.601c-0.173-4.577-4.01-8.144-8.601-7.974 l-41.024,1.553C158.243,212.829,154.672,216.681,154.847,221.258z M192.148,190.255c6.427,0,11.638-5.212,11.638-11.64 c0-6.429-5.212-11.64-11.638-11.64c-6.431,0-11.644,5.211-11.644,11.64C180.505,185.043,185.718,190.255,192.148,190.255z M145.354,223.649l6.929-7.185c8.078-8.378,6.863-15.327,5.419-18.723c-1.443-3.396-5.601-9.094-17.238-9.094h-31.185 c-11.731,0-15.783,5.694-17.155,9.089c-1.371,3.395-2.412,10.307,6.028,18.455l8.439,8.149c5.122,4.945,11.88,7.669,19.032,7.669 C133.147,232.009,140.155,229.04,145.354,223.649z M110.686,205.235h29.382l-6.654,6.899c-2.045,2.119-4.812,3.287-7.792,3.287 c-2.83,0-5.497-1.07-7.509-3.013L110.686,205.235z M196.054,251.62l-33.477-20.099c-3.926-2.358-9.022-1.086-11.379,2.842 c-2.359,3.927-1.086,9.022,2.841,11.379l33.478,20.099c1.336,0.803,2.808,1.184,4.262,1.184c2.817,0,5.563-1.435,7.117-4.026 C201.254,259.072,199.982,253.978,196.054,251.62z M86.819,229.238c4.436,0,8.114-3.51,8.282-7.98 c0.174-4.577-3.396-8.429-7.973-8.601l-41.024-1.553c-0.108-0.003-0.213-0.006-0.32-0.006c-4.436,0-8.114,3.51-8.282,7.98 c-0.174,4.577,3.396,8.429,7.973,8.601l41.024,1.553C86.607,229.236,86.713,229.238,86.819,229.238z M512,242.259 c0-45.116-36.704-81.82-81.82-81.82c-19.88,0-36.053-16.173-36.053-36.053c0-19.88,16.173-36.053,36.053-36.053 c12.618,0,22.884-10.266,22.884-22.884s-10.266-22.884-22.884-22.884c-45.116,0-81.821,36.705-81.821,81.821 s36.705,81.821,81.821,81.821c19.878,0,36.051,16.173,36.051,36.053c0,8.21-2.74,15.955-7.687,22.23 c-22.773-32.917-60.783-54.528-103.75-54.528H249.78c0.112-2.169,0.17-4.337,0.17-6.506v-80.96c0-0.077-0.001-0.156-0.003-0.232 V69.102c0-10.713-8.714-19.427-19.426-19.427c-4.931,0-9.632,1.849-13.238,5.208c-0.072,0.067-0.143,0.136-0.212,0.206 l-37.743,37.744c-16.482-9.567-35.134-14.593-54.353-14.593c-19.221,0-37.873,5.026-54.354,14.593L32.875,55.089 c-0.07-0.07-0.14-0.138-0.212-0.206c-3.606-3.359-8.307-5.208-13.236-5.208C8.714,49.675,0,58.391,0,69.102v134.352 c0,33.239,13.249,66.785,36.349,92.037c9.139,9.989,19.346,18.27,30.302,24.706c-9.747,7.505-15.689,19.173-15.689,31.879v58.145 H29.655c-16.326,0-29.607,13.281-29.607,29.607v11.693c0,9.878,8.037,17.914,17.916,17.914h83.923c4.744,0,9.331-1.12,13.454-3.227 c2.903,2.028,6.426,3.227,10.227,3.227h83.923c7.063,0,13.553-2.489,18.647-6.632h32.389c3.288,4.042,8.295,6.632,13.9,6.632h92.039 c33.324,0,62.45-18.229,77.991-45.225l0.237,0.232c23.334-23.725,36.184-55.12,36.184-88.402c0-9.385-1.04-18.533-2.995-27.339 C499.352,293.315,512,268.907,512,242.259z M48.588,284.295c-20.337-22.231-32-51.696-32-80.84V69.102 c0-1.566,1.273-2.839,2.838-2.839c0.864,0,1.477,0.362,1.857,0.692l42.264,42.264c2.799,2.798,7.181,3.228,10.473,1.033 c15.107-10.091,32.727-15.425,50.955-15.425c18.226,0,35.846,5.334,50.955,15.424c3.288,2.197,7.672,1.767,10.471-1.033 l42.264-42.263c0.379-0.331,0.993-0.692,1.859-0.692c1.565,0,2.838,1.273,2.838,2.839v53.391c0,0.077,0.001,0.156,0.003,0.232 v80.728c0,29.144-11.665,58.61-32.002,80.84c-20.891,22.836-48.019,35.412-76.387,35.412 C96.606,319.707,69.478,307.131,48.588,284.295z M107.653,439.828v11.668c-1.774,0.878-3.736,1.351-5.766,1.351H17.964 c-0.732,0-1.328-0.595-1.328-1.326v-11.693c0-7.178,5.84-13.019,13.019-13.019h29.602c4.582,0,8.294-3.714,8.294-8.294v-66.439 c0-4.06,1.037-7.939,2.895-11.347v18.062c0,31.118,13.517,59.908,37.239,79.743C107.666,438.963,107.653,439.393,107.653,439.828z M113.815,421.779c-17.131-16.425-26.781-38.879-26.781-62.988v-29.072c12.165,4.323,24.927,6.576,37.941,6.576 c14.202,0,28.106-2.678,41.257-7.809c-4.815,6.634-7.664,14.784-7.664,23.589v58.145H137.26 C127.724,410.221,119.232,414.757,113.815,421.779z M222.509,439.828c0,7.179-5.84,13.019-13.018,13.019h-83.923 c-0.732,0-1.327-0.595-1.327-1.326v-11.693c0-7.178,5.84-13.019,13.019-13.019h29.601c4.582,0,8.294-3.714,8.294-8.294v-66.439 c0-13.056,10.622-23.678,23.678-23.678c13.055,0,23.675,10.622,23.675,23.678v87.753H222.509z M366.465,452.847h-92.039 c-0.732,0-1.328-0.595-1.328-1.326v-11.693c0-7.178,5.84-13.019,13.019-13.019h8.609c2.927,0,5.638-1.543,7.132-4.06 c1.493-2.517,1.55-5.634,0.15-8.204c-5.826-10.684-8.904-22.806-8.904-35.057c0-40.45,32.909-73.359,73.36-73.359 s73.36,32.908,73.36,73.359C439.825,419.938,406.915,452.847,366.465,452.847z M456.352,377.093 c-1.277-48.491-41.093-87.551-89.887-87.551c-49.598,0-89.948,40.35-89.948,89.947c0,10.601,1.883,21.129,5.506,31.015 c-14.395,1.999-25.512,14.388-25.512,29.324v6.387h-18.115c0.454-2.058,0.702-4.195,0.702-6.387v-87.753 c0-22.202-18.062-40.266-40.263-40.266c-1.093,0-2.172,0.056-3.243,0.142c6.357-4.822,12.387-10.314,18.01-16.461 c17.737-19.389,29.657-43.668,34.241-68.943h106.954c60.376,0,109.494,49.118,109.494,109.492 C464.289,350.328,461.557,364.213,456.352,377.093z M472.793,291.632c-1.578-4.18-3.372-8.256-5.368-12.213 c9.849-9.826,15.396-23.02,15.396-37.16c0-29.026-23.615-52.641-52.639-52.641c-35.969,0-65.233-29.263-65.233-65.233 s29.263-65.233,65.233-65.233c3.472,0,6.296,2.824,6.296,6.296c0,3.471-2.824,6.296-6.296,6.296 c-29.027,0-52.641,23.615-52.641,52.641s23.615,52.641,52.641,52.641c35.968,0,65.232,29.262,65.232,65.232 C495.412,261.525,487.115,279.328,472.793,291.632z M87.37,231.521L53.893,251.62c-3.928,2.358-5.2,7.452-2.841,11.379 c1.555,2.591,4.302,4.026,7.118,4.026c1.453,0,2.926-0.382,4.262-1.184l33.477-20.099c3.928-2.358,5.2-7.452,2.841-11.379 C96.391,230.435,91.294,229.164,87.37,231.521z'
        />
      </g>
    </svg>
  )
}

export default CatImage
